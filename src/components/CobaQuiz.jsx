import React from 'react'
import { useNavigate } from 'react-router-dom'


const CobaQuiz = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-[#68D4FF] w-screen h-[385px] flex flex-col mt-40 p-20 max-md:p-5 justify-around relative' id='quiz'>
      <div className='flex justify-between'>
         <h1 className='font-playfair-display text-6xl max-md:text-5xl'>Ayo Coba <span className='text-[70px] max-md:text-6xl font-playfair-display font-bold bg-gradient-to-r from-[#03374C] to-[#0681B2] bg-clip-text text-transparent relative'>Quiz
        <img className='absolute -right-10 top-0' src="/gambar/quiz-kutip.png" alt="" />
        </span></h1>

         <button
        onClick={() => navigate('/quiz')}
        className=' shadow-xl text-[#03374C] text-3xl font-bold font-playfair-display w-[204px] h-[62px] rounded-xl bg-white cursor-pointer z-20 hover:scale-110 transition-all duration-200 ease-out max-md:right-10 max-md:text-xl'
      >
        Mulai Quiz
      </button>

      </div>

    <div className='flex justify-between'>
      <p className='font-inter text-3xl max-md:text-xl'>Jawab Pertanyaan Seputar Raja Ampat dari Kami</p>
      <button className='bg-[#68D4FF] hadow-xl text-3xl font-bold font-playfair-display w-[204px] h-[62px] rounded-xl cursor-pointer z-20 hover:scale-110 transition-all duration-200 ease-out max-md:right-10 text-[#68D4FF]'>.</button>
      </div>      

      <img className='absolute right-0 bottom-0 w-60 h-auto z-20' src="gambar/gambarQuiz.png"  alt="Gambar Quiz" />
    </section>
  )
}

export default CobaQuiz



