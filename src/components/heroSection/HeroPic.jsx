import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex h-full items-center justify-center"
    >
      <img
        src="../../images/HexaPic.png"
        alt="Sumeet"
        className="max-h[450px] w-auto"
      />
      <div className="absolute -z-10 flex animate-pulse items-center justify-center">
        <PiHexagonThin className="text-cyan min-h-[400px] w-auto animate-[spin_20s_linear_infinite] blur-md sm:h-[120%] md:h-[90%]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
