"use client";

import Image from "next/image";

export default function ExtraSection() {
  return (
    <section className="relative max-w-7xl mx-auto my-8 px-2 md:px-6 rounded-2xl overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-red-600 opacity-20 -z-10"></div>

      <div className="grid md:grid-cols-2 items-center gap-10 bg-white/80 rounded-2xl p-8 md:p-16 shadow-lg">
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-red-600">
            Special Discounts on All Grocery Products
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Discover fresh groceries at the best prices! From vegetables to daily essentials, 
            get everything delivered to your doorstep with guaranteed freshness and premium quality. 
            Shop now and enjoy exclusive offers available for a limited time only.
          </p>

          <button className="mt-4 md:mt-6 px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-lg md:text-xl font-semibold hover:scale-105 transition transform shadow-lg">
            Buy Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:flex justify-center relative">
          <Image
            src="https://i.postimg.cc/0jknb4yJ/download-(4).jpg" 
            alt="Grocery Discounts"
            width={500}
            height={500}
            className="rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
