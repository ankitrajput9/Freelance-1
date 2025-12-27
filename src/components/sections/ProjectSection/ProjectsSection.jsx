import React from "react";
import { useNavigate } from "react-router";

const ProjectsSection = ({ title, projects, filter }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0f1113] py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl tracking-wide text-[#A5161B] mb-10 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate(`/gallery?filter=${encodeURIComponent(filter)}`)}
              className="cursor-pointer bg-[#1A1A1A] border border-[#2a2a2a]
                         p-5 rounded-xl text-center
                         hover:border-[#A5161B] hover:scale-[1.03]
                         transition"
            >
              <h3 className="text-lg tracking-wide">{project}</h3>
              <p className="text-xs text-gray-400 mt-2">
                View Gallery →
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
