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
import Footer from "./components/Footer";
import CobaQuiz from "./components/CobaQuiz";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

function App() {


  return (
    <main className=" bg-[#F5F5DC] relative">
      <Navbar />
      <Hero />
      <CobaQuiz />
      <Peta />
      <Gambaran />
      <Penyebab />
      <Solusi />
      <Footer />
    </main>
  )
}

export default App
