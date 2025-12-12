import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${scrolled 
        ? "opacity-100 backdrop-blur-md bg-[#0f1113]/40 shadow-lg"
        : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl text-white font-bold tracking-wide">
          <img className="h-12 rounded-full" src="/logo.png" alt="Logo" />
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          {[
            "/", "/about", "/portfolio", "/team", "/services",
            "/gallery", "/career", "/contact"
          ].map((path, i) => {
            const labels = [
              "HOME", "ABOUT", "PORTFOLIO", "TEAM", "SERVICES",
              "GALLERY", "CAREER", "CONTACT"
            ];
            return (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-red-400" : "text-white"
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0f1113]/95 backdrop-blur-md border-t border-gray-700 p-6 space-y-4 text-center transition-all duration-300">
          {[
            "/", "/about", "/portfolio", "/team", "/services",
            "/gallery", "/career", "/contact"
          ].map((path, i) => {
            const labels = [
              "HOME", "ABOUT", "PORTFOLIO", "TEAM", "SERVICES",
              "GALLERY", "CAREER", "CONTACT"
            ];
            return (
              <NavLink
                key={i}
                to={path}
                onClick={() => setOpen(false)}
                className="block text-white hover:text-red-400 transition"
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
