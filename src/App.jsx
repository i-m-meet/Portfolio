import About from "./components/about/About";
import HelperSection from "./components/HelperSection";
import Hero from "./components/heroSection/Hero";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skillsSection/Skills";
import SubSkills from "./components/skillsSection/SubSkills";

const App = () =>{
  return (
    <main className="font-josefin-sans ">
      <Navbar/>
      <Hero/>
      <SubHeroSection/>
      <About/>
      <Skills/>
      <SubSkills/>
      <HelperSection/>
    </main>
  );
}

export default App