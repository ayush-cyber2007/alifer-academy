"use client";

import { useState, useEffect } from "react";

import {
  doc,
  getDoc,
  collection,
  getDocs
} from "firebase/firestore";

import { auth, db } from "@/firebase/config";
import { courses } from "../../../data/courseData";

export default function CoursePage() {

  const course = courses[0];

  const [selectedVideo, setSelectedVideo] = useState(
    course.lectures[0].videoUrl
  );

  const [lectures] = useState(course.lectures);

  const [materials, setMaterials] = useState<any[]>([]);

  const [unlocked, setUnlocked] = useState(false);

  

  return (

    <div className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-5xl md:text-6xl font-black text-cyan-400">

            {course.title}

          </h1>

          <p className="text-zinc-400 text-xl mt-4">

            {course.batch}

          </p>

          <div className="mt-6">

            <button
              onClick={() => window.location.href = "/payment"}
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition"
            >

              Buy Now ₹11

            </button>

          </div>

        </div>

        {/* Video Player */}

        <div className="rounded-[40px] overflow-hidden border border-cyan-500/20 mb-12">

          <iframe
            width="100%"
            height="600"
            src={selectedVideo}
            title="Lecture Video"
            allowFullScreen
            className="w-full"
          />

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Lectures */}

          <div className="bg-zinc-900 rounded-[40px] p-8 border border-cyan-500/20">

            <h2 className="text-3xl font-bold mb-8">

              🎥 Video Lectures

            </h2>

            <div className="space-y-5">

              {lectures.map((lecture: any, index: number) => (

                <div
                  key={index}
                  className="bg-black border border-cyan-500/20 rounded-3xl p-5"
                >

                  <div className="flex items-center justify-between gap-5">

                    <div>

                      <h3 className="text-xl font-semibold text-white">

                        {lecture.title}

                      </h3>

                      <p className="text-zinc-500 mt-2">

                        Engineering Mathematics Lecture

                      </p>

                    </div>

                    {lecture.free || unlocked ? (

                      <button
                        onClick={() =>
                          setSelectedVideo(lecture.video)
                        }
                        className="bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold hover:scale-105 transition"
                      >

                        Watch

                      </button>

                    ) : (

                      <button className="bg-zinc-800 text-zinc-400 px-5 py-3 rounded-2xl">

                        🔒 Locked

                      </button>

                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* PDFs */}

          <div className="bg-zinc-900 rounded-[40px] p-8 border border-cyan-500/20">

            <h2 className="text-3xl font-bold mb-8">

              📄 Study Materials

            </h2>

            <div className="space-y-5">

              {materials.map((pdf: any, index: number) => (

                pdf.free || unlocked ? (

                  <a
                    key={index}
                    href={pdf.pdf}
                    target="_blank"
                    className="block bg-black hover:bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-5 transition"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="text-xl font-semibold">

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

                      <h3 className="text-xl font-semibold">

                        {pdf.title}

                      </h3>

                      <p className="text-zinc-500 mt-1">

                        Locked Notes

                      </p>

                    </div>

                    <button className="bg-zinc-800 text-zinc-400 px-5 py-3 rounded-2xl">

                      🔒 Locked

                    </button>

                  </div>

                )

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}