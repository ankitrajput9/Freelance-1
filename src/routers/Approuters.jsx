import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Career from '../pages/Career';
import ContactUs from '../pages/ContactUs';
import Gallery from '../pages/Gallery';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import Team from '../pages/Team';

const Approuters = () => {
  return (
    <div>
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/team" element={<Team/>}/>
</Routes>
    </div>
  );
}

export default Approuters;
