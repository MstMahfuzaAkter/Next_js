// components/LoginForm.jsx
"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";

const MOCK_EMAIL = "admin@test.com";
const MOCK_PASSWORD = "123asdA!";

export default function LoginForm() {
  const { signInUser, signInWithGoogle, loginMockUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      toast.success("Firebase login successful!");
      router.push(redirectTo);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleMockLogin = () => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      loginMockUser(email);
      toast.success("Mock login successful!");
      router.push(redirectTo);
    } else {
      toast.error("Invalid mock credentials!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful!");
      router.push(redirectTo);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full max-w-sm p-8 bg-white shadow-2xl rounded-2xl">
      <h1 className="text-center text-3xl font-bold text-green-700 mb-6">Welcome Back</h1>
      <form onSubmit={handleLogIn} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-green-300 outline-none"
          required
        />
        <button type="submit" className="w-full py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-green-600 font-semibold">
          Login
        </button>
        <button type="button" onClick={handleMockLogin} className="w-full py-2 text-white rounded-full bg-gray-800 hover:bg-gray-900 font-semibold">
          Mock Login
        </button>
      </form>
      <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full gap-2 mt-4 py-2 border rounded-full bg-white text-gray-700 hover:bg-gray-100">
        <FaGoogle /> Login with Google
      </button>
      <p className="mt-4 text-center text-gray-600">
        New? <Link href="/register" className="text-green-600 hover:underline">Register</Link>
      </p>
    </div>
  );
}