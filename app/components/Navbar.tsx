"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center justify-between md:justify-start md:space-x-8">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/mainLogo.png"
              alt="Tezz Travels logo"
              className="w-[120px]"
              width={120}
              height={60}
            />
          </Link>

          {/* Mobile contact right of logo */}
          {/* <div className="flex md:hidden flex-col items-end mr-1 text-white text-xs leading-tight">
            <Link
              href="tel:+918368154854"
              className="flex items-center gap-1 hover:text-gray-300 transition"
            >
              <IoCallSharp className="text-green-400 text-xl" />
              <span className="text-sm font-semibold">+91 83681 54854</span>
            </Link>
            <span className="text-gray-400 text-[13px]">9:00 am - 10:00 pm</span>
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => router.push("/")}
              className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-all text-[14px]"
            >
              Home
            </button>

            <button
              onClick={() => router.push("/explore_place")}
              className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-all text-[14px]"
            >
              Explore places
            </button>

            <button
              onClick={() => router.push("/about-us")}
              className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-all text-[14px]"
            >
              About us
            </button>
            <button
              onClick={() => router.push("/gallery")}
              className="px-5 py-2 rounded-full bg-transparent text-white hover:bg-white/10 transition-all text-[14px]"
            >
              Gallary
            </button>
          </nav>
        </div>
        {/* Right Side (Email + Contact) */}
        <div className="hidden md:flex items-center space-x-6 text-white">

          {/* Email */}
          <Link
            href="mailto:contact@tezztravels.com"
            className="text-sm text-white hover:text-gray-300 transition"
          >
            📧 contact@tezztravels.com
          </Link>

          <div className="w-px h-6 bg-white/20"></div>

          {/* Phone */}
          <div className="flex flex-col leading-tight">
            <Link
              href="tel:+918368154854"
              className="flex items-center gap-2 hover:text-gray-300 transition"
            >
              <IoCallSharp className="text-green-400 text-xl" />
              +91 83681 54854
            </Link>
            <span className="text-xs text-gray-400">
              Mon - Sun: 9:00 am - 10:00 pm
            </span>
          </div>
        </div>
        {/* Mobile contact right of logo */}
        <div className="flex items-center space-x-4 md:hidden">
          <div className="flex md:hidden flex-col items-end mr-1 text-white text-xs leading-tight">
            <Link
              href="tel:+918368154854"
              className="flex items-center gap-1 hover:text-gray-300 transition"
            >
              <IoCallSharp className="text-green-400 text-xl" />
              <span className="text-sm font-semibold">+91 83681 54854</span>
            </Link>
            <span className="text-gray-400 text-[13px]">9:00 am - 10:00 pm</span>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsNavActive(!isNavActive)}
            className="md:hidden text-white text-3xl"
          >
            {isNavActive ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>



      {/* Mobile Menu */}
      {isNavActive && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-5 py-4 space-y-4">

          <button
            onClick={() => { router.push("/"); setIsNavActive(false); }}
            className="w-full text-left text-white px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            Home
          </button>

          <button
            onClick={() => { router.push("/explore_place"); setIsNavActive(false); }}
            className="w-full text-left text-white px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            Explore places
          </button>

          <button
            onClick={() => { router.push("/about-us"); setIsNavActive(false); }}
            className="w-full text-left text-white px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            About us
          </button>

          <button
            onClick={() => { router.push("/gallery"); setIsNavActive(false); }}
            className="w-full text-left text-white px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            Gallery
          </button>





          {/* Contact */}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="mailto:contact@tezztravels.com"
              className="block text-white/80 py-1"
            >
              contact@tezztravels.com
            </Link>
            <Link
              href="tel:+918368154854"
              className="flex items-center gap-2 text-white transition"
            >
              <IoCallSharp className="text-green-400 text-xl" />
              +91 83681 54854
            </Link>
            <span className="text-xs text-gray-400">
              Mon - Sun: 9:00 am - 10:00 pm
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
