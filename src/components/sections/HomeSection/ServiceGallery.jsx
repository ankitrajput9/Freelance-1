import {useParams} from "react-router"
  import {services} from "../../data/Data"
const ServiceGallery = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="text-white p-10">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0f1113] text-white px-6 py-20">
      <h2 className="text-center text-3xl text-[#d9c08f] mb-10 tracking-widest">
        {service.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {service.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="gallery"
            className="w-full h-72 object-contain rounded-2xl hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;