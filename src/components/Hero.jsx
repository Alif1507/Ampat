import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText('.hero-title', {type: "chars, words"})
    const paragrafSplit = new SplitText('.hero-paragraf', {type: "lines"})

    gsap.from(heroSplit.chars, {
      rotateX: 360,
      duration: 2,
      ease: "expo.out",
      stagger: 0.05,
      opacity: 0,
    })

    gsap.from(paragrafSplit.lines, {
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.05,
      delay: 0.8,
      opacity: 0,
    })





  })

  

  return (
    <section className="relative flex flex-col md:flex-row text-center md:text-start">
      <img
        className="absolute z-10 w-full h-full object-cover"
        src="/gambar/backroundHero.png"
        alt="backroundHero"
      />
      <div className="flex flex-col justify-center min-h-screen text-white md:ml-24 gap-6 px-6 md:px-0 py-16 md:py-0 w-full md:w-auto relative z-20">
        <h1 className="hero-title relative z-20 text-5xl md:text-6xl font-bold leading-tight ">
          Raja Ampat
          <img
            className="absolute z-20 right-0 md:top-1 -top-4 w-12 md:w-auto"
            src="/gambar/assetHero1.png"
            alt="Assethero1"
          />
        </h1>
        <h1 className="hero-paragraf z-20 md:text-2xl leading-relaxed text-xl text-nowrap md:text-wrap">
          Raja Ampat bukan sekadar indah — ia <br className="hidden md:block" />
          punya cerita, suara, dan perjuangan yang <br className="hidden md:block" />
          harus didengar.
        </h1>
        <button className="group z-20 bg-[#05668D] max-w-full md:max-w-[240px] h-12 rounded-lg font-inter font-bold text-lg md:text-xl transition duration-300 hover:text-[#05668D] hover:bg-white relative mt-4 md:mt-0">
          Lihat Fakta dan Aksi
          <img
            className="absolute z-20 -right-8 md:-right-40 -top-2 md:top-10 pointer-events-none w-10 md:w-auto"
            src="/gambar/assetHero2.png"
            alt="Assethero2"
          />
        </button>
      </div>
    </section>
  )
}

export default Hero