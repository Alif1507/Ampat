import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const Read = () => {
  return (
    <div className='' id='read'>
        {/* Title */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col justify-center items-center'
        >
            <h1 className='hero-title text-4xl pt-20 mb-1 font-medium'>Read</h1>
            <img src="/gambar/garis1.png" alt="" />
        </motion.div> 

        {/* Background */}
        <div className='relative'>
            <img className='absolute w-full max-md:hidden top-64 z-0' src="/gambar/Ellipse 1.png" alt="" />
            <img className='absolute md:hidden top-64 z-0' src="/gambar/Ellipse 1.png" alt="" />
            <img className='absolute top-80 z-0' src="/gambar/gambar-cantik.png" alt="" />
        </div>
       
        {/* desktop */}
       <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-center gap-10 lg:gap-20 mt-10 max-md:hidden"
        >
        <div className="relative transition-all hover:rotate-8 duration-500 max-w-[286px] w-full">
            <img className="object-cover w-full rounded-xl" src="/gambar/gambar-kiri.png" alt="" />
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-4 py-4 text-white rounded-b-xl">
            <h1 className="text-base md:text-lg lg:text-xl font-semibold">About Papua</h1>
            <p className="text-xs md:text-sm lg:text-base mt-1 font-light">
                Jelajahi Papua lebih dalam banyak hal yang menarik, baca sekarang
            </p>
            <button className="mt-3 bg-[#05668D] py-1 md:py-1.5 px-2 md:px-3 text-xs md:text-sm lg:text-base rounded-xl">
                Baca Sekarang
            </button>
            </div>
        </div>

        <div className="relative transition-all hover:rotate-8 duration-500 max-w-[367px] w-full">
            <img className="object-cover w-full rounded-2xl" src="/gambar/gambar-tengah.png" alt="" />
            <div className="absolute bottom-0 w-full h-52 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-4 py-4 text-white rounded-b-2xl">
            <h1 className="text-base md:text-lg lg:text-xl font-semibold">Whats Make Raja Ampat Special</h1>
            <p className="text-xs md:text-sm lg:text-base mt-1 font-light">
                Penasaran Apa yang membuat raja Ampat begitu special? baca sekarang
            </p>
            <button className="mt-3 bg-[#05668D] py-1 md:py-1.5 px-2 md:px-3 text-xs md:text-sm lg:text-base rounded-xl">
                Baca Sekarang
            </button>
            </div>
        </div>

        <div className="relative transition-all hover:rotate-8 duration-500 max-w-[286px] w-full">
            <img className="object-cover w-full rounded-xl" src="/gambar/gambar-kanan.png" alt="" />
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-4 py-4 text-white rounded-b-xl">
            <h1 className="text-base md:text-lg lg:text-xl font-semibold">Destination In Papua</h1>
            <p className="text-xs md:text-sm lg:text-base mt-1 font-light">
                Papua Memiliki banyak destinasi yang memukai, baca sekarang
            </p>
            <button className="mt-3 bg-[#05668D] py-1 md:py-1.5 px-2 md:px-3 text-xs md:text-sm lg:text-base rounded-xl">
                Baca Sekarang
            </button>
            </div>
        </div>
        </motion.div>

        {/* mobile */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col justify-center items-center gap-20 mt-10 md:hidden'
        >
           <div>
              <div className='relative transition-all hover:rotate-8 duration-500'>
                <img className='object-cover w-50' src="/gambar/gambar-tengah.png" alt="" />
                <div className='absolute bottom-0 ml-1 w-49 h-30 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-6 py-5 text-white rounded-b-2xl items-center'>
                    <h1 className='text-[12px] font-semibold'>Whats Make Raja Ampat Special</h1>
                    <p className='text-[10px] font-light'>Penasaran Apa yang membuat raja Ampat begitu special? baca sekarang</p>
                </div>
            </div>
           </div>
           <div className='flex gap-10'>
             <div className='relative transition-all hover:rotate-8 duration-500'>
                <img className='object-cover w-40' src="/gambar/gambar-kiri.png" alt="" />
                <div className='absolute bottom-0 w-40 h-25 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-6 py-5 text-white rounded-b-xl '>
                    <h1 className='text-[12px] font-semibold'>About Papua</h1>
                    <p className='text-[9px]  font-light'>Jelajahi Papua lebih dalam banyak hal yang menarik, baca sekarang</p>
                </div>
            </div>
           <div className='relative transition-all hover:rotate-8 duration-500'>
                <img className='object-cover w-40' src="/gambar/gambar-kanan.png" alt="" />
                <div className='absolute bottom-0 w-40 h-25 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-6 py-5 text-white rounded-b-xl'>
                    <h1 className='text-[12px] font-semibold'>Destination In Papua</h1>
                    <p className='text-[9px] font-light'>Papua Memiliki banyak destinasi yang memukai, baca sekarang</p>
                </div>
            </div>
           </div>
        </motion.div>
    </div>
  )
}

export default Read
