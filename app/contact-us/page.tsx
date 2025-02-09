'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path for Navbar
import Footer from '../components/Footer'; // Adjust the path for Footer

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    // const data = await response.json();
  
    if (response.ok) {
      alert("📩 Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } else {
      alert("❌ Failed to send message. Please try again.");
    }
    
  };
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 mt-20 min-h-screen grid items-center py-3 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 ">Contact Us</h1>
            <p className="text-gray-700 mb-6">
              We are here to assist you with any queries or concerns. Feel free to reach out to us through the following methods:
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong> <a href="mailto:contact@tezztravels.com" className="text-indigo-600 hover:underline">contact@tezztravels.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+918368154854" className="text-indigo-600 hover:underline">+91 83681 54854</a>
              </li>
              <li>
                <strong>Address:</strong> WZ-58, Titarpur, Tagore Garden New Delhi-110027
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operating Hours</h2>
            <p className="text-gray-700">
              Monday to Sunday: 9:00 AM - 10:00 PM
            </p>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg drop-shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
