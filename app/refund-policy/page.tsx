"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-60 mt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            Refund Policy
          </h1>
          <p className="text-gray-200 text-base mt-2 max-w-2xl text-center">
            Your refund is our priority. We ensure a transparent and fair refund process.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-10 md:p-14">

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Introduction
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            At <strong>Tezz Travels</strong>, we aim to provide a smooth and
            dependable travel experience. This refund policy outlines how cancellations,
            changes, and refunds are handled to ensure transparency and trust.
          </p>

          <div className="space-y-14">

            {/* Section 1 */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Cancellation & Refund Eligibility
              </h3>

              <p className="text-gray-700 leading-relaxed">
                You may request a cancellation before your scheduled pickup time. Refunds will be applicable as follows:
              </p>

              <ul className="mt-5 space-y-3 pl-6 text-gray-700 list-disc leading-relaxed">
                <li><strong>24+ hours before pickup:</strong> 100% refund.</li>
                <li><strong>12–24 hours before pickup:</strong> 50% refund.</li>
                <li><strong>Less than 12 hours:</strong> No refund.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Refund Process
              </h3>

              <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>
                  Send your cancellation request and booking details to{" "}
                  <Link
                    href="mailto:contact@tezztravels.com"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    contact@tezztravels.com
                  </Link>.
                </li>
                <li>
                  Once verified, refunds are initiated within{" "}
                  <strong>7–10 business days</strong>.
                </li>
                <li>
                  Refunds are credited to the original method of payment.
                </li>
              </ol>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Exceptions
              </h3>

              <ul className="list-disc space-y-3 pl-6 text-gray-700 leading-relaxed">
                <li>No refunds for missed pickups or customer no-shows.</li>
                <li>Promotional or discounted bookings are non-refundable.</li>
                <li>Cancellations outside the defined policy terms are not eligible for refund.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Contact Us
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                For questions or refund-related assistance, feel free to reach out:
              </p>

              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:contact@tezztravels.com"
                  className="text-indigo-600 hover:underline"
                >
                  contact@tezztravels.com
                </Link>
              </p>

              <p className="text-gray-700 mt-1">
                <strong>Phone:</strong>{" "}
                <Link
                  href="tel:+918368154854"
                  className="text-indigo-600 hover:underline"
                >
                  +91 83681 54854
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
