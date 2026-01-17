"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/page";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://grocery-server-sable.vercel.app/shop")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const matchesCategory = categoryFilter
        ? product.category === categoryFilter
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchInput, categoryFilter, products]);

  if (loading) return <div className="mt-10 text-center">Loading...</div>;

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-3xl font-bold text-center">
        All Products
      </div>

      <p className="mb-6 text-center text-sm md:text-base">
        Discover a wide range of fresh and essential grocery items curated to make your daily shopping easier and healthier.
      </p>

      {/* Search + Category Section */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">

        {/* Search */}
        <div className="flex w-full gap-2 md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-[#78C841] text-sm md:text-base"
          />
          <button
            className="px-4 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded hover:bg-green-600 text-sm md:text-base"
          >
            Search
          </button>
        </div>

        {/* Category */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full px-4 py-2 border rounded md:w-1/4 focus:outline-green-400 text-sm md:text-base"
        >
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value ="Snacks">Snacks</option>
            <option value="Spices">Spices</option>
         <option value="Essentials">Essentials</option>
          <option value="Beverages">Beverages</option>
        </select>

      </div>

      {/* Product Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-4 
      ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
