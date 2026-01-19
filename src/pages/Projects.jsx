import React from "react";
import ProjectsSection from "../components/sections/ProjectSection/ProjectsSection";
import ProjectsCTA from "../components/sections/ProjectSection/ProjectsCTA";

const Projects = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1A1A1A] py-24 text-center px-4">
        <h1 className="text-4xl sm:text-5xl tracking-[0.15em] text-[#A5161B] mb-6">
          OUR PROJECTS
        </h1>
        <p className="text-[#E6E6E6] max-w-3xl mx-auto text-sm sm:text-base">
          A glimpse of our journey across films, web series, commercials,
          corporate films, events, and photography.
        </p>
      </section>

      <ProjectsSection title="OUR WORK CATEGORIES" />

      <ProjectsCTA />
    </>
  );
};

export default Projects;
