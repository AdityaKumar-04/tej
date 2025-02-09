"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="#" className="logo">
              <Image src="/assets/images/logo2.png" alt="Tej Travels logo" width={200} height={100} />
            </Link>
            <p className="footer-text">
              Tezz Travels offers reliable and affordable cab and taxi booking services from Delhi 
              NCR across India. Whether you&lsquo;re traveling locally or across cities, our well-maintained vehicles and experienced drivers make your journey comfortable every time.
              <br />
              <br/>
              Address : WZ-58, Titarpur, Tagore Garden New Delhi-110027
              <br />
              Email : Contact@tezztravels.com
              <br />
              Phone : +918368154854, +919811732828
            </p>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <Link href="/about-us" className="footer-link">About Us</Link>
            </li>
            <li>
              <Link href="/" className="footer-link">Customer Reviews</Link>
            </li>
            <li>
              <Link href="/contact-us" className="footer-link">Contact Us</Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refund-policy" className="footer-link">Refund Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Popular Routes</p>
            </li>
            <li>
              <Link href="#" className="footer-link">Delhi Tourism</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Jaipur (The Pink City, Rajasthan)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Agra (Taj Mahal, Uttar Pradesh)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Vrindavan (Mathura, Uttar Pradesh)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link h-14">Rishikesh and Haridwar (Uttarakhand)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Manali (Himachal Pradesh)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Uttarakhand (Nainital, Lansdowne, Ranikhet, etc.)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Tirth Yatra (Chardham)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Prayagraj, Ayodhya, Varanasi (Uttar Pradesh)</Link>
            </li>
            <li>
              <Link href="#" className="footer-link">Jammu and Kashmir</Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="social-list" style={{ display: "flex", gap: "15px", padding: 0 }}>
            <li>
              <a href="https://www.facebook.com/share/1Cr4Et17bE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.5rem", color: "#3b5998" }}>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tejinfotravels" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.5rem", color: "#E4405F" }}>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.5rem", color: "#1DA1F2" }}>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.5rem", color: "#0077B5" }}>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:support@tejtravels.in" style={{ fontSize: "1.5rem", color: "#EA4335" }}>
                <FaEnvelope />
              </a>
            </li>
          </ul>
          <p className="copyright" style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#555" }}>
            &copy; 2025 <Link href="#" style={{ textDecoration: "none", color: "#007bff" }}>Tezz Travels All Rights Reserved.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
