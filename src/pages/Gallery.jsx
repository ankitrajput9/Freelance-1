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
    <section className="min-h-screen bg-[#0f1113] text-white px-6 py-20">

      {/* Heading */}
      <h1 className="text-center text-4xl tracking-widest text-[#A5161B] mb-4">
        OUR WORK
      </h1>
      <p className="text-center text-gray-400 mb-12">
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
                  ? "bg-[#A5161B] border-[#A5161B]"
                  : "border-gray-500 hover:border-[#A5161B]"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredData.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/gallery/${item.id}`)}
            className="cursor-pointer bg-black rounded-2xl overflow-hidden hover:scale-[1.03] transition"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="tracking-wide text-lg">
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
