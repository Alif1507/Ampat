import React from 'react'
import { useState } from "react";

const About = () => {
    const [isFirstBig, setIsFirstBig] = useState(true);

  return (
    <div className='mt-42 text-center justify-center' id='about'>
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <h1 className='hero-title text-4xl pt-20 mb-1 font-medium'>About</h1>
            <img src="/gambar/garis1.png" alt="" />
            
        </div>

        <div className='mx-30 max-md:mx-6 mt-20 flex flex-col lg:flex-row items-center gap-8'>
           <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[400px] mt-8">
                <div
                    className={`transition-all duration-1000 ${
                    isFirstBig
                        ? "w-full lg:w-[430px] z-10"
                        : "cursor-pointer absolute bottom-[-10px] left-[-20px] z-20 w-2/3 sm:w-[200px] lg:w-[200px]"
                    }`}
                    onClick={() => setIsFirstBig(true)}
                >
                    <img
                    src="/gambar/gbBesar.png"
                    alt="Gambar Besar"
                    className="w-full h-auto rounded-xl object-cover"
                    />
                </div>

                <div
                    className={`transition-all duration-1000 ${
                    !isFirstBig
                        ? "w-full lg:w-[450px] z-10"
                        : "cursor-pointer absolute bottom-[-10px] left-[-20px] z-20 w-2/3 sm:w-[220px] lg:w-[220px]"
                    }`}
                    onClick={() => setIsFirstBig(false)}
                >
                    <img
                    src="/gambar/gbKecil.png"
                    alt="Gambar Kecil"
                    className="w-full h-auto rounded-xl object-cover"
                    />
                </div>
            </div>



            <div className='text-2xl ml-0 lg:ml-10 text-center flex mt-10 flex-col lg:text-left'>
                <p>Ampat adalah website jurnal mengenai salah satu wisata pulau terindah di indonesia yaitu  <span className='font-bold'>RAJA AMPAT</span>,disini kamu dapat mengetahui fakta dan hal menarik seputar raja ampat tentunya dengan animasi dan tampilan yang menarik ,membuat kalian dapat mencerna informasi dan menambah edukasi dengan nyaman</p>
            </div>

        </div>
    </div>
  )
}

export default About
