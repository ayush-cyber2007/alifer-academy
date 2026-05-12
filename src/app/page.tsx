
"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF
} from "react-icons/fa";

export default function Home() {
  return (
    <>
    <main className="bg-black text-white overflow-x-hidden min-h-screen">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-cyan-500/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-xl md:text-4xl font-black text-cyan-400 tracking-wide md:tracking-widest">
            ALIFER ACADEMY NEW
          </h1>

          <div className="hidden md:flex items-center gap-5">

            <a
              href="#courses"
              className="hover:text-cyan-400 transition"
            >
              Courses
            </a>

            <a
              href="#faculty"
              className="hover:text-cyan-400 transition"
            >
              Faculty
            </a>

            <a
              href="#reviews"
              className="hover:text-cyan-400 transition"
            >
              Reviews
            </a>

            <Link
              href="/login"
              className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              Student Login
            </Link>

          </div>

        </div>

      </nav>

      {/* FLOATING SOCIAL BUTTONS */}

{/* FLOATING SOCIAL BUTTONS */}

<div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">

  {/* WHATSAPP GROUP */}

  <a
  href="https://chat.whatsapp.com/Eymsd5JggztFF9wNlJxqEd"
  target="_blank"
  className="group relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(0,255,100,0.6)] hover:scale-110 transition duration-300"
>
    <FaWhatsapp />

    <span className="absolute right-20 opacity-0 group-hover:opacity-100 bg-black px-4 py-2 rounded-xl text-sm whitespace-nowrap transition">
      WhatsApp Group
    </span>

  </a>

  {/* WHATSAPP CHANNEL */}

  <a
    href="https://whatsapp.com/channel/0029Vb726NKGzzKUhTJJQm2I"
    target="_blank"
    className="group relative w-16 h-16 rounded-full bg-emerald-400 flex items-center justify-center text-black text-3xl shadow-[0_0_40px_rgba(0,255,180,0.6)] hover:scale-110 transition duration-300"
  >

    <FaWhatsapp />

    <span className="absolute right-20 opacity-0 group-hover:opacity-100 bg-black px-4 py-2 rounded-xl text-sm whitespace-nowrap transition">
      WhatsApp Channel
    </span>

  </a>

  {/* INSTAGRAM */}

  <a
    href="https://www.instagram.com/alifer_academy?igsh=MWxncDBycnVjMDJ4Zg=="
    target="_blank"
    className="group relative w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,0,150,0.6)] hover:scale-110 transition duration-300"
  >

    <FaInstagram />

    <span className="absolute right-20 opacity-0 group-hover:opacity-100 bg-black px-4 py-2 rounded-xl text-sm whitespace-nowrap transition">
      Instagram
    </span>

  </a>

  {/* TELEGRAM */}

  <a
    href="https://t.me/AliferAcademy"
    target="_blank"
    className="group relative w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:scale-110 transition duration-300"
  >

    <FaTelegramPlane />

    <span className="absolute right-20 opacity-0 group-hover:opacity-100 bg-black px-4 py-2 rounded-xl text-sm whitespace-nowrap transition">
      Telegram
    </span>

  </a>

  {/* YOUTUBE */}

  <a
    href="https://youtube.com/@aliferacademy?si=vZnZ-X7dSbbv_lrQ"
    target="_blank"
    className="group relative w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,0,0,0.6)] hover:scale-110 transition duration-300"
  >

    <FaYoutube />

    <span className="absolute right-20 opacity-0 group-hover:opacity-100 bg-black px-4 py-2 rounded-xl text-sm whitespace-nowrap transition">
      YouTube
    </span>

  </a>

  {/* FACEBOOK */}

  <a
    href="https://www.facebook.com/share/17TL37Vu8J/"
    target="_blank"
    className="group relative w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(0,100,255,0.6)] hover:scale-110 transition duration-300"
  >

    <FaFacebookF />

    <span className="absolute right-20 opacity-0 group-hover:opacity-100 bg-black px-4 py-2 rounded-xl text-sm whitespace-nowrap transition">
      Facebook
    </span>

  </a>

</div>
      {/* HERO */}

      <section className=" hero-gridrelative pt-36 px-6">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px]"></div>

        <div className="max-w-7xl mx-auto">

          {/* SLIDER */}

        <div className="w-full overflow-hidden rounded-[40px] border border-cyan-500/20">

  <div className="slider-track">

    <img
      src="/images/banner1.jpg"
      alt="banner1"
      className="slider-image w-full h-[260px] md:h-[520px] object-cover"
    />

    <img
      src="/images/banner2.jpg"
      alt="banner2"
      className="slider-image w-full h-[260px] md:h-[520px] object-cover"
    />

    <img
      src="/images/banner3.jpg"
      alt="banner3"
      className="slider-image w-full h-[260px] md:h-[520px] object-cover"
    />

    <img
      src="/images/banner4.jpg"
      alt="banner4"
      className="slider-image w-full h-[260px] md:h-[520px] object-cover"
    />

    <img
      src="/images/banner5.jpg"
      alt="banner5"
      className="slider-image w-full h-[260px] md:h-[520px] object-cover"
    />

  </div>

</div>

          {/* HERO CONTENT */}

          <div className="grid lg:grid-cols-2 gap-20 items-center py-24">

            {/* LEFT */}

            <div className="space-y-8">

  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-sm font-semibold tracking-wide">
    🚀 INDIA'S PREMIUM MATHEMATICS LEARNING PLATFORM
  </div>

  <div className="space-y-5">

    <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
      MASTER
      <br />
      <span className="text-cyan-400">
        MATHEMATICS
      </span>
      <br />
      LIKE NEVER BEFORE
    </h1>

    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
      Premium Engineering Mathematics, IIT JAM, NDA and UPSC Mathematics learning experience with cinematic visuals, top-tier mentorship and structured batches.
    </p>

  </div>

  <div className="flex flex-wrap gap-5 pt-4">

    <a
      href="#courses"
      className="px-8 py-4 rounded-full bg-cyan-400 text-black font-black text-lg hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(0,255,255,0.35)]"
    >
      Explore Courses
    </a>

    <Link
      href="/login"
      className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white font-semibold hover:border-cyan-400 transition duration-300"
    >
      Student Login
    </Link>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10">

    <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-6">
      <h2 className="text-4xl font-black text-cyan-400">15K+</h2>
      <p className="text-zinc-400 mt-2 text-sm">Students</p>
    </div>

    <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-6">
      <h2 className="text-4xl font-black text-cyan-400">320+</h2>
      <p className="text-zinc-400 mt-2 text-sm">Lectures</p>
    </div>

    <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-6">
      <h2 className="text-4xl font-black text-cyan-400">98%</h2>
      <p className="text-zinc-400 mt-2 text-sm">Success Rate</p>
    </div>

    <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-6">
      <h2 className="text-4xl font-black text-cyan-400">24/7</h2>
      <p className="text-zinc-400 mt-2 text-sm">Support</p>
    </div>

  </div>

</div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-20"></div>

              <img
  src="/images/hero.png"
  alt="hero"
  className="relative rounded-[40px] border border-cyan-500/20 shadow-[0_0_100px_rgba(0,255,255,0.2)] w-full object-cover"
/>
              

            </div>

          </div>

        </div>

      </section>

      {/* COURSES */}

      <section
        id="courses"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-6xl font-black text-center">
            Premium Courses
          </h2>

          <p className="text-zinc-400 text-center mt-5 text-xl">
            Choose Your Mathematics Journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
            {/* IIT */}

            <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-cyan-500/10 hover:-translate-y-3 transition duration-500">

             <img
  src="/images/thumbnails/iit-thumb.jpg"
  alt="IIT Maths"
  className="h-[320px] w-full object-cover"
/>

              <div className="p-8">

                <h3 className="text-3xl font-black">
                  IIT Maths
                </h3>

                <p className="text-zinc-400 mt-4">
                  Advanced preparation for IIT aspirants.
                </p>

                <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">
                  Explore
                </button>

              </div>

            </div>

            {/* NDA */}

            <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-cyan-500/10 hover:-translate-y-3 transition duration-500">

              <img
  src="/images/thumbnails/nda-thumb.jpg"
  alt="NDA Maths"
 className="h-[320px] w-full object-cover"
/>
              <div className="p-8">

                <h3 className="text-3xl font-black">
                  NDA Maths
                </h3>

                <p className="text-zinc-400 mt-4">
                  Complete NDA mathematics preparation.
                </p>

                <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">
                  Explore
                </button>

              </div>

            </div>

            {/* UPSC */}

            <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-cyan-500/10 hover:-translate-y-3 transition duration-500">

              <img
  src="/images/thumbnails/upsc-thumb.jpg"
  alt="UPSC Maths"
  className="h-[320px] w-full object-cover"
/>

              <div className="p-8">

                <h3 className="text-3xl font-black">
                  UPSC Maths
                </h3>

                <p className="text-zinc-400 mt-4">
                  UPSC optional mathematics preparation.
                </p>

                <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">
                  Explore
                </button>

              </div>

            </div>

            {/* ENGINEERING */}

            <div className="bg-zinc-900 rounded-[35px] overflow-hidden border border-cyan-500/10 hover:-translate-y-3 transition duration-500">

              <img
  src="/images/thumbnails/engg-thumb.jpg"
  alt="Engineering Maths"
  className="h-[320px] w-full object-cover"
/>
              <div className="p-8">

                <h3 className="text-3xl font-black">
                  Engineering Maths
                </h3>

                <p className="text-zinc-400 mt-4">
                  Unit-wise premium engineering mathematics batches.
                </p>

                <Link href="/course/arjuna-3-engineering-maths-1">

                  <button className="mt-8 w-full py-4 rounded-2xl bg-cyan-400 text-black font-black">
                    Open Course
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FACULTY */}

      <section
        id="faculty"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
  src="/images/faculty.png"
  alt="faculty"
  className="w-full h-full object-cover rounded-[35px]"
