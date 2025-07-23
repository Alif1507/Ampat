import React from 'react'
import { useNavigate } from 'react-router-dom'


const CobaQuiz = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-[#68D4FF] w-screen h-[385px] flex flex-col mt-40 p-20 justify-around relative'>
      <h1 className='font-playfair-display text-6xl'>Ayo Coba <span className='text-[70px] font-playfair-display font-bold bg-gradient-to-r from-[#03374C] to-[#0681B2] bg-clip-text text-transparent'>Quiz</span></h1>

      <p className='font-inter text-3xl'>Jawab Pertanyaan Seputar Raja Ampat dari Kami</p>
       <button
        onClick={() => navigate('/quiz')}
        className='absolute right-30 top-25 shadow-xl text-[#03374C] text-3xl font-bold font-playfair-display w-[204px] h-[62px] rounded-xl bg-white cursor-pointer z-20'
      >
        Mulai Quiz
      </button>

      <img className='absolute right-0 bottom-0' src="gambar/gambarQuiz.png" alt="Gambar Quiz" />
    </section>
  )
}

export default CobaQuiz
