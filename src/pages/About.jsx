import React from 'react';
import AboutSection1 from '../components/sections/AboutSection/AboutSection1';
import AboutSection2 from '../components/sections/AboutSection/AboutSection2';
import FounderSection from '../components/sections/AboutSection/FounderSection';

const About = () => {
  return (
    <div className="relative w-full py-20 min-h-screen overflow-hidden">
     
     <AboutSection1/>
     <FounderSection/>
     <AboutSection2/>
 
    </div>
  );
}

export default About;
