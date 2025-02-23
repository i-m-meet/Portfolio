import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

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
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w[900px] mx-auto mt-12 ">
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
