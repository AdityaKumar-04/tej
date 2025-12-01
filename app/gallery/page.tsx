"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const images = [
  "/assets/reviews/1.PNG",
  "/assets/reviews/2.PNG",
  "/assets/reviews/3.PNG",
  "/assets/reviews/4.PNG",
  "/assets/reviews/5.PNG",
  "/assets/reviews/6.PNG",
  "/assets/reviews/7.PNG",
  "/assets/reviews/8.PNG",
  "/assets/reviews/9.PNG",
  "/assets/reviews/11.PNG",
  "/assets/reviews/12.PNG",
  "/assets/reviews/14.PNG",
  "/assets/reviews/15.PNG",
  "/assets/reviews/17.PNG",
  "/assets/reviews/18.PNG",
];

export default function PhoneGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  // Touch swipe handle
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;

    const diff = e.touches[0].clientX - touchStartX;
    if (diff > 60) {
      handlePrev();
      setTouchStartX(0);
    } else if (diff < -60) {
      handleNext();
      setTouchStartX(0);
    }
  };

  return (
    <>
      <Navbar />
      <section>
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Photo Gallery
          </h1>
          <p className="text-gray-600 mt-1">
            Explore our curated collection
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-2 p-2">
          {images.map((img, index) => (
            <div key={index} className="mb-2 break-inside-avoid">
              <Image
                src={img}
                alt="gallery"
                className="w-full rounded-xl cursor-pointer hover:opacity-80 transition"
                onClick={() => setSelectedIndex(index)}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Full Screen Viewer */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 text-white text-5xl font-bold select-none px-3"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <Image
              src={images[selectedIndex]}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
              width={800}
              height={600}
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 text-white text-5xl font-bold select-none px-3"
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
