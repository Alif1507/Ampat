import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      }
    })

    navTween.to("nav", {
      height: "101px",
      width: "835px",
      duration: 0.3,
      ease: "power1.inOut"
    })

    // gsap.to(".nav-links", {
    //   fontSize: "22px",
    //   duration: 0.3,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: "nav",
    //     start: "bottom top",
    //   }
    // })


  })
  return (
    <nav className="h-20 w-[800px] flex flex-row justify-around items-center border rounded-full border-white text-white posisi-tengah background-kaca">
      <div className="flex items-center gap-7"><img className="h-[60px] w-auto" src="/gambar/LOGO.png" alt="logo ampat" /> <h1 className="text-[18px] font-playfair-display nav-text">AMPAT</h1></div>
      <ul className="flex gap-8">
        <li className="nav-links"><a href="">Home</a></li>
        <li className="nav-links"><a href="">About</a></li>
        <li className="nav-links"><a href="">Information</a></li>
        <li className="nav-links"><a href="">Quiz</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
