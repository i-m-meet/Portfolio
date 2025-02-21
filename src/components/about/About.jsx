import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () =>{
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center ">
        <div className="">
        <AboutText/>
        </div>
        <div className="">
        <AboutImage/>
        </div>
    </div>
  );
}

export default About