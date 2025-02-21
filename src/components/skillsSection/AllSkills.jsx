import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";


const skills = [
    {skill: 'HTML', icon: FaHtml5},
    {skill: 'CSS', icon: FaCss3Alt},
    {skill: 'Javascript', icon: IoLogoJavascript},
    {skill: 'TypeScript', icon: SiTypescript},
    {skill: 'React', icon: FaReact},
    {skill: 'Redux', icon: SiRedux},
    {skill: 'NextJS', icon: SiNextdotjs},
    {skill: 'TailwindCSS', icon: RiTailwindCssFill},
]
const AllSkills = () =>{
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((skill, i) => {
                return <SingleSkill key={i} text={skill.skill} imgSvg={<skill.icon/>}/>
            })
        }
    </div>
  );
}

export default AllSkills