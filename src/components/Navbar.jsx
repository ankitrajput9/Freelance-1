import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/services", label: "SERVICES" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/career", label: "CAREER" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-md bg-[#1A1A1A]/80 shadow-lg"
            : "bg-[#1A1A1A]"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <img
          className="h-12 rounded-full"
          src="/logo.png"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-semibold tracking-wide">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#A5161B]"
                  : "text-white hover:text-[#A5161B] transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#000000] border-t border-[#E6E6E6]
                        p-6 space-y-4 text-center backdrop-blur-md">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-[#A5161B]"
                  : "block text-white hover:text-[#A5161B] transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
