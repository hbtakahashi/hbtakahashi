"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D131F]/80 backdrop-blur-md border-b border-[#45474C]/30 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-8">
        <p className="font-black text-2xl hover:cursor-pointer text-white">
          hbtakahashi
        </p>
        <nav>
          <ul className="flex text-lg items-center text-[#94A3B8] hover:cursor-pointer gap-8">
            <li className="hover:text-[#6BDC96] hover:underline underline-offset-8">
              Home
            </li>
            <li className="hover:text-[#6BDC96] hover:underline underline-offset-4">
              About
            </li>
            <li className="hover:text-[#6BDC96] hover:underline underline-offset-4">
              Works
            </li>
            <li className="hover:text-[#6BDC96] hover:underline underline-offset-4">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
