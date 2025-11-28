"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppFloat() {

  return (
    <div className="fixed bottom-5 right-5 z-50 group">

      {/* Chat Now Bubble */}
      <div className="transition-all duration-300
          animate-fadeIn

          opacity-100 md:opacity-0 
          md:group-hover:opacity-100 bg-black">
        <div
          className="
          absolute right-3 bottom-5 w-24
          bg-green-600 text-white text-sm
          px-3 py-1 rounded-lg shadow-lg
          
        "
        >
          Chat Now
        </div>

        {/* Pointer Arrow (perfect aligned) */}
        <div
          className="
          absolute bottom-4 right-[18px]
          w-3 h-3 bg-green-600 
          rotate-45
          shadow-md
          z-[-1]
        "
        ></div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/918368154854?text=Hello%20I%20want%20to%20book%20a%20ride"
        target="_blank"
        className="
          group relative w-14 h-14
          flex items-center justify-center
          rounded-full bg-green-500 text-white
          shadow-2xl cursor-pointer
          animate-bounce-slow
          transition-all duration-300
          hover:scale-110
        "
      >
        {/* Neon Glow Ring */}
        <span
          className="
            absolute inset-0 rounded-full
            border-2 border-green-400
            blur-md opacity-60
            group-hover:blur-lg group-hover:opacity-100
            transition-all duration-500
          "
        />

        {/* Ripple Animation */}
        <span
          className="
            absolute w-full h-full rounded-full
            border border-green-300
            animate-ripple
          "
        />

        <Image src="/whatsapp.png" alt="WhatsApp" width={32} height={32} />
      </Link>

      {/* Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite ease-in-out;
        }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 1.8s infinite ease-out;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
