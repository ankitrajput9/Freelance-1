import React, { useEffect, useState } from "react";
import { galleryData } from "../components/data/galleryData";
import { useNavigate, useSearchParams } from "react-router";

const filters = [
  "All",
  "Films",
  "Web Series",
  "Ads",
  "Corporate",
  "Locations",
];

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlFilter = searchParams.get("filter") || "All";
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (filters.includes(urlFilter)) {
      setActiveFilter(urlFilter);
    }
  }, [urlFilter]);

  const filteredData =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section className="min-h-screen bg-[#f7f7f7] px-6 py-20">

      {/* Heading */}
      <h1 className="text-center text-4xl sm:text-5xl tracking-widest text-[#A5161B] mb-4">
        OUR WORK
      </h1>
      <p className="text-center text-[#555] mb-12 text-sm sm:text-base">
        Explore our work across films, web series, ads & locations
      </p>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              navigate(`/gallery?filter=${filter}`);
            }}
            className={`px-5 py-2 border text-sm tracking-wide transition
              ${
                activeFilter === filter
                  ? "bg-[#A5161B] text-white border-[#A5161B]"
                  : "bg-white text-[#333] border-[#ccc] hover:border-[#A5161B]"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {filteredData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/gallery/${item.id}`)}
            className="cursor-pointer bg-white rounded-2xl overflow-hidden
                       border border-[#ddd] shadow-sm
                       hover:shadow-xl hover:-translate-y-1 transition-all"
          >
         <img
  src={item.images[0]}
  alt={item.title}
  className="w-full aspect-5/6 object-cover"
/>

            <div className="p-4 text-center">
              <h3 className="tracking-wide text-lg font-semibold text-[#111]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Gallery;
