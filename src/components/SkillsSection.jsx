import { useState } from "react";
import { cn } from "@/lib/utils";
import cssLogo from "@/assets/css.png";
import jsLogo from "@/assets/js-W-NDNy9U.png";
import reactLogo from "@/assets/react-CBjhoM09.png";
import tailwindLogo from "@/assets/tailwind-B1tnhwjB.png";
import nextjsLogo from "@/assets/icons8-next.js-48.png";
import githubLogo from "@/assets/github-BqRYniog.png";
import BootstrapLogo from "@/assets/bootstrap-DjByhJwM.png";
import vscodeLogo from "@/assets/vscode-DyPKvY-r.png";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", logo: cssLogo },
  { name: "JavaScript", level: 90, category: "frontend", logo: jsLogo },
  { name: "React", level: 90, category: "frontend", logo: reactLogo },
  // { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend", logo: tailwindLogo },
  { name: "Next.js", level: 80, category: "frontend", logo: nextjsLogo },

  // // Backend
  // { name: "Node.js", level: 80, category: "backend" },
  // { name: "Express", level: 75, category: "backend" },
  // { name: "MongoDB", level: 70, category: "backend" },
  // { name: "PostgreSQL", level: 65, category: "backend" },
  // { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", logo: githubLogo },
  { name: "Bootstrap", level: 70, category: "tools", logo: BootstrapLogo },
  // { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools", logo: vscodeLogo },
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
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
