import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const VISIBLE_CARDS = 3;
const AUTO_SLIDE_TIME = 3000;

const ThemedCarousel = ({ images, onReadMore }) => {
  const sliderImages = images.slice(0, 6);
  const totalSlides = Math.ceil(sliderImages.length / VISIBLE_CARDS);

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, AUTO_SLIDE_TIME);
  };

  const stopAuto = () =>
    intervalRef.current && clearInterval(intervalRef.current);

  const next = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
    startAuto();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    startAuto();
  };

  return (
    <section
      className="w-full bg-[#1A1A1A]
                 pt-28 sm:pt-20 md:pt-24
                 pb-16 sm:pb-20
                 px-4 sm:px-6
                 text-white"
    >
      {/* Heading */}
      <h2 className="text-center text-[#A5161B] text-3xl sm:text-4xl tracking-[0.2em] mb-12">
        GALLERY
      </h2>

      <div className="max-w-6xl mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => (
              <div
                key={slideIdx}
                className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
              >
                {sliderImages
                  .slice(
                    slideIdx * VISIBLE_CARDS,
                    slideIdx * VISIBLE_CARDS + VISIBLE_CARDS
                  )
                  .map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-60 object-contain rounded-xl"
                      loading="lazy"
                      alt=""
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2
                     bg-[#000000]/70 text-[#A5161B]
                     p-3 rounded-full"
        >
          <HiChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2
                     bg-[#000000]/70 text-[#A5161B]
                     p-3 rounded-full"
        >
          <HiChevronRight size={28} />
        </button>
      </div>

      {/* Read More */}
      <div className="flex justify-center mt-10">
        <button
          onClick={onReadMore}
          className="border border-[#A5161B] text-[#A5161B]
                     px-8 py-2 tracking-widest cursor-pointer
                     hover:bg-[#A5161B] hover:text-white transition"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default ThemedCarousel;
