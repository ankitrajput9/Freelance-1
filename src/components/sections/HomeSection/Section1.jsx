import React from 'react';

const Section1 = () => {
  return (
    <div>
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
    </div>
  );
}

export default Section1;
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