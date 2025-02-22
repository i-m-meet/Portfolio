import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div
      className={`flex w-full items-center gap-8 sm:flex-col-reverse ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className={`text-xl font-thin font-roboto sm:text-center text-white ${align ==="left"? "md:text-right": "md:text-left"}`}>{year}</h2>
        <a href={link} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center ${align ==="left" ? "md:justify-end" : "md:justify-start"}`}>
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan  opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project Image" className="w-full h-full"/>
      </div>
    </div>
  );
};

export default SingleProject;
