"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavActive(false); // Close navbar after clicking a link
    }
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      scrollToSection("home");
    } else {
      router.push("/");
    }
  };

  const hendleBlogClick = () => {
    if (pathname === "/") {
      scrollToSection("blog");
    } else {
      router.push("/");
      
    }
  }

  return (
    <header className="header overflow-hidden" data-header>
      <div className="container">
        <div
          className={`overlay ${isNavActive ? "active" : ""}`}
          data-overlay
          onClick={toggleNavbar}
        ></div>
        <Link href="/" className="logo">
          <img src="/assets/images/logo2.png" alt="Tej Travels logo" />
        </Link>
        <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <button className="navbar-link" onClick={handleHomeClick}>
                Home
              </button>
            </li>
            <li>
              <button
                className="navbar-link"
                onClick={() => router.push("/explore_place")}
              >
                Explore places
              </button>
            </li>
            <li>
              <button
                className="navbar-link"
                onClick={() => router.push("/about-us")}
              >
                About us
              </button>
            </li>
            <li>
              <button
                className="navbar-link"
                onClick={hendleBlogClick}
              >
                Blog
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          {/* Email Section */}
          <div className="flex flex-col items-center text-yellow-400 font-semibold hidden md:flex">
            <a href="mailto:info@tejtravels.in" className="flex items-center gap-2 hover:text-yellow-300 transition">
              📧 <span>contact@tezztravels.com</span>
            </a>
          </div>

          {/* Vertical Separator */}
          <div className="w-px h-8 bg-gray-500"></div>

          {/* Phone Section */}
          <div className="flex flex-col items-center text-white font-semibold">
            <a href="tel:+918368154854" className="flex items-center gap-2 hover:text-green-300 transition">
              <IoCallSharp className="text-green-500 text-xl" /><span>+91 83681 54854</span>
            </a>
            <span className="text-gray-400 text-sm">Mon - Sun: 9:00 am - 10:00 pm</span>
          </div>
        </div>
      </div>
    </header>
  );
}
