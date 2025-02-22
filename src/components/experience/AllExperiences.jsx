import SingleExeperience from "./SingleExeperience";
import { FaArrowRight } from "react-icons/fa";

const experiencesList = [
  {
    job: "Mobile/Web App Developer",
    company: " Student - Mobile Solutions Development",
    date: "2023- 2024",
    responsibilities: [
      "Developed small mobile applications for both iOS and Android using Swift and Java.",
      "Created projects like Weather App, To-Do Lists, Watch Faces, and a Story App for Kids.",
      "Focused on designing user-friendly mobile interfaces and ensuring smooth performance.",
    ],
  },
  {
    job: "Frontend Developer",
    company: "Student/Self-Learner",
    date: "2024- 2025",
    responsibilities: [
      "Developed my capstone project, Connectify, a social media app using React.js, TypeScript, Prisma, AWS, MySQL, and Tailwind CSS.",
      "Built multiple web applications using HTML, CSS, JavaScript, and React.",
      "Focused on creating clean, scalable, and responsive designs.",
    ],
  },
  {
    job: "Frontend Developer",
    company: " Independent Developer",
    date: "2025- Present",
    responsibilities: [
      "Built responsive websites that fetch and display data from APIs with dynamic UI/UX.",
      "Developed projects including a Gemini Clone, Movies Website, E-Commerce Platform, and more.",
      "Ensured high performance, API integration, and accessibility across all devices.",
    ],
  },
];

const AllExperiences = () => {
  return <div className="flex md:flex-row sm:flex-col items-center justify-between">
    {
      experiencesList.map((experience,index) =>{
        return(
          <>
          <SingleExeperience key={index} experience={experience} />
          {index< 2 ? <FaArrowRight className=" text-6xl text-orange lg:block sm:hidden"/>: ""}
          </>
        )
      })
    }
  </div>;
};

export default AllExperiences;
