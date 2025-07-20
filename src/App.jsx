import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Read from "./components/Read";
import Isu from "./components/Isu";
import Artikel from "./components/Artikel";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

function App() {


  return (
    <main className="h-[8888px] bg-[#F5F5DC] relative">
      <Navbar />
      <Hero />
      <About />
      <Read />
      <Isu />
      <Artikel />
    </main>
  )
}

export default App
