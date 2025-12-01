"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ActivitiesWidget = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);

  const activities = [
    { img: "/assets/reviews/2.JPG", title: "Rajasthan, India" },
    { img: "/assets/reviews/9.JPG", title: "Delhi Transfer" },
    { img: "/assets/reviews/17.JPG", title: "Jaipur, Rajasthan" },
    { img: "/assets/reviews/3.JPG", title: "Delhi Local Rental" },
    { img: "/assets/reviews/4.JPG", title: "Manali, Himachal" },
    { img: "/assets/reviews/18.JPG", title: "Delhi Local" },
    { img: "/assets/reviews/5.JPG", title: "Kufri, Himachal" },
    { img: "/assets/reviews/6.JPG", title: "Taj Mahal, Agra" },
    { img: "/assets/reviews/7.JPG", title: "Delhi, India" },
    { img: "/assets/reviews/12.JPG", title: "Uttarakhand, India" },
    { img: "/assets/reviews/1.JPG", title: "Jaipur, Rajasthan" },
  ];

  // RESPONSIVE SLIDES
  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w >= 1280) setSlidesToShow(4);
      else if (w >= 1024) setSlidesToShow(3);
      else if (w >= 768) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // CALCULATE CARD WIDTH FOR PERFECT SLIDE
  useEffect(() => {
    const updateCardWidth = () => {
      const container = document.getElementById("activity-slider");
      if (container) {
        const fullWidth = container.offsetWidth;
        const gap = 16; // gap-4 = 16px
        setCardWidth(fullWidth / slidesToShow + gap);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, [slidesToShow]);

  // AUTOPLAY
  useEffect(() => {
    const maxIndex = activities.length - slidesToShow;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2800);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <section className="py-20 bg-[#f7f9fb]">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Travelling Memories
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Real journeys. Real people. Real experiences.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full py-5 overflow-hidden">
        <div
          id="activity-slider"
          className="max-w-7xl mx-auto overflow-hidden relative"
        >
          <motion.div
            className="flex"
            animate={{ x: -(activeIndex * cardWidth) }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {activities.map((activity, index) => (
              <div
                key={index}
                className="mr-4 flex-shrink-0"
                style={{ width: `calc((100% / ${slidesToShow}) - 16px)` }}
              >
                {/* <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg relative"> */}
                <div className="w-full h-[350px] sm:h-72 md:h-72 rounded-xl overflow-hidden shadow-lg relative">


                  {/* FIXED IMAGE */}
                  <Image
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-full object-fit"
                    width={500}
                    height={350}
                  />

                  {/* TITLE */}
                  <div className="absolute bottom-0 left-0 right-0 
                    bg-gradient-to-t from-black/70 to-transparent 
                    p-4 text-white text-center font-semibold">
                    {activity.title}
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesWidget;
