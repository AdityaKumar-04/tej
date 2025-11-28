"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";
import { FaLocationArrow, FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFodWxzYWhuaTE2OSIsImEiOiJjbHprM3I0bHMwbmIzMmtyMHQ0d3Q2aDF1In0.rNhynN4QO1to7V1A94vT0Q";

const SUPABASE_URL = "https://fgcvmbrvxniokscuukvd.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnY3ZtYnJ2eG5pb2tzY3V1a3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0OTg2MDUsImV4cCI6MjA0MjA3NDYwNX0.5q2krAQ8lrkuiYx84tHoQs4fEqEcNKO54fDcrHEL1AQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

interface Suggestion {
  place_name: string;
}

interface FormState {
  tripStartDate: string;
  tripEndDate: string;
  phoneNumber: string;
}

export default function Hero() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState<Suggestion[]>([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState<Suggestion[]>([]);

  const [form, setForm] = useState<FormState>({
    tripStartDate: "",
    tripEndDate: "",
    phoneNumber: "",
  });

  // Fetch Suggestions
  const fetchSuggestions = async (query: string, setter: React.Dispatch<React.SetStateAction<Suggestion[]>>) => {
    if (!query) return setter([]);

    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json`,
        {
          params: { access_token: MAPBOX_TOKEN, autocomplete: true, limit: 5 },
        }
      );
      setter(res.data.features);
    } catch (error) {
      console.error("Suggestion Error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { tripStartDate, tripEndDate, phoneNumber } = form;

    const { error: dbError } = await supabase
      .from("customer_data")
      .insert([
        {
          pickup_city: pickup,
          destination_city: destination,
          trip_start_date: tripStartDate,
          trip_end_date: tripEndDate,
          phone_number: phoneNumber,
          status: "enquiry",
        },
      ])
      .select("id");

    if (dbError) return alert("Database error!");

    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pickup, destination, tripStartDate, tripEndDate, phoneNumber }),
    });


    setForm({ tripStartDate: "", tripEndDate: "", phoneNumber: "" });
    setPickup("");
    setDestination("");
    toast.success("Enquiry Submitted!");
  };

  // Image Slider Logic

  const images = [
    "/assets/cars/car1.png",
    "/assets/cars/car2replace.jpg",
    "/assets/cars/car3replace.jpg",
    "/assets/cars/car4replace.jpg",
    "/assets/cars/car5.png",

  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() =>
      setIndex((prev) => (prev + 1) % images.length)
      , 2000);  // 2 seconds

    return () => clearInterval(i);
  }, []);





  return (
    <section className="w-full pt-24 pb-20 bg-[#ffffff]" id="home">

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* =====================================
        LEFT SIDE (TEXT + FORM)
    ===================================== */}
        <div className="flex flex-col gap-4">

          {/* TEXT SMALLER & CLEANER */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug uppercase">
            Book Your Cab & Taxi
          </h1> 
          <p className="text-base md:text-lg text-gray-700">
            Fast,Trusted and reliable taxis for Delhi NCR and all-India routes.
          </p>


          <div className="flex items-center gap-2 mt-2 w-fit px-4 py-2 border border-green-500/40 bg-green-100/30 rounded-full shadow-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-700 text-sm font-semibold tracking-wide">
              Your Trip Details
            </span>
          </div>

          {/* ==========================
          FORM
      ========================== */}
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] 
  border border-gray-200 rounded-3xl p-8 grid grid-cols-1 gap-6"
          >

            {/* ==========================
      PICKUP + DESTINATION (Same Row)
  ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* PICKUP */}
              <div className="relative">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
                  <FaLocationArrow className="text-red-600" /> Pickup Location
                </label>
                <input
                  className="border border-gray-300 p-3 rounded-xl w-full focus:border-red-600 focus:ring-2 focus:ring-red-300 transition"
                  value={pickup}
                  onChange={(e) => {
                    setPickup(e.target.value);
                    fetchSuggestions(e.target.value, setPickupSuggestions);
                  }}
                  placeholder="Enter pickup city"
                />

                {pickupSuggestions.length > 0 && (
                  <ul className="absolute left-0 top-full bg-white mt-2 rounded-xl shadow-lg border w-full z-20 max-h-48 overflow-y-auto">
                    {pickupSuggestions.map((s, i) => (
                      <li
                        key={i}
                        className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition"
                        onClick={() => {
                          setPickup(s.place_name);
                          setPickupSuggestions([]);
                        }}
                      >
                        {s.place_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* DESTINATION */}
              <div className="relative">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1">
                  <FaMapPin className="text-green-600" /> Destination
                </label>
                <input
                  className="border border-gray-300 p-3 rounded-xl w-full focus:border-green-600 focus:ring-2 focus:ring-green-300 transition"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    fetchSuggestions(e.target.value, setDestinationSuggestions);
                  }}
                  placeholder="Enter destination city"
                />

                {destinationSuggestions.length > 0 && (
                  <ul className="absolute left-0 top-full bg-white mt-2 rounded-xl shadow-lg border w-full z-20 max-h-48 overflow-y-auto">
                    {destinationSuggestions.map((s, i) => (
                      <li
                        key={i}
                        className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setDestination(s.place_name);
                          setDestinationSuggestions([]);
                        }}
                      >
                        {s.place_name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>

            {/* ==========================
      DATES (Same Row)
  ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-semibold text-gray-700">Trip Start Date</label>
                <input
                  type="date"
                  name="tripStartDate"
                  className="border border-gray-300 p-3 rounded-xl w-full focus:border-black focus:ring-2 focus:ring-gray-400"
                  value={form.tripStartDate}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Trip End Date</label>
                <input
                  type="date"
                  name="tripEndDate"
                  className="border border-gray-300 p-3 rounded-xl w-full focus:border-black focus:ring-2 focus:ring-gray-400"
                  value={form.tripEndDate}
                  onChange={handleInputChange}
                />
              </div>

            </div>

            {/* PHONE NUMBER (Full Width Same) */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                className="border border-gray-300 p-3 rounded-xl w-full focus:border-black focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your phone number"
                value={form.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button className="bg-black text-white py-3 rounded-xl font-semibold text-lg transition shadow-lg">
              Submit
            </button>
          </form>

        </div>

        {/* =====================================
        {/* RIGHT SIDE OVERLAY STACK SLIDER */}
        <div className="relative w-full h-[480px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl">

          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="clients"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}         // New image enters from right
              animate={{
                opacity: index === i ? 1 : 0,         // Only active image visible
                x: index === i ? 0 : -20,             // Slight parallax feel
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ zIndex: index === i ? 2 : 1 }} // Active image stays above
            />
          ))}

        </div>
      </div>
      <Toaster position="top-center" />
    </section>

  );

}
