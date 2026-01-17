"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";

export default function AddProduct() {
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted!");

    const newProduct = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      unit: e.target.unit.value,
      rating: parseFloat(e.target.rating.value),
      stock: parseInt(e.target.stock.value),
      image: e.target.image.value,
      description: e.target.description.value,
      addedBy: user?.email || "anonymous",
    };

    try {
      const res = await fetch("https://grocery-server-sable.vercel.app/shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();
      toast.success("Product added successfully!");
      console.log(data);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="px-10 py-10">
      <div className="max-w-2xl p-8 mx-auto mt-10 bg-white border border-gray-200 shadow-lg rounded-2xl">
        <h2 className="mb-8 text-3xl font-bold text-center">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="space-y-1">
            <label className="font-semibold">Product Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="Strawberry"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Category</label>
            <input
              name="category"
              type="text"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="Fruits / Vegetables / Dairy"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Price</label>
            <input
              name="price"
              type="number"
              min="1"
              step="0.01"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="300"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Unit</label>
            <input
              name="unit"
              type="text"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="kg / box / piece"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Rating</label>
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              step="0.1"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="4.7"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Stock</label>
            <input
              name="stock"
              type="number"
              min="1"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="35"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Product Image URL</label>
            <input
              name="image"
              type="url"
              required
              className="w-full px-4 py-2 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="https://example.com/image.png"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              rows="3"
              required
              className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-2 focus:ring-green-400"
              placeholder="Write product details..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white transition bg-[#78C841] rounded-xl hover:bg-green-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
