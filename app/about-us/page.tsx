'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="container mx-auto px-6 py-20 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            About <span className="text-[#ccd30b]">TEZZ TRAVELS</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Your trusted partner for <span className="font-semibold">reliable, safe, and premium cab services</span>.
            We believe every journey should be smooth, comfortable, and memorable.
          </p>

          <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=9wRsQjDAkzmYH8oIdioriw4UUo_0GFTS2gtidzM5-mE="
              alt="Travel Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* MISSION & WHY CHOOSE US */}
        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-14">

          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We aim to provide <span className="font-semibold">safe, comfortable, and affordable</span> travel solutions
              across India. From local rides to long-distance journeys, our goal is to make your experience seamless,
              punctual, and enjoyable.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>✔ A fleet of clean & well-maintained vehicles.</li>
              <li>✔ Experienced and professional drivers.</li>
              <li>✔ Transparent pricing – No hidden charges.</li>
              <li>✔ 24×7 customer support.</li>
            </ul>
          </div>
        </div>

        {/* SERVICES */}
        <div className="max-w-6xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>

          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We offer a variety of personalized travel services designed to make your trips easy and stress-free.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {['Local Rides', 'Outstation Trips', 'Airport Transfers'].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Reliable, comfortable, and premium travel services with verified drivers.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Email:</strong> contact@tezztravels.com <br />
            <strong>Phone:</strong> +91 83681 54854 <br />
            <strong>Office:</strong> 293-C, Jail Road, Nangal Rai, Near Janak Setu, New Delhi-110046
          </p>

          <div className="mt-8">
            <Link
              href="tel:+918368154854"
              className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-md"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
