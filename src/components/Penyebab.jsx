import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { dataSolusi, penyebab } from '../../constants'

const Penyebab = () => {
  const [puter, setPuter] = useState(false);
  
  const handlePuter = () => {
    setPuter(!puter)
  }

  const cardVariants = {
    initial: { rotateY: 0, opacity: 1 },
    exit: { 
      rotateY: 90, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    },
    enter: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.3 }
    }
  }

  return (
    <section className='flex flex-col items-center mt-30'>
      <motion.h1 
        className='text-head max-md:text-center'
        key={puter ? 'solusi' : 'penyebab'}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {puter ? 'Solusi untuk masalah tambang di Papua' : 'Apa Penyebab masalah utama dari tambang di papua?'}
      </motion.h1>
      
      <div className='flex flex-col md:flex-col lg:flex-col items-center gap-30 mt-24 relative' style={{ perspective: '1000px' }}>
        <AnimatePresence mode="wait">
          {!puter ? (
            <motion.div
              key="penyebab"
              className='flex flex-col xl:flex xl:flex-row items-center gap-30'
              variants={cardVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {penyebab.map((p) => (
                <motion.div 
                  key={p.id} 
                  className='w-[332px] h-[355px] rounded-lg bg-white shadow-lg p-8 flex flex-col items-center relative'
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className='flex flex-col gap-2'>
                    <h2 className='font-inter font-bold'>{p.title}</h2>
                    <p className='font-inter text-[18px]'>{p.description}</p>
                  </div>
                  <img src={p.src} alt="Gambar Penyebab" className='absolute -right-0 bottom-0' />
                  <div className='absolute left-0 bottom-29'>
                    <div className='absolute w-[49px] h-[116px] rounded-tr-full bg-[#F5F5DC] left-0'></div>
                    <div className='absolute w-[49px] h-[116px] rounded-tr-3xl bg-[#F5F5DC] left-20'></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="solusi"
              className='flex flex-col lg:flex lg:flex-row items-center gap-30'
              variants={cardVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {dataSolusi.map((p) => (
                <motion.div 
                  key={p.id} 
                  className='w-[332px] h-[355px] rounded-lg bg-white shadow-lg p-8 flex flex-col items-center relative'
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className='flex flex-col gap-2'>
                    <h2 className='font-inter font-bold'>{p.judul}</h2>
                    <p className='font-inter text-[18px]'>{p.parag}</p>
                  </div>
                  <img src={`/gambar/${p.img}`} alt="Gambar Solusi" className='absolute -right-0 bottom-0' />
                  <div className='absolute left-0 bottom-29'>
                    <div className='absolute w-[49px] h-[116px] rounded-tr-full bg-[#F5F5DC] left-0'></div>
                    <div className='absolute w-[49px] h-[116px] rounded-tr-3xl bg-[#F5F5DC] left-20'></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <motion.button 
        onClick={handlePuter} 
        className="bg-white cursor-pointer hover:scale-110 transition-all duration-200 rounded-xl shadow-lg mt-20 w-[180px] md:w-[204px] h-[56px] md:h-[62px] px-4 md:px-6 py-3 md:py-4 text-head flex items-center justify-center font-bold text-sm md:text-base"
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {puter ? 'Penyebab' : 'Solusi'}
      </motion.button>
    </section>
  )
}

export default Penyebab