"use client";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";
import {
  doc,
  setDoc
} from "firebase/firestore";

import { db } from "@/firebase/config";

export default function LoginPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  
const signup = async () => {

  try {

    setLoading(true);

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    window.location.href = "/";

  } catch (error: any) {

    alert(error.message);

  }

  setLoading(false);

};



const login = async () => {

  try {

    setLoading(true);

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    window.location.href = "/";

  } catch (error: any) {

    alert(error.message);

  }

  setLoading(false);

};



  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-cyan-500/20 rounded-[35px] p-10">

        <h1 className="text-5xl font-black text-center text-cyan-400">
          ALIFER
        </h1>

        <p className="text-zinc-400 text-center mt-4">
          Premium Student Login
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
          />

        </div>

        <div className="mt-8 space-y-4">

<button
  type="button"
  onClick={login}
  disabled={loading}
  className="w-full py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition"
>
  Login
</button>



        
<button
  type="button"
  onClick={signup}
  disabled={loading}
  className="w-full py-4 border border-cyan-400 text-cyan-300 rounded-2xl font-bold hover:bg-cyan-400 hover:text-black transition"
>
  Create Account
</button>


        </div>

      </div>
    </div>
  );
}