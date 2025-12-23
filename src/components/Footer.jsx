import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#E6E6E6] pt-14 pb-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-[#A5161B] text-lg sm:text-xl font-semibold mb-4">
            QUICK LINKS
          </h3>

          <ul className="space-y-2 text-sm sm:text-base">
            <li><NavLink to="/" className="hover:text-[#A5161B] transition">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-[#A5161B] transition">About Us</NavLink></li>
            <li><NavLink to="/services" className="hover:text-[#A5161B] transition">Services</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-[#A5161B] transition">Gallery</NavLink></li>
            <li><NavLink to="/career" className="hover:text-[#A5161B] transition">Career</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[#A5161B] transition">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-[#A5161B] text-lg sm:text-xl font-semibold mb-4">
            CONTACT US
          </h3>

          <p className="text-sm sm:text-base mb-4 leading-relaxed">
            Plot No.120, Flat No. G-2, Park View Apartment,<br />
            Lala Lajpat Rai Society, Near Hanuman Mandir,<br />
            E-7 Arera Colony, Bhopal,<br />
            Madhya Pradesh — 462016
          </p>

          {/* Email */}
          <p>
            <a
              href="mailto:maavaishnavientertainments@gmail.com"
              className="hover:text-[#A5161B] transition"
            >
              maavaishnavientertainments@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p className="mt-2">
            <a
              href="tel:+919407271262"
              className="hover:text-[#A5161B] transition"
            >
              +91-9407271262
            </a>
          </p>

          {/* WhatsApp */}
          <p className="mt-3">
            <a
              href="https://wa.me/919407271262"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A5161B] flex items-center gap-2 transition"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </p>
        </div>

        {/* MAP SECTION */}
        <div>
          <h3 className="text-[#A5161B] text-lg sm:text-xl font-semibold mb-4">
            FIND OUR STUDIO
          </h3>

          <div className="w-full h-48 sm:h-56 md:h-60">
            <iframe
              title="studio-map"
              src="https://www.google.com/maps?q=E-7%20Arera%20Colony%20Bhopal&output=embed"
              className="w-full h-full rounded-xl border border-[#E6E6E6]"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center border-t border-[#E6E6E6] pt-4 text-xs sm:text-sm">
        © {new Date().getFullYear()} Maa Vaishnavi Entertainments. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
