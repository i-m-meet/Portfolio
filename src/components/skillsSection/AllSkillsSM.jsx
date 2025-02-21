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
const AllSkillsSM = () =>{
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((skill,i) => {
            return <div key={i} className="flex flex-col items-center ">
                <skill.icon className="text-7xl text-orange"/>
                <p className="text-center mt-4 text-white">{skill.skill}</p>
            </div>
        })}
    </div>
  );
}

export default AllSkillsSM