import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSetActive = (section) => {
    setActive(section);
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-4 left-0 z-50 flex justify-center px-4">
      <div
        className={`w-full max-w-6xl flex items-center justify-between text-black px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? "bg-white/30 shadow-[0_4px_25px_rgba(0,0,0,0.25)]"
            : "bg-white/20 shadow-[0_2px_15px_rgba(0,0,0,0.15)]"
        }`}
      >
        {/* 🔹 Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold bg-[#004E50] bg-clip-text text-transparent">
          Portfolio
        </h1>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "Featured Work", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleSetActive(link)}
              className={`relative text-lg px-4 py-2 font-medium text-[#004E50] transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#004E50] after:transition-all after:duration-300
                hover:after:w-full hover:font-semibold
                ${
                  active === link
                    ? "font-semibold after:w-full"
                    : "hover:after:w-full"
                }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* 🔹 Resume Button */}
        <a
          href="/Srushti_Patil_Resume.pdf"
          download="Srushti_Patil_Resume.pdf"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#004E50] to-[#009E96] hover:opacity-90 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all shadow-md group"
        >
          Resume
          <BsArrowUpRightCircleFill className="text-2xl transform rotate-0 transition-transform duration-300 group-hover:rotate-45" />
        </a>

        {/* 🔹 Hamburger Icon */}
        <div
          className="md:hidden text-[#004E50] text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#006F79] text-white rounded-xl py-6 flex flex-col items-center gap-5 shadow-lg animate-slideDown">
          {["home", "about", "Featured Work", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleSetActive(link)}
              className={`relative text-lg px-6 py-2 font-medium transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
                hover:after:w-full hover:font-semibold
                ${
                  active === link
                    ? "font-bold after:w-full"
                    : "hover:after:w-full"
                }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          <a
            href="/Srushti_Patil_Resume.pdf"
            download="Srushti_Patil_Resume.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-[#004E50] to-[#009E96] hover:opacity-90 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all shadow-md group"
          >
            Resume
            <BsArrowUpRightCircleFill className="text-2xl transform rotate-0 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
