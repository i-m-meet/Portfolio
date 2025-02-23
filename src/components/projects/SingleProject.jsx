import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/Vaariants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full items-center gap-8 sm:flex-col-reverse ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end sm:flex-col`}
    >
      <div>
        <h2 className="text-orange sm:text-2xl md:text-3xl">{name}</h2>
        <h2
          className={`font-roboto text-xl font-thin text-white sm:text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-cyan hover:text-orange flex cursor-pointer items-center gap-2 text-lg transition-all duration-500 sm:justify-center ${align === "left" ? "md:justify-end" : "md:justify-start"}`}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="relative max-h-[220px] max-w-[400px] transform overflow-hidden rounded-xl border border-white transition-all duration-500 hover:scale-110">
        <div className="bg-cyan absolute top-0 left-0 h-full w-full opacity-50 transition-all duration-500 hover:opacity-0 sm:hidden md:block"></div>
        <img src={image} alt="Project Image" className="h-full w-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
