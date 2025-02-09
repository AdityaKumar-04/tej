"use client";

import { FaUser, FaCar, FaMapMarkerAlt, FaSmile } from "react-icons/fa";

export default function GetStarted() {
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description:
        "Sign up with your details and preferences to get started with our cab booking service.",
      icon: <FaUser size="2rem" style={{ color: "#007bff" }} />,
    },
    {
      id: 2,
      title: "Choose Your Ride",
      description:
        "Browse and select the perfect cab that suits your travel needs and budget.",
      icon: <FaCar size="2rem" style={{ color: "#28a745" }} />,
    },
    {
      id: 3,
      title: "Set Your Journey",
      description:
        "Provide your pickup and drop-off locations, schedule your ride, and confirm the trip.",
      icon: <FaMapMarkerAlt size="2rem" style={{ color: "#ffc107" }} />,
    },
    {
      id: 4,
      title: "Enjoy the Ride",
      description:
        "Sit back and relax as our professional drivers take you to your destination safely and on time.",
      icon: <FaSmile size="2rem" style={{ color: "#dc3545" }} />,
    },
  ];

  return (
    <section className="section get-start">
      <div className="container">
        <h2 className="h2 section-title">Travel with us in 4 Simple Steps</h2>
        <ul className="get-start-list" style={{ listStyle: "none", padding: 0 }}>
          {steps.map((step) => (
            <li key={step.id} style={{ marginBottom: "2rem", }}>
              
              <div className="max-w-full p-6 lg:w-[18rem] lg:h-[15rem] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all">
                {/* Icon Placeholder */}
                <div className="w-10 h-10 mb-3 text-gray-500">{step.icon}</div>

                {/* Title with Link */}
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                    {step.title}
                  </h5>
                </a>

                {/* Description */}
                <p className="mb-3 font-normal text-gray-600">{step.description}</p>

                {/* Action Button */}
                
              </div>
            </li>

          ))}
        </ul>
      </div>
    </section>
  );
}
