"use client";

import { useRouter } from "next/navigation";
import { FaCarSide, FaMapMarkerAlt, FaEnvelopeOpenText } from "react-icons/fa";

export default function StepsSection() {
  const router = useRouter();
  const steps = [
    {
      id: 1,
      title: "PLAN YOUR TRIP",
      desc: "Plan your destination with date and time for a comfortable journey.",
      icon: <FaCarSide size={35} className="text-green-700" />,
      bg: "bg-green-100",
    },
    {
      id: 2,
      title: "SET YOUR JOURNEY",
      desc: "Now schedule your trip by entering pickup and drop-off details with date and time.",
      icon: <FaMapMarkerAlt size={35} className="text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      id: 3,
      title: "SUBMIT ENQUIRY",
      desc: "Now after entering details submit your enquiry our team will call you regarding your trip.",
      icon: <FaEnvelopeOpenText size={35} className="text-blue-600" />,
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c1a2a] leading-snug mb-16">
          Travel with us in 3 <br /> Simple Steps
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                bg-white p-10 rounded-3xl 
                shadow-[0px_8px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)]
                transition-all duration-300
              "
            >
              {/* Icon Circle */}
              <div className={`mx-auto ${step.bg} w-24 h-24 rounded-full flex items-center justify-center mb-6`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0c1a2a] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14">
          <button
            className="
              px-10 py-4 bg-black text-white font-semibold text-lg 
              rounded-full shadow-lg hover:shadow-xl 
              transition-all duration-300 hover:-translate-y-1
            "
            onClick={() => router.push("/")}
          >
            BOOK YOUR CAB NOW
          </button>
        </div>

      </div>
    </section>
  );
}
