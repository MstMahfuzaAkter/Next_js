"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoMdPricetags } from "react-icons/io";
import { useAuth } from "@/context/AuthProvider";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { user, mockUser, loading } = useAuth();

  const [product, setProduct] = useState(null);
  const [loadingProduct, setLoadingProduct] = useState(true);

  // Redirect if not logged in (Firebase or Mock)
  useEffect(() => {
    if (!loading && !user && !mockUser) {
      toast.error("Please login to view product details!");
      router.push("/Login");
    }
  }, [user, mockUser, loading, router]);

  // Fetch product only if user exists
  useEffect(() => {
    if (user || mockUser) {
      fetch(`https://grocery-server-sable.vercel.app/shop/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoadingProduct(false);
        })
        .catch(() => {
          toast.error("Failed to load product details!");
          setLoadingProduct(false);
        });
    }
  }, [id, user, mockUser]);

  if (loading || (!user && !mockUser)) return <div className="mt-10 text-center">Checking access...</div>;
  if (loadingProduct) return <div className="mt-10 text-center">Loading...</div>;
  if (!product) return <div className="mt-10 text-center text-red-500">Product not found.</div>;

  return (
    <div className="max-w-5xl p-6 mx-auto my-8">
      <div className="overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-2xl">
        <div className="flex flex-col gap-8 p-6 md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={product.image} alt={product.name} className="object-cover w-full rounded-xl" />
          </div>
          <div className="w-full space-y-4 md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="my-3 border-t border-gray-300"></div>
            <h2 className="mb-2 text-xl font-semibold">Description:</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="my-3 border-t border-gray-300"></div>
            <p><span className="font-semibold">Category:</span> <span className="text-[#78C841]">{product.category}</span></p>
            <p><span className="font-semibold">Unit:</span> <span className="text-orange-400">{product.unit}</span></p>
            <p><span className="font-semibold">Stock:</span> {product.stock}</p>
            <div className="grid grid-cols-2 gap-4 mt-4 font-bold text-gray-700">
              <p className="flex items-center gap-1"><IoMdPricetags /> Price: <span className="text-[#4895ef]">${product.price}</span></p>
              <p>⭐⭐⭐⭐⭐ {product.rating}</p>
            </div>
            <div className="mt-6">
              <button onClick={() => router.push("/shop")} className="w-full py-2 border bg-[#78C841] rounded-full hover:bg-green-500">
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
