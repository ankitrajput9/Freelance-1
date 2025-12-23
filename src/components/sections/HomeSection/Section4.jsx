import React from 'react';
import { services } from "../../data/Data";
import { useNavigate } from 'react-router';

const Section4 = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 bg-[#1A1A1A] text-white">

      {/* Heading */}
      <h2 className="text-center text-[#A5161B] text-3xl tracking-[0.15em] mb-4">
        TYPE OF SERVICES
      </h2>

      {/* Sub text */}
      <p className="text-center text-[#E6E6E6] mb-12">
        Click any service to view full gallery
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/works/${service.id}`)}
            className="cursor-pointer bg-[#000000] rounded-2xl overflow-hidden
                       shadow-lg hover:scale-[1.03] transition"
          >
            {/* Preview image */}
            <img
              src={service.images[0]}
              alt={service.title}
              className="h-56 w-full object-cover"
            />

            {/* Title */}
            <h3 className="text-center py-4 text-lg tracking-wide text-white">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Section4;