/>
          </div>

          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              Premium Faculty
            </div>

            <h2 className="text-6xl font-black mt-8">

              Learn From
              <span className="text-cyan-400"> Expert Mentors </span>

            </h2>

            <p className="text-zinc-400 text-xl mt-8 leading-loose">

              High quality teaching experience with conceptual clarity,
              exam oriented preparation and premium learning ecosystem.

            </p>

          </div>

        </div>

      </section>

      {/* REVIEWS */}

      <section
        id="reviews"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-6xl font-black text-center">
            Student Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            <div className="bg-zinc-900 rounded-[35px] border border-cyan-500/10 p-10">

              <h3 className="text-3xl font-black text-cyan-400">
                Excellent Teaching
              </h3>

              <p className="text-zinc-400 mt-6">
                One of the best premium mathematics learning experiences.
              </p>

            </div>

            <div className="bg-zinc-900 rounded-[35px] border border-cyan-500/10 p-10">

              <h3 className="text-3xl font-black text-cyan-400">
                Amazing Notes
              </h3>

              <p className="text-zinc-400 mt-6">
                Notes and lectures are highly detailed and understandable.
              </p>

            </div>

            <div className="bg-zinc-900 rounded-[35px] border border-cyan-500/10 p-10">

              <h3 className="text-3xl font-black text-cyan-400">
                Highly Recommended
              </h3>

              <p className="text-zinc-400 mt-6">
                Best coaching platform for Engineering Mathematics.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SOCIAL */}

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-20">

  <a
    href="https://youtube.com/@aliferacademy?si=vZnZ-X7dSbbv_lrQ"
    target="_blank"
    className="bg-zinc-900 rounded-[35px] border border-red-500/20 p-10 hover:scale-105 hover:border-red-500 transition"
  >
    <h3 className="text-3xl font-black text-red-500">
      YouTube
    </h3>

    <p className="text-zinc-400 mt-4">
      Watch premium mathematics lectures.
    </p>
  </a>

  <a
    href="https://t.me/AliferAcademy"
    target="_blank"
    className="bg-zinc-900 rounded-[35px] border border-cyan-500/20 p-10 hover:scale-105 hover:border-cyan-500 transition"
  >
    <h3 className="text-3xl font-black text-cyan-400">
      Telegram
    </h3>

    <p className="text-zinc-400 mt-4">
      Join notes and updates channel.
    </p>
  </a>

  <a
    href="https://www.instagram.com/alifer_academy?igsh=MWxncDBycnVjMDJ4Zg=="
    target="_blank"
    className="bg-zinc-900 rounded-[35px] border border-pink-500/20 p-10 hover:scale-105 hover:border-pink-500 transition"
  >
    <h3 className="text-3xl font-black text-pink-500">
      Instagram
    </h3>

    <p className="text-zinc-400 mt-4">
      Daily premium content and reels.
    </p>
  </a>

  <a
    href="https://www.facebook.com/share/17TL37Vu8J/"
    target="_blank"
    className="bg-zinc-900 rounded-[35px] border border-blue-500/20 p-10 hover:scale-105 hover:border-blue-500 transition"
  >
    <h3 className="text-3xl font-black text-blue-400">
      Facebook
    </h3>

    <p className="text-zinc-400 mt-4">
      Connect with the academy community.
    </p>
  </a>

  <a
    href="https://chat.whatsapp.com/Eymsd5JggztFF9wNlJxqEd"
    target="_blank"
    className="bg-zinc-900 rounded-[35px] border border-green-500/20 p-10 hover:scale-105 hover:border-green-500 transition"
  >
    <h3 className="text-3xl font-black text-green-400">
      WhatsApp
    </h3>

    <p className="text-zinc-400 mt-4">
      Join batches and live discussions.
    </p>
  </a>

