import React from "react";

const FullGallery = ({ images, onClose }) => {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#A5161B] text-3xl tracking-[0.2em]">
            FULL GALLERY
          </h2>

          <button
            onClick={onClose}
            className="border border-[#A5161B] px-6 py-2
                       text-[#A5161B] cursor-pointer
                       hover:bg-[#A5161B] hover:text-white transition"
          >
            CLOSE
          </button>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
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

export default FullGallery;
