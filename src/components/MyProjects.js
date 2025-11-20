import React, { useState } from "react";
import Figma1 from "../assets/Figma/ScentSphere.png";
import Figma2 from "../assets/Figma/Giftaura.png";
import Figma3 from "../assets/Figma/construction.png";
import Figma4 from "../assets/Figma/Furniture.png";
import Figma5 from "../assets/Figma/boogie.png";
import portfolio from '../assets/Web/portfolio.png'
import blog from '../assets/Web/blog.png'
import gym from '../assets/Web/gym.png'
import mood from '../assets/Web/mood.png'

const projects = [
  // 🟣 UI/UX + 🟢 Web mixed order
  {
    id: 1,
    category: "UI/UX Design",
    image: Figma1,
    tools: ["Figma"],
    description:
      "ScentSphere — A perfume shopping app UI focused on product feel and luxury experience.",
  },
  {
    id: 6,
    category: "Web Development",
    image: portfolio,
    tools: ["React", "Tailwind CSS"],
    description:
      "Portfolio — Designed and developed a personal portfolio website showcasing projects, skills, and achievements with a clean, responsive UI.",
  },
  {
    id: 2,
    category: "UI/UX Design",
    image: Figma2,
    tools: ["Figma"],
    description:
      "GiftAura — A gifting website UI that helps users choose the perfect present through polls & recommendations.",
  },
  {
    id: 7,
    category: "Web Development",
    image: blog,
    tools: ["React", "Bootstrap"],
    description:
      "Blog Website — Built a fully functional blogging platform allowing users to add, update, and delete posts with a dynamic UI.",
  },
  {
    id: 3,
    category: "UI/UX Design",
    image: Figma4,
    tools: ["Figma"],
    description:
      "Furniture Store UI — Designed elegant layouts for an eCommerce furniture website.",
  },
  {
    id: 8,
    category: "Web Development",
    image: gym,
    tools: ["React", "Bootstrap"],
    description:
      "Gym Website — Created an engaging single-page website for a fitness center with smooth animations and modern layout.",
  },
  {
    id: 4,
    category: "UI/UX Design",
    image: Figma5,
    tools: ["Figma"],
    description:
      "DJ Boogie — Created a modern and stylish party/DJ website interface.",
  },
  {
    id: 9,
    category: "Web Development",
    image: mood,
    tools: ["React", "API Integration"],
    description:
      "Mood Playlist — Developed a music web app that curates playlists based on the user’s mood using responsive design and API integration.",
  },
  {
    id: 5,
    category: "UI/UX Design",
    image: Figma3,
    tools: ["Figma"],
    description:
      "Construction — Designed elegant layouts for a construction website.",
  },
];

const tabs = ["All", "UI/UX Design", "Web Development"];

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="Featured Work" className="py-24 px-6 bg-[#D4F1F4]/70">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#003638] mb-3">Featured Work</h2>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#009E96] to-[#00E5E0] rounded-full mb-9 mx-auto"></div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-28 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#006F79] text-white shadow-md"
                : "bg-[#E6F4F1] text-[#004E50] hover:bg-[#00A5B0]/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28 justify-items-center">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white text-[#002B2D] rounded-3xl shadow-xl w-[320px] sm:w-[340px] pt-20 pb-8 px-6 flex flex-col items-center
                 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl group"
          >
            {/* Floating Image */}
            <div
              className="absolute -top-16 w-[220px] h-[160px] rounded-2xl overflow-hidden shadow-md border-4 border-white 
                      transition-transform duration-500 group-hover:-translate-y-3"
            >
              <img
                src={project.image}
                alt={project.category}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tools */}
            <div className="flex flex-wrap justify-start gap-3 mt-10 mb-5 self-start">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-[#009E96] text-white text-sm px-4 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-center text-gray-700 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
