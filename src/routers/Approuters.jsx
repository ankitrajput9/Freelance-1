import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Career from '../pages/Career';
import ContactUs from '../pages/ContactUs';
import Gallery from '../pages/Gallery';
import Services from '../pages/Services';
import ServiceGallery from '../components/sections/HomeSection/ServiceGallery';
import GalleryCategory from '../pages/GalleryCategory';
import Projects from '../pages/Projects';

const Approuters = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Old works route (keep if still used somewhere) */}
      <Route path="/works/:id" element={<ServiceGallery />} />

      {/* Gallery */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:id" element={<GalleryCategory />} />

      {/* Other Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default Approuters;
