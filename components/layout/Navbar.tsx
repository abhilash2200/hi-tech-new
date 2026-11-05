"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-3 lg:px-10 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? "bg-black/70 backdrop-blur-md shadow-lg border-b border-white/5 py-2.5 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:border-transparent lg:py-4" 
          : "bg-transparent border-b border-transparent py-4"
      }`}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 lg:h-16 w-auto min-w-[150px] lg:min-w-[200px] transition-all duration-300">
            <img
              src="/assets/logo.png"
              alt="Hi-Tech Animation Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1 group cursor-pointer bg-white/85 backdrop-blur-sm shadow-md rounded-lg hover:bg-black transition-all"
        >
          <span className="w-5 h-[1.5px] bg-black transition-all group-hover:w-6 group-hover:bg-white" />
          <span className="w-4 h-[1.5px] bg-black transition-all group-hover:w-3 group-hover:bg-white" />
          <span className="w-5 h-[1.5px] bg-black transition-all group-hover:w-5 group-hover:bg-white" />
        </button>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;

