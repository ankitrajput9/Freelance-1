import React from "react";

const AboutPortfolio = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-24 px-4 text-center">
      
      <h2 className="text-3xl sm:text-4xl tracking-wide text-[#A5161B] mb-8">
        Our Work Portfolio
      </h2>

      <p className="text-[#555] max-w-4xl mx-auto text-sm sm:text-base">
        From feature films and OTT web series to ad films and television shows,
        our portfolio reflects our commitment to quality, scale, and
        professionalism across all formats.
      </p>

      <a
        href="/gallery"
        className="inline-block mt-8 px-8 py-3 border border-[#A5161B]
                   text-[#A5161B] uppercase tracking-wider
                   hover:bg-[#A5161B] hover:text-white transition"
      >
        View Our Work
      </a>

    </section>
  );
};

export default AboutPortfolio;
