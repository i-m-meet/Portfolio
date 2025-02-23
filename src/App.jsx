import About from "./components/about/About";
import ContactMe from "./components/contact-me/ContactMe";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
// import HelperSection from "./components/HelperSection";
import Hero from "./components/heroSection/Hero";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skillsSection/Skills";
import SubSkills from "./components/skillsSection/SubSkills";

const App = () =>{
  return (
    <main className="font-josefin-sans result-scrollbar text-white relative cursor-default overflow-hidden">
      <Navbar/>
      <Hero/>
      <SubHeroSection/>
      <About/>
      <Skills/>
      <SubSkills/>
      <Experience/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      {/* <HelperSection/> */}
    </main>
  );
}

export default App