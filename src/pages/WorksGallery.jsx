import React from "react";
import { useParams, useNavigate } from "react-router";
import { services } from "../components/data/Data";

const WorksGallery = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#A5161B] text-3xl tracking-[0.15em]">
            {service.title}
          </h2>

          <button
            onClick={() => navigate(-1)}
            className="border border-[#A5161B]
                       text-[#A5161B]
                       px-6 py-2
                       hover:bg-[#A5161B]
                       hover:text-white transition"
          >
            BACK
          </button>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {service.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              loading="lazy"
              className="w-full h-64 object-contain rounded-xl
                         hover:scale-[1.03] transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorksGallery;
