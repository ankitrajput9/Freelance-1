import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const images = [
  "/slider/img5.jpg",
  "/slider/img6.jpg",
  "/slider/img7.jpg",
  "/slider/img44.jpg",
];

const SLIDE_DURATION = 4000; // 2 seconds

const Gallerslider = () => {

      const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto slide
  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 5);
    }, SLIDE_DURATION / 20);

    const slideInterval = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideInterval);
    };
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
       <section className="w-full bg-[#0f1113] py-16 px-4">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-xl shadow-xl">

        {/* Image */}
        <img
          src={images[index]}
          alt="slider"
          className="w-full h-[260px] sm:h-[380px] md:h-[480px] object-contain transition-opacity rounded-2xl duration-700"
        />
 
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-[50%] w-15 h-1 bg-gray-700">
          <div
            className="h-full bg-[#d9c08f] transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 
                     bg-black/50 text-white p-2 rounded-full
                     hover:bg-black/70 transition"
        >
          <HiChevronLeft size={26} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 
                     bg-black/50 text-white p-2 rounded-full
                     hover:bg-black/70 transition"
        >
          <HiChevronRight size={26} />
        </button>
      </div>
    </section>
    </div>
  );
}

export default Gallerslider;
