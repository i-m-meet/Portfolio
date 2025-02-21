
const SingleSkill = ({imgSvg, text }) =>{
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
        <div  className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGray hover:scale-105 transition-all duration-500 transform text-6xl border-4 border-orange ">{imgSvg}</div>
        <p className="text-white font-bold">{text}</p>
        <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
        </div>

    </div>
  );
}

export default SingleSkill