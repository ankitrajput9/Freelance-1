import React, { useEffect, useState } from "react";

const services = [
  "Casting Agency",
  "Location Scouting & Recce",
  "Filming Permits Madhya Pradesh",
  "Vendor Budgeting & Scheduling",
  "Purchase and Procurement",
  "Documentary Productions",
  "Corporate / Industrial Filmmakers",
  "Celebrity Management & Brand Endorsement"
];

const SlidingServices = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-[#1A1A1A] text-center text-white overflow-hidden">

      {/* Heading */}
      <h2 className="text-4xl tracking-[0.15em] font-light mb-10 text-[#A5161B]">
        WHAT WE OFFER
      </h2>

      {/* Sliding Text */}
      <div className="relative h-20 w-full flex justify-center items-center">
        <div
          key={index}
          className="text-2xl font-light transition-all duration-700
                     ease-out opacity-0 animate-fadeSlide text-white"
        >
          {services[index]}
        </div>
      </div>

    </section>
  );
};

export default SlidingServices;
