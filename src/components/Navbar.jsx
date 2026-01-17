"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { HiMenu, HiX } from "react-icons/hi";
import { FaPlus, FaBox } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isMockUser, setIsMockUser] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* 🍪 Mock user detect */
  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsMockUser(document.cookie.includes("mockUser="));
    }
  }, []);

  const isActive = (route) =>
    pathname === route
      ? "text-gradient font-semibold"
      : "text-gray-700 hover:text-gradient transition-colors";

  const isLoggedIn = user || isMockUser;

  /* 🚪 Logout (Firebase + Mock) */
  const handleLogout = async () => {
    try {
      if (user) {
        await signOutUser();
      }
      document.cookie = "mockUser=; path=/; max-age=0";
      setIsMockUser(false);
      setDropdown(false);
      router.push("/Login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="grid items-center grid-cols-3 px-2 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="ml-2 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              GroceryHub
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/shop" className={isActive("/shop")}>Shop</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          <Link href="/offers" className={isActive("/offers")}>Offers</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </div>

        {/* Auth / Profile */}
        <div className="hidden md:flex items-center justify-end gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                href="/Login"
                className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md"
              >
                Login
              </Link>
              <Link
                href="/Register"
                className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-md"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative flex items-center gap-4">
              {/* Profile */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 group"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://via.placeholder.com/40"
                  }
                  alt="user"
                  className="w-10 h-10 border rounded-full object-cover group-hover:ring-2 group-hover:ring-green-400"
                />
                <span
                  className={`transition-transform duration-300 ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md flex items-center gap-2"
              >
                <IoLogOut /> Logout
              </button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 top-14 w-48 bg-white shadow-lg rounded-md py-3 z-50">
                  <p className="font-semibold px-4">
                    {user?.displayName || "Mock User"}
                  </p>
                  <p className="text-xs text-gray-500 px-4 mb-2">
                    {user?.email || "admin@test.com"}
                  </p>
                  <Link
                    href="/AddProduct"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <FaPlus /> Add Product
                  </Link>
                  <Link
                    href="/ManageProducts"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <FaBox /> Manage Products
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-3xl md:hidden justify-self-end"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white border-t">
          <Link href="/" className={`block py-2 ${isActive("/")}`}>Home</Link>
          <Link href="/shop" className={`block py-2 ${isActive("/shop")}`}>Shop</Link>
          <Link href="/about" className={`block py-2 ${isActive("/about")}`}>About</Link>
          <Link href="/offers" className={`block py-2 ${isActive("/offers")}`}>Offers</Link>
          <Link href="/contact" className={`block py-2 ${isActive("/contact")}`}>Contact</Link>

          {!isLoggedIn ? (
            <>
              <Link href="/Login" className="block mt-3 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md">
                Login
              </Link>
              <Link href="/Register" className="block mt-2 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-md">
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="pt-3 mt-3 border-t">
                <p className="font-semibold">{user?.displayName || "Mock User"}</p>
                <p className="text-xs text-gray-500">
                  {user?.email || "admin@test.com"}
                </p>
              </div>
              <Link href="/AddProduct" className="block py-2 mt-2">Add Product</Link>
              <Link href="/ManageProducts" className="block py-2">Manage Products</Link>
              <button
                onClick={handleLogout}
                className="w-full py-2 mt-3 rounded bg-gradient-to-r from-green-400 to-blue-500 text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
