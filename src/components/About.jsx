import React from 'react'
import { useState } from "react";

const About = () => {
    const [isFirstBig, setIsFirstBig] = useState(true);

  return (
    <div className='mt-42 text-center justify-center'>
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <h1 className='hero-title text-4xl pt-20 mb-1 font-medium'>About</h1>
            <img src="/gambar/garis1.png" alt="" />
            
        </div>

        <div className='mx-30 max-md:mx-6 mt-20 flex items-center max-md:flex max-md:flex-col max-md:gap-30'>
           <div className="relative w-[340px] h-[380px]  mt-8">
                <div 
                className={`transition-all duration-1000 ${isFirstBig ? "w-[540px] z-10" : "cursor-pointer absolute bottom-[-10px] left-[-50px] z-20 w-[270px]"}`}
                onClick={() => setIsFirstBig(true)}
                >
                    <img
                        src="/gambar/gbBesar.png"
                        alt="Gambar Besar"
                        className=" w-100 h-auto rounded-xl object-cover"
                    />
                </div>

                <div 
                    className={`transition-all duration-1000 ${!isFirstBig ? "w-[540px] z-10" : "cursor-pointer absolute bottom-[-10px] left-[-50px] z-20 w-[270px]"}`}
                    onClick={() => setIsFirstBig(false)}
                    >

                    <img
                        src="/gambar/gbKecil.png"
                        alt="Gambar Kecil"
                        className=" w-100 h-auto rounded-xl object-cover"
                    />
                </div>
            </div>

            <div className='text-2xl text-left  ml-20 max-md:ml-0 max-md:text-center'>
                <p>Ampat adalah website jurnal mengenai salah satu wisata pulau terindah di indonesia yaitu  <span className='font-bold'>RAJA AMPAT</span>,disini kamu dapat mengetahui fakta dan hal menarik seputar raja ampat tentunya dengan animasi dan tampilan yang menarik ,membuat kalian dapat mencerna informasi dan menambah edukasi dengan nyaman</p>
            </div>

        </div>
    </div>
  )
}

export default About
