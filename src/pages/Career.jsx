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
    <section  className="w-full bg-[#0f1113]
                 pt-28 sm:pt-20 md:pt-24
                 pb-16 sm:pb-20
                 px-4 sm:px-6
                 text-white">
      <div className="max-w-4xl mx-auto">

        {/* PAGE HEADING */}
        <h1 className="text-center text-[#d9c08f] text-3xl sm:text-4xl 
                       font-light tracking-[0.2em] mb-12">
          JOIN OUR TEAM
        </h1>

        {/* JOB ALERT CARD */}
        <div className="bg-[#1a1b1d] border border-gray-700 rounded-xl p-8 shadow-xl">

          <h2 className="text-2xl font-semibold mb-2 text-[#d9c08f]">
            {jobData.title}
          </h2>

          <p className="text-gray-300 mb-6">
            {jobData.company}
          </p>

          {/* OPENINGS */}
          <h3 className="text-lg font-semibold mb-3">
            We Are Hiring:
          </h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            {jobData.openings.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>

          {/* NOTE */}
          <div className="border-l-4 border-[#d9c08f] pl-4 mb-6">
            <p className="text-sm text-gray-400 leading-6 whitespace-pre-line">
              {jobData.note}
            </p>
          </div>

          <p className="text-gray-300 mb-6 font-semibold">
            Hurry up guys!!!!!!!!!
          </p>

          {/* CONTACT */}
          <div className="space-y-3">

            {/* EMAIL */}
            <p>
              <span className="font-semibold text-[#d9c08f]">Email: </span>
              <a
                href={`mailto:${jobData.email}`}
                className="text-gray-300 hover:text-[#d9c08f] transition break-all"
              >
                {jobData.email}
              </a>
            </p>

            {/* WHATSAPP */}
            <p>
              <span className="font-semibold text-[#d9c08f]">WhatsApp: </span>
              <a
                href={`https://wa.me/${jobData.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-green-400 transition"
              >
                +91 9407271262
              </a>
            </p>

            <p className="text-sm text-gray-400 mt-2">
              (Strictly no phone calls 📱 — WhatsApp only)
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Career;
