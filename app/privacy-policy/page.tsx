"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full h-60 mt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-gray-200 text-base mt-2 max-w-2xl text-center">
            Your privacy is our top priority. We ensure complete data protection and transparency.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-14 max-w-5xl">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          
          {/* INTRODUCTION */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-10 text-lg">
            At <strong>Tezz Travels</strong>, we value your trust. This Privacy Policy explains how we
            collect, use, and protect your personal information when you interact with our services.
          </p>

          <div className="space-y-10">

            {/* SECTION 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Information We Collect
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Your personal details such as name, email, and phone number.</li>
                <li>Payment information for secure transactions.</li>
                <li>Device & usage data to improve your browsing experience.</li>
              </ul>
            </div>

            <div className="border-b border-gray-100"></div>

            {/* SECTION 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>To confirm taxi bookings & complete payments safely.</li>
                <li>To enhance our services based on your preferences.</li>
                <li>To send travel updates, offers, and notifications.</li>
              </ul>
            </div>

            <div className="border-b border-gray-100"></div>

            {/* SECTION 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Sharing Your Information
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We do not sell your data. We only share information with trusted service partners
                for booking confirmations or when required by law.
              </p>
            </div>

            <div className="border-b border-gray-100"></div>

            {/* SECTION 4 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Your Rights
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>Request, update, or delete your data anytime.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Request a full copy of the information stored with us.</li>
              </ul>
            </div>

            <div className="border-b border-gray-100"></div>

            {/* SECTION 5 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                5. Cookies & Tracking
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We use cookies to enhance performance and personalize your experience.
                You may disable cookies from your browser settings anytime.
              </p>
            </div>

            <div className="border-b border-gray-100"></div>

            {/* SECTION 6 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                6. Changes to This Policy
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We may update this Privacy Policy occasionally. All updates will be posted on this page.
              </p>
            </div>

            <div className="border-b border-gray-100"></div>

            {/* SECTION 7 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                7. Contact Us
              </h3>
              <p className="text-gray-700 text-lg">
                For questions or support, feel free to contact us:
              </p>

              <p className="mt-3 text-lg">
                <strong>Email:</strong>{" "}
                <Link href="mailto:contact@tezztravels.com" className="text-indigo-600 hover:underline">
                  contact@tezztravels.com
                </Link>
              </p>

              <p className="text-lg">
                <strong>Phone:</strong>{" "}
                <Link href="tel:+918368154854" className="text-indigo-600 hover:underline">
                  +91 83681 54854
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
