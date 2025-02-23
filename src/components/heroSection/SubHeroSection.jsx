import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const SubHeroSection = () =>{
  return (
    <motion.div 
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
    className="w-full border-y border-lightGray text-lightGray flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown">
        <p className="md:block sm:hidden">Fast Learner</p>
        <p className="md:block sm:hidden">Team Work</p>
        <p className="">Details Master</p>
    </motion.div>
  );
}

export default SubHeroSection