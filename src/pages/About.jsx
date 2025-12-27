import React from 'react';
import AboutSection1 from '../components/sections/AboutSection/AboutSection1';
import AboutSection2 from '../components/sections/AboutSection/AboutSection2';
import FounderSection from '../components/sections/AboutSection/FounderSection';
import AboutJourney from '../components/sections/AboutSection/AboutJourney';
import AboutPortfolio from '../components/sections/AboutSection/AboutPortfolio';
import AboutCTA from '../components/sections/AboutSection/AboutCTA';

const About = () => {
  return (
    <div className="relative w-full py-20 min-h-screen overflow-hidden">
     
     <AboutSection1/>
     <FounderSection/>
     <AboutSection2/>
     <AboutJourney/>
     <AboutPortfolio/>
     <AboutCTA/>
 
    </div>
  );
}

export default About;
