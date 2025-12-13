import React from 'react';

const Section4 = () => {
  return (
    <div>
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
    </div>
  );
}

export default Section4;
