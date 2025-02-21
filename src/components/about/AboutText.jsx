
const AboutText = () =>{
  return (
    <div  className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h1 className="text-6xl text-cyan mb-10"> About Me</h1>
        <p className="text-white">I'm a passionate frontend developer with a focus on creating responsive, user-friendly websites and web applications. With experience in HTML, CSS, JavaScript, React, and Tailwind CSS, I aim to deliver visually appealing and functional designs. I am committed to continuous learning and always excited to explore new technologies, ensuring I deliver the best solutions for users</p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
  );
}

export default AboutText