import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const projectsList = [
  {
    name: "Connectify",
    year: "Nov2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Gemini Clone",
    year: "Jan2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "MovieVerse",
    year: "Pressent",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="mx-auto max-w-[1200px] px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="max-w[900px] mx-auto mt-12 flex flex-col gap-20">
        {projectsList.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
