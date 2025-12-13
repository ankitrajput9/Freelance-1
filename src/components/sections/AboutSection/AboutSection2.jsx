import React from 'react';

const AboutSection2 = () => {
  return (
    <div>
       <section className="w-full bg-[#0f1113] py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-center text-[#d9c08f] text-3xl sm:text-4xl 
                       font-light tracking-[0.15em] mb-14">
          WHY CHOOSE US
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-[#1a1b1d] border border-gray-700 
                          p-8 rounded-xl shadow-lg transition-all duration-300
                          hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4 transition-colors duration-300
                           group-hover:text-[#d9c08f]">
POST PRODUCTION
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-7">
          We work with the finest post production houses in the region. We provide offline and online editing, special effects, animation, dubbing, sound engineering and music.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-[#1a1b1d] border border-gray-700 
                          p-8 rounded-xl shadow-lg transition-all duration-300
                          hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4 transition-colors duration-300
                           group-hover:text-[#d9c08f]">
PRE PRODUCTION SERVICES
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-7">
       We give productions a head start by providing in-depth research and transparent budgeting. We then assist in permits, location scouting, multicity casting, travel & visas.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-[#1a1b1d] border border-gray-700 
                          p-8 rounded-xl shadow-lg transition-all duration-300
                          hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4 transition-colors duration-300
                           group-hover:text-[#d9c08f]">
PRODUCTION SERVICES            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-7">
             We source the right multilingual crew & technicians for the job. We have access to state of the art film equipment, production design & studio spaces.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutSection2;
