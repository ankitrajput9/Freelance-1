import React from "react";

const services = [
 {
    title: "Line Production",
    desc: `
We act as your on-ground production partner, managing all operational and
logistical aspects of the shoot from start to finish.

Our Line Production Services Include:
• Complete shoot planning & execution
• Production scheduling & daily call sheets
• Budget planning, control & reporting
• Local crew & vendor coordination
• On-ground production supervision
• Government permissions & compliance
• Risk management & real-time problem solving

Ideal For:
Feature films, OTT web series, TV shows, documentaries, and ad films.
    `,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect
          x="8"
          y="16"
          width="48"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Location Scouting",
    desc: `We specialize in finding the right locations and securing fast, hassle-free permissions across Madhya Pradesh and Pan-India.

Services Covered:

• Location scouting (urban, rural, heritage & industrial)
• Location feasibility & logistics planning
• State & local government permissions      
Police, municipal & authority clearances
• Liaison with tourism & administrative departments
• Strong local networks
• Expert government liaison team`,
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
    title: "Crew & Equipment Management",
    desc: `We provide experienced technical crews and industry-standard equipment to match your creative and technical requirements.

Services Include:

•Direction & assistant team
•Camera, light & sound crews
•Art, costume & makeup teams
•Equipment sourcing & rentals
•Technical coordination on set
•Verified vendors
•Skilled & trained professionals`,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect x="10" y="22" width="44" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Casting & Talent Management",
    desc: `With years of experience in casting for major films, web series, and TV shows, we provide reliable talent solutions.

Casting Services Include:

•Lead & supporting cast
•Character artists
•Background artists & junior artists
•Child artists
•Local talent sourcing
•Auditions & coordination

Why Us?
We understand performance, suitability, and production needs-ensuring the right face for the right role.`,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M16 54c0-8 8-14 16-14s16 6 16 14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Transportation & Vanity Vans",
    desc: `
We manage complete transport logistics to keep your production moving on time.

Services Include:

•Artist & crew transportation
•Vanity vans & makeup vans
•Equipment vehicles
•Location-to-location logistics planning
•On-time coordination & tracking`,
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
    title: "Light & Sound Services",
    desc: `We offer professional lighting and sound solutions for all production scales.

Coverage Includes:

• Film & digital lighting setups
• Sound recording equipment
• Power supply & backup
• Technical setup & supervision`,
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
    <section className="w-full bg-[#f7f7f7] py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h3 className="text-center text-[#A5161B] text-3xl sm:text-4xl tracking-[0.15em] mb-12">
          WHAT WE OFFER
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-[#ddd] p-8 rounded-xl
                         shadow-sm hover:shadow-xl
                         hover:-translate-y-2
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-[#A5161B] mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h4
                className="text-lg font-semibold mb-2 text-[#111]
                           transition-colors duration-300
                           group-hover:text-[#A5161B]"
              >
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-[#555] text-sm leading-7  whitespace-pre-line">
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
