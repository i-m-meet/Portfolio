import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const HeroText = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-4 sm:text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-cyan sm:text-xl lg:text-2xl"
      >
        Front-End Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="font-roboto text-orange font-bold sm:text-4xl md:text-[2.8rem] lg:text-6xl"
      >
        Sumeet
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg text-white"
      >
        A Passionate Web Developer <br />
      </motion.p>
    </div>
  );
};

export default HeroText;
