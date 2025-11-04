import React, { useEffect, useState, useRef } from "react";

// ✅ Move static skills array outside component (fixes ESLint)
const skillsData = [
  { name: "HTML", level: 99, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", level: 89, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", level: 89, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "JavaScript", level: 69, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", level: 74, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Figma", level: 89, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "UI/UX Design", level: 89, icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png" },
];

const Skills = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when visible
            setProgress(skillsData.map(() => 0));

            skillsData.forEach((skill, i) => {
              let count = 0;
              const interval = setInterval(() => {
                if (count <= skill.level) {
                  setProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[i] = count;
                    return newProgress;
                  });
                  count++;
                } else {
                  clearInterval(interval);
                }
              }, 10);
            });
          } else {
            // Reset animation when leaving
            setProgress(skillsData.map(() => 0));
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col justify-center items-center bg-[#D4F1F4] px-6 md:px-20 py-16"
    >
      <h2 className="text-3xl font-bold text-[#003638] mb-3">My Skills</h2>
      <div className="h-[3px] w-24 bg-gradient-to-r from-[#009E96] to-[#00E5E0] rounded-full mb-9 mx-auto md:mx-0"></div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-24">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center gap-5">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-[#003638] font-semibold text-lg">{skill.name}</span>
                <span className="text-[#003638] font-semibold">{progress[index]}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-[#004E50] to-[#009E96] h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
