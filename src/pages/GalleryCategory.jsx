import { useParams } from "react-router";
import { galleryData } from "../components/data/galleryData";

const GalleryCategory = () => {
  const { id } = useParams();
  const category = galleryData.find((g) => g.id === id);

  if (!category) {
    return <div className="text-white text-center py-20">Gallery not found</div>;
  }

  return (
    <section className="min-h-screen bg-[#0f1113] text-white px-6 py-20">

      <h2 className="text-center text-4xl text-[#A5161B] tracking-widest mb-4">
        {category.title}
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Selected visuals from our production portfolio
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {category.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={category.title}
            className="w-full h-72 object-cover rounded-xl hover:scale-105 transition"
          />
        ))}
      </div>

    </section>
  );
};

export default GalleryCategory;
