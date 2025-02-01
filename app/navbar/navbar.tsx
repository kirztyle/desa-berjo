"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-slate-500 shadow-lg text-xl">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="font-semibold text-white">
          <Link href="/">Wisata Desa Berjo (DOJO)</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="" className="p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Galeri
          </Link>
          <Link href="" className="p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Aktivitas
          </Link>
          <Link href="" className="p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Booking
          </Link>
          <Link href="" className="p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-4 bg-slate-600 text-white p-6">
          <Link href="" className="block p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Galeri
          </Link>
          <Link href="" className="block p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Aktivitas
          </Link>
          <Link href="" className="block p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Booking
          </Link>
          <Link href="" className="block p-3 hover:bg-white rounded-lg font-semibold text-white hover:text-black transition duration-200">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
