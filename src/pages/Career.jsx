import React from "react";

const jobData = {
  company: "Maa Vaishnavi Entertainments Film Production 🎥",
  title: "JOB ALERT...",
  openings: [
    "HR Manager",
    "Production Assistant",
    "Casting Associate",
    "Casting Assistant",
  ],
  note: `Salary will be based on skills and experience.
(Anyone can apply, but familiarity and basic knowledge of the Film Industry is required.)`,
  email: "maavaishnavientertainments@gmail.com",
  whatsapp: "919407271262",
};

const Career = () => {
  return (
    <section
      className="w-full bg-[#f7f7f7]
                 pt-28 sm:pt-20 md:pt-24
                 pb-16 sm:pb-20
                 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* PAGE HEADING */}
        <h1
          className="text-center text-[#A5161B] text-3xl sm:text-4xl
                     font-light tracking-[0.2em] mb-12"
        >
          JOIN OUR TEAM
        </h1>

        {/* JOB ALERT CARD */}
        <div className="bg-white border border-[#ddd] rounded-xl p-8 shadow-lg">

          <h2 className="text-2xl font-semibold mb-2 text-[#A5161B]">
            {jobData.title}
          </h2>

          <p className="text-[#555] mb-6">
            {jobData.company}
          </p>

          {/* OPENINGS */}
          <h3 className="text-lg font-semibold mb-3 text-[#111]">
            We Are Hiring:
          </h3>

          <ul className="list-disc list-inside space-y-2 text-[#555] mb-6">
            {jobData.openings.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>

          {/* NOTE */}
          <div className="border-l-4 border-[#A5161B] pl-4 mb-6">
            <p className="text-sm text-[#555] leading-6 whitespace-pre-line">
              {jobData.note}
            </p>
          </div>

          <p className="text-[#111] mb-6 font-semibold">
            Hurry up guys!!!!!
          </p>

          {/* CONTACT */}
          <div className="space-y-3">

            {/* EMAIL */}
            <p className="text-[#555]">
              <span className="font-semibold text-[#A5161B]">Email: </span>
              <a
                href={`mailto:${jobData.email}`}
                className="hover:text-[#A5161B] transition break-all"
              >
                {jobData.email}
              </a>
            </p>

            {/* WHATSAPP */}
            <p className="text-[#555]">
              <span className="font-semibold text-[#A5161B]">WhatsApp: </span>
              <a
                href={`https://wa.me/${jobData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A5161B] transition"
              >
                +91 9407271262
              </a>
            </p>

            <p className="text-sm text-[#666] mt-2">
              (Strictly no phone calls 📱 — WhatsApp only)
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Career;
