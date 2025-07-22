import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML",level: 95, category: "frontend", logo: "/html.png"},
  { name: "CSS",level: 95, category: "frontend", logo: "/css.png" },
  { name: "JavaScript", level: 90, category: "frontend", logo: "/js-W-NDNy9U.png" },
  { name: "React", level: 90, category: "frontend", logo: "/react-CBjhoM09.png" },
  { name: "Tailwind CSS", level: 90, category: "frontend", logo: "/tailwind-B1tnhwjB.png" },
  { name: "Next.js", level: 80, category: "frontend", logo: "/nextjs.png" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", logo: "/github-BqRYniog.png" },
  { name: "Bootstrap", level: 70, category: "tools", logo: "/bootstrap-DjByhJwM.png" },
  { name: "VS Code", level: 95, category: "tools", logo: "/vscode-DyPKvY-r.png" },
];

const categories = ["all", "frontend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center gap-2">
                {skill.logo && (
                  <img src={skill.logo} alt={skill.name + ' logo'} className="w-7 h-7 object-contain" />
                )}
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              {/* Skill level bar and percentage removed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
