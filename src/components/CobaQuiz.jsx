import React from 'react'

const CobaQuiz = () => {
  return (
    <section className='bg-[#68D4FF] w-screen h-[385px] flex flex-col mt-100 p-20 justify-around relative'>
      <h1 className='font-playfair-display text-6xl'>Ayo Coba <span className='text-[70px] font-playfair-display font-bold bg-gradient-to-r from-[#03374C] to-[#0681B2] bg-clip-text text-transparent'>Quiz</span></h1>

      <p className='font-inter text-3xl'>Jawab Pertanyaan Seputar Raja Ampat dari Kami</p>
      <a href="/quiz" className='absolute right-30 top-25 shadow-xl'><button className='text-[#03374C] text-3xl font-bold font-playfair-display w-[204px] h-[62px] rounded-xl bg-white'>Mulai Quiz</button></a>

      <img className='absolute right-0 bottom-0' src="gambar/gambarQuiz.png"  alt="Gambar Quiz" />
    </section>
  )
}

export default CobaQuiz