</div>

      {/* FOOTER */}

      <footer className="border-t border-cyan-500/10 py-10 text-center text-zinc-500">

        © 2026 ALIFER ACADEMY • Premium Mathematics Learning Platform

      </footer>

      {/* GLOBAL CSS */}
{/* AI DOUBT ASSISTANT */}

<div className="fixed bottom-8 left-8 z-50">

  <button
    onClick={() => {
      const chat = document.getElementById("ai-chat");
      chat?.classList.toggle("hidden");
    }}
    className="w-16 h-16 rounded-full bg-cyan-400 text-black text-3xl shadow-[0_0_40px_rgba(0,255,255,0.5)]"
  >
    🤖
  </button>

  <div
    id="ai-chat"
    className="hidden mt-5 w-[350px] bg-zinc-900 border border-cyan-400/20 rounded-[30px] overflow-hidden shadow-2xl"
  >

    <div className="p-5 border-b border-white/10 bg-black">
      <h2 className="text-xl font-black text-cyan-400">
        AI Doubt Assistant
      </h2>
    </div>

    <div
      id="chat-box"
      className="h-[350px] overflow-y-auto p-5 space-y-4 text-sm"
    >
      <div className="bg-cyan-400/10 p-4 rounded-2xl text-cyan-300">
        Ask any mathematics doubt 😎
      </div>
    </div>

    <div className="p-4 border-t border-white/10 flex gap-3">

      <input
        id="user-input"
        type="text"
        placeholder="Ask your doubt..."
        className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 outline-none"
      />

      <button
        onClick={async () => {

          const input = document.getElementById("user-input") as HTMLInputElement;

          const chatBox = document.getElementById("chat-box");

          if (!input.value) return;

          const userMessage = input.value;

          chatBox!.innerHTML += `
            <div class="bg-white/10 p-4 rounded-2xl text-white ml-10">
              ${userMessage}
            </div>
          `;

          input.value = "";

          let reply = "";

const text = userMessage.toLowerCase();

if (
  text.includes("2+1") ||
  text.includes("2 + 1")
) {

  reply = "2 + 1 = 3 😎";

}

else if (
  text.includes("integration")
) {

  reply =
    "Integration differentiation ka inverse process hota hai 😎";

}

else if (
  text.includes("differentiation")
) {

  reply =
    "Differentiation kisi function ka rate of change batata hai 🚀";

}

else if (
  text.includes("matrix")
) {

  reply =
    "Matrix rows aur columns me arranged numbers ka rectangular form hota hai 😎";

}

else if (
  text.includes("hello") ||
  text.includes("hi")
) {

  reply =
    "Welcome to ALIFER ACADEMY AI 🚀";

}

else if (
  text.includes("formula")
) {

  reply =
    "Please specify which formula you want 😎";

}

else {

  reply =
    "Currently I support basic mathematics doubts 😎";

}

chatBox!.innerHTML += `
  <div class="bg-cyan-400/10 p-4 rounded-2xl text-cyan-300 mr-10">
    ${reply}
  </div>
`;

          chatBox!.innerHTML += `
            <div class="bg-cyan-400/10 p-4 rounded-2xl text-cyan-300 mr-10">
              ${reply}
            </div>
          `;

          chatBox!.scrollTop = chatBox!.scrollHeight;

        }}
        className="px-5 rounded-xl bg-cyan-400 text-black font-black"
      >
        Send
      </button>

    </div>

  </div>

</div>
    </main>
   <style jsx global>{`
html {
  scroll-behavior: smooth;
}

body {
  background: #000;
}

.glow {
  box-shadow:
    0 0 20px rgba(0,255,255,0.3),
    0 0 40px rgba(0,255,255,0.15);
}

.hero-grid {
  background-image:
    linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px);

  background-size: 40px 40px;
}

.floating {
  animation: float 4s ease-in-out infinite;
}
.slider-track {
  display: flex;
  width: 500%;
  animation: slider 25s infinite;
}



@keyframes slider {

  0% {
    transform: translateX(0);
  }

  15% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-100vw);
  }

  35% {
    transform: translateX(-100vw);
  }

  40% {
    transform: translateX(-200vw);
  }

  55% {
    transform: translateX(-200vw);
  }

  60% {
    transform: translateX(-300vw);
  }

  75% {
    transform: translateX(-300vw);
  }

  80% {
    transform: translateX(-400vw);
  }

  95% {
    transform: translateX(-400vw);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}
`}</style> 
</>
  );
}

