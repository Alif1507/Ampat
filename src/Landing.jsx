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
import Peta from "./components/Peta";
import Gambaran from "./components/Gambaran";
import Penyebab from "./components/Penyebab";
import Solusi from "./components/Solusi";
import Footer from "./components/Footer";
import CobaQuiz from "./components/CobaQuiz";
import Sidebar from "./components/Sidebar";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const Landing = () => {
  return (
    <main className=" bg-[#F5F5DC] relative">
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <CobaQuiz />
      <Read />
      <Isu />
      <Artikel />
      <Peta />
      <Gambaran />
      <Penyebab />
      <Solusi />
      <Footer />
    </main>
  )
}

export default Landing
