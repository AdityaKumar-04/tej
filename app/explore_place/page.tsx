'use client'
import React from 'react'

import {
  // IoPeopleOutline,
  IoSparklesOutline,
  IoHappyOutline,
  IoTrailSignOutline,
  
} from "react-icons/io5";
import Navbar from '../components/Navbar';
import { useRouter } from 'next/navigation';
import Footer from '../components/Footer';



const getRandomEmoji = () => {
  const emojis = ["🗓️", "🌟", "📅", "🎉", "✨", "📌", "🏷️", "🎈", "🌍", "🏖️", "🏞️", "🏰"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};
export default function explore_place() {
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
    <div>
      <Navbar />
      <section className="bg-gray-100 py-20 w-full">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl p-10 font-bold ">Explore Places</h2>

          </div>
          <div className="">
            <ul className="featured-car-list">
              {places.map((place) => (
                <li key={place.id}>
                  <div className="featured-car-card">
                    <figure className="card-banner">
                      <img
                        src={place.image}
                        alt={`${place.name}`}
                        loading="lazy"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-title-wrapper">
                        <h3 className="h3 card-title">
                          <a href="#">{place.name}</a>
                        </h3>
                        <data className="year" value={place.year}>
                          {place.year}
                        </data>
                      </div>
                      <ul className="card-list">
                        
                        <li className="card-list-item">
                          <IoSparklesOutline style={{ fontSize: "1.2rem", color: "gray" }} />
                          <span className="card-item-text ">{place.fuel}</span>
                        </li>
                        <li className="card-list-item">
                          <IoHappyOutline style={{ fontSize: "1.2rem", color: "gray" }} />
                          <span className="card-item-text ">{place.mileage}</span>
                        </li>
                        <li className="card-list-item">
                          <IoTrailSignOutline style={{ fontSize: "1.2rem", color: "gray" }} />
                          <span className="card-item-text">{place.transmission}</span>
                        </li>
                      </ul>
                      <div className="card-price-wrapper">
                        <p className="card-price">
                          <small>{place.priceDescription}</small>
                        </p>
                        <button className="btn" onClick={() => router.push("/")}>Enquiry</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div >
      </section>
      <Footer/>

    </div>
  )
}
