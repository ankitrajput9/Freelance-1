import React from "react";

const ServiceDetail = ({ title, points }) => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <h3 className="text-2xl sm:text-3xl text-[#A5161B] tracking-wide mb-6">
          {title}
        </h3>

        <ul className="space-y-3 text-[#555] text-sm sm:text-base leading-7">
          {points.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[#A5161B] font-semibold">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default ServiceDetail;
