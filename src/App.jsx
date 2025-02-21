import About from "./components/about/About";
import Hero from "./components/heroSection/Hero";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import Navbar from "./components/navbar/Navbar";

const App = () =>{
  return (
    <main className="font-josefin-sans ">
      <Navbar/>
      <Hero/>
      <SubHeroSection/>
      <About/>
    </main>
  );
}

export default App