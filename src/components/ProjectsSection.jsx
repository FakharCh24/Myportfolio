import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    id: 1,
    title: "Calculator App",
    description: "A basic calculator built using HTML, CSS, and JavaScript. It performs standard operations like add, subtract, multiply, and divide with a clean, responsive interface. Designed to practice DOM manipulation, event handling, and core JavaScript logic.",
    images: [
      "/src/assets/1.png",
       "/src/assets/cal1.png",
       "/src/assets/cal2.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "TIC TAC TOE Game",
    description:
      "A fun, interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. It features a clean UI, turn-based logic for two players, win/draw detection, and a restart button. Great for practicing JavaScript conditionals, DOM updates, and game logic.",
    images: [
      "/src/assets/Tic1.png",
      "/src/assets/Tic2.png",
      "/src/assets/Tic3.png",
      // Add more image paths here for this project
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A responsive, multi-page Fiverr-inspired freelance marketplace built using React.js, with dynamic components, routing, and API integration. It features service listings, user profiles, category filtering, and a modern UI — designed to replicate real-world eCommerce interactions. This project showcases my skills in React architecture, component design, and frontend state management.",
    images: [
      "/src/assets/3.png",
      "/src/assets/Fiv2.png",
      "/src/assets/Fiv3.png",
      "/src/assets/Fiv4.png",
      // Add more image paths here for this project
    ],
    tags: ["React", "Django", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  autoPlay={false}
                  className="project-carousel"
                >
                  {project.images.map((img, idx) => (
                    <div key={idx} className="h-48 bg-black">
                      <img
                        src={img}
                        alt={project.title + ' image ' + (idx + 1)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/FakharCh24"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
