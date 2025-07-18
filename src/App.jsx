import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Peta from "./components/Peta";
import Gambaran from "./components/Gambaran";
import Penyebab from "./components/Penyebab";
import Solusi from "./components/Solusi";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

function App() {


  return (
    <main className="h-[8888px] bg-[#F5F5DC]">
      <Navbar />
      <Hero />
      <Peta />
      <Gambaran />
      <Penyebab />
      <Solusi />
    </main>
  )
}

export default App
