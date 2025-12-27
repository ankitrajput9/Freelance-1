import React from "react";

const FounderSection = () => {
  return (
    <section className="w-full bg-[#f7f7f7] text-[#111] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — FOUNDER IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-lg bg-white p-2 w-full sm:w-[80%] md:w-full">
            <img
              src="/About/founder.png"
              alt="Founder - Maa Vaishnavi Entertainments"
              loading="lazy"
              className="w-full h-80 sm:h-[420px] md:h-[480px] object-contain
                         rounded-lg border border-[#A5161B]"
            />
          </div>
        </div>

        {/* RIGHT — FOUNDER DETAILS */}
        <div>
          <h2 className="text-[#A5161B] text-3xl sm:text-4xl font-light tracking-[0.15em] mb-4">
            FOUNDER
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#111]">
            Mr. Bhupendra Rajput
          </h3>

          <p className="text-[#A5161B] text-sm sm:text-base mb-4">
            Founder & Managing Director
          </p>

          <p className="text-[#555] text-sm sm:text-base leading-7 mb-4">
            Mr. Bhupendra Rajput is the visionary founder of
            <span className="text-[#A5161B] font-semibold">
              {" "}Maa Vaishnavi Entertainments
            </span>. With over 15 years of experience in the film and media
            industry, he has played a key role in establishing the company
            as a trusted name in line production, casting, and production
            management across Madhya Pradesh and beyond.
          </p>

          <p className="text-[#555] text-sm sm:text-base leading-7 mb-4">
            His leadership, strong industry network, and deep understanding
            of production workflows have helped successfully execute feature
            films, web series, TV serials, commercials, and documentary projects.
            He believes in professionalism, transparency, and delivering quality
            at every stage of production.
          </p>

          <p className="text-[#555] text-sm sm:text-base leading-7">
            Under his guidance, Maa Vaishnavi Entertainments continues to
            grow as a reliable production partner, supporting filmmakers
            with creative solutions and operational excellence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
