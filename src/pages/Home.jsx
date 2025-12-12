import React from 'react';
import SlidingServices from '../components/slides/SlidingServices';
import Section3 from '../components/sections/Section3';

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/video/bg2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
                         text-[#d9c08f] tracking-[0.15em] mb-6">
            MAA VAISHNAVI ENTERTAINMENTS
          </h1>

          <p className='text-center px-4 text-sm sm:text-base md:text-lg 
                        text-[#d9c08f] font-[cursive] font-semibold max-w-3xl'>
            Founded in 2010 and based in Bhopal, Madhya Pradesh, Maa Vaishnavi Entertainments 
            has been a trusted partner for line production and casting, offering end-to-end 
            production services for over 15 years. We pride ourselves on handling every aspect 
            of production seamlessly.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
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

      {/* SECTION 3 – BEST WORK AUTO SLIDER */}
      <Section3 />

      {/* SECTION 4 – TYPE OF SERVICES */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#0f1113] text-center text-white">

        <h2 className="text-[#d9c08f] text-3xl sm:text-4xl tracking-[0.12em] font-light mb-4">
          TYPE OF SERVICES
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-10 tracking-wide px-4">
          CHOOSE THE TYPE OF SERVICES YOU LIKE
        </p>

        <div className="max-w-4xl mx-auto text-gray-400 text-sm sm:text-base leading-7 mb-14 px-4">
          Line Production is our core speciality. With highly skilled crews & world-class facilities, 
          we ensure top-quality production at reasonable cost in Bhopal and across Madhya Pradesh.
        </div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-[#1a1b1d] border border-gray-700 pb-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              className="w-full h-48 sm:h-56 md:h-64 object-cover opacity-80"
              alt="Service"
            />
            <h3 className="text-lg sm:text-xl text-center font-semibold py-4 tracking-wider">
              MAJOR SERVICES
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base px-6">
              <li>CITY</li><li>LOCATION</li><li>WEB SERIES</li><li>PROPERTIES</li>
              <li>MOVIES</li><li>TV SERIAL</li><li>ADD SHOOT</li><li>BRCC CASTING</li><li>LIGHTS</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#1a1b1d] border border-gray-700 pb-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              className="w-full h-48 sm:h-56 md:h-64 object-cover opacity-80"
              alt="Service"
            />
            <h3 className="text-lg sm:text-xl text-center font-semibold py-4 tracking-wider">
              PRODUCTION SUPPORT
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base px-6">
              <li>CITY</li><li>LOCATION</li><li>WEB SERIES</li><li>PROPERTIES</li>
              <li>MOVIES</li><li>TV SERIAL</li><li>ADD SHOOT</li><li>BRCC CASTING</li><li>LIGHTS</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#1a1b1d] border border-gray-700 pb-6 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="w-full h-48 sm:h-56 md:h-64 object-cover opacity-80"
              alt="Service"
            />
            <h3 className="text-lg sm:text-xl text-center font-semibold py-4 tracking-wider">
              FULL PROJECT HANDLING
            </h3>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base px-6">
              <li>CITY</li><li>LOCATION</li><li>WEB SERIES</li><li>PROPERTIES</li>
              <li>MOVIES</li><li>TV SERIAL</li><li>ADD SHOOT</li><li>BRCC CASTING</li><li>LIGHTS</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 5 – SLIDING SERVICES */}
      <SlidingServices />

    </div>
  );
}

export default Home;
