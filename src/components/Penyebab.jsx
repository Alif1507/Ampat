import React from 'react'
import { penyebab } from '../../constants'

const Penyebab = () => {
  return (
    <section className='flex flex-col items-center mt-30'>
      <h1 className='text-head max-md:text-center'>Apa Penyebab masalah utama dari tambang di papua?</h1>

      <div className='flex max-md:flex-col items-center gap-30 mt-24'>
          {penyebab.map((p) => (
        <div key={p.id} className='w-[332px] h-[355px] rounded-lg bg-white shadow-lg p-8 flex flex-col items-center relative'>
         
            <div className='flex flex-col gap-2' >
            <h2 className='font-inter font-bold'>{p.title}</h2>
           <p className='font-inter text-[18px]'>{p.description}</p>
          </div>
               <img src={p.src} alt="Gambar Penyebab" className='absolute -right-0 bottom-0' />
              <div className='absolute left-0 bottom-29'>
                <div className='absolute w-[49px] h-[116px] rounded-tr-full bg-[#F5F5DC] left-0'></div>
                <div className='absolute w-[49px] h-[116px] rounded-tr-3xl bg-[#F5F5DC] left-20'></div>
            </div>
        </div>
          ))}
      </div>
    </section>
  )
}

export default Penyebab
