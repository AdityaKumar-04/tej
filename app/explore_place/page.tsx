'use client'
import React from 'react'

import {
  IoSparklesOutline,
  IoHappyOutline,
  IoTrailSignOutline,

} from "react-icons/io5";
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';
import Footer from '../components/Footer';
import Image from 'next/image';



const getRandomEmoji = () => {
  const emojis = ["🗓️", "🌟", "🎆", "🎉", "✨", "📌", "🏷️", "🎈", "🌍", "🏖️", "🏞️", "🏰"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};
export default function Exploreplace() {
  const router = useRouter();

  const places = [
    {
      id: 1,
      name: "Agra (Taj Mahal, Uttar Pradesh)",
      year: getRandomEmoji(),
      seats: 2,
      fuel: "Cultural Essence",
      mileage: "Lifetime memories",
      transmission: "Historic Vibes",
      priceDescription: `${getRandomEmoji()} Monument of Love`,
      image: "/assets/agra.webp",
    },
    {
      id: 2,
      name: "Jaipur (The Pink City, Rajasthan)",
      year: getRandomEmoji(),
      seats: 5,
      fuel: "Heritage Charm",
      mileage: "Unforgettable experiences",
      transmission: "Royal Heritage",
      priceDescription: `${getRandomEmoji()} Colorful Royalty`,
      image: "/assets/jaipur-rajasthan.webp",
    },
    {
      id: 3,
      name: "Delhi Tourism",
      year: getRandomEmoji(),
      seats: 6,
      fuel: "Urban Exploration",
      mileage: "Rich Heritage",
      transmission: "Capital Vibes",
      priceDescription: `${getRandomEmoji()} Heart of India`,
      image: "/assets/Delhi.webp",
    },
    {
      id: 4,
      name: "Vrindavan (Mathura, Uttar Pradesh)",
      year: getRandomEmoji(),
      seats: 4,
      fuel: "Spiritual Bliss",
      mileage: "Divine Experiences",
      transmission: "Sacred Path",
      priceDescription: `${getRandomEmoji()} Land of Krishna`,
      image: "/assets/mathura vrindavan.webp",
    },
    {
      id: 5,
      name: "Rishikesh and Haridwar (Uttarakhand)",
      year: getRandomEmoji(),
      seats: 3,
      fuel: "Adventure & Peace",
      mileage: "Rejuvenating memories",
      transmission: "Yoga Mode",
      priceDescription: `${getRandomEmoji()} Gateway to Himalayas`,
      image: "/assets/Haridwar-to-rishikesh.jpg",
    },
    {
      id: 6,
      name: "Manali (Himachal Pradesh)",
      year: getRandomEmoji(),
      seats: 4,
      fuel: "Snowy Retreat",
      mileage: "Exciting escapades",
      transmission: "Cool Thrills",
      priceDescription: `${getRandomEmoji()} Snow Adventure`,
      image: "/assets/manali.jpg",
    },
    {
      id: 7,
      name: "Uttarakhand (Nainital, Lansdowne, Ranikhet, etc.)",
      year: getRandomEmoji(),
      seats: 4,
      fuel: "Mountain Bliss",
      mileage: "Scenic Escapes",
      transmission: "Tranquil Vibes",
      priceDescription: `${getRandomEmoji()} Nature’s Retreat`,
      image: "/assets/Uttarakhand-Tourism.webp",
    },
    {
      id: 8,
      name: "Tirth Yatra (Chardham)",
      year: getRandomEmoji(),
      seats: 3,
      fuel: "Spiritual Journey",
      mileage: "Soulful Pilgrimage",
      transmission: "Sacred Mode",
      priceDescription: `${getRandomEmoji()} Devotional Quest`,
      image: "/assets/Chardham-Yatra-Package-2023.jpeg.jpg",
    },
    {
      id: 9,
      name: "Prayagraj, Ayodhya, Varanasi (Uttar Pradesh)",
      year: getRandomEmoji(),
      seats: 3,
      fuel: "Cultural Treasure",
      mileage: "Sacred Memories",
      transmission: "Religious Significance",
      priceDescription: `${getRandomEmoji()} Spiritual Legacy`,
      image: "/assets/ayodhya-temple.webp",
    },
    
  ];
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10 ">
            <h2 className="text-4xl font-bold text-gray-800">Explore Places</h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {places.map((place) => (
              <li key={place.id}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

                  {/* Image Section */}
                  <figure className="relative w-full h-56 bg-gray-200">
                    <Image
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      fill
                    />
                    <span className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {place.year}
                    </span>
                  </figure>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                      {place.name}
                    </h3>

                    <ul className="mt-4 space-y-3">
                      <li className="flex items-center gap-3 text-gray-600">
                        <IoSparklesOutline className="text-xl text-blue-500" />
                        <span>{place.fuel}</span>
                      </li>

                      <li className="flex items-center gap-3 text-gray-600">
                        <IoHappyOutline className="text-xl text-green-500" />
                        <span>{place.mileage}</span>
                      </li>

                      <li className="flex items-center gap-3 text-gray-600">
                        <IoTrailSignOutline className="text-xl text-orange-500" />
                        <span>{place.transmission}</span>
                      </li>
                    </ul>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between mt-6">
                      <p className="text-md text-gray-700 font-medium">
                        {place.priceDescription}
                      </p>

                      <button
                        className="px-5 py-2 bg-black transition rounded-lg text-white font-semibold shadow-md"
                        onClick={() => router.push("/")}
                      >
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />

    </div>
  )
}
