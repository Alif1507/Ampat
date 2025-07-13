import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

function App() {


  return (
    <main className="h-[8888px]">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
