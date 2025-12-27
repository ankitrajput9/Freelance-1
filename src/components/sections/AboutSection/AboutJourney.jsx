import React from "react";

const AboutJourney = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-24 px-4 text-[#111]">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl tracking-wide text-[#A5161B] mb-8">
          Our Journey & Experience
        </h2>

        <p className="leading-7 max-w-4xl mx-auto text-sm sm:text-base text-[#555]">
          Founded with a vision to simplify and professionalize line production
          services in Central India, Maa Vaishnavi Entertainments has grown into
          a trusted Pan-India production partner.
          <br />
          <br />
          Our deep understanding of production workflows, strong regional
          networks, and expertise in government liaison allow us to deliver
          smooth shoots—even in complex or time-sensitive environments.
        </p>

        <ul className="mt-8 space-y-2 text-sm sm:text-base text-[#444]">
          <li>✔ Feature Films</li>
          <li>✔ Web Series (OTT Platforms)</li>
          <li>✔ TV Serials & Reality Shows</li>
          <li>✔ Commercials & Ad Films</li>
          <li>✔ Documentaries</li>
          <li>✔ Corporate & Industrial Films</li>
        </ul>

        <p className="mt-6 text-[#666] italic">
          🎯 Our Mission: To bring creative visions to life with quality,
          efficiency, reliability, and professional integrity.
        </p>

      </div>
    </section>
  );
};

export default AboutJourney;
