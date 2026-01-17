"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";

/* 🔐 Mock credentials */
const MOCK_EMAIL = "admin@test.com";
const MOCK_PASSWORD = "123asdA!";

/* 🍪 Cookie set helper */
const setMockCookie = (email) => {
  document.cookie = `mockUser=${email}; path=/; max-age=${60 * 60 * 24}`;
};

export default function LoginPage() {
  return <LoginContent />;
}

function LoginContent() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("from") || "/";

  /* 🔹 Firebase Email/Password Login */
  const handleLogIn = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signInUser(email, password);
      toast.success("Logged in successfully!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  /* 🔹 Google Login */
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google!");
      router.push(redirectTo);
    } catch (error) {
      toast.error(error.message);
    }
  };

  /* 🔹 Mock Login (FIXED & WORKING) */
  const handleMockLogin = () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (!email || !password) {
      toast.error("Email and password required");
      return;
    }

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      setMockCookie(email);
      toast.success("Mock login successful!");
      router.push(redirectTo);
    } else {
      toast.error("Invalid mock credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-sm p-8 bg-white shadow-2xl rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-green-700">
          Welcome Back
        </h1>

        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="for mock:admin@test.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
              placeholder="Enter password(mock:123asdA!)"
              required
            />
          </div>

          {/* Firebase Login */}
          <button
            type="submit"
            className="w-full py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-green-600 font-semibold"
          >
            Login
          </button>

          {/* 🆕 Mock Login */}
          <button
            type="button"
            onClick={handleMockLogin}
            className="w-full py-2 text-white rounded-full bg-gray-800 hover:bg-gray-900 font-semibold"
          >
            Mock Login
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full gap-2 mt-4 py-2 border rounded-full bg-white text-gray-700 hover:bg-gray-100"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          New to our website?
          <Link
            href="/Register"
            className="ml-1 font-medium text-green-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
