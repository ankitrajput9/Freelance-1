import React from 'react';

const Section2 = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-center bg-[#1A1A1A] text-white">

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src="logo.png"
          alt="Maa Vaishnavi Entertainments"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-80"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.12em] mb-8">
        WHY CHOOSE US
      </h2>

      {/* Highlight Box */}
      <div
        className="border border-[#E6E6E6] py-4 sm:py-6 px-4 sm:px-6 
                   max-w-3xl mx-auto mb-8"
      >
        <p className="text-lg sm:text-xl md:text-2xl italic font-[cursive] text-[#A5161B] leading-snug">
          Founded in 2010, delivering seamless line production & casting services
          with professionalism, transparency, and creative discipline.
        </p>
      </div>

      {/* Description */}
      <p className="max-w-4xl mx-auto leading-7 text-sm sm:text-base font-light px-4 text-[#E6E6E6]">
        Based in Bhopal, Madhya Pradesh, Maa Vaishnavi Entertainments is a trusted
        line production, casting, and production management company with over
        15 years of hands-on industry experience. We have successfully supported
        feature films, OTT web series, television shows, ad films, documentaries,
        and corporate productions across India.
        <br /><br />
        Our strength lies in our deep understanding of production workflows,
        strong local and government liaison, reliable vendors, and a highly
        professional crew. From location scouting and permissions to logistics,
        equipment, casting, and on-ground execution—we manage everything so you
        can focus on creativity.
      </p>

    </section>
  );
};

export default Section2;
