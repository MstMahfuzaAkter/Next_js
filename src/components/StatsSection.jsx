"use client";

import { FaWarehouse, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

export default function StatsSection() {
  const stats = [
    {
      number: "26",
      label: "warehouses",
      text: "all over Bangladesh",
      icon: <FaWarehouse className=" w-6 h-6" />,
    },
    {
      number: "5M",
      label: "orders",
      text: "have been delivered",
      icon: <MdLocalGroceryStore className=" w-6 h-6" />,
    },
    {
      number: "100K",
      label: "families",
      text: "are being served",
      icon: <FaUsers className=" w-6 h-6" />,
    },
    {
      number: "340M",
      label: "Taka",
      text: "customer savings",
      icon: <FaMoneyBillWave className=" w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-6 flex flex-col items-center gap-4"
            >
              {/* Icon in circle */}
              <div className="bg-green-100 p-4 rounded-full shadow-md flex items-center justify-center">
                {item.icon}
              </div>

              {/* Number with gradient */}
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                {item.number} <span className="text-gray-500 text-base font-medium">{item.label}</span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
