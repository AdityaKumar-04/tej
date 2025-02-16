"use client";

import { FaCar, FaMapMarkerAlt,  FaEnvelope } from "react-icons/fa";

export default function GetStarted() {
  const steps = [
    {
      id: 1,
      title: "PLAN YOUR TRIP ",
      description:
        "Plan your destination with date and time for a comfortable journey.",
      icon: <FaCar size="2rem" style={{ color: "#28a745" }} />,
    },
    {
      id: 2,
      title: "SET YOUR JOURNEY ",
      description:
        "Now schedule your trip by entering pickup and drop-off details with daye and time.",
      icon: <FaMapMarkerAlt size="2rem" style={{ color: "#ffc107" }} />,
    },
    {
      id: 3,
      title: "SUBMIT ENQUIRY ",
      description:
        "Now after entering details submit your enquiry our team will call you regarding your trip.",
      icon: <FaEnvelope size="2rem" style={{ color: "#007bff" }} />,
    },
    
  ];

  return (
    <section className="section get-start">
      <div className="container">
        <h2 className="h2 section-title">Travel with us in 3 Simple Steps</h2>
        <ul className="get-start-list flex justify-center items-center gap-x-7 flex-wrap " style={{ listStyle: "none", padding: 0 }}>
          {steps.map((step) => (
            <li key={step.id} style={{ marginBottom: "2rem" }}>
              
              <div className="max-w-full p-6 lg:w-[22rem] lg:h-[15rem] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all">
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
