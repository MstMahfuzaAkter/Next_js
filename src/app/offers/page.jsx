"use client";

import React from "react";

const offersData = [
  {
    id: 1,
    title: "Fresh Fruits Sale",
    discount: "20% Off",
    image: "https://i.ibb.co.com/vvxYBgYZ/fresh-fruits.webp",
    category: "Fruits",
  },
  {
    id: 2,
    title: "Dairy Delight",
    discount: "15% Off",
    image: "https://i.ibb.co.com/DgbwX1Wp/Groceries-PNG-Clipart.png"
  },
  {
    id: 3,
    title: "Snack Attack",
    discount: "Buy 1 Get 1",
    image: "https://i.ibb.co.com/8LgLFWpR/cookies.jpg",
    category: "Snacks",
  },
];

const couponData = [
  { code: "SAVE10", description: "Get 10% off on orders above $50" },
  { code: "FRESH20", description: "20% off on fresh produce" },
];

export default function OffersPage() {
  return (
    <div className="p-6 mx-auto space-y-12 max-w-7xl">

      {/* Hero Banner */}
      <section className="relative overflow-hidden shadow-lg rounded-xl">
        <img
          src="https://i.ibb.co.com/jk8L7Nzr/2023-04-27-T08-51-36-927-Z-Grocery-Blog.png"
          alt="Offers Banner"
          className="object-cover w-full h-64"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-[#DC0E0E] ">
          <h1 className="mb-2 text-4xl font-bold">Hot Offers & Deals</h1>
          <p className="text-lg text-center">
            Grab the best grocery deals before they end!
          </p>
        </div>
      </section>

      {/* Flash Deals */}
      <section>
        <h2 className="mt-5 mb-6 text-3xl text-[#78C841]  text-center font-bold">Flash Deals</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {offersData.map((offer) => (
            <div key={offer.id} className="overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105">
              <img src={offer.image} alt={offer.title} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="mt-2 font-bold text-[#78C841] ">{offer.discount}</p>
                <span className="text-sm text-gray-500">{offer.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coupon Codes */}
      <section className="p-6 mt-5 shadow-lg bg-green-50 rounded-xl">
        <h2 className="mb-4 text-3xl font-bold text-center text-[#78C841] ">Coupon Codes</h2>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          {couponData.map((coupon, index) => (
            <div key={index} className="flex-1 p-4 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <p className="text-lg font-bold text-green-600">{coupon.code}</p>
              <p className="mt-2 text-gray-600">{coupon.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk / Category Offers */}
      <section>
        <h2 className="mt-5 mb-6 text-3xl text-[#78C841]  font-bold text-center">Category Offers</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-6 text-center transition-transform duration-300 shadow-lg bg-yellow-50 rounded-xl hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold">Fruits</h3>
            <p className="font-bold text-[#78C841]">Up to 25% Off</p>
          </div>
          <div className="p-6 text-center transition-transform duration-300 shadow-lg bg-blue-50 rounded-xl hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold">Dairy</h3>
            <p className="font-bold text-[#78C841]">Flat 15% Off</p>
          </div>
          <div className="p-6 text-center transition-transform duration-300 shadow-lg bg-orange-50 rounded-xl hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold">Snacks</h3>
            <p className="font-bold text-[#78C841]">Buy 1 Get 1 Free</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 mt-5 text-center text-white bg-[#78C841] shadow-lg rounded-xl">
        <h2 className="mb-2 text-3xl font-bold">Don't Miss Out!</h2>
        <p className="mb-4">Shop now and save big on your favorite groceries!</p>
        <button className="px-6  py-3 font-semibold text-white transition bg-gradient-to-r from-[#4f8928] to-[#529723] rounded-lg hover:from-green-700 hover:to-green-900">
          Shop Now
        </button>
      </section>
    </div>
  );
}
