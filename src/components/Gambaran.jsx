import React from 'react'
import { gambar1, gambar2 } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Gambaran = () => {
  useGSAP(() => {
    gsap.from(".gbr-ats", {
      scrollTrigger: {
        trigger: ".banget",
        start: "bottom bottom",
        scrub: true
      },
      xPercent: -100,
      ease: ""
    })

    gsap.from(".gbr-bwh", {
      scrollTrigger: {
        trigger: ".banget",
        start: "bottom bottom",
        scrub: true
      },
      xPercent: 100,
      ease: "power1.inOut"
    })
  })

  // useGSAP(() => {
  //   gsap.from(".gbr-ats", {
  //     xPercent: -100,
      
  //   })
  // })
  return (
    <section className='flex relative flex-col justify-center items-center mt-58 gambaran'>
      <h1 className='text-head'>Perampakan Pertambangan Raja Ampat</h1>
        <img className="absolute right-0 top-0  z-30" src="/gambar/Rectangle 15.png" alt="" />
        <img className="absolute right-0 top-50  z-30" src="/gambar/Rectangle 15.png" alt="" />
        <img className="absolute left-0 top-0  z-30" src="/gambar/Rectangle 12.png" alt="" />
        <img className="absolute left-0 top-50  z-30" src="/gambar/Rectangle 12.png" alt="" />
      <div className='flex gap-20 mt-20 gbr-ats'>
      {gambar1.map((g, index) => (
            <img key={index} src={g.src} alt="Gambar TAMBANG" />
          ))}
          </div>

          <div className='flex gap-20 mt-20 gbr-bwh'>
      {gambar2.map((g, index) => (
            <img key={index} src={g.src} alt="Gambar TAMBANG" />
          ))}
          </div>
    </section>
  )
}

export default Gambaran
