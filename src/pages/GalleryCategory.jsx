import { useParams } from "react-router";
import { galleryData } from "../components/data/galleryData";

const GalleryCategory = () => {
  const { id } = useParams();
  const category = galleryData.find((g) => g.id === id);

  if (!category) {
    return (
      <div className="text-[#111] text-center py-20">
        Gallery not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f7f7f7] text-[#111] px-6 py-20">

      {/* Heading */}
      <h2 className="text-center text-4xl text-[#A5161B] tracking-widest mb-4">
        {category.title}
      </h2>

      {/* Subheading */}
      <p className="text-center text-[#666] mb-12">
        Selected visuals from our production portfolio
      </p>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {category.images.map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden
                       shadow-sm hover:shadow-lg transition"
          >
            <img
              src={img}
              alt={category.title}
              className="w-full h-72 object-cover
                         hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default GalleryCategory;
