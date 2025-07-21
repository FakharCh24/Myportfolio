import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
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
  { id: 2,
    title: "Finance Platform",
    description:
      "Farmgate Finance is a web-based platform designed to empower dairy farmers with instant access to the money they’ve already earned. The system simplifies the cash flow process by eliminating payment delays, offering real-time transaction visibility and secure fund transfers. Built with a clean, responsive front-end and seamless backend integrations, it ensures farmers can focus on what they do best — farming — without financial uncertainty.",
    images: [
      "/src/assets/f1.png",
      "/src/assets/f2.png",
      "/src/assets/f3.png",
      "/src/assets/f4.png",
      "/src/assets/f5.png",
      // Add more image paths here for this project
    ],
    tags: ["Next.js", "Tailwind CSS"],
    demoUrl: "https://farmgate-finance.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
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
    demoUrl: "https://tic-tac-toe-rosy-rho.vercel.app/",
    githubUrl: "https://github.com/FakharCh24/Tic_Tac_Toe",
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "A real-time currency converter web app built with HTML, CSS, and JavaScript. It allows users to convert between multiple currencies using live exchange rates fetched from a public API. The app features a clean user interface, responsive design, and accurate conversion logic.",
    images: [
      "/src/assets/c1.png",
      "/src/assets/c2.png",
      "/src/assets/c3.png",
      // Add more image paths here for this project
    ],
    tags: ["Html", "CSS", "JavaScript"],
    demoUrl: "https://currency-converter-nu-murex.vercel.app/",
    githubUrl: "https://github.com/FakharCh24/CurrencyConverter",
  },
  {
    id: 5,
    title: "Calculator App",
    description: "A basic calculator built using HTML, CSS, and JavaScript. It performs standard operations like add, subtract, multiply, and divide with a clean, responsive interface. Designed to practice DOM manipulation, event handling, and core JavaScript logic.",
    images: [
      "/src/assets/1.png",
       "/src/assets/cal1.png",
       "/src/assets/cal2.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mycalculator-sandy.vercel.app/",
    githubUrl: "https://github.com/FakharCh24/mycalculator",
  },
 
  

  {
    id: 6,
    title: "To-do List",
    description:
      "A simple and responsive to-do list application built using HTML, CSS, and JavaScript. Users can add, delete, and mark tasks as completed in real-time. The interface is clean and intuitive, providing a smooth user experience. All data is stored in the browser using localStorage so tasks stay saved even after refreshing.",
    images: [
      "/src/assets/td1.png",
      "/src/assets/td2.png",
      "/src/assets/td3.png",
      // Add more image paths here for this project
    ],
    tags: ["Html", "CSS", "JavaScript"],
    demoUrl: "https://todo-list-gray-eight.vercel.app/",
    githubUrl: "https://github.com/FakharCh24/Todo-List",
  },

];

export const ProjectsSection = () => {
  const mainPrevRef = useRef(null);
  const mainNextRef = useRef(null);
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

        <div className="relative">
          <button
            ref={mainPrevRef}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white/40 text-black/50 hover:bg-white/80 hover:text-primary transition rounded-full p-1 shadow"
            style={{ width: 28, height: 28 }}
            aria-label="Previous projects"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            ref={mainNextRef}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white/40 text-black/50 hover:bg-white/80 hover:text-primary transition rounded-full p-1 shadow"
            style={{ width: 28, height: 28 }}
            aria-label="Next projects"
            type="button"
          >
            <ChevronRight size={18} />
          </button>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: mainPrevRef.current,
              nextEl: mainNextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = mainPrevRef.current;
              swiper.params.navigation.nextEl = mainNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="project-swiper mb-8"
          >
            {projects.map((project, key) => (
              <SwiperSlide key={key}>
                <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
                  <ProjectImageCarousel images={project.images} title={project.title} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={tag + idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
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
              </SwiperSlide>
            ))}
          </Swiper>
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

function ProjectImageCarousel({ images, title }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative h-48 overflow-hidden">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow hover:bg-primary hover:text-white transition"
        ref={prevRef}
        aria-label="Previous image"
        type="button"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow hover:bg-primary hover:text-white transition"
        ref={nextRef}
        aria-label="Next image"
        type="button"
      >
        <ChevronRight size={20} />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={8}
        slidesPerView={1}
        className="project-image-swiper h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={title + ' image ' + (idx + 1)}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
