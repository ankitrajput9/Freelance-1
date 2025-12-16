import { useState } from "react";
import ThemedCarousel from "../components/sections/GallerySection/ThemedCarousel";
import FullGallery from "../components/sections/GallerySection/FullGallery";

const allImages = [
  // ...Array.from({ length: 10 }, (_, i) => `/slider/gallery${i + 1}.png`),
  ...Array.from({ length: 40 }, (_, i) => `/slider/img${i + 5}.jpg`),
];

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <ThemedCarousel
        images={allImages}
        onReadMore={() => setShowGallery(true)}
      />

      {showGallery && (
        <FullGallery
          images={allImages}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
};

export default Gallery;
