import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f1113] text-gray-300 pt-14 pb-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-[#d9c08f] text-lg sm:text-xl font-semibold mb-4">
            QUICK LINKS
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li><a href="/" className="hover:text-[#d9c08f] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#d9c08f] transition">About Us</a></li>
            <li><a href="/portfolio" className="hover:text-[#d9c08f] transition">Portfolio</a></li>
            <li><a href="/services" className="hover:text-[#d9c08f] transition">Services</a></li>
            <li><a href="/gallery" className="hover:text-[#d9c08f] transition">Gallery</a></li>
            <li><a href="/team" className="hover:text-[#d9c08f] transition">Team</a></li>
            <li><a href="/contact" className="hover:text-[#d9c08f] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-[#d9c08f] text-lg sm:text-xl font-semibold mb-4">
            CONTACT US
          </h3>

          <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
            Plot No.120, Flat No. G-2, Park View Apartment,<br />
            Lala Lajpat Rai Society, Near Hanuman Mandir,<br />
            E-7 Arera Colony, Bhopal,<br />
            Madhya Pradesh — 462016
          </p>

          {/* Email */}
          <p>
            <a 
              href="mailto:maavaishnavientertainments@gmail.com" 
              className="hover:text-[#d9c08f] text-sm sm:text-base transition"
            >
              maavaishnavientertainments@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p className="mt-2">
            <a 
              href="tel:+919407271262" 
              className="hover:text-[#d9c08f] text-sm sm:text-base transition"
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
              className="hover:text-green-400 flex items-center gap-2 text-sm sm:text-base transition"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
          </p>
        </div>

        {/* MAP SECTION */}
        <div>
          <h3 className="text-[#d9c08f] text-lg sm:text-xl font-semibold mb-4">
            FIND OUR STUDIO
          </h3>

          <div className="w-full h-48 sm:h-56 md:h-60">
            <iframe
              title="studio-map"
              src="https://www.google.com/maps?q=E-7%20Arera%20Colony%20Bhopal&output=embed"
              className="w-full h-full rounded-xl border border-gray-700"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4 text-xs sm:text-sm">
        © {new Date().getFullYear()} Maa Vaishnavi Entertainments. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
