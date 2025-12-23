import React from "react";

const ServicesIntro = () => {
  return (
    <section
      className="w-full bg-[#1A1A1A]
                 pt-28 sm:pt-20 md:pt-24
                 pb-16 sm:pb-20
                 px-4 sm:px-6
                 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — DETAILS */}
        <div>
          <h2 className="text-[#A5161B] text-3xl sm:text-4xl font-light tracking-[0.15em] mb-6">
            OUR SERVICES
          </h2>

          <p className="text-[#E6E6E6] leading-7 mb-4 text-sm sm:text-base">
            Maa Vaishnavi Entertainments delivers end-to-end production solutions
            for films, web series, TV serials, commercials, and documentaries.
          </p>

          <p className="text-[#E6E6E6] leading-7 mb-4 text-sm sm:text-base">
            Our experienced team manages every detail — from location scouting,
            permits, and equipment to professional crew and logistics.
          </p>

          <ul className="mt-6 space-y-3 text-[#E6E6E6] text-sm sm:text-base">
            <li>• Line Production & Casting</li>
            <li>• Location Scouting & Permits</li>
            <li>• Camera, Lights & Equipment</li>
            <li>• Production Crew Management</li>
            <li>• Studio & Outdoor Shoot Support</li>
          </ul>
        </div>

        {/* RIGHT — SVG IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/service.svg"
            alt="Studio Services"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default ServicesIntro;
