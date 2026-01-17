"use client";

import Image from "next/image";

export default function ShopGetMore() {
  const items = [
    {
      title: "Shop & Earn Points",
      subtitle: "Rewards Every Time",
      desc: "Earn reward points every time you shop. Get cashback, free delivery, and exclusive offers.",
      highlights: [
        "Cashback on every order",
        "Free shipping on selected items",
        "Exclusive member-only deals",
      ],
      img: "https://i.ibb.co/Kxg6d6Kj/image.webp",
    },
    {
      title: "Deal of the Day",
      subtitle: "Grab It Before It’s Gone!",
      desc: "Stock up on your favorite groceries for less with our unbeatable deals. Limited stock available.",
      highlights: [
        "Up to 50% OFF",
        "Fresh items daily",
        "Limited quantities",
      ],
      img: "https://i.ibb.co/gLkXQp9H/daily-Deals-Shop-Info.webp",
    },
    {
      title: "Premium Care",
      subtitle: "Priority Support",
      desc: "Enjoy priority support and assistance for all your orders with our premium care service.",
      highlights: [
        "Faster order handling",
        "Dedicated support team",
        "Assistance with special requests",
      ],
      img: "https://i.ibb.co/XwzKzWy/premium-Image.webp",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
       <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-center mb-16 tracking-tight">
          Shop & Get More
        </h2>

        {/* Items */}
        <div className="space-y-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 gap-6 p-6 md:p-8"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 h-48 md:h-60 relative rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                
                {/* Subtitle */}
                <p className="text-sm md:text-base font-medium text-green-600 uppercase tracking-wide">
                  {item.subtitle}
                </p>

                {/* Title with underline animation */}
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 relative group cursor-pointer">
                  {item.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 transition-all group-hover:w-full rounded"></span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>

                {/* Highlights */}
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="self-start bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm md:text-base font-medium hover:scale-105 transition transform">
                  Learn More
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
