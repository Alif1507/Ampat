import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Peta from "./components/Peta";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

function App() {


  return (
    <main className="h-[8888px] bg-[#F5F5DC]">
      <Navbar />
      <Hero />
      <Peta />
    </main>
  )
}

export default App
