"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Define Review Interface
interface Review {
  id: number;
  name: string;
  image_url: string;
  feedback: string;
}

const reviews: Review[] = [
  {
    "id": 1,
    "name": "Rohit Malhotra",
    "image_url": "/assets/reviews/1.JPG",
    "feedback": "An outstanding travel experience! The driver was professional, and the ride was smooth and enjoyable. Highly recommended!"
  },
  {
    "id": 2,
    "name": "Sneha Kapoor",
    "image_url": "/assets/reviews/6.JPG",
    "feedback": "I had a hassle-free booking experience. The service was punctual, and the vehicle was well-maintained. Will book again!"
  },
  {
    "id": 3,
    "name": "Arjun Khanna",
    "image_url": "/assets/reviews/4.JPG",
    "feedback": "Great service at a reasonable price. The driver was courteous, and the journey was very comfortable. Five stars!"
  },
  {
    "id": 4,
    "name": "Meera Joshi",
    "image_url": "/assets/reviews/2.JPG",
    "feedback": "One of the best travel services I have used. Everything was well-organized, and I felt safe throughout my journey."
  },
  {
    "id": 5,
    "name": "Karan Mehta",
    "image_url": "/assets/reviews/3.JPG",
    "feedback": "Clean car, on-time service, and a smooth ride. The entire process was effortless, and I had a great time!"
  },
  {
    "id": 6,
    "name": "Pooja Desai",
    "image_url": "/assets/reviews/5.JPG",
    "feedback": "Excellent service with a friendly driver. The ride was comfortable, and I reached my destination on time without any hassle."
  },
  {
    "id": 7,
    "name": "Vikas Sharma",
    "image_url": "/assets/reviews/7.JPG",
    "feedback": "Very reliable and professional service. The booking was easy, and everything was managed efficiently. Definitely recommended!"
  },
  {
    "id": 8,
    "name": "Ananya Verma",
    "image_url": "/assets/reviews/8.JPG",
    "feedback": "Amazing experience! The driver was skilled, and the journey was pleasant. I would definitely use this service again."
  },
  {
    "id": 9,
    "name": "Siddharth Rao",
    "image_url": "/assets/reviews/12.JPG",
    "feedback": "A smooth and enjoyable trip. The car was in excellent condition, and the entire journey was stress-free. Thumbs up!"
  },
  {
    "id": 10,
    "name": "Neha Tiwari",
    "image_url": "/assets/reviews/15.JPG",
    "feedback": "Loved the experience! The service was efficient, and the ride was extremely comfortable. Will definitely recommend to others!"
  }
  // { id: 11, name: "Sandeep Yadav", image_url: "/assets/reviews/.JPG", feedback: "Punctual and reliable service. The entire process from booking to drop-off was hassle-free. Kudos to the team!" },
  // { id: 12, name: "Sandeep Yadav", image_url: "/assets/reviews/.JPG", feedback: "Punctual and reliable service. The entire process from booking to drop-off was hassle-free. Kudos to the team!" },

];

export default function CustomerReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle responsive design
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Small screens: 1 card
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Medium screens: 2 cards
      } else {
        setSlidesToShow(3); // Large screens: 3 cards
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % (reviews.length - (slidesToShow - 1)));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + (reviews.length - (slidesToShow - 1))) % (reviews.length - (slidesToShow - 1)));
  };

  return (
    <section className="customer-reviews bg-gray-100 py-10 relative">
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say </h2>
        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / slidesToShow)}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className={`p-4`} style={{ flex: `0 0 ${100 / slidesToShow}%` }}>
                <div className="flex flex-col p-4 bg-white shadow-lg rounded-lg h-full">
                  <img src={review.image_url} alt={review.name} className="w-24 h-24 object-cover rounded-full border-4 border-gray-300 mt-4 mx-auto" />
                  <FaQuoteLeft className="text-gray-500 text-xl mb-4" />
                  <p className="text-gray-600 italic text-lg text-center">{review.feedback}</p>
                  <strong className="mt-3 text-xl text-gray-800">{review.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#323232e5] text-white rounded-full flex items-center justify-center shadow-lg"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#323232e5] text-white rounded-full flex items-center justify-center shadow-lg"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
