import React from 'react';

const Section2 = () => {
  return (
    <div>
      <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center text-white bg-[#0f1113]">
      
              {/* Gold Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src="logo.png"
                  alt="icon"
                  className="w-12 h-12 rounded-full sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-80"
                />
              </div>
      
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.12em] mb-8">
                MAA VAISHNAVI ENTERTAINMENT
              </h1>
      
              {/* Tagline Box */}
              <div className="border border-gray-600 py-4 sm:py-6 px-3 sm:px-6 
                              max-w-3xl mx-auto mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl italic text-[#d9c08f] font-[cursive] leading-snug">
                  We provide Location, Equipments, Crew, Line Producers, Directors of Photography,
                  Costume Designers, Choreographers, Art Directors, Scouts, Assistants & more.
                </h2>
              </div>
      
              {/* Description */}
              <p className="max-w-4xl mx-auto text-gray-300 leading-7 text-sm sm:text-base font-light px-4">
                Bring your story to life with our industry-leading platform. Access our network and
                professional studio resources. We provide complete production support for filmmakers,
                ad agencies, documentary creators & corporate filmmakers across India.
              </p>
      
            </section>
    </div>
  );
}

export default Section2;
