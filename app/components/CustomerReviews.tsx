
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  id: number;
  name: string;
  image_url: string;
  feedback: string;
}

const reviews: Review[] = [
  { id: 1, name: "Rohit Malhotra", image_url: "/assets/reviews/1.PNG", feedback: "An outstanding travel experience! The driver was professional, and the ride was smooth and enjoyable. Highly recommended!" },
  { id: 2, name: "Sneha Kapoor", image_url: "/assets/reviews/6.PNG", feedback: "I had a hassle-free booking experience. The service was punctual, and the vehicle was well-maintained. Will book again!" },
  { id: 3, name: "Arjun Khanna", image_url: "/assets/reviews/4.PNG", feedback: "Great service at a reasonable price. The driver was courteous, and the journey was very comfortable. Five stars!" },
  { id: 4, name: "Meera Joshi", image_url: "/assets/reviews/2.PNG", feedback: "One of the best travel services I have used. Everything was well-organized, and I felt safe throughout my journey." },
  { id: 5, name: "Karan Mehta", image_url: "/assets/reviews/3.PNG", feedback: "Clean car, on-time service, and a smooth ride. The entire process was effortless, and I had a great time!" },
];

export default function CustomerReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const getMaxIndex = () => Math.max(0, reviews.length - slidesToShow);

  const nextSlide = () => setIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev <= 0 ? getMaxIndex() : prev - 1));

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev >= getMaxIndex() ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [slidesToShow]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Customer Memories & Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See what our customers say about their experience with us</p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <span className="text-gray-700 font-semibold">4.9 out of 5</span>
            <span className="text-gray-500">(2,847 reviews)</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / slidesToShow)}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="px-4" style={{ flex: `0 0 ${100 / slidesToShow}%` }}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border">
                  <div className="h-48 overflow-hidden">
                    <Image src={review.image_url} className="w-full h-full object-cover" alt={review.name} width={400} height={200} />
                  </div>
                  <div className="p-6">
                    <div className="flex text-yellow-400 mb-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p className="text-gray-700 mb-4 leading-relaxed">“{review.feedback}”</p>

                    <div className="flex items-center gap-3">
                      <Image src={review.image_url} className="w-12 h-12 rounded-full object-cover border" alt={review.name} width={48} height={48} />
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">◀</button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">▶</button>
        </div>

      </div>
    </section>
  );
}
