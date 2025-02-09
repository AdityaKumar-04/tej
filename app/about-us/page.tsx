'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="text-yellow-500 font-semibold">Welcome to Tezz Travels,</span> your trusted partner for hassle-free cab and taxi bookings.
            We are committed to providing reliable, affordable, and comfortable transportation services.
          </p>
          <div className="w-full h-64 relative mb-10">
            <Image src="https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=9wRsQjDAkzmYH8oIdioriw4UUo_0GFTS2gtidzM5-mE=" alt="Travel" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make every journey a memorable experience by offering top-notch travel solutions.
              Whether you are traveling for business, leisure, or adventure, we ensure your ride is safe, timely, and enjoyable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fleet of well-maintained vehicles to suit every requirement.</li>
              <li>Professional and courteous drivers with local knowledge.</li>
              <li>Transparent pricing with no hidden charges.</li>
              <li>24/7 customer support for assistance anytime.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Local Rides', 'Outstation Trips', 'Airport Transfers'].map((service, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-700 text-sm">Experience seamless and comfortable travel with our premium taxi services.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            <strong>Email:</strong> contact@tezztravels.com<br />
            <strong>Phone:</strong> +91 83681 54854<br />
            <strong>Office:</strong> WZ-58, Titarpur, Tagore Garden, New Delhi - 110027
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
