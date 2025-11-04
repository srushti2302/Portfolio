import React from "react";
import { ReactTyped } from "react-typed";
import myPhoto from "../assets/mine1.png"; // your photo
import uiuxImg from "../assets/uiux.jpg"; // icon
import cityImg from "../assets/kolhapur.jpg"; // location image
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#D4F1F4] px-6 md:px-10 mt-[-30px] md:mt-0 md:pt-20 overflow-hidden"
    >
      {/* Line 1: Intro */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
        I’m{" "}
        <span className="text-4xl md:text-5xl font-medium bg-gradient-to-t from-[#00A5B0] to-[#006F79] bg-clip-text text-transparent font-[Pacifico]">
          Srushti Vijay Patil,
        </span>
        <span className="inline-block ml-3">
          <img
            src={myPhoto}
            alt="Srushti"
            className="w-26 h-14 mt-3 md:mt-0 md:w-48 md:h-28 object-cover rounded-full inline-block border-2 border-teal-900 shadow-md transition-all duration-500"
          />
        </span>
      </h1>

      {/* Line 2: Typed text */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
        an{" "}
        <img
          src={uiuxImg}
          alt="UIUX"
          className="w-20 h-10 md:w-36 md:h-20 inline-block ml-2 align-middle rounded-full"
        />{" "}
        <span className="font-semibold text-teal-800">
          <ReactTyped
            strings={["UI/UX Designer", "Frontend Developer"]}
            typeSpeed={80}
            backSpeed={40}
            loop
          />
        </span>{" "}
      </h2>

      {/* Line 3: Location */}
      <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">
        from <span className="font-semibold text-teal-800">Kolhapur</span>{" "}
        <img
          src={cityImg}
          alt="Kolhapur"
          className="w-20 h-10 md:w-36 md:h-20 inline-block ml-2 rounded-full object-cover border-2 border-teal-700"
        />
      </h3>

      {/* Description */}
      <p className="text-gray-600 max-w-xl leading-relaxed mb-6 px-3 md:px-0">
        I merge design and development — shaping ideas into engaging digital
        experiences through thoughtful{" "}
        <span className="text-teal-800 font-semibold">UI/UX</span> and precise{" "}
        <span className="text-teal-800 font-semibold">frontend code</span>.
      </p>

      {/* Resume Button */}
      <a
        href="/Srushti_Patil_Resume.pdf"
        download="Srushti_Patil_Resume.pdf"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#004E50] to-[#009E96] hover:opacity-90 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all shadow-md group"
      >
        See Resume
        <BsArrowUpRightCircleFill className="text-2xl transform rotate-0 transition-transform duration-300 group-hover:rotate-45" />
      </a>
    </section>
  );
};

export default Hero;
