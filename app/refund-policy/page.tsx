"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-64">
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Refund Policy</h1>
        </div>
      </div>

      {/* Refund Policy Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At <strong>Tezz Travels</strong>, we value customer satisfaction. This refund policy outlines the conditions under which
            cancellations and refunds can be processed.
          </p>

          <div className="space-y-8">
            {/* Cancellation & Refund Eligibility */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Cancellation and Refund Eligibility</h2>
              <p className="text-gray-700">
                Refunds are applicable under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                <li><strong>24+ hours before pickup:</strong> Full refund.</li>
                <li><strong>12-24 hours before pickup:</strong> 50% refund.</li>
                <li><strong>Less than 12 hours:</strong> No refund.</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Refund Process</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Contact us at <a href="mailto:contact@tezztravels.com" className="text-indigo-600 hover:underline">contact@tezztravels.com</a> with your booking details.</li>
                <li>Once approved, refunds will be processed within <strong>7-10 business days</strong>.</li>
                <li>Refunds will be credited to the original payment method.</li>
              </ol>
            </div>

            {/* Exceptions */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Exceptions</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>No refund for missed pick-ups due to customer delays or no-shows.</li>
                <li>Non-refundable bookings or promotional offers.</li>
                <li>Changes that do not align with the cancellation policy.</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions regarding our refund policy, feel free to reach out:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:contact@tezztravels.com" className="text-indigo-600">contact@tezztravels.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+918368154854" className="text-indigo-600">+91 83681 54854</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
