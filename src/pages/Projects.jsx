import React from "react";
import ProjectsSection from "../components/sections/ProjectSection/ProjectsSection";
import ProjectsCTA from "../components/sections/ProjectSection/ProjectsCTA";

const Projects = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1A1A1A] py-24 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl tracking-[0.15em] text-[#A5161B] mb-6">
          OUR PROJECTS
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          A glimpse of our journey across feature films, web series,
          television shows, advertisements, and documentaries.
        </p>
      </section>

    <ProjectsSection
  title="Line Production & Casting"
  filter="Films"
  projects={[
    "Gandhi Godse",
    "The Game Of Girgit",
    "Hari Om",
    "Kartam Bhugtam",
    "Luv Ki Arrange Marriage",
    "Roosi Tittli Desi Boyz",
  ]}
/>

<ProjectsSection
  title="Movie Casting"
  filter="Films"
  projects={[
    "Panga",
    "Chakravyuh",
    "Sanju",
    "Satyagraha",
    "Stree",
    "Kalank",
    "Yaara",
    "Revolver Rani",
    "Welcome to Karachi",
    "Singh Saab The Great",
    "Wah Taj",
    "Motichoor Chaknachoor",
  ]}
/>

<ProjectsSection
  title="Web Series Casting"
  filter="Web Series"
  projects={[
    "Rangbaaz",
    "Panchayat",
    "Bhoot Purva",
    "The Shuttlecock Murder",
    "Crime Patrol",
    "Savdhaan India",
    "Qubool Hai",
  ]}
/>


      <ProjectsCTA />
    </>
  );
};

export default Projects;
