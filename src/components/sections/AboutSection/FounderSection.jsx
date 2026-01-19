import React from "react";

const FounderSection = () => {
  return (
    <section className="w-full bg-white text-[#111] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
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

          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111]">
            Bhupendra Rajput
          </h3>

          <p className="text-[#555] text-sm sm:text-base leading-7 mb-4">
            Mr. Bhupendra Rajput, the visionary founder of{" "}
            <span className="text-[#A5161B] font-semibold">
              Maa Vaishnavi Entertainments
            </span>
            , is the driving force behind the company’s success and credibility.
          </p>

          <p className="text-[#555] text-sm sm:text-base leading-7 mb-4">
            A passionate industry professional with an unstoppable “can-do”
            attitude, he is known for his commitment, resilience, and ability
            to deliver results even under the most demanding production
            conditions. Starting his career as a teenager, he rose through the
            ranks with sheer determination, hard work, and an unshakeable belief
            in excellence.
          </p>

          <p className="text-[#555] text-sm sm:text-base leading-7 mb-6">
            With extensive experience as a casting director and line producer,
            he has played a crucial role in discovering, mentoring, and managing
            talent across numerous successful films, web series, and television
            projects. His deep industry insight, strong networks, and relentless
            drive make him the heart and soul of Maa Vaishnavi Entertainments.
          </p>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919407271262"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#A5161B]
                       text-[#A5161B] px-6 py-3
                       hover:bg-[#A5161B] hover:text-white
                       transition tracking-wide"
          >
            Connect on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
