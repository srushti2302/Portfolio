import React, { useState } from "react";
import { FaUser, FaGraduationCap, FaLaptopCode, FaBullseye } from "react-icons/fa";
import myPhoto from "../assets/circularImg.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "Profile", icon: <FaUser size={22} /> },
    { id: "education", label: "Education", icon: <FaGraduationCap size={22} /> },
    { id: "internship", label: "Internship", icon: <FaLaptopCode size={22} /> },
    { id: "goals", label: "Goals", icon: <FaBullseye size={22} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Hello! I’m <span className="font-semibold text-[#009E96]">Srushti Vijay Patil</span>, 
              a graduated B.Tech student in Computer Science and Engineering from 
              D.Y. Patil Agriculture and Technical University.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              I’ve completed an <span className="font-semibold text-[#007F7F]">11-month internship </span> 
              at <span className="font-semibold text-[#007F7F]">Noitavonne</span>, where I worked on 
              UI/UX and web development projects using React.js, Figma, Bootstrap, and JavaScript.
            </p>
          </>
        );

      case "education":
        return (
          <>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-1">
              🎓 <span className="font-semibold text-[#009E96]">B.Tech in Computer Science and Engineering</span>
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 ml-7">
              D.Y. Patil Agriculture and Technical University, Kolhapur (2025)
            </p>
            {/* <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Achieved strong academic results with focus on web technologies and UI/UX principles.
            </p> */}

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2 mt-5">
              🎓 <span className="font-semibold text-[#009E96]">Diploma in Computer Science and Engineering</span>
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-1 ml-7">
              D.Y. Patil Polytechnic, Kolhapur (2021)
            </p>
          </>
        );

      case "internship":
        return (
          <>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3">
              💼 <span className="font-semibold text-[#009E96]">Noitavonne (11 months)</span>
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-1">
              • Designed and developed UI/UX projects for multiple clients using React.js and Figma.  
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              • Collaborated with teams to build user-friendly, responsive web apps and optimize front-end workflows.
            </p>
          </>
        );

      case "goals":
        return (
          <>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-2">
              🚀 Seeking a full-time opportunity to combine creativity and logic to build 
              visually engaging, functional products.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Passionate about continuous learning, exploring modern frameworks, and 
              staying updated with UI/UX trends and frontend innovations.
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center bg-gradient-to-l from-[#004E50] to-[#009E96] px-4 py-16"
    >
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full transition-all duration-500">
        
        {/* Left - Image */}
        <div className="flex flex-col items-center">
          <img
            src={myPhoto}
            alt="Srushti Patil"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#00A5B0] shadow-md"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left max-w-xl w-full">
          <h2 className="text-3xl font-bold text-[#003638] mb-3">About Me</h2>
          <div className="h-[3px] w-24 bg-gradient-to-r from-[#009E96] to-[#00E5E0] rounded-full mb-6 mx-auto md:mx-0"></div>

          {/* Tabs Section */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${
                  activeTab === tab.id ? "text-[#00A5B0]" : "text-gray-500 hover:text-[#007F7F]"
                }`}
              >
                <div
                  className={`p-3 rounded-full border ${
                    activeTab === tab.id ? "border-[#00A5B0]" : "border-gray-300"
                  } transition-colors duration-300`}
                  title={tab.label}
                >
                  {tab.icon}
                </div>
                <span className="text-sm mt-1">{tab.label}</span>
              </div>
            ))}
          </div>

          {/* Dynamic Content (fixed height + animation) */}
          <div
            key={activeTab}
            className="min-h-[220px] transition-opacity duration-500 ease-in-out opacity-100 animate-fade"
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
