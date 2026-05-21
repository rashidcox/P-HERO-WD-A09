"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaCar,
  FaUserCircle,
  FaPlus,
} from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Cars", path: "/cars" },
    { name: "Add Car", path: "/add-car" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  return (
    <>
    <header className="bg-white border-b sticky top-0 z-100">
      <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Navbar Container */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <FaCar size={18} />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                Drive<span className="text-blue-600">Nest</span>
              </h1>
            </div></Link>


          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li className="flex items-center gap-2">
              <Link href={'/'} className={pathName === "/" ? "text-blue-600 font-bold" : ""}>Home</Link>
              <Link href={'/cars'} className={pathName === "/cars" ? "text-blue-600 font-bold" : ""}>Explore Cars</Link>
              <Link href={'/add-car'} className={pathName === "/add-car" ? "text-blue-600 font-bold" : ""}>Add Car</Link>
              <Link href={'/my-bookings'} className={pathName === "/my-bookings" ? "text-blue-600 font-bold" : ""}>My Bookings</Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Login
            </button>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Register
            </button>

            <FaUserCircle
              className="text-gray-600 cursor-pointer"
              size={28}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] py-4" : "max-h-0"
            }`}
        >
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
           <li><Link href={'/'} className={pathName === "/" ? "text-blue-600 font-bold" : ""}>Home</Link></li>
           <li><Link href={'/cars'} className={pathName === "/cars" ? "text-blue-600 font-bold" : ""}>Explore Cars</Link></li>
           <li><Link href={'/add-car'} className={pathName === "/add-car" ? "text-blue-600 font-bold" : ""}>Add Car</Link></li>
           <li><Link href={'/my-bookings'} className={pathName === "/my-bookings" ? "text-blue-600 font-bold" : ""}>My Bookings</Link></li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-5">
            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg">
              Login
            </button>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav >
    </header>
    </>
  );
};

export default Navbar;