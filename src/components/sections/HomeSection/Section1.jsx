import React from 'react';
import { useNavigate } from 'react-router';

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/video/bg2.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">

        {/* Brand Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] mb-4 text-white">
          <span className="block">MAA VAISHNAVI</span>
          <span className="block text-[#A5161B]">ENTERTAINMENTS</span>
        </h1>

        {/* Main Service Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#E6E6E6] max-w-4xl mb-4">
          End-to-End Line Production, Casting & Production Management Services
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mb-6">
          For Films, Web Series, TV Shows, Ads & Documentaries
        </p>

        {/* Experience Line */}
        <p className="text-xs sm:text-sm tracking-widest text-gray-400 mb-8">
          Founded in 2010 | 15+ Years of Industry Experience
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/contact")}
          className="cursor-pointer  px-8 py-3 border border-[#A5161B] text-white uppercase tracking-wider
                     hover:bg-[#A5161B] transition duration-300"
        >
          Discuss Your Project With Us
        </button>

      </div>
    </section>
  );
};

export default Section1;
