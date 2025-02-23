import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const SingleExeperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="border-orange mt-12 rounded-2xl border-2 border-dashed p-4 sm:h-auto sm:w-full md:h-[450px] md:w-[240px]"
    >
      <p className="text-cyan font-bold">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGray">{experience.date}</p>
      <ul className="mt-4 list-disc pl-4 text-white">
        {experience.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExeperience;
