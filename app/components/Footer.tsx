"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <Image
              src="/assets/images/logo2.png"
              alt="Tezz Travels logo"
              width={200}
              height={100}
              className="mb-4"
            />

            <p className="text-sm leading-6 text-gray-400">
              <span className="font-extrabold">TEZZ TRAVELS</span> offers reliable and affordable cab and taxi booking services
              across India. Enjoy comfortable and safe travel with well-maintained vehicles
              and experienced drivers.
              <br /><br />
              <span className="text-gray-300 font-semibold">Address:</span> 293-C, Jail Road, Nangal Rai, Near Janak Setu, New Delhi-110046
              <br />
              <span className="text-gray-300 font-semibold">Email:</span> contact@tezztravels.com
              <br />
              <span className="text-gray-300 font-semibold">Phone:</span> +91 8368154854
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative w-fit after:block after:w-10 after:h-[2px] after:bg-[#00eaff] after:mt-1">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="hover:text-[#00eaff] transition">About Us</Link></li>
              <li><Link href="/" className="hover:text-[#00eaff] transition">Customer Reviews</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#00eaff] transition">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#00eaff] transition">Refund Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#00eaff] transition">Terms & Conditions</Link></li>

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative w-fit after:block after:w-10 after:h-[2px] after:bg-[#00eaff] after:mt-1">
              Support
            </h3>
            <ul className="space-y-3">
              {/* <li><Link href="/" className="hover:text-[#00eaff] transition">Customer Reviews</Link></li> */}
              <li><Link href="/contact-us" className="hover:text-[#00eaff] transition">Contact Us</Link></li>
              <br/>
              <span className="text-gray-300 font-semibold">Email:</span> contact@tezztravels.com
              <br />
              <span className="text-gray-300 font-semibold">Phone:</span> +91 8368154854
            </ul>
            
          </div>

          {/* POPULAR ROUTES */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative w-fit after:block after:w-10 after:h-[2px] after:bg-[#00eaff] after:mt-1">
              Popular Routes
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-[#00eaff] transition">Delhi Tourism</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Jaipur - Pink City</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Agra - Taj Mahal</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Vrindavan - Mathura</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Rishikesh & Haridwar</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Manali, Himachal</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Nainital, Uttarakhand</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Chardham Yatra</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Ayodhya, Varanasi</Link></li>
              <li><Link href="#" className="hover:text-[#00eaff] transition">Jammu & Kashmir</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center gap-4">

          {/* SOCIAL ICONS */}
          <ul className="flex gap-6">
            <li><Link href="https://www.facebook.com/share/1DXmPkYENG/" className="text-[1.4rem] hover:text-[#00eaff] hover:scale-110 transition-all"><FaFacebook /></Link></li>
            <li><Link href="https://www.instagram.com/tezztravels_?igsh=Mmpyb2U5Zml0cDl1" className="text-[1.4rem] hover:text-[#00eaff] hover:scale-110 transition-all"><FaInstagram /></Link></li>
            <li><Link href="mailto:support@tejtravels.in" className="text-[1.4rem] hover:text-[#00eaff] hover:scale-110 transition-all"><FaEnvelope /></Link></li>
          </ul>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-sm">
            © 2025 <span className="text-[#00eaff]">Tezz Travels</span>. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
