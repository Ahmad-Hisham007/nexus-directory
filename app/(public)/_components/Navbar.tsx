"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "@/Components/NavLink/NavLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ১. একটি কমন হ্যান্ডলার যা ক্লিক হওয়া মাত্রই মোবাইল মেনু বন্ধ করে দেবে
  const handleMobileMenuClick = () => {
    // আপনি চাইলে এখানে কন্ডিশন রাখতে পারেন, তবে যেহেতু ভেতরে সব কিছুতেই ক্লিক করলে মেনু বন্ধ হওয়া দরকার, তাই সরাসরি:
    setMenuOpen(false);
  };

  // Reusable classes for desktop and mobile links to ensure consistent active states
  const desktopLinkClass =
    "px-3 py-2 rounded-md hover:text-primary transition-colors [&.active]:bg-primary/10 [&.active]:text-primary [&.active]:font-semibold";
  const mobileLinkClass =
    "p-3 rounded-lg text-lg hover:bg-base-200 transition-colors [&.active]:bg-primary/10 [&.active]:text-primary [&.active]:font-semibold";

  return (
    <>
      <header className="navbar bg-base-100 sticky top-0 z-50 px-4 lg:px-8 py-3 border-b border-base-300 transition-colors duration-300 justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/nexus-directory-favico.png"
              alt="Nexus Directory"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="text-2xl font-semibold">NEXUS</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 font-medium text-base-content/80">
          <NavLink href="/" className={desktopLinkClass}>
            Home
          </NavLink>
          <NavLink href="/explore" className={desktopLinkClass}>
            Explore
          </NavLink>
          <NavLink href="/about" className={desktopLinkClass}>
            About
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Link
            href="/login"
            className="btn btn-primary rounded-full px-8 text-white bg-linear-to-br from-[#26003b] to-[#b71056] border-0 hover:scale-105 transition-transform"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-base-content p-2"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* --- Mobile Offcanvas Menu --- */}

      {/* 1. Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-100 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* 2. Sidebar Panel */}
      {/* ২. এখানে মূল প্যারেন্ট কন্টেইনারে একটিমাত্র onClick যুক্ত করা হয়েছে (Event Delegation) */}
      <div
        onClick={handleMobileMenuClick}
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-base-100 z-101 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top: Logo & Close Button */}
        <div className="flex justify-between items-center p-5 border-b border-base-300">
          <Image
            src="/nexus-directory-logo.png"
            alt="Nexus Directory"
            width={130}
            height={40}
            className="object-contain"
          />
          <button className="text-3xl text-base-content/70 hover:text-primary transition-colors">
            <FiX />
          </button>
        </div>

        {/* Middle: Navigation Links */}
        {/* ৩. সবগুলো আইটেম থেকে আলাদা আলাদা onClick মুছে ফেলা হয়েছে */}
        <div className="flex flex-col flex-1 overflow-y-auto p-5 gap-2 text-base-content font-medium">
          <NavLink href="/" className={mobileLinkClass}>
            Home
          </NavLink>
          <NavLink href="/explore" className={mobileLinkClass}>
            Explore
          </NavLink>
          <NavLink href="/about" className={mobileLinkClass}>
            About
          </NavLink>
        </div>

        {/* Bottom: Sign In Button */}
        <div className="p-5 border-t border-base-300 bg-base-200/50">
          <Link
            href="/login"
            className="btn btn-primary w-full rounded-full text-white bg-linear-to-br from-[#26003b] to-[#b71056] border-0 text-lg"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
