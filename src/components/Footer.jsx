"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-20">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">

        {/* ===== Logo & Contact ===== */}
        <div>
          <img
            src="https://i.ibb.co/BH06FnbT/logo.webp"
            width={150}
            height={50}
            alt="groca-logo"
            className="mb-5"
          />

          <p className="flex items-center gap-2 opacity-80 mb-3">
            <MdLocationOn className="text-green-400" /> House 12, Road 5, Dhanmondi, Dhaka 1209
          </p>

          <p className="flex items-center gap-2 opacity-80 mb-2">
            <MdPhone className="text-green-400" /> +880 1711-223344
          </p>

          <p className="flex items-center gap-2 opacity-80 mb-5">
            <MdEmail className="text-green-400" /> support@groca.com
          </p>

          <div className="flex gap-4 text-xl mt-2">
            <Link href="#" className="hover:text-green-400 transition"><FaFacebook /></Link>
            <Link href="#" className="hover:text-green-400 transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-green-400 transition"><FaPinterest /></Link>
            <Link href="#" className="hover:text-green-400 transition"><FaTwitter /></Link>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 opacity-80">
            <li>› Search</li>
            <li>› Help</li>
            <li>› About Us</li>
            <li>› Privacy Policy</li>
            <li>› Shipping Info</li>
          </ul>
        </div>

        {/* ===== Customer Care ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 opacity-80">
            <li>› Contact</li>
            <li>› Careers</li>
            <li>› Refund & Returns</li>
            <li>› FAQs</li>
            <li>› Delivery Info</li>
          </ul>
        </div>

        {/* ===== More Info ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">More Info</h3>
          <ul className="space-y-2 opacity-80">
            <li>› Terms & Conditions</li>
            <li>› Advanced Search</li>
            <li>› Store Locator</li>
            <li>› Orders & Returns</li>
            <li>› Offers & Promotions</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 p-6 text-center text-gray-400 text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Groca Grocery Mart</span> | All Rights Reserved
      </div>
    </footer>
  );
}
