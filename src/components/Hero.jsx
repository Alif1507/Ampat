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
    <section className='relative flex'>
      <img className='absolute z-10' src="/gambar/backroundHero.png" alt="backroundHero" />
      <div className='flex flex-col justify-center h-screen text-white ml-24 gap-6'>
        <h1 className='hero-title relative z-20'>Raja Ampat <img className='absolute z-20 right-24 -top-2' src="/gambar/assetHero1.png" alt="Assethero1" /></h1>
        <h1 className='hero-paragraf z-20'>
          Raja Ampat bukan sekadar indah — ia <br /> punya cerita, suara, dan perjuangan yang <br /> harus didengar.
        </h1>
        <button className='group z-20 bg-[#05668D] max-w-[240px] h-12 rounded-lg font-inter font-bold text-xl transition duration-300 hover:text-[#05668D] hover:bg-white relative'>
          Lihat Fakta dan Aksi
          <img className='absolute z-20 -right-45 -top-2 pointer-events-none' src="/gambar/assetHero2.png" alt="Assethero1" />
        </button>
      </div>
    </section>
  )
}

export default Hero