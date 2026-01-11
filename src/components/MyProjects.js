import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMaximize2 } from "react-icons/fi";

// UI/UX Images
import ScentSphere from "../assets/Figma/ScentSphere.png";
import Giftaura from "../assets/Figma/Giftaura.png";
import construction from "../assets/Figma/construction.png";
import Furniture from "../assets/Figma/Furniture.png";
import boogie from "../assets/Figma/boogie.png";

// Web Images
import portfolio from "../assets/Web/portfolio.png";
import blog from "../assets/Web/blog.png";
import gym from "../assets/Web/gym.png";
import mood from "../assets/Web/mood.png";

// Photoshop Images
import final_baner from "../assets/Photoshop/Final Banner.png";
import final_chips from "../assets/Photoshop/Final chips.png";
import magzine_2 from "../assets/Photoshop/Magzine 2.png";
import magzine_3 from "../assets/Photoshop/Magzine 3.png";
import mockup_1 from "../assets/Photoshop/Mockup 1.png";
import post_1 from "../assets/Photoshop/Post 1.png";
import post_3 from "../assets/Photoshop/Post 3.png";
import post_4 from "../assets/Photoshop/Post 4.png";
import prod_manipulation from "../assets/Photoshop/image manipulation.png";
import coffee_billboard from "../assets/Photoshop/coffe billborad.png";
import coffee_banner_ad from "../assets/Photoshop/baner.png";

const projects = [
  { id: 1, category: "UI/UX Design", slug: "construction", image: construction, tools: ["Figma"], description: "Construction — Redesigned a professional construction company website focusing on clarity, trust, and usability." },
  { id: 2, category: "UI/UX Design", slug: "furniture-redesign", image: Furniture, tools: ["Figma"], description: "Furniture Store UI — Designed elegant layouts for an eCommerce furniture website." },
  { id: 3, category: "UI/UX Design", slug: "dj-event-redesign", image: boogie, tools: ["Figma"], description: "DJ Boogie — Created a modern and stylish party/DJ website interface." },
  { id: 4, category: "UI/UX Design", slug: "perfume-ecommerce", image: ScentSphere, tools: ["Figma"], description: "Working : ScentSphere — A perfume shopping app UI focused on luxury and product experience." },
  { id: 5, category: "UI/UX Design", image: Giftaura, tools: ["Figma"], description: "GiftAura — A gifting website UI that helps users choose the perfect present." },

  { id: 6, category: "Web Development", image: portfolio, tools: ["React", "Tailwind CSS"], description: "Portfolio — Designed and developed a personal portfolio website with a clean, responsive UI." },
  { id: 7, category: "Web Development", image: blog, tools: ["React", "Bootstrap"], description: "Blog Website — Built a CRUD-based blogging platform with dynamic content handling." },
  { id: 8, category: "Web Development", image: gym, tools: ["React", "Bootstrap"], description: "Gym Website — Created an engaging single-page fitness website with modern layout." },
  { id: 9, category: "Web Development", image: mood, tools: ["React", "API Integration"], description: "Mood Playlist — Developed a music web app that suggests playlists based on mood." },

  { id: 10, category: "Photoshop", image: final_baner, tools: ["Photoshop"], description: "Billboard mockup design focusing on realism, lighting, and strong visual hierarchy." },
  { id: 11, category: "Photoshop", image: mockup_1, tools: ["Photoshop"], description: "Energy drink product mockup highlighting branding, freshness, and visual balance." },
  { id: 12, category: "Photoshop", image: post_3, tools: ["Photoshop"], description: "Coffee social media poster designed with realistic splash effects and typography." },
  { id: 13, category: "Photoshop", image: final_chips, tools: ["Photoshop"], description: "Spicy chips billboard design created to attract attention with bold colors and motion effects." },
  { id: 14, category: "Photoshop", image: magzine_3, tools: ["Photoshop"], description: "Fashion magazine cover design showcasing typography, styling, and editorial layout." },
  { id: 15, category: "Photoshop", image: post_4, tools: ["Photoshop"], description: "Ice cream promotional post created to highlight texture, color, and product appeal." },
  { id: 16, category: "Photoshop", image: post_1, tools: ["Photoshop"], description: "Outdoor travel poster design with storytelling visuals and clean composition." },
  { id: 17, category: "Photoshop", image: magzine_2, tools: ["Photoshop"], description: "Winter fashion magazine cover focusing on mood, elegance, and brand presence." },
  { id: 18, category: "Photoshop", image: prod_manipulation, tools: ["Photoshop"], description: "Creative product manipulation of an orange juice beverage." },
  { id: 19, category: "Photoshop", image: coffee_billboard, tools: ["Photoshop"], description: "High-impact outdoor billboard mockup for a coffee brand." },
  { id: 20, category: "Photoshop", image: coffee_banner_ad, tools: ["Photoshop"], description: "Digital marketing banner featuring high-end product staging." },
];

const tabs = ["All", "UI/UX Design", "Web Development", "Photoshop"];

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? showAll
        ? projects
        : projects.slice(0, 12)
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="Featured Work" className="py-24 px-6 bg-[#D4F1F4]/70">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#003638] mb-3">Featured Work</h2>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#009E96] to-[#00E5E0] rounded-full mb-12 mx-auto"></div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-28 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === tab
                ? "bg-[#006F79] text-white"
                : "bg-[#E6F4F1] text-[#004E50] hover:bg-[#00A5B0]/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28 justify-items-center">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white rounded-3xl shadow-xl w-[320px] sm:w-[340px]
            pt-20 pb-8 px-6 flex flex-col items-center text-center
            transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl group"
          >
            {/* Image */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[220px] h-[160px] rounded-2xl overflow-hidden shadow-md border-4 border-white">
              <img src={project.image} alt="" className="w-full h-full object-cover" />

              {project.category === "Photoshop" && (
                <button
                  onClick={() => setActiveImage(project.image)}
                  className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FiMaximize2 size={16} />
                </button>
              )}
            </div>

            {/* Tools */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 mb-5">
              {project.tools.map((tool, i) => (
                <span key={i} className="bg-[#009E96] text-white text-sm px-4 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>

            {project.category === "UI/UX Design" && project.slug && (
              <Link to={`/case-study/${project.slug}`} className="mt-5 text-sm font-semibold text-[#006F79] hover:underline">
                See My Work →
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* See More / Show Less */}
      {activeTab === "All" && (
        <div className="flex justify-end mt-12 mr-16">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="text-[#006F79] font-semibold text-2xl hover:underline"
            >
              See More →
            </button>
          ) : (
            <button
              onClick={() => {
                setShowAll(false);
                document.getElementById("Featured Work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#006F79] font-semibold text-2xl hover:underline"
            >
              ← Show Less
            </button>
          )}
        </div>
      )}

      {/* Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} alt="Full view" className="max-w-full max-h-[90vh] rounded-xl" />
        </div>
      )}
    </section>
  );
}
