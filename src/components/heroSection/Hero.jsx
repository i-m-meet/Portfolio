import HeroGradient from "./HeroGradient";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

const Hero = () =>{
  return (
    <div className="pt-40 pb-16">
        <div className="flex md:flex-row sm:flex-col-reverse max-w-[1200px] mx-auto justify-between items-center relative px-4 ">
        <HeroPic/>
        <HeroText/>
        <HeroGradient/>
        </div>
    </div>
  );
}

export default Hero