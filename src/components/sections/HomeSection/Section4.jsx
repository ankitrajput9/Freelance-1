import React from 'react';
  import {services} from "../../data/Data"
import {useNavigate} from 'react-router';
const Section4 = () => {
    const navigate = useNavigate();
    
  return (
    <div>
         <section className="w-full py-20 bg-[#0f1113] text-white">
      <h2 className="text-center text-[#d9c08f] text-3xl tracking-[0.15em] mb-4">
        TYPE OF SERVICES
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Click any service to view full gallery
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/works/${service.id}`)}
            className="cursor-pointer bg-[#1a1b1d] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition"
          >
            {/* Preview image */}
            <img
              src={service.images[0]}
              alt={service.title}
              className="h-56 w-full object-fit"
            />

            {/* Small thumbnails */}
           

            <h3 className="text-center py-4 text-lg tracking-wide text-[#d9c08f]">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Section4;
