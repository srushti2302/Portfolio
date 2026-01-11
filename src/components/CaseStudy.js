import { useParams, useNavigate } from "react-router-dom";
import { caseStudies } from "./caseStudies";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) {
    return <p className="text-center mt-20 text-black">Project not found</p>;
  }

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto mt-4 mt-md-2 text-gray-900">
      
      {/* Back Button + Title */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/#Featured Work")}
          className="p-2 rounded-full hover:bg-[#009E96] hover:text-gray-100 transition"
          aria-label="Back to projects"
        >
          <ArrowLeft size={24} />
        </button>

        <div>
                <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold">{project.title}</h1>

                  {/* WORKING tag for ScentSphere */}
                  {project.slug === "perfume-ecommerce" && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-200 text-blue-700">
                      WORKING
                    </span>
                  )}

                 {project.slug !== "perfume-ecommerce" && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                    REDESIGN
                    </span>
                 )}
                </div>

                <p className="text-gray-600">{project.subtitle}</p>
        </div>
      </div>

      {/* NDA Notice */}
      {project.nda && (
        <p className="text-sm text-gray-500 mb-6">
          🔒 NDA Project – limited visuals and information are displayed.
        </p>
      )}

      {/* Hero Image */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-2xl shadow-xl mb-12"
        width={1000}
      />

      {/* Role & Tools */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div>
          <h3 className="text-lg font-semibold mb-2">My Role</h3>
          <p className="text-gray-700">{project.role}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#009E96]/10 text-[#006F79] rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
      <p className="text-gray-700 mb-10">{project.overview}</p>

      {/* Problem Statement */}
      <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
      <p className="text-gray-700 mb-10">
       {project.problem}
      </p>

      {/* Goals */}
      <h3 className="text-xl font-semibold mb-3">Design Goals</h3>
      <ul className="list-disc list-inside text-gray-700 mb-10 space-y-2">
        <li>Create a strong first impression with clear messaging</li>
        <li>Build trust through layout and visual consistency</li>
        <li>Ensure easy navigation for all user types</li>
      </ul>

      {/* Design Decisions */}
      <h3 className="text-xl font-semibold mb-3">Key Design Decisions</h3>
      <ul className="mb-10 space-y-2 text-gray-700">
        {project.designPoints.map((item, i) => (
          <li key={i}>
            <strong>{item.title}</strong> — {item.desc}
          </li>
        ))}
      </ul>

      {/* Brand System */}
      <h3 className="text-xl font-semibold mb-3">Brand System</h3>
      <ul className="mb-10 text-gray-700 space-y-1">
        {project.brandSystem.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why a Redesign?</h3>
        <p className="text-gray-700 mb-10">
        The original website lacked clear visual hierarchy, consistent branding,
        and user-friendly navigation. Key information was difficult to find,
        and the overall look did not reflect the professionalism of the company.
        This redesign focuses on clarity, trust, and a modern user experience.
        </p>

    </section>
  );
}
