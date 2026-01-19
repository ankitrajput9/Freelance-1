import React from "react";

const AboutSection1 = () => {
  return (
    <section className="w-full bg-[#f7f7f7] text-[#111] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — CONTENT */}
       <div>
  <h2 className="text-[#A5161B] text-3xl sm:text-4xl font-light tracking-[0.15em] mb-6">
    ABOUT US
  </h2>

  <p className="text-sm sm:text-base leading-7 mb-4 text-[#555]">
    <span className="text-[#A5161B] font-semibold">
      Maa Vaishnavi Entertainments
    </span>{" "}
    is a full-service line production, casting, and production management
    company founded in 2010 and headquartered in Bhopal, Madhya Pradesh.
  </p>

  <p className="text-sm sm:text-base leading-7 mb-4 text-[#555]">
    With 15+ years of hands-on industry experience, we have built a strong
    reputation for delivering seamless, cost-effective, and professionally
    managed productions across India. From large-scale feature films to web
    series, television shows, advertisements, documentaries, and corporate
    films, we act as a dependable on-ground partner—handling every operational
    detail so creators can focus on storytelling.
  </p>

  <p className="text-sm sm:text-base leading-7 mb-4 text-[#555]">
    We combine creative sensitivity with operational discipline, ensuring that
    every project is executed with precision, transparency, and excellence.
  </p>

  <p className="text-sm sm:text-base leading-7 text-[#A5161B] font-semibold">
    ✨ Creativity with discipline. Execution with integrity.
  </p>
</div>

        {/* RIGHT SIDE — IMAGE CARD */}
        <div className="relative">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-lg bg-white p-2">
            <img
              src="/About/maavais.jpg"
              alt="About Maa Vaishnavi Entertainments"
              loading="lazy"
              className="sm:h-[400px] md:h-[450px] w-full object-cover rounded-lg
                         border border-[#A5161B]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection1;
