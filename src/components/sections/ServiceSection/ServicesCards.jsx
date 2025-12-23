import React from "react";

const services = [
  {
    title: "Line Production",
    desc: "Complete production management including crew, logistics, and scheduling.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Location Scouting",
    desc: "Finding and managing perfect indoor & outdoor shoot locations.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path
          d="M32 6C22 6 14 14 14 24c0 14 18 34 18 34s18-20 18-34C50 14 42 6 32 6z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Camera & Equipment",
    desc: "Professional cameras, lights, grips, and studio equipment.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="10" y="22" width="44" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Casting & Talent",
    desc: "Casting services for films, TV serials, ads & web series.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M16 54c0-8 8-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Production Crew",
    desc: "Experienced directors, cinematographers, assistants & technicians.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 54c0-8 6-14 14-14M40 40c8 0 14 6 14 14"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Post Production",
    desc: "Editing, color grading, sound design & final delivery.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="10" y="12" width="44" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M26 22l12 10-12 10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const ServicesCards = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-16 sm:py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h3 className="text-center text-[#A5161B] text-3xl tracking-[0.15em] mb-12">
          WHAT WE OFFER
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#000000] border border-[#E6E6E6] p-8 rounded-xl
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[#A5161B] mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h4
                className="text-lg font-semibold mb-2 text-white
                           transition-colors duration-300
                           group-hover:text-[#A5161B]"
              >
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-[#E6E6E6] text-sm leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;
