"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  // IoPeopleOutline,
  IoSparklesOutline,
  IoHappyOutline,
  IoTrailSignOutline,
  IoArrowForwardOutline,
} from "react-icons/io5"; // Importing necessary icons from react-icons

// Utility function to get a random emoji
const getRandomEmoji = () => {
  const emojis = ["🗓️", "🌟", "🎆", "🎉", "✨", "📌", "🏷️", "🎈", "🌍", "🏖️", "🏞️", "🏰"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export default function FeaturedPlaces() {
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
    {
      id: 10,
      name: "Jammu and Kashmir",
      year: getRandomEmoji(),
      seats: 4,
      fuel: "Heavenly Views",
      mileage: "Breathtaking Landscapes",
      transmission: "Peaceful Serenity",
      priceDescription: `${getRandomEmoji()} Paradise on Earth`,
      image: "/assets/jammu kashmir.webp",
    },
  ];
  return (
    <section className="py-20 bg-white/70" id="featured-car">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular Places To Visit
          </h2>

          <button
            onClick={() => router.push("/explore_place")}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            <span className="text-base font-extrabold">View More</span>
            <IoArrowForwardOutline className="text-xl" />
          </button>
        </div>

        {/* SMALLER CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.slice(0, 3).map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group"
            >
              {/* IMAGE SMALLER */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>

                <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md rounded-full px-3 py-0.5 text-xs font-semibold shadow">
                  {place.year}
                </span>
              </div>

              {/* CONTENT SMALLER */}
              <div className="p-4 space-y-3">

                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {place.name}
                </h3>

                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <IoSparklesOutline className="text-lg text-blue-500" />
                    <span>{place.fuel}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <IoHappyOutline className="text-lg text-green-500" />
                    <span>{place.mileage}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <IoTrailSignOutline className="text-lg text-orange-500" />
                    <span>{place.transmission}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-gray-800 font-semibold text-sm">
                    {place.priceDescription}
                  </p>

                  <button
                    onClick={() => router.push("#home")}
                    className="px-3 py-1.5 bg-black text-white text-sm rounded-lg hover:bg-gray-900 transition"
                  >
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );


}
