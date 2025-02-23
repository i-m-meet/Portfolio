import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const Skills = () => {
  return (
    <div id="skills">
      <div className="relative mx-auto min-h-[600px] max-w-[1200px] overflow-hidden px-4">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>
        <div className="lg-block absolute bottom-[50px] left-[50%] -translate-x-[50%] sm:hidden md:block">
          <AllSkills />
        </div>
        <div className="sm:block md:hidden lg:hidden">
          {" "}
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default Skills;
