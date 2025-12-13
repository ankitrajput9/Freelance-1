import React from 'react';
import SlidingServices from '../components/slides/SlidingServices';
import Section3 from '../components/sections/HomeSection/Section3';
import Section1 from '../components/sections/HomeSection/Section1';
import Section2 from '../components/sections/HomeSection/Section2';
import Section4 from '../components/sections/HomeSection/Section4';


const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}

      <Section1 />
      {/* SECTION 2 */}
      <Section2 />

      {/* SECTION 3 – BEST WORK AUTO SLIDER */}
      <Section3 />

      {/* SECTION 4 – TYPE OF SERVICES */}
      <Section4 />

      {/* SECTION 5 – SLIDING SERVICES */}
      <SlidingServices />

    </div>
  );
}

export default Home;
