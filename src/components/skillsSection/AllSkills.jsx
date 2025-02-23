import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "Javascript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "React", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
];
const AllSkills = () => {
  return (
    <div className="relative mx-auto flex max-w-[1200px] items-center justify-center gap-2">
      {skills.map((skill, i) => {
        return (
          <motion.div 
          variants={fadeIn("up", `0.${i}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          key={i}>
            <SingleSkill text={skill.skill} imgSvg={<skill.icon />} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
