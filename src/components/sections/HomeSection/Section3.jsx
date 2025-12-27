import React from "react";

const Section3 = () => {
  const images = [
    ...Array.from({ length: 28 }, (_, i) => `/movies/im${i + 1}.jpg`),
    ...Array.from({ length: 15 }, (_, i) => `/movies/movieC${i + 1}.jpg`),
  ];

  return (
    <section className="w-full py-20 bg-[#1A1A1A] text-center text-white overflow-hidden">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl tracking-[0.15em] font-light mb-4 text-[#A5161B]">
        NOTABLE PROJECTS
      </h2>

      {/* Subheading */}
      <p className="text-sm sm:text-base text-gray-400 mb-12 tracking-wide">
        Feature Films, Web Series, TV Shows, Ad Films & Documentaries
      </p>

      {/* Slider Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Moving Track */}
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "scrollX 25s linear infinite",
          }}
        >
          {/* Original list */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-[280px] sm:w-[300px] h-[340px] sm:h-[350px] object-cover"
              alt="Maa Vaishnavi Entertainments Project"
            />
          ))}

          {/* Duplicate list (seamless loop) */}
          {images.map((img, index) => (
            <img
              key={`dup-${index}`}
              src={img}
              className="w-[280px] sm:w-[300px] h-[340px] sm:h-[350px] object-cover"
              alt="Maa Vaishnavi Entertainments Project"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Section3;
