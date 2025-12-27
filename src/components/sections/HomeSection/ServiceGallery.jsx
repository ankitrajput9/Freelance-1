import { useParams } from "react-router";
import { services } from "../../data/Data";

const ServiceGallery = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-white p-10 text-center">
        Gallery not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0f1113] text-white px-6 py-20">

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl text-[#A5161B] mb-4 tracking-widest">
        {service.title}
      </h2>

      {/* Subheading */}
      <p className="text-center text-sm sm:text-base text-gray-400 mb-12">
        Selected work from our production portfolio
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {service.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${service.title} project`}
            className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition"
          />
        ))}
      </div>

    </section>
  );
};

export default ServiceGallery;
