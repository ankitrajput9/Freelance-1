import React from "react";
import { servicesData } from "../../data/Data";

const Section4 = () => {
  return (
    <section className="w-full py-20 bg-[#1A1A1A] text-white">

      {/* Heading */}
      <h2 className="text-center text-[#A5161B] text-3xl sm:text-4xl tracking-[0.15em] mb-4">
        CORE SERVICES
      </h2>

      {/* Subheading */}
      <p className="text-center text-gray-400 mb-14 tracking-wide max-w-3xl mx-auto">
        Professional line production, casting & production management services
        tailored for films, web series, ads, documentaries & corporate projects.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">

        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group bg-[#0f1113] border border-[#2a2a2a] rounded-2xl p-8
                       hover:border-[#A5161B] hover:-translate-y-2
                       transition-all duration-300 shadow-lg"
          >
            {/* Icon Circle */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full 
                            bg-[#A5161B]/10 text-[#A5161B] mb-6 text-2xl mx-auto">
              {/* Placeholder icon using text (replace later if needed) */}
              ★
            </div>

            {/* Title */}
            <h3 className="text-center text-lg font-semibold tracking-wide mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-center text-sm text-gray-400 leading-6">
              {service.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Section4;
