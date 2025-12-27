import React from "react";

const AboutSection2 = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2
          className="text-center text-[#A5161B] text-3xl sm:text-4xl
                     font-light tracking-[0.15em] mb-14"
        >
          WHY CHOOSE US
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div
            className="group bg-white border border-[#ddd]
                       p-8 rounded-xl shadow-sm
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-lg"
          >
            <h3
              className="text-xl font-semibold mb-4 text-[#111]
                         transition-colors duration-300
                         group-hover:text-[#A5161B]"
            >
              POST PRODUCTION
            </h3>

            <p className="text-[#555] text-sm sm:text-base leading-7">
              We work with the finest post production houses in the region.
              We provide offline and online editing, special effects, animation,
              dubbing, sound engineering and music.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="group bg-white border border-[#ddd]
                       p-8 rounded-xl shadow-sm
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-lg"
          >
            <h3
              className="text-xl font-semibold mb-4 text-[#111]
                         transition-colors duration-300
                         group-hover:text-[#A5161B]"
            >
              PRE PRODUCTION SERVICES
            </h3>

            <p className="text-[#555] text-sm sm:text-base leading-7">
              We give productions a head start by providing in-depth research
              and transparent budgeting. We then assist in permits, location
              scouting, multicity casting, travel & visas.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="group bg-white border border-[#ddd]
                       p-8 rounded-xl shadow-sm
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-lg"
          >
            <h3
              className="text-xl font-semibold mb-4 text-[#111]
                         transition-colors duration-300
                         group-hover:text-[#A5161B]"
            >
              PRODUCTION SERVICES
            </h3>

            <p className="text-[#555] text-sm sm:text-base leading-7">
              We source the right multilingual crew & technicians for the job.
              We have access to state of the art film equipment, production
              design & studio spaces.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
