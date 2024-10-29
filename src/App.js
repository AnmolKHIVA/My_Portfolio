import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Tsparticles from "./Components/tsparticles/Tsparticles"
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Project/Projects";
import Experience from "./Components/Experience/Experience";
import Terminal from "./Components/Terminal/Terminal";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  return (
    <>
     <Tsparticles/>
     <Navbar />
     <Home/>
     <Skills/>
     <Projects/>
     <Experience/>
     <Terminal/>
     <Footer/>
    </>
  );
}

export default App;
