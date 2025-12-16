import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Career from '../pages/Career';
import ContactUs from '../pages/ContactUs';
import Gallery from '../pages/Gallery';
import Services from '../pages/Services';

const Approuters = () => {
  return (
    <div>
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/services" element={<Services/>}/>
</Routes>
    </div>
  );
}

export default Approuters;
