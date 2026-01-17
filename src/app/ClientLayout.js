// app/ClientLayout.js
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "@/context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="custom-toast-gradient"
        progressClassName="custom-progress-bar"
      />
    </AuthProvider>
  );
}
