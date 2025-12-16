 export const images = [
  // gallery1.png → gallery10.png
//   ...Array.from({ length: 10 }, (_, i) => `/slider/gallery${i + 1}.png`),

  // img5.jpg → img44.jpg
  ...Array.from({ length: 40 }, (_, i) => `/slider/img${i + 5}.jpg`),
];


// NAVBAR
export const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/services", label: "SERVICES" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/career", label: "CAREER" },
  { path: "/contact", label: "CONTACT" },
];

// SERVICES
export const servicesData = [
  {
    title: "Line Production",
    desc: "Complete production management including crew, logistics and scheduling.",
    icon: "camera",
  },
  {
    title: "Location Scouting",
    desc: "Indoor & outdoor location scouting with full permissions.",
    icon: "location",
  },
  {
    title: "Camera & Equipment",
    desc: "Professional cameras, lights, grips and studio setup.",
    icon: "equipment",
  },
  {
    title: "Casting & Talent",
    desc: "Casting services for films, TV serials and ads.",
    icon: "casting",
  },
];
