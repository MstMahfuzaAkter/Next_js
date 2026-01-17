"use client";

import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Healthy Eating",
    date: "Nov 10, 2025",
    link: "https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwip4eHboI-RAxWAo2YCHeScGScYACICCAEQABoCc20&co=1&ase=2&gclid=Cj0KCQiAxJXJBhD_ARIsAH_JGjgLmBgVZv-e6f_A1ZWnR9j3hJN21kvZkQ1gSvyEfseM3DF7rRjsGFEaAlwLEALw_wcB&cid=CAASuwHkaHYEG67fVg4MqUaUoDt7LuftU8WPCoIt25qufzh8BOXFNEWdKAueFcy8e_FrbTNvLzbo5CX8KkedkYTda7G0VVhzWTGuvczsRBtKQh824OFOD8xoFIQGfyVeaJrExPZTLS8KYTuldqMoclA8qqqol5f07Zn46VU4C_O_tWV1fufT50foiMphWqgOAHJwyNG6c8zwt58v6wCfCjHJ7i1rKlmQo6KaHslQlLPhRWv-5UiDpEO6JpSLciV1&cce=2&category=acrcp_v1_32&sig=AOD64_2NQdtJSsoT32ooD2S6GhvfIKNjig&q&nis=4&adurl=https://masarat-sy.org/en/healthy-food/?rf%3Dpmax_x%26gad_source%3D1%26gad_campaignid%3D22866287685%26gbraid%3D0AAAAA9aXFXP0iKndSgFrovOUcqgBzxCa_%26gclid%3DCj0KCQiAxJXJBhD_ARIsAH_JGjgLmBgVZv-e6f_A1ZWnR9j3hJN21kvZkQ1gSvyEfseM3DF7rRjsGFEaAlwLEALw_wcB&ved=2ahUKEwiazNzboI-RAxWBTWwGHQRiFUgQ0Qx6BAgXEAE",
    image: "https://i.ibb.co.com/HTyBCLVn/tf.jpg"
  },
  {
    id: 2,
    title: "Top 10 Grocery Hacks",
    date: "Oct 22, 2025",
    link: "https://www.racv.com.au/royalauto/lifestyle-home/saving-money/save-money-groceries.html",
    image: "https://i.ibb.co.com/5gf294f0/r.webp"
  },
  {
    id: 3,
    title: "Seasonal Fruits Guide",
    date: "Sep 15, 2025",
    link: "https://www.seasonalfoodguide.org/",
    image: "https://i.ibb.co.com/r2Z9xyfD/in-season-fruits.webp"
  },
];
const teamMembers = [
  {
    name: "Adithi Akter",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Rafiq Ahmed",
    role: "Operations Manager",
    image: "https://i.pravatar.cc/100?img=60",
  },
  {
    name: "Sadia Islam",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/100?img=38",
  },
  {
    name: "Tanvir Hasan",
    role: "Product Specialist",
    image: "https://i.pravatar.cc/100?img=51",
  },
];

export default function About() {
  return (
    <div className="px-6 py-12 mx-auto space-y-16 md:px-12 max-w-7xl">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent md:text-6xl">
          About Groca Grocery Mart
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 md:text-xl">
          Grocery Next is dedicated to bringing the freshest groceries right to your doorstep.
          We support local farmers and provide high-quality products for everyone.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="p-6 transition transform shadow bg-green-50 rounded-xl hover:scale-105">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Our Vision</h2>
          <p className="text-gray-700">
            To be Bangladesh's most trusted grocery provider, bringing fresh products directly from farms to your home.
          </p>
        </div>
        <div className="p-6 transition transform shadow bg-green-50 rounded-xl hover:scale-105">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Our Mission</h2>
          <p className="text-gray-700">
            Deliver high-quality groceries with exceptional customer service while supporting local communities and sustainable practices.
          </p>
        </div>
      </section>

      {/* Features / Values */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold text-green-600">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Freshness</h3>
            <p className="text-gray-700">We ensure every product is fresh and high-quality.</p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Trust</h3>
            <p className="text-gray-700">Building trust with our customers through transparency and reliability.</p>
          </div>
          <div className="p-6 transition bg-white shadow rounded-xl hover:shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
            <p className="text-gray-700">Supporting local farmers and sustainable farming practices.</p>
          </div>
        </div>
      </section>
            {/* Blog Section */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <a key={post.id} href={post.link}  target="_blank"
  rel="noopener noreferrer" className="overflow-hidden transition shadow rounded-xl hover:shadow-lg">
              <img src={post.image} alt={post.title} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold text-green-600">Meet Our Team</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="p-4 transition bg-white shadow rounded-xl hover:shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action / Footer-like */}
      <section className="p-12 text-center shadow bg-green-50 rounded-xl">
        <h2 className="mb-4 text-3xl font-bold text-green-700">Join Us Today!</h2>
        <p className="mb-6 text-gray-700">
          Sign up and experience fresh groceries delivered directly to your doorstep.
        </p>
        <button className="px-8 py-3 text-white transition bg-[#78C841] rounded-xl hover:bg-green-600">
          Get Started
        </button>
      </section>
    </div>
  );
}
