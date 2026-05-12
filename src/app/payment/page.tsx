
"use client";

import { useState } from "react";

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db, auth } from "@/firebase/config";

export default function PaymentPage() {

  const [screenshot, setScreenshot] = useState<any>(null);

  const submitPayment = async () => {

    try {

      if (!screenshot) {

        alert("Upload payment screenshot 😭");

        return;

      }

      const user = auth.currentUser;

      if (!user) {

        alert("Please login first 😭");

        return;

      }

      await addDoc(
        collection(db, "paymentRequests"),
        {
          uid: user.uid,
          email: user.email,
          courseId: "arjuna-3-engineering-maths-1",
          status: "pending",
          createdAt: new Date(),
        }
      );

      alert("Payment Request Sent 😎🔥");

    } catch (error) {

      console.log(error);

      alert("Something went wrong 😭");

    }

  };

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-2xl bg-zinc-900 border border-cyan-500/20 rounded-[40px] p-10">

        <h1 className="text-5xl font-black text-cyan-400 text-center">

          Buy Course ₹11

        </h1>

        <p className="text-zinc-400 text-center mt-4">

          Pay using UPI QR below

        </p>

        {/* QR */}

        <div className="mt-10 flex justify-center">

          <img
            src="/qr.png"
            alt="QR"
            className="w-72 rounded-3xl"
          />

        </div>

        {/* UPI */}

        <div className="mt-8 bg-black border border-cyan-500/20 rounded-2xl p-5 flex items-center justify-between">

          <p className="text-lg text-cyan-300">

            9758310961@superyes

          </p>

          <button
            onClick={() => {
              navigator.clipboard.writeText("9758310961@superyes");
              alert("UPI Copied 😎");
            }}
            className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-bold"
          >

            Copy

          </button>

        </div>

        {/* Upload */}

        <div className="mt-10">

          <p className="mb-4 text-zinc-300">

            Upload Payment Screenshot

          </p>

          <input
            type="file"
            onChange={(e) => setScreenshot(e.target.files?.[0])}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4"
          />

        </div>

        {/* Submit */}

        <button
          onClick={submitPayment}
          className="w-full mt-10 py-5 bg-cyan-400 text-black rounded-2xl font-black text-xl hover:scale-105 transition"
        >

          Submit Payment Request

        </button>

      </div>

    </div>

  );

}

