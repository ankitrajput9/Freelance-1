import React from "react";
import { useNavigate } from "react-router";
import { services } from "../../data/Data";

const ProjectsSection = ({ title }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-[#A5161B] text-3xl tracking-[0.15em] mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => navigate(`/works/${service.id}`)}
              className="group cursor-pointer bg-[#000000]
                         border border-[#E6E6E6]
                         rounded-xl overflow-hidden shadow-lg
                         hover:scale-[1.03] transition"
            >
              {/* Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover
                             group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-[#000000]/40"></div>

                <h3 className="absolute bottom-4 left-4 right-4
                               text-white text-lg font-semibold tracking-wide">
                  {service.title}
                </h3>

                <span
                  className="absolute top-4 right-4 bg-[#A5161B]
                             text-white text-xs px-3 py-1 rounded-full"
                >
                  {service.images.length} Photos
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
