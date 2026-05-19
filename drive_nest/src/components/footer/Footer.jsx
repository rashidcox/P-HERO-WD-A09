import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCar,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07122B] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FaCar />
              </div>

              <h1 className="text-2xl font-bold">
                Drive<span className="text-blue-500">Nest</span>
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed">
              DriveNest is your trusted partner for premium car
              rentals. We help you enjoy comfortable and memorable
              journeys anytime, anywhere.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/cars"
                  className="hover:text-blue-500 transition"
                >
                  Explore Cars
                </a>
              </li>

              <li>
                <a
                  href="/add-car"
                  className="hover:text-blue-500 transition"
                >
                  Add Car
                </a>
              </li>

              <li>
                <a
                  href="/bookings"
                  className="hover:text-blue-500 transition"
                >
                  My Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Company
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Contact Us
            </h2>

            <div className="space-y-4 text-gray-300">
              
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-blue-500" />
                <p>+880 1234 567 890</p>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-blue-500" />
                <p>support@drivenest.com</p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <p>Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 DriveNest. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-blue-500 transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;