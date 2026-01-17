"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Sadia Akter", text: "The delivery was super fast and the packaging was neat. Everything arrived fresh and exactly as shown on the website." },
  { id: 2, name: "Rasel Ahmed", text: "The vegetables and fruits were surprisingly fresh. Prices are good, and overall the service is very reliable." },
  { id: 3, name: "Mim Chowdhury", text: "Very satisfied with the product quality. Shopping online has become easier and convenient for my family." },
  { id: 4, name: "Hasibul Hasan", text: "Everything was delivered exactly on time. Product quality is consistent, which is why I order regularly." },
  { id: 5, name: "Anika Rahman", text: "Loved the fast service and the freshness of all items. Definitely my go-to place for weekly groceries." },
  { id: 6, name: "Mahin Islam", text: "Affordable, fast, and trustworthy. Each order I received was neatly packed and delivered without any issues." },
];

const RatingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 mb-12 text-sm sm:text-base">
          Real Customer Reviews
        </p>

        {/* Swiper Testimonials */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                
                {/* Quote Icon */}
                <div className="text-green-400 text-4xl mb-4">
                  <FaQuoteLeft />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base mb-6">
                  {`“${t.text}”`}
                </p>

                {/* Name Badge */}
                <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-1 rounded-full font-medium text-sm shadow-sm">
                  {t.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RatingSection;
