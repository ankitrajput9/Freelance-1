import React from "react";

const FullGallery = ({ images, onClose }) => {
  return (
    <section className="w-full bg-[#0f1113] py-20 px-4 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#d9c08f] text-3xl tracking-[0.2em]">
            FULL GALLERY
          </h2>

          <button
            onClick={onClose}
            className="border border-[#d9c08f] px-6 py-2
                       text-[#d9c08f] hover:bg-[#d9c08f] cursor-pointer hover:text-black transition"
          >
            CLOSE
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              loading="lazy"
              className="w-full h-64 object-contain rounded-xl hover:scale-[1.03] transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FullGallery;
