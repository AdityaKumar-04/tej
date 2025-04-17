"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ActivitiesWidget = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationValue, setAnimationValue] = useState(550);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const activities = [  
    { img: "/assets/reviews/2.JPG", title: "Rajasthan, India" },
    { img: "/assets/reviews/9.JPG", title: "Goa, India" },
    { img: "/assets/reviews/17.JPG", title: "Jaipur, Rajasthan" },
    { img: "/assets/reviews/3.JPG", title: "Kerala, India" },
    { img: "/assets/reviews/4.JPG", title: "Manali, Himachal" },
    { img: "/assets/reviews/18.JPG", title: "Goa, India" },
    { img: "/assets/reviews/5.JPG", title: "Kufri, Himachal" },
    { img: "/assets/reviews/6.JPG", title: "Taj Mahal, Agra" },
    { img: "/assets/reviews/7.JPG", title: "Delhi, India" },
    { img: "/assets/reviews/12.JPG", title: "Goa, India" },
    { img: "/assets/reviews/1.JPG", title: "Goa, India" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateValues = () => {
        const width = window.innerWidth;
        setSlidesToShow(width >= 1280 ? 0 : width >= 1024 ? 0 : width >= 768 ? 0 : 1);
        setAnimationValue(width >= 1280 ? 230 : width >= 1024 ? 350 : width >= 768 ? 800 : 800);
      };
      
      updateValues(); // Set initial values
      window.addEventListener("resize", updateValues);
      return () => window.removeEventListener("resize", updateValues);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const maxIndex = activities.length - slidesToShow;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [activities.length, slidesToShow]);

  return (
    <div className="relative w-full overflow-hidden p-6">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <motion.div
          className="flex gap-3"
          initial={{ x: 0 }}
          animate={{ x: `-${activeIndex * (animationValue / activities.length)}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {activities.map((activity, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={activity.img} alt={activity.title} className="w-[20rem] h-[20rem] object-cover rounded-lg" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ActivitiesWidget;
