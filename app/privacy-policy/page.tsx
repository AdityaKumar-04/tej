"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-52 top-8 grid items-center ">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <h1 className="text-white text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At <strong>Tezz Travels</strong>, we respect your privacy and are committed to protecting your personal information.
            This Privacy Policy explains what data we collect and how we use it.
          </p>

          <div className="space-y-8">
            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personal details (Name, Email, Phone Number) for booking and support.</li>
                <li>Payment information for transaction processing.</li>
                <li>Device & browsing data to enhance user experience.</li>
              </ul>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To process bookings & payments securely.</li>
                <li>To provide better travel recommendations.</li>
                <li>To send updates, offers, and service-related communications.</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Sharing Your Information</h2>
              <p className="text-gray-700">
                We do not sell your personal data. We only share information with trusted partners for booking confirmations or 
                as required by law.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Your Rights</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt out of marketing emails anytime.</li>
                <li>Request a copy of the data we have about you.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Cookies & Tracking</h2>
              <p className="text-gray-700">
                We use cookies to improve functionality and enhance your experience. You can disable cookies in your browser
                settings if you prefer.
              </p>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy periodically. Any changes will be posted on this page.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
              <p className="text-gray-700">
                Have questions? Reach out to us:
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
