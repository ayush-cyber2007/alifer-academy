"use client";
import { useEffect, useState } from "react";
import { courses } from "../../data/courseData";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  getDoc,
  addDoc
} from "firebase/firestore";



import { db } from "@/firebase/config";

export default function AdminDashboard() {

const [requests, setRequests] = useState<any[]>([]);
const [activeTab, setActiveTab] = useState("dashboard");
const [students, setStudents] = useState<any[]>([]);
const [searchTerm, setSearchTerm] = useState("");
const [mobileMenu, setMobileMenu] = useState(false);
const approvedPayments =
  requests.filter(
    (req) => req.status === "approved"
  ).length;

const pendingPayments =
  requests.filter(
    (req) => req.status === "pending"
  ).length;

const totalRevenue =
  approvedPayments * 11;
const [lectureTitle, setLectureTitle] = useState("");
const [lectureVideo, setLectureVideo] = useState("");
const [lectureFree, setLectureFree] = useState(false);
const admins = [
  "ayushagarwal.gyan@gmail.com",
  "mlucky.alifer@gmail.com"
];
const fetchRequests = async () => {



  const querySnapshot = await getDocs(
    collection(db, "paymentRequests")
  );

  const data: any[] = [];

  querySnapshot.forEach((docItem) => {

    data.push({
      id: docItem.id,
      ...docItem.data(),
    });

  });

  setRequests(data);

};
const fetchStudents = async () => {

  const querySnapshot = await getDocs(
    collection(db, "users")
  );

  const data: any[] = [];

  querySnapshot.forEach((docItem) => {

    data.push({
      id: docItem.id,
      ...docItem.data(),
    });

  });

  setStudents(data);

};


useEffect(() => {

  const unsubscribe = onAuthStateChanged(

    auth,

    async (user) => {

      if (!user) {

        window.location.href = "/login";

        return;

      }

      if (

        !admins.includes(user.email || "")

      ) {

        alert("Access Denied 😭");

        window.location.href = "/";

        return;

      }

      fetchRequests();
      fetchStudents();

    }

  );

  return () => unsubscribe();

}, []);




const approveRequest = async (request: any) => {

  try {

    const userRef = doc(db, "users", request.uid);

    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {

      const oldData = userSnap.data();

      await updateDoc(userRef, {

        purchasedCourses: [

          ...(oldData.purchasedCourses || []),

          request.courseId

        ]

      });

    } else {

      await setDoc(userRef, {

        purchasedCourses: [

          request.courseId

        ]

      });

    }

    await updateDoc(

      doc(db, "paymentRequests", request.id),

      {

        status: "approved"

      }

    );

    alert("Course Approved 😎🔥");
    fetchRequests();

  } catch (error) {

    console.log(error);

    alert("Approval Failed 😭");

  }

};



const rejectRequest = async (id: string) => {


  await updateDoc(
    doc(db, "paymentRequests", id),
    {
      status: "rejected",
    }
  );

  alert("Request Rejected 😭");

  fetchRequests();

};
const addLecture = async () => {

  try {

    await addDoc(

      collection(
        db,
        "courses",
        "engineering-maths-1",
        "lectures"
      ),

      {
        title: lectureTitle,
        videoUrl: lectureVideo,
        free: lectureFree,
      }

    );

    alert("Lecture Added 😎🔥");

    setLectureTitle("");
    setLectureVideo("");
    setLectureFree(false);

  } catch (error) {

    console.log(error);

    alert("Upload Failed 😭");

  }

};
const logout = async () => {

  await signOut(auth);

  window.location.href = "/login";

};

  return (
    <main className="min-h-screen bg-black text-white">

      {/* TOPBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-950 border-b border-cyan-500/20 backdrop-blur-xl">
        <div className="flex items-center justify-between px-8 py-5">

          <div>
            <h1 className="text-3xl font-black text-cyan-400 tracking-widest">
              ALIFER ADMIN
            </h1>
          </div>
          <button
  onClick={() =>
    setMobileMenu(!mobileMenu)
  }
  className="md:hidden px-4 py-2 rounded-xl bg-cyan-400 text-black font-black"
>

  ☰

</button>

          <div className="flex items-center gap-5">

            <button className="px-5 py-2 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition">
              Upload Lecture
            </button>

            <button
  onClick={logout}
  className="px-5 py-2 rounded-full border border-white/20 hover:border-cyan-400 transition"
>
  Logout
</button>

          </div>

        </div>
      </div>

      {/* MAIN */}
      <div className="flex pt-24">

        <aside
  className={`
    fixed md:relative top-0 left-0 z-50
    w-[280px] min-h-screen
    border-r border-white/10
    bg-zinc-950 p-6
    transition-all duration-300
    ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>
          <div className="space-y-4">

           
<div className="space-y-4">

  <button
    onClick={() => setActiveTab("dashboard")}
    className="w-full text-left px-5 py-4 rounded-2xl bg-cyan-400 text-black font-bold"
  >
    Dashboard
  </button>

  <button
    onClick={() => setActiveTab("payments")}
    className="w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
  >
    Payments
  </button>

  <button
    onClick={() => setActiveTab("students")}
    className="w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
  >
    Students
  </button>

  <button
    onClick={() => setActiveTab("courses")}
    className="w-full text-left px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
  >
    Courses
  </button>

  
<button
  onClick={logout}
  className="w-full text-left px-5 py-4 rounded-2xl bg-red-500 text-white font-bold"
>
  Logout
</button>

<button
  onClick={() =>
    setMobileMenu(false)
  }
  className="md:hidden w-full mt-6 px-5 py-4 rounded-2xl bg-cyan-400 text-black font-bold"
>

  Close Menu

</button>
</div>


          </div>

        </aside>

        {/* CONTENT */}
        <section className="flex-1 p-8">
       
{activeTab === "dashboard" && (

  <>




          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

  {/* TOTAL STUDENTS */}

  <div className="relative overflow-hidden bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8">

    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl"></div>

    <h2 className="text-5xl font-black text-cyan-400">
      {students.length}
    </h2>

    <p className="text-zinc-400 mt-3 text-lg">
      Total Students
    </p>

  </div>

  {/* APPROVED */}

  <div className="relative overflow-hidden bg-zinc-900 border border-green-500/20 rounded-[35px] p-8">

    <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 blur-3xl"></div>

    <h2 className="text-5xl font-black text-green-400">
      {approvedPayments}
    </h2>

    <p className="text-zinc-400 mt-3 text-lg">
      Approved Payments
    </p>

  </div>

  {/* PENDING */}

  <div className="relative overflow-hidden bg-zinc-900 border border-yellow-500/20 rounded-[35px] p-8">

    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl"></div>

    <h2 className="text-5xl font-black text-yellow-400">
      {pendingPayments}
    </h2>

    <p className="text-zinc-400 mt-3 text-lg">
      Pending Requests
    </p>

  </div>

  {/* REVENUE */}

  <div className="relative overflow-hidden bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8">

    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl"></div>

    <h2 className="text-5xl font-black text-cyan-400">
      ₹{totalRevenue}
    </h2>

    <p className="text-zinc-400 mt-3 text-lg">
      Total Revenue
    </p>

  </div>

</div>

          {/* QUICK ACTIONS */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 rounded-[35px] p-8 border border-white/10">
              <h2 className="text-3xl font-black">
                Upload New Lecture
              </h2>

              <p className="text-zinc-400 mt-4">
                Add new premium lectures for students.
              </p>

              <button className="mt-8 px-6 py-3 rounded-full bg-cyan-400 text-black font-bold">
                Upload
              </button>
            </div>

            <div className="bg-zinc-900 rounded-[35px] p-8 border border-white/10">
              <h2 className="text-3xl font-black">
                Upload Notes PDF
              </h2>

              <p className="text-zinc-400 mt-4">
                Upload handwritten notes and assignments.
              </p>

              <button className="mt-8 px-6 py-3 rounded-full bg-cyan-400 text-black font-bold">
                Upload PDF
              </button>
            </div>

            <div className="bg-zinc-900 rounded-[35px] p-8 border border-white/10">
              <h2 className="text-3xl font-black">
                Create Live Class
              </h2>

              <p className="text-zinc-400 mt-4">
                Schedule Zoom / Google Meet sessions.
              </p>

              <button className="mt-8 px-6 py-3 rounded-full bg-cyan-400 text-black font-bold">
                Schedule
              </button>
            </div>

          </div>
  </>

)}
{activeTab === "payments" && (
<>
{/* LIVE ACTIVITY */}

<div className="mt-14">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-4xl font-black">

      Live Activity

    </h2>

    <div className="px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold">

      LIVE

    </div>

  </div>

  <div className="space-y-5">

    {/* ACTIVITY 1 */}

    <div className="relative overflow-hidden bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-7">

      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl"></div>

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center text-2xl font-black">

          A

        </div>

        <div>

          <h3 className="text-xl font-bold">

            Ayush purchased Engineering Mathematics

          </h3>

          <p className="text-zinc-500 mt-2">

            2 minutes ago

          </p>

        </div>

      </div>

    </div>

    {/* ACTIVITY 2 */}

    <div className="relative overflow-hidden bg-zinc-900 border border-green-500/20 rounded-[35px] p-7">

      <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 blur-3xl"></div>

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-full bg-green-400 text-black flex items-center justify-center text-2xl font-black">

          R

        </div>

        <div>

          <h3 className="text-xl font-bold">

            Rahul joined the platform

          </h3>

          <p className="text-zinc-500 mt-2">

            8 minutes ago

          </p>

        </div>

      </div>

    </div>

    {/* ACTIVITY 3 */}

    <div className="relative overflow-hidden bg-zinc-900 border border-yellow-500/20 rounded-[35px] p-7">

      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl"></div>

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center text-2xl font-black">

          P

        </div>

        <div>

          <h3 className="text-xl font-bold">

            New payment request submitted

          </h3>

          <p className="text-zinc-500 mt-2">

            15 minutes ago

          </p>

        </div>

      </div>

    </div>

  </div>

</div>
{/* PAYMENT REQUESTS */}

<div className="mt-14">

  <h2 className="text-4xl font-black mb-8">

    Payment Requests

  </h2>

  <div className="space-y-6">

    {requests
  .filter((request) => request.status === "pending")
  .map((request) => (

      <div
  key={request.id}
  className="relative overflow-hidden bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8"
>

  {/* GLOW */}

  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-3xl"></div>

  {/* TOP */}

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    <div className="flex items-center gap-5">

      {/* AVATAR */}

      <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center text-2xl font-black">

        {request.email?.charAt(0).toUpperCase()}

      </div>

      <div>

        <h3 className="text-2xl font-black">

          {request.email}

        </h3>

        <p className="text-zinc-400 mt-2">

          Engineering Mathematics Course

        </p>

      </div>

    </div>

    {/* STATUS */}

    <div className="px-5 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-bold w-fit">

      Pending Approval

    </div>

  </div>

  {/* DETAILS */}

  <div className="mt-8 grid sm:grid-cols-2 gap-6">

    <div className="bg-black/40 border border-white/5 rounded-2xl p-5">

      <p className="text-zinc-500 text-sm">

        Course ID

      </p>

      <h3 className="text-lg font-bold mt-2">

        {request.courseId}

      </h3>

    </div>

    <div className="bg-black/40 border border-white/5 rounded-2xl p-5">

      <p className="text-zinc-500 text-sm">

        Payment Status

      </p>

      <h3 className="text-lg font-bold text-yellow-400 mt-2">

        {request.status}

      </h3>

    </div>

  </div>

  {/* BUTTONS */}

  <div className="flex flex-wrap gap-5 mt-10">

    <button
      onClick={() => approveRequest(request)}
      className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-black hover:scale-105 transition"
    >

      Approve Payment

    </button>

    <button
      onClick={() => rejectRequest(request.id)}
      className="px-8 py-4 rounded-2xl bg-red-500 text-white font-black hover:scale-105 transition"
    >

      Reject

    </button>

  </div>

</div>

    ))}

  </div>

</div>



          {/* RECENT LECTURES */}
          <div className="mt-14">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-4xl font-black">
                Recent Lectures
              </h2>

              <button className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400">
                View All
              </button>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-white/10">

                <img
                  src="/banner1.jpg"
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    Engineering Mathematics
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    Complete matrices lecture series.
                  </p>

                  <button className="mt-6 px-5 py-2 rounded-full bg-cyan-400 text-black font-bold">
                    Edit Lecture
                  </button>

                </div>

              </div>

              <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-white/10">

                <img
                  src="/banner2.jpg"
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    Differential Equations
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    Advanced lecture batch.
                  </p>

                  <button className="mt-6 px-5 py-2 rounded-full bg-cyan-400 text-black font-bold">
                    Edit Lecture
                  </button>

                </div>

              </div>

              <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-white/10">

                <img
                  src="/banner3.jpg"
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">

                  <h3 className="text-2xl font-bold">
                    Laplace Transform
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    Premium unit-wise concepts.
                  </p>

                  <button className="mt-6 px-5 py-2 rounded-full bg-cyan-400 text-black font-bold">
                    Edit Lecture
                  </button>

                </div>

              </div>

            </div>

          </div>
        </>
)}      
{activeTab === "students" && (

  <div className="mt-10">

    <h2 className="text-4xl font-black mb-8">

      Registered Students

    </h2>
    <div className="mb-8">

  <input
    type="text"
    placeholder="Search student email..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    className="w-full bg-zinc-900 border border-cyan-500/20 rounded-[25px] px-6 py-5 outline-none text-white"
  />

</div>

    <div className="space-y-5">

      {students
  .filter((student) =>
    student.email
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((student: any, index: number) => (

        <div
          key={index}
          className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8"
        >

          <h3 className="text-2xl font-bold">

            {student.email}

          </h3>

          <p className="text-zinc-400 mt-3">

            Purchased Courses:
            {" "}

            {student.purchasedCourses?.length || 0}

          </p>

        </div>

      ))}

    </div>

  </div>

)}

{activeTab === "courses" && (

  <div className="mt-10">

    <h2 className="text-4xl font-black mb-8">
    <div className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8 mb-10">

  <h3 className="text-3xl font-black mb-6">

    Add New Lecture

  </h3>

  <div className="space-y-5">

    <input
      type="text"
      placeholder="Lecture Title"
      value={lectureTitle}
      onChange={(e) =>
        setLectureTitle(e.target.value)
      }
      className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
    />

    <input
      type="text"
      placeholder="YouTube Embed Link"
      value={lectureVideo}
      onChange={(e) =>
        setLectureVideo(e.target.value)
      }
      className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
    />

    <div className="flex items-center gap-4">

      <input
        type="checkbox"
        checked={lectureFree}
        onChange={(e) =>
          setLectureFree(e.target.checked)
        }
      />

      <p>

        Free Lecture

      </p>

    </div>

    <button
      onClick={addLecture}
      className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
    >

      Upload Lecture

    </button>

  </div>

  <div className="space-y-5">

    <input
      type="text"
      placeholder="Lecture Title"
      value={lectureTitle}
      onChange={(e) =>
        setLectureTitle(e.target.value)
      }
      className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
    />

    <input
      type="text"
      placeholder="YouTube Embed Link"
      value={lectureVideo}
      onChange={(e) =>
        setLectureVideo(e.target.value)
      }
      className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
    />

    <div className="flex items-center gap-4">

      <input
        type="checkbox"
        checked={lectureFree}
        onChange={(e) =>
          setLectureFree(e.target.checked)
        }
      />

      <p>

        Free Lecture

      </p>

    </div>

    <button
      onClick={addLecture}
      className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
    >

      Upload Lecture

    </button>

  </div>

</div>

      Courses

    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {courses.map((course: any, index: number) => (

        <div
          key={index}
          className="bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-8"
        >

          <h3 className="text-3xl font-black text-cyan-400">

            {course.title}

          </h3>

          <p className="text-zinc-400 mt-4">

            {course.lectures.length} Lectures

          </p>

          <p className="text-zinc-400 mt-2">

            {course.materials.length} PDFs

          </p>

          <button
            onClick={() =>
              window.location.href =
                `/course/${course.slug}`
            }
            className="mt-6 bg-cyan-400 text-black px-6 py-3 rounded-2xl font-bold"
          >

            Open Course

          </button>

        </div>

      ))}

    </div>

  </div>

)}




        </section>

      </div>

    </main>
  );
}