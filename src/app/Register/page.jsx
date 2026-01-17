"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Register() {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const handleRegister = (event) => {
    event.preventDefault();

    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    if (!displayName || !email || !password) {
      toast.error("Please fill all required fields");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain uppercase, lowercase & 6+ characters");
      return;
    }

    createUser(email, password)
      .then(() => updateUserProfile(displayName, photoURL))
      .then(() => {
        toast.success("Account created successfully!");
        router.push("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Account created successfully!");
        router.push("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-sm p-8 bg-white shadow-2xl rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-green-700">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="displayName"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          <button className="w-full py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all font-semibold">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-2 mt-4 py-2 border border-gray-300 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-all font-medium"
        >
          <FaGoogle /> Sign up with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <Link href="/Login" className="ml-1 font-medium text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
