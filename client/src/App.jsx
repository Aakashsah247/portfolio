import Navbar from "./components/layout/Navbar"
import HeroSaction from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import SkillsSection from "./components/sections/SkillsSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ContactSection from "./components/sections/ContactSection"
import Footer from "./components/sections/Footer"
import ScrollTop from "./components/common/ScrollTop"

function App() {
  return (
    <>
    <Navbar/>
    <HeroSaction/>
    <AboutSection/>    
    <SkillsSection/>
    <ProjectsSection/>
    <ContactSection/>
    <Footer/>
    <ScrollTop/>
  
    </>
    
  )
}

export default App
