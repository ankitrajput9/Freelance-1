import React from "react";

const Section3 = () => {
  const images = [
    ...Array.from({ length: 28 }, (_, i) => `/movies/im${i + 1}.jpg`),
    ...Array.from({ length: 15 }, (_, i) => `/movies/movieC${i + 1}.jpg`),
  ];

  return (
    <section className="w-full py-20 bg-[#0f1113] text-center text-white overflow-hidden">

      {/* Heading */}
      <h2 className="text-[#d9c08f] text-4xl tracking-[0.15em] font-light mb-12">
        OUR BEST WORK!
      </h2>

      {/* Slider Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Moving Track */}
        <div
          className="flex whitespace-nowrap animate-scrollX"
          style={{
            animation: "scrollX 25s linear infinite", // adjust speed
          }}
        >
          {/* Original list */}
          {images.map((img, index) => (
            <img
            //  loading="lazy"
              key={index}
              src={img}
              className="w-[300px] h-[350px] object-cover"
              alt=""
            />
          ))}

          {/* Duplicate list (needed for seamless loop) */}
          {images.map((img, index) => (
            <img
              key={`dup-${index}`}
              src={img}
              className="w-[300px] h-[350px] object-cover"
              alt=""
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Section3;
