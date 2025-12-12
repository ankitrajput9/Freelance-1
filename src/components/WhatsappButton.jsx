import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a 
      href="https://wa.me/919407271262"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        bg-green-500 text-white
        w-12 h-12 rounded-full
        flex items-center justify-center
        shadow-xl shadow-black/40
        hover:bg-green-600 transition-all duration-300
        animate-pulse
      "
    >
      <FaWhatsapp size={33} />
    </a>
  );
};

export default WhatsappButton;
