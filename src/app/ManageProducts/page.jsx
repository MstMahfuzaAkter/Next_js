"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthProvider";

export default function ManageProducts() {
  const { user, mockUser, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const email = user?.email || mockUser;

  // redirect if no user
  useEffect(() => {
    if (!loading && !email) {
      toast.error("Please login to access this page!");
      router.push("/login");
    }
  }, [email, loading, router]);

  // fetch products when email is available
  useEffect(() => {
    if (!email) return;

    fetch(`https://grocery-server-sable.vercel.app/ManageProducts?email=${email}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => toast.error("Failed to load products!"));
  }, [email]); // ✅ dependency = email

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://grocery-server-sable.vercel.app/ManageProducts/${id}`, { method: "DELETE" })
          .then(() => setProducts(prev => prev.filter(p => p._id !== id)))
          .catch(() => toast.error("Failed to delete!"));
      }
    });
  };

  if (loading || !email) return <div className="mt-10 text-center">Loading...</div>;

  if (products.length === 0)
    return <div className="mt-10 text-center text-gray-600">No products found for {email}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
      {products.map(product => (
        <div key={product._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <div className="flex gap-2 mt-2">
            <button onClick={() => router.push(`/shop/${product._id}`)}>View</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
