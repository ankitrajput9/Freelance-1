import React from "react";
import { useNavigate } from "react-router";

const ExtendedHomeContent = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white text-[#1A1A1A] py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= OUR WORK ================= */}
        <div>
          <h2 className="text-center text-[#A5161B] text-3xl tracking-[0.15em] mb-12">
            OUR WORK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-[#555555]  justify-items-center  ">

            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                Line Production & Casting
              </h3>
              <ul className="space-y-1">
                <li>Movie – Gandhi Godse</li>
                <li>Movie – The Game Of Girgit</li>
                <li>Movie – Hari Om</li>
                <li>Movie – Kartam Bhugtam</li>
                <li>Movie – Luv Ki Arrange Marriage</li>
                <li>Movie – Roosi Tittli Desi Boyz</li>
                <li>Ad – Testbook App</li>
                <li>Ad – Vyapaar App</li>
                <li>TV Show – Mauka E Vardaat</li>
                <li>TV Show – Crime Alert</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                Movie Casting
              </h3>
              <ul className="space-y-1">
                <li>Panga</li>
                <li>Chakravyuh</li>
                <li>Sanju</li>
                <li>Satyagraha</li>
                <li>Stree</li>
                <li>Kalank</li>
                <li>Yaara</li>
                <li>Revolver Rani</li>
                <li>Welcome To Karachi</li>
                <li>Singh Saab</li>
                <li>Wah Taj</li>
                <li>Motichoor Chaknachoor</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                Web Series Casting
              </h3>
              <ul className="space-y-1">
                <li>Rangbaaz</li>
                <li>Panchayat</li>
                <li>Bhoot Purva</li>
                <li>The Shuttlecock Murder</li>
                <li>Crime Patrol</li>
                <li>Savdhaan India</li>
                <li>Qubool Hai</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= CORE SERVICES ================= */}
        <div>
          <h2 className="text-center text-[#A5161B] text-3xl tracking-[0.15em] mb-4">
            CORE SERVICES
          </h2>
          <p className="text-center text-[#555555] mb-10">
            Professional Line Production Services
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Location Scouting & Permits",
              "Talent Casting",
              "Crew and Equipment Management",
              "Vendor Budgeting & Scheduling",
              "Video Production",
              "Transportation & Vanity Vans",
              "Light & Sound Services",
              "Celebrity Management & Brand Endorsement",
              "Ad / Web Series / Documentaries Shoot",
              "Content & Music Production Service",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#E6E6E6] rounded-lg p-4 text-sm text-[#555555]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= HOW WE WORK ================= */}
        <div>
          <h2 className="text-center text-[#A5161B] text-3xl tracking-[0.15em] mb-12">
            HOW WE WORK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-[#555555] text-center">

            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-3">Pre-Production</h3>
              <ul className="space-y-1">
                <li>Script & budget review</li>
                <li>Shooting schedule creation</li>
                <li>Location scouting & permissions</li>
                <li>Crew hiring & equipment arrangement</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-3">Production</h3>
              <ul className="space-y-1">
                <li>Daily shoot supervision</li>
                <li>Budget & schedule control</li>
                <li>Logistics coordination</li>
                <li>Permit compliance</li>
                <li>Real-time problem solving</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-3">Post-Production</h3>
              <ul className="space-y-1">
                <li>Editing & VFX monitoring</li>
                <li>Quality & deliverable checks</li>
                <li>Final cost reporting</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ================= WHY US ================= */}
        <div className="text-center">
          <h2 className="text-[#A5161B] text-3xl tracking-[0.15em] mb-10">
            WHAT MAKES US DIFFERENT
          </h2>

          <div className="max-w-3xl mx-auto text-sm text-[#555555] space-y-2">
            <p>✔ Founded in 2010 with proven credibility</p>
            <p>✔ 15+ years of hands-on production experience</p>
            <p>✔ Strong local & government liaison</p>
            <p>✔ Reliable vendors & trained crew</p>
            <p>✔ Transparent budgeting & scheduling</p>
            <p>✔ Creative vision + execution discipline</p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 border border-[#A5161B] cursor-pointer px-8 py-3
                       text-[#A5161B] hover:bg-[#A5161B]
                       hover:text-white transition"
          >
            PARTNER WITH US
          </button>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[#A5161B] text-3xl tracking-[0.15em] mb-6">
            LET’S BRING YOUR STORY TO LIFE
          </h2>
          <p className="text-[#555555] mb-8 text-sm sm:text-base">
            From films and web series to ads, documentaries, and corporate
            projects, Maa Vaishnavi Entertainments is your reliable production partner.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-[#A5161B] px-10 py-3 text-white cursor-pointer tracking-widest
                       hover:bg-[#7C1215] transition"
          >
            CONTACT US
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExtendedHomeContent;
