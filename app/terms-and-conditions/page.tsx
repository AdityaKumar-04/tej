"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-64">
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Terms & Conditions</h1>
        </div>
      </div>

      {/* Terms & Conditions Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to <strong>Tezz Travels</strong>. By accessing or using our services, you agree to comply with the following
            terms and conditions. Please read them carefully.
          </p>

          <div className="space-y-8">
            {/* Booking & Payment */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Booking and Payment</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All bookings are subject to availability and confirmation.</li>
                <li>Payment must be completed at the time of booking.</li>
                <li>Customers are responsible for additional charges during the trip.</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Cancellation Policy</h2>
              <p className="text-gray-700">
                Cancellation requests must comply with our{" "}
                <Link href="/refund-policy" className="text-indigo-600 hover:underline">
                  Refund Policy
                </Link>
              </p>
            </div>

            {/* Customer Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Customer Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ensure accurate details are provided during booking.</li>
                <li>Arrive on time at the designated pick-up location.</li>
                <li>Any misconduct during the trip will lead to service termination without refund.</li>
              </ul>
            </div>

            {/* Service Limitations */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Service Limitations</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tezz Travels reserves the right to refuse service.</li>
                <li>Unforeseen circumstances (weather, traffic) may affect services.</li>
              </ul>
            </div>

            {/* Liability Disclaimer */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Liability Disclaimer</h2>
              <p className="text-gray-700">
                Tezz Travels is not responsible for any loss, damage, or inconvenience caused during the service.
              </p>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Privacy Policy</h2>
              <p className="text-gray-700 flex gap-1">
                Please refer to our

                <Link href="/privacy-policy" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <p>for details on how we protect your data.</p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Changes to Terms</h2>
              <p className="text-gray-700">
                Tezz Travels reserves the right to modify these terms. Changes take effect immediately upon posting.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
              <p className="text-gray-700">
                For any queries, contact us:
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
