"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Banner() {
  return (
    <div className="relative w-[95%] md:w-[82%] mx-auto  group">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        effect="fade" // Smooth unique transition
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-[450px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
      >
        {/* ===== Slide 1: Modern Split Design ===== */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center bg-[#f3f9f1]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.postimg.cc/qvbx5gq4/The-Best-List-of-Naturally-Gluten-Free-Foods-easy-recipes-Vibrantly-G-Free.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent md:from-black/40"></div>
            </div>
            
            <div className="relative z-10 pl-10 md:pl-20 text-white max-w-2xl">
              <div className="overflow-hidden">
                <p className="animate-slide-up text-green-400 font-bold tracking-widest uppercase text-sm mb-4">
                  Freshly Harvested
                </p>
              </div>
              <h2 className="text-4xl md:text-7xl font-black leading-tight mb-6">
                Purely <br /> <span className="text-white underline decoration-green-500">Organic.</span>
              </h2>
              <button className="group flex items-center gap-3 bg-green-600 hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-bold shadow-xl">
                <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform"/>
                SHOP HARVEST
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 2: Minimalist Center Card ===== */}
        <SwiperSlide>
          <div 
            className="w-full h-full bg-cover bg-center flex items-end justify-center pb-12"
            style={{ backgroundImage: "url('https://i.ibb.co.com/7t8jNf8X/slider-2.webp')" }}
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] text-center text-white shadow-2xl mx-4 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter mb-2">
                NATURE'S <span className="font-bold text-red-400">BEST</span>
              </h2>
              <div className="h-[2px] w-20 bg-red-400 mx-auto mb-4"></div>
              <p className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg">50% <span className="text-xl md:text-2xl align-top">OFF</span></p>
              <button className="bg-white text-black px-12 py-3 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-widest text-xs">
                Unlock Discount
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 3: Asymmetric Design ===== */}
        <SwiperSlide>
          <div 
            className="w-full h-full bg-cover bg-center flex items-center justify-end"
            style={{ backgroundImage: "url('https://i.ibb.co.com/TDHtsq14/slider-1.webp')" }}
          >
            <div className="h-full w-full md:w-1/2 bg-[#C47A2C]/90 backdrop-blur-md flex flex-col justify-center px-10 md:px-20 text-white clip-path-oblique">
              <h3 className="text-xl font-medium opacity-80 italic">Curated Selection</h3>
              <h2 className="text-5xl md:text-6xl font-serif font-bold my-6">Modern <br/> Grocery</h2>
              <p className="mb-8 text-lg opacity-90 border-l-2 border-white pl-4 italic">
                "Quality is not an act, it is a habit."
              </p>
              <button className="w-fit border-2 border-white px-8 py-3 rounded-none hover:bg-white hover:text-[#C47A2C] transition-all font-bold uppercase tracking-widest">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Unique Navigation Controls ===== */}
        <div className="absolute bottom-8 right-8 z-40 flex gap-3">
            <button className="btn-prev w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-500 hover:border-green-500 transition-all">
                <ChevronLeft size={24} />
            </button>
            <button className="btn-next w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-green-500 hover:border-green-500 transition-all">
                <ChevronRight size={24} />
            </button>
        </div>
      </Swiper>

      {/* ===== Unique Global Styles ===== */}
      <style jsx global>{`
        .clip-path-oblique {
           clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }
        @media (max-width: 768px) {
            .clip-path-oblique { clip-path: none; }
        }
        .custom-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255,255,255,0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          height: 30px !important;
          background: #22c55e !important;
          border-radius: 4px !important;
        }
        .swiper-pagination {
          left: 20px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          display: flex !important;
          flex-direction: column !important;
          width: fit-content !important;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}