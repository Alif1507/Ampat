import React from 'react'

const Read = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='hero-title text-4xl pt-20 mb-1 font-medium'>Read</h1>
            <img src="/gambar/garis1.png" alt="" />
        </div> 

        <div className='relative'>
            <img className='absolute w-full max-md:hidden top-64 z-0' src="/gambar/Ellipse 1.png" alt="" />
            <img className='absolute md:hidden top-64 z-0' src="/gambar/Ellipse 1.png" alt="" />
            <img className='absolute top-80 z-0' src="/gambar/gambar-cantik.png" alt="" />
        </div>
       
        {/* desktop */}
        <div className='flex justify-center items-center gap-20 mt-10 max-md:hidden'>
            <div className='relative transition-all hover:rotate-8 duration-500'>
                <img className='object-cover' src="/gambar/gambar-kiri.png" alt="" />
                <div className='absolute bottom-0 ml-1 w-[286px] h-40 mb-1 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-6 py-5 text-white rounded-b-xl '>
                    <h1 className='text-xl font-semibold'>About Papua</h1>
                    <p className='text-sm mt-1 font-light'>Jelajahi Papua lebih dalam banyak hal yang menarik, baca sekarang</p>
                    <button className='mt-4 bg-[#05668D] py-1 px-2 text-[13px]  rounded-xl'>Baca Sekarang</button>
                </div>
            </div>
            <div className='relative transition-all hover:rotate-8 duration-500'>
                <img className='object-cover' src="/gambar/gambar-tengah.png" alt="" />
                <div className='absolute bottom-0 ml-1 w-[367px] h-52 mb-1 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-6 py-5 text-white rounded-b-2xl items-center'>
                    <h1 className='text-xl font-semibold'>Whats Make Raja Ampat Special</h1>
                    <p className='text-sm mt-1 font-light'>Penasaran Apa yang membuat raja Ampat begitu special? baca sekarang</p>
                    <button className='mt-4 bg-[#05668D] py-1 px-2 text-[13px]  rounded-xl'>Baca Sekarang</button>
                </div>
            </div>
            <div className='relative transition-all hover:rotate-8 duration-500'>
                <img className='object-cover' src="/gambar/gambar-kanan.png" alt="" />
                <div className='absolute bottom-0 ml-1 w-[286px] h-40 mb-1 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[3px] px-6 py-5 text-white rounded-b-xl'>
                    <h1 className='text-xl font-semibold'>Destination In Papua</h1>
                    <p className='text-sm mt-1 font-light'>Papua Memiliki banyak destinasi yang memukai, baca sekarang</p>
                    <button className='mt-4 bg-[#05668D] py-1 px-2 text-[13px] rounded-xl'>Baca Sekarang</button>
                </div>
            </div>
        </div>

        {/* mobile */}

        <div className='flex flex-col justify-center items-center gap-20 mt-10 md:hidden'>
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
        </div>
    </div>
  )
}

export default Read




            


           