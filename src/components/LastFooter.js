import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D4F1F4] py-10 text-center relative">
      {/* Main Text */}
      <h2 className="text-3xl md:text-4xl font-light text-[#003638] mb-10">
        Thanks for <span className="text-red-500 font-semibold">Watching</span>
      </h2>

      {/* Bottom Bar */}
      <div className="absolute bottom-3 left-0 w-full flex justify-between px-8 text-sm text-[#003638]/80">
        <span className="font-medium tracking-wide">SRUSHTI PATIL</span>
        <span className="italic">UI/UX Designer</span>
      </div>
    </footer>
  );
};

export default Footer;
