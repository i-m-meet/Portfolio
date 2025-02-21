const HeroText = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-4 sm:text-center md:text-left">
      <h2 className="text-cyan sm:text-xl lg:text-2xl">Front-End Developer</h2>
      <h1 className="font-roboto font-bold sm:text-4xl md:text-[2.8rem] lg:text-6xl text-orange">
        Sumeet
      </h1>
      <p className="text-lg mt-4 text-white">A Passionate Web Developer <br /></p>
    </div>
  );
};

export default HeroText;
