"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Ghee", img: "https://i.ibb.co/1GFCqPdQ/ghee.webp" },
  { title: "Shemai & Suji", img: "https://i.ibb.co/1t2HJ6yK/shemai-suji.webp" },
  { title: "Oil", img: "https://i.ibb.co/Vcc8djYq/oil.webp" },
  { title: "Salt & Sugar", img: "https://i.ibb.co/dJLP51fm/salt-sugar.webp" },
  { title: "Rice", img: "https://i.ibb.co/JjH5D02M/rice.webp" },
  { title: "Spices", img: "https://i.ibb.co/BVG2Bd1D/spices.webp" },
  { title: "Frozen Items", img: "https://i.ibb.co/wNdHY04y/tofu-meat-alternatives.webp" },
  { title: "Frozen Fish", img: "https://i.ibb.co/cXDSSp24/frozen-fish.webp" },
  { title: "Chicken & Poultry", img: "https://i.ibb.co/pjxCbzrM/chicken-poultry.webp" },
  { title: "Fish", img: "https://i.ibb.co/GvCmJz1g/fish.webp" },
  { title: "Fresh Fruits", img: "https://i.ibb.co/8LbCSbQ0/fresh-fruits.webp" },
  { title: "Fresh Vegetables", img: "https://i.ibb.co/v6j0P2ZM/fresh-vegetables.webp" },
  { title: "Paper Products", img: "https://i.ibb.co/hxSmcmBc/napkins-paper-products.webp" },
  { title: "Dishwashing", img: "https://i.ibb.co/ztPh8r2/dishwashing-supplies.webp" },
  { title: "Ready Mix", img: "https://i.ibb.co/Rr6m1s9/ready-mix.webp" },
  { title: "Dal & Lentils", img: "https://i.ibb.co/gFry8c9X/dal-or-lentil.webp" }
];

export default function Category() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <h2 className=" bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-bold text-center mb-6">Popular Categories</h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 1500 }}
        loop={true}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 }
        }}
        className="pb-10"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div className=" rounded-xl p-4 shadow hover:shadow-lg transition bg-white text-center">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-28 object-contain mx-auto"
              />
              <h3 className="mt-3 text-lg font-semibold">{cat.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

