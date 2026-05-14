
"use client";

import { useEffect, useState } from "react";
import { courses } from "../../../data/courseData";
import { auth, db } from "@/firebase/config";

import { onAuthStateChanged } from "firebase/auth";

import {
  doc,
  getDoc
} from "firebase/firestore";
export default function CoursePage() {
  const [userEmail, setUserEmail] = useState("");

  const course = courses[0];

  const lectures = course.lectures;

  const materials = course.materials;

  const [selectedVideo, setSelectedVideo] = useState("");
  const [completedLectures, setCompletedLectures] =
  useState<string[]>([]);
  const [downloadedNotes, setDownloadedNotes] =
  useState<string[]>([]);
  const currentLectureIndex =
  lectures.findIndex(
    (lecture: any) =>
      lecture.videoUrl === selectedVideo
  );
  useEffect(() => {

  const savedVideo =
    localStorage.getItem(
      "lastWatchedVideo"
    );

  if (savedVideo) {

    setSelectedVideo(savedVideo);

  } else {

    setSelectedVideo(
      course.lectures[0].videoUrl
    );

  }

}, []);

useEffect(() => {

  const savedVideo =
    localStorage.getItem(
      "lastWatchedVideo"
    );

  if (savedVideo) {

    setSelectedVideo(savedVideo);

  } else {

    setSelectedVideo(
      course.lectures[0].videoUrl
    );

  }

}, []);

useEffect(() => {

  const savedCompleted =
    localStorage.getItem(
      "completedLectures"
    );

  if (savedCompleted) {

    setCompletedLectures(
      JSON.parse(savedCompleted)
    );

  }

}, []);
useEffect(() => {

  const savedNotes =
    localStorage.getItem(
      "downloadedNotes"
    );

  if (savedNotes) {

    setDownloadedNotes(
      JSON.parse(savedNotes)
    );

  }

}, []);

  // TEMPORARY FULL ACCESS
  // later payment unlock system add kar dena
  const [unlocked, setUnlocked] = useState(false);

useEffect(() => {

  const unsubscribe = onAuthStateChanged(

    auth,

    async (user) => {
      if (user?.email) {

  setUserEmail(user.email);

}

      if (!user) {

        setUnlocked(false);

        return;

      }

      try {

        const userRef = doc(
          db,
          "users",
          user.uid
        );

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {

          const userData = userSnap.data();

          const purchasedCourses =
            userData.purchasedCourses || [];

          if (
            purchasedCourses.includes(
              "arjuna-3-engineering-maths-1"
            )
          ) {

            setUnlocked(true);

          }

        }

      } catch (error) {

        console.log(error);

      }

    }

  );

  return () => unsubscribe();

}, []);

  return (

    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-10">

      <div className="max-w-7xl mx-auto">
      {/* PROFILE BAR */}

<div className="mb-8 bg-zinc-900 border border-cyan-500/20 rounded-[30px] px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

  <div>

    <h2 className="text-2xl font-black text-cyan-400">

      Welcome Back 😎

    </h2>

    <p className="text-zinc-400 mt-2 break-all">

      {userEmail || "Guest User"}

    </p>

  </div>

  <div>

    {unlocked ? (

      <div className="px-6 py-3 rounded-full bg-cyan-400 text-black font-black">

        Premium Access Active

      </div>

    ) : (

      <div className="px-6 py-3 rounded-full bg-zinc-800 text-zinc-300 border border-cyan-500/20">

        Free Preview Mode

      </div>

    )}

  </div>

</div>

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-4xl md:text-6xl font-black text-cyan-400">

            {course.title}

          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-4">

            {course.batch}

          </p>

          <div className="mt-6">

            <button
              onClick={() => window.location.href = "/payment"}
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold text-lg md:text-xl hover:scale-105 transition"
            >

              Buy Now ₹11

            </button>

          </div>

        </div>

        {/* Video Player */}

        <div className="rounded-[30px] overflow-hidden border border-cyan-500/20 mb-12">

          <iframe
            width="100%"
            height="600"
            src={selectedVideo}
            title="Lecture Video"
            allowFullScreen
            className="w-full"
          />

        </div>
        <div className="flex flex-wrap gap-5 p-6 bg-zinc-900 border-t border-cyan-500/20">

  {/* PREVIOUS */}

  <button
    disabled={currentLectureIndex <= 0}
    onClick={() => {

      const prevLecture =
        lectures[currentLectureIndex - 1];

      if (prevLecture) {

        setSelectedVideo(
          prevLecture.videoUrl
        );

        localStorage.setItem(
          "lastWatchedVideo",
          prevLecture.videoUrl
        );

      }

    }}
    className="px-6 py-3 rounded-2xl bg-zinc-800 text-white disabled:opacity-40"
  >

    ⬅ Previous Lecture

  </button>

  {/* NEXT */}

  <button
    disabled={
      currentLectureIndex >=
      lectures.length - 1
    }
    onClick={() => {

      const nextLecture =
        lectures[currentLectureIndex + 1];

      if (nextLecture) {

        if (
          nextLecture.free ||
          unlocked
        ) {

          setSelectedVideo(
            nextLecture.videoUrl
          );

          localStorage.setItem(
            "lastWatchedVideo",
            nextLecture.videoUrl
          );

        } else {

          alert(
            "This lecture is locked 😭"
          );

        }

      }

    }}
    className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold disabled:opacity-40"
  >

    Next Lecture ➜

  </button>

</div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10">
        {/* COMPACT PROGRESS */}

<div className="mb-8 bg-zinc-900 border border-cyan-500/20 rounded-[25px] p-5">

  <div className="flex items-center justify-between mb-3">

    <h2 className="text-lg md:text-xl font-black">

      Course Progress

    </h2>

    <p className="text-cyan-400 font-bold text-sm md:text-base">

      {Math.round(
        (completedLectures.length /
          lectures.length) * 100
      ) || 0}
      %

    </p>

  </div>

  <div className="w-full h-3 bg-black rounded-full overflow-hidden">

    <div
      className="h-full bg-cyan-400 transition-all duration-500"
      style={{
        width: `${
          (completedLectures.length /
            lectures.length) * 100
        }%`
      }}
    />

  </div>

</div>

  <div className="w-full h-4 bg-black rounded-full overflow-hidden">

    <div
      className="h-full bg-cyan-400 transition-all duration-500"
      style={{
        width: `${
          (completedLectures.length /
            lectures.length) * 100
        }%`
      }}
    />

  </div>

  <p className="text-zinc-500 mt-4">

    {completedLectures.length} of{" "}
    {lectures.length} lectures completed

  </p>

</div>
          {/* COURSE COMPLETION */}

{completedLectures.length >=
  lectures.length && (

  <div className="mb-10 relative overflow-hidden bg-zinc-900 border border-cyan-400/30 rounded-[35px] p-8">

    {/* GLOW */}

    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-3xl"></div>

    <h2 className="text-4xl font-black text-cyan-400">

      🎉 Course Completed

    </h2>

    <p className="text-zinc-300 text-lg mt-4">

      Congratulations! You completed the full course.

    </p>

    <button
      onClick={() =>
        alert(
          "Certificate system coming soon 😎🔥"
        )
      }
      className="mt-8 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-black hover:scale-105 transition"
    >

      Download Certificate

    </button>

  </div>

)}
          {/* Video Lectures */}

          <div className="bg-zinc-900 rounded-[35px] p-6 md:p-8 border border-cyan-500/20">

            <h2 className="text-3xl font-bold mb-8">

              🎥 Video Lectures

            </h2>

            <div className="space-y-5">

              {lectures.map((lecture: any, index: number) => (

                <div
                  key={index}
                  className={`
  rounded-3xl p-5 border transition-all duration-300
  ${
    selectedVideo === lecture.videoUrl
      ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
      : "bg-black border-cyan-500/20"
  }
`}
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                    <div>

                      <h3 className="text-lg md:text-xl font-semibold text-white flex items-center gap-3">
{completedLectures.includes(
  lecture.title
) && (

  <span className="text-cyan-400">

    ✓

  </span>

)}
                        {lecture.title}

                      </h3>

                      <p className="text-zinc-500 mt-2">
                      {selectedVideo ===
  lecture.videoUrl && (

  <p className="text-cyan-400 text-sm mt-2 font-bold">

    Currently Watching

  </p>

)}

                        Engineering Mathematics Lecture

                      </p>

                    </div>

                    {lecture.free || unlocked ? (

                      <button
                        onClick={() => {

  setSelectedVideo(
    lecture.videoUrl
  );

  localStorage.setItem(
    "lastWatchedVideo",
    lecture.videoUrl
  );

  const updatedCompleted = [
    ...new Set([
      ...completedLectures,
      lecture.title
    ])
  ];

  setCompletedLectures(
    updatedCompleted
  );

  localStorage.setItem(
    "completedLectures",
    JSON.stringify(updatedCompleted)
  );

}}
                        className="bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold hover:scale-105 transition"
                      >

                        Watch

                      </button>

                    ) : (

                      <div className="flex flex-col items-end gap-3">

  <button className="bg-zinc-800 border border-cyan-500/20 text-zinc-300 px-5 py-3 rounded-2xl backdrop-blur-xl">

    🔒 Premium Locked

  </button>

  <button
    onClick={() =>
      window.location.href = "/payment"
    }
    className="text-sm text-cyan-400 hover:text-cyan-300 transition"
  >

    Unlock Notes →

  </button>

</div>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Study Materials */}

          <div className="bg-zinc-900 rounded-[35px] p-6 md:p-8 border border-cyan-500/20">

            <h2 className="text-3xl font-bold mb-8">

              📄 Study Materials

            </h2>

            <div className="space-y-5">

              {materials.map((pdf: any, index: number) => (

                pdf.free || unlocked ? (

                  <a
  key={index}
  href={pdf.pdf}
  onClick={() => {

    const updatedNotes = [
      ...new Set([
        ...downloadedNotes,
        pdf.title
      ])
    ];

    setDownloadedNotes(
      updatedNotes
    );

    localStorage.setItem(
      "downloadedNotes",
      JSON.stringify(updatedNotes)
    );

  }}
                    target="_blank"
                    className="block bg-black hover:bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-5 transition"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-lg md:text-xl font-semibold flex items-center gap-3">
                          {downloadedNotes.includes(
  pdf.title
) && (

  <span className="text-cyan-400">

    ✓

  </span>

)}

                          {pdf.title}

                        </h3>

                        <p className="text-zinc-500 mt-1">

                          Open PDF Notes

                        </p>

                      </div>

                      <div className="text-3xl">

                        📄

                      </div>

                    </div>

                  </a>

                ) : (

                  <div
                    key={index}
                    className="bg-black border border-cyan-500/20 rounded-3xl p-5 flex items-center justify-between"
                  >

                    <div>

                      <h3 className="text-lg md:text-xl font-semibold">

                        {pdf.title}

                      </h3>

                      <p className="text-zinc-500 mt-1">

                        Locked Notes

                      </p>

                    </div>

                    <div className="flex flex-col items-end gap-3">

  <button className="bg-zinc-800 border border-cyan-500/20 text-zinc-300 px-5 py-3 rounded-2xl backdrop-blur-xl">

    🔒 Premium Locked

  </button>

  <button
    onClick={() =>
      window.location.href = "/payment"
    }
    className="text-sm text-cyan-400 hover:text-cyan-300 transition"
  >

    Unlock Full Course →

  </button>

</div>

                  </div>

                )

              ))}

            </div>

          </div>

        </div>

      </div>

  );

}
