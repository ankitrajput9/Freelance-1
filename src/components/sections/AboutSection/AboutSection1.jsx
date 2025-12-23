import React from 'react';

const AboutSection1 = () => {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — CONTENT */}
        <div>
          <h2 className="text-[#A5161B] text-3xl sm:text-4xl font-light tracking-[0.15em] mb-6">
            ABOUT US
          </h2>

          <p className="text-[#E6E6E6] text-sm sm:text-base leading-7 mb-4">
            Founded in 2010 and based in Bhopal, Madhya Pradesh,
            <span className="text-[#A5161B] font-semibold">
              {" "}Maa Vaishnavi Entertainments
            </span>{" "}
            is a trusted name in line production, casting, and complete
            production management. With more than 15 years of industry experience,
            we have successfully supported films, web series, TV serials,
            commercials, documentaries, and corporate projects.
          </p>

          <p className="text-[#E6E6E6] text-sm sm:text-base leading-7 mb-4">
            Our strength lies in our deep understanding of production workflows,
            strong local networks, and a highly professional crew. From location
            scouting and permissions to equipment, casting, and post-production
            support — we handle everything seamlessly.
          </p>

          <p className="text-[#E6E6E6] text-sm sm:text-base leading-7">
            We believe in creativity, discipline, and delivering excellence.
            Our mission is to bring your vision to life with quality, efficiency,
            and reliability.
          </p>
        </div>

        {/* RIGHT SIDE — IMAGE CARD */}
        <div className="relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
            <img
              src="/About/maavais.jpg"
              alt="About Maa Vaishnavi Entertainments"
              loading="lazy"
              className="sm:h-[400px] md:h-[450px] w-full object-cover 
                         border border-[#A5161B] p-2"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection1;
