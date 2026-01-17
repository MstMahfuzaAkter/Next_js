"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-12">
          Contact Us
        </h1>

        {/* Contact Info + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              We'd love to hear from you! Reach out for inquiries, support, or feedback.
            </p>

            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Address:</span> 123 Main Street, Dhaka, Bangladesh</p>
              <p><span className="font-semibold">Phone:</span> +880 1234 567890</p>
              <p><span className="font-semibold">Email:</span> info@groca.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[{
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/",
                color: "bg-blue-600 hover:bg-blue-700"
              },{
                icon: <FaInstagram />,
                link: "https://www.instagram.com/",
                color: "bg-pink-500 hover:bg-pink-600"
              },{
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/",
                color: "bg-blue-700 hover:bg-blue-800"
              },{
                icon: <FaXTwitter />,
                link: "https://twitter.com/",
                color: "bg-blue-400 hover:bg-blue-500"
              }].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full text-white transition ${s.color} flex items-center justify-center shadow-md hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden shadow-xl rounded-xl border border-gray-200">
            <iframe
              title="Grocery Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8855294158046!2d90.3692065149816!3d23.780887084592764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a4b9f9e2fb%3A0x8e72c2e3c7e1c7e7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-400 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-white rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
