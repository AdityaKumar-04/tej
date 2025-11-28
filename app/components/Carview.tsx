"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CarsShowcase() {
  const Router = useRouter();

  const cars = [
    {
      name: "Sedan",
      img: "/assets/cars/car1.png",
      description: "Perfect for city rides and daily commutes",
      features: [
        "4 Passengers",
        "Spacious legroom ",
        "Clean and well-maintained",
        "Perfect for airport transfers, meetings, and everyday rides",
      ],
    },
    {
      name: "Innova Crysta",
      img: "/assets/cars/car2replace.jpg",
      description: "Comfortable & best for long highway trips",
      features: [
        "7 Passengers",
        "Clean and well-maintained",
        "Large luggage space",
        "Large boot space",
        "Perfect choice for premium airport transfers, corporate travel, City Tours and long trips.",
      ],
    },
    {
      name: "Ertiga",
      img: "/assets/cars/car3replace.jpg",
      description: "Spacious & family-friendly multipurpose vehicle",
      features: [
        "6 Passengers",
        "Clean and well-maintained",
        "Large luggage space",
        "Perfect for Airport pickups, Outstation travel, Long trips and City tours.",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of comfortable and well-maintained vehicles
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h3>

                <p className="text-gray-600 mb-4">{car.description}</p>

                {/* FIXED ICON ALIGNMENT */}
                <div className="space-y-3 mb-6">
                  {car.features.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-700 leading-tight"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />  
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => Router.push("/")}
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-8 sm:p-12 bg-black">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 to help you select the perfect vehicle
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-2xl transition-colors duration-300"
                onClick={() => Router.push("tel:+918368154854")}
              >
                Call Us Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

