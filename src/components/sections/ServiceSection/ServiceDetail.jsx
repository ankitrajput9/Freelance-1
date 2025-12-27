import React from "react";

const ServiceDetail = ({ title, points }) => {
  return (
    <section className="w-full bg-[#0f1113] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">

        <h3 className="text-2xl sm:text-3xl text-[#A5161B] tracking-wide mb-6">
          {title}
        </h3>

        <ul className="space-y-3 text-[#E6E6E6] text-sm sm:text-base leading-7">
          {points.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default ServiceDetail;
