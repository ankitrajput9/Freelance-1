import ServicesIntro from "../components/sections/ServiceSection/ServicesIntro";
import ServicesCards from "../components/sections/ServiceSection/ServicesCards";
import ServiceDetail from "../components/sections/ServiceSection/ServiceDetail";
import WhyChooseUsServices from "../components/sections/ServiceSection/WhyChooseUsServices";
import ServicesCTA from "../components/sections/ServiceSection/ServicesCTA";

const Services = () => {
  return (
    <>
      <ServicesIntro />
      <ServicesCards />

      <ServiceDetail title="Line Production Services" points={[
         "Complete shoot planning & execution",
    "Production scheduling & daily call sheets",
    "Budget planning, control & reporting",
    "On-ground production supervision",
    "Government permissions & compliance",
    "Risk management & real-time problem solving",
        ]} />
      <ServiceDetail title="Location Scouting & Government Permits" points={[
      "Urban, rural, heritage & industrial locations",
    "Location feasibility & logistics planning",
    "State & local government permissions",
    "Police, municipal & authority clearances",
    "Strong local & government liaison",
        ]} />
      <ServiceDetail title="Casting & Talent Management" points={[
      "Casting for films, TV serials, ads & web series",
    "Talent sourcing: actors, models & extras",
    "Audition coordination & management",
    "Contract negotiation & talent liaison",
        ]} />
      <ServiceDetail title="Crew & Equipment Management" points={[
      "Professional cameras, lights, grips & studio setup",
    "Experienced directors, cinematographers & assistants",
    "Technicians: sound, lighting, art, makeup & more",
    "Vendor management & equipment logistics",
      ]} />
      <ServiceDetail title="Transportation & Vanity Vans" points={[
      "Fleet of cars, SUVs, vans & buses",
    "Driver management & route planning",
    "Vanity vans for artists & crew",
    "On-ground transport coordination",
      ]} />
      <ServiceDetail title="Light & Sound Services" points={[
      "Professional lighting setups for indoor & outdoor shoots",
    "Sound recording & mixing services",
    "On-site sound engineers & technicians",
    "Equipment rental & logistics",
      ]} />
      <ServiceDetail title="Video Production Services" points={[
      "Concept development & scriptwriting",
    "Pre-production planning & storyboarding",
    "Filming with professional crew & equipment",
    "Post-production: editing, VFX & color grading",
      ]} />
      <ServiceDetail title="Celebrity Management & Brand Endorsement" points={[
      "Celebrity sourcing for films, ads & events",
    "Contract negotiation & liaison",
    "Brand endorsement & promotional activities",
        
      ]} />
      <ServiceDetail title="Content & Music Production Services" points={[
      "Content ideation & development",
    "Music composition, recording & mixing",
    "Soundtrack production & licensing",
    "Integration with video content",
      ]} />

      <WhyChooseUsServices />
      <ServicesCTA />
    </>
  );
};

export default Services;
