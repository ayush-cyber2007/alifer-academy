"use client";

import Link from "next/link";

import {
  useEffect,
  useState
} from "react";

import {
  auth,
  db
} from "@/firebase/config";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import {
  doc,
  getDoc
} from "firebase/firestore";

import { courses } from "@/data/courseData";

export default function DashboardPage() {

  const [userEmail, setUserEmail] =
    useState("");

  const [purchasedCourses, setPurchasedCourses] =
    useState<string[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(

        auth,

        async (user) => {

          if (!user) {

            window.location.href =
              "/login";

            return;

          }

          setUserEmail(
            user.email || ""
          );

          try {

            const userRef = doc(
              db,
              "users",
              user.uid
            );

            const userSnap =
              await getDoc(userRef);

            if (
              userSnap.exists()
            ) {

              const data =
                userSnap.data();

              setPurchasedCourses(
                data.purchasedCourses || []
              );

            }

          } catch (error) {

            console.log(error);

          }

          setLoading(false);

        }

      );

    return () =>
      unsubscribe();

  }, []);

  const logout =
    async () => {

      await signOut(auth);

      window.location.href =
        "/login";

    };

  if (loading) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl font-black">

        Loading Dashboard...

      </div>

    );

  }

  return (

    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* TOPBAR */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-black text-cyan-400">

              Student Dashboard

            </h1>

            <p className="text-zinc-400 mt-4 text-lg break-all">

              {userEmail}

            </p>

          </div>

          <button
            onClick={logout}
            className="px-8 py-4 rounded-2xl bg-red-500 text-white font-black"
          >

            Logout

          </button>

        </div>

        {/* HERO CARD */}

        <div className="relative overflow-hidden bg-zinc-900 border border-cyan-500/20 rounded-[40px] p-10">

          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 blur-3xl"></div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Continue Your
            <span className="text-cyan-400">
              {" "}
              Mathematics Journey
            </span>

          </h2>

          <p className="text-zinc-400 text-lg mt-6 max-w-2xl">

            Premium lectures, notes, progress tracking and structured learning ecosystem.

          </p>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8">

            <h2 className="text-5xl font-black text-cyan-400">

              {purchasedCourses.length}

            </h2>

            <p className="text-zinc-400 mt-3">

              Purchased Courses

            </p>

          </div>

          <div className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8">

            <h2 className="text-5xl font-black text-cyan-400">

              33

            </h2>

            <p className="text-zinc-400 mt-3">

              Total Lectures

            </p>

          </div>

          <div className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8">

            <h2 className="text-5xl font-black text-cyan-400">

              30

            </h2>

            <p className="text-zinc-400 mt-3">

              PDFs Access

            </p>

          </div>

          <div className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8">

            <h2 className="text-5xl font-black text-cyan-400">

              PRO

            </h2>

            <p className="text-zinc-400 mt-3">

              Membership

            </p>

          </div>

        </div>

        {/* COURSES */}

        <div className="mt-14">

          <h2 className="text-4xl font-black mb-10">

            Your Courses

          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {courses.map(
              (
                course: any,
                index: number
              ) => {

                const purchased =
                  purchasedCourses.includes(
                    course.slug
                  );

                return (

                  <div
                    key={index}
                    className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] overflow-hidden"
                  >

                    <img
                      src={
                        course.thumbnail
                      }
                      alt={
                        course.title
                      }
                      className="w-full h-[260px] object-cover"
                    />

                    <div className="p-8">

                      <h3 className="text-3xl font-black">

                        {course.title}

                      </h3>

                      <p className="text-zinc-400 mt-4">

                        {
                          course.lectures
                            .length
                        }{" "}
                        Lectures

                      </p>

                      <div className="mt-6">

                        {purchased ? (

                          <div className="inline-block px-5 py-2 rounded-full bg-cyan-400 text-black font-black">

                            Premium Access

                          </div>

                        ) : (

                          <div className="inline-block px-5 py-2 rounded-full bg-zinc-800 text-zinc-300">

                            Locked

                          </div>

                        )}

                      </div>

                      <Link
                        href={`/course/${course.slug}`}
                      >

                        <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">

                          Open Course

                        </button>

                      </Link>

                    </div>

                  </div>

                );

              }

            )}

          </div>

        </div>

      </div>

    </main>

  );

}