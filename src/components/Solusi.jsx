import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Solusi = () => {
  useGSAP(() => {
    // Create responsive animation based on screen size
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Desktop animation
      gsap.to(".meluncur", {
        scrollTrigger: {
          trigger: ".meluncur",
          start: "bottom bottom",
          end: "top 10%",
          scrub: true,
        },
        x: 900,
        ease: "power1.inOut",
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile animation - reduced movement
      gsap.to(".meluncur", {
        scrollTrigger: {
          trigger: ".meluncur",
          start: "bottom bottom",
          end: "top 10%",
          scrub: true,
        },
        x: 200,
        ease: "power1.inOut",
      });
    });
  });

  return (
    <section className="flex flex-col items-center mt-16 md:mt-30 px-4 md:px-0">

      <div className="mt-12 md:mt-24 w-full max-w-[1120px]">
        {/* Responsive image */}
        <img
          src="/gambar/bahanSolusi.png"
          className="meluncur h-auto max-w-[100px] md:max-w-none"
          alt="bahanSolusi"
        />
        
        {/* Responsive content card */}
        <div className="w-full bg-white rounded-lg flex flex-col justify-center px-6 md:px-30 py-8 md:py-0 md:h-[318px] gap-6 md:gap-10 relative overflow-hidden">
          {/* Responsive heading */}
          <h1 className="text-xl md:text-3xl font-playfair-display font-bold leading-tight">
            <span className="block md:inline">
              Bagaimana? setelah kalian melihat tentang Raja Ampat diatas
            </span>
            <br className="hidden md:block" />
            <span className="block md:inline mt-2 md:mt-0">
              apakah mata kalian lebih terbuka
            </span>
          </h1>
          
          {/* Responsive quote */}
          <p className="font-inter text-lg md:text-2xl italic font-extralight relative z-10 leading-relaxed">
            <span className="block md:inline">
              "Melindungi Raja Ampat bukan hanya tugas warga Papua, tapi tanggung jawab
            </span>
            <br className="hidden md:block" />
            <span className="block md:inline mt-1 md:mt-0">
              dunia."
            </span>
          </p>
          
          {/* Responsive background image */}
          <img
            className="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto w-20 md:w-auto md:max-w-94 opacity-80 md:opacity-100"
            src="/gambar/bahanSolusi1.png"
            alt="bahanSolusi"
          />
        </div>
      </div>
    </section>
  );
};

export default Solusi;