import React from "react";
import { useNavigate } from "react-router";

const ProjectsSection = ({ title, projects, filter }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f7f7] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl sm:text-4xl tracking-wide text-[#A5161B] mb-10 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/gallery?filter=${encodeURIComponent(filter)}`)
              }
              className="cursor-pointer bg-white border border-[#ddd]
                         p-6 rounded-xl text-center
                         shadow-sm hover:shadow-lg
                         hover:border-[#A5161B] hover:-translate-y-1
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold tracking-wide text-[#111]">
                {project}
              </h3>

              <p className="text-xs text-[#666] mt-2 tracking-wider">
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
