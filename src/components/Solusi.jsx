import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Solusi = () => {
  useGSAP(() => {
    gsap.to('.meluncur', {
      scrollTrigger: {
        trigger: ".meluncur",
        start: "bottom bottom",
        end: "top 10%",
        scrub: true,
      },
      x: 900,
      ease: "power1.inOut",
    })
  })


  return (
    <section className='flex flex-col items-center mt-30'>
        <button className='bg-white rounded-xl shadow-lg w-[204px] h-[62px] px-6 py-4 text-head flex items-center justify-center font-bold'>
          Solusi
        </button>

        <div className='mt-24'>
          <img src="/gambar/bahanSolusi.png" className='meluncur' alt="bahanSolusi" />
          <div className='max-w-[1120px] h-[318px] bg-white rounded-lg  flex flex-col justify-center  px-30  gap-10 relative' >
            <h1 className='text-3xl font-playfair-display font-bold'>Bagaimana? setelah kalian melihat tentang Raja Ampat diatas <br /> apakah mata kalian lebih terbuka</h1>
            <p className='font-inter text-2xl italic font-extralight relative z-10'>"Melindungi Raja Ampat bukan hanya tugas warga Papua, tapi tanggung jawab <br /> dunia."</p>
            <img className='absolute right-0 h-auto max-w-94' src="/gambar/bahanSolusi1.png" alt="bahanSolusi" />
          </div>
        </div>
    </section>
  )
}

export default Solusi
