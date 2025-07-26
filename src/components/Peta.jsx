import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Peta = () => {
  const [selectedIzinTambang, setSelectedIzinTambang] = useState(null);

  const toggleIzinTambang = (index) => {
    // Toggle: if same index is clicked, hide it; otherwise show the new one
    setSelectedIzinTambang(selectedIzinTambang === index ? null : index);
  };

  const izinTambangData = [
    {
      name: "PT.KAWEI SEJAHTERA MINING (IUP)",
      komoditas: "Biji Nickel",
      luas: "5.922 Hektare",
      kegiatan: "Operasi Produksi",
      position: "top-0 left-10 sm:top-18 sm:left-27",
      lineType: "corner", // L-shaped line
      textPosition: "left-7 top-3 sm:left-20 sm:-top-4"
    },
    {
      name: "PT.ANUGERAH SURYA  PRATAMA (IUP)",
      komoditas: "Nickel",
      luas: "1.173 Hektare",
      kegiatan: "Operasi Produksi",
      position: "top-8 right-20 sm:top-21 sm:right-63",
      lineType: "horizontal", // horizontal line
      textPosition: "-left-30 top-5 sm:left-14 sm:top-5"
    },
    {
      name: "PT.GAG NIKEL (KK)",
      komoditas: "Nickel",
      luas: "13.136 Hektare",
      kegiatan: "Operasi Produksi",
      position: "top-35 left-7 sm:top-88 sm:left-18",
      lineType: "horizontal",
      textPosition: "left-20 -top-4 sm:left-30 sm:-top-4"
    },
    {
      name: "PT.MULIA RAYMOND PERKASA (IUP)",
      komoditas: "Nickel",
      luas: "2.193 Hektare",
      kegiatan: "Operasi Produksi",
      position: "top-15 left-14 sm:top-53 sm:left-38",
      lineType: "corner",
      textPosition: "left-16 -top-4 sm:left-20 sm:-top-4"
    },
    {
      name: "PT.NURHAM (IUP)",
      komoditas: "Nikel",
      luas: "3.000 Hektare",
      kegiatan: "Operasi Produksi",
      position: "top-27 right-8 sm:top-70 sm:right-36",
      lineType: "horizontal",
      textPosition: "-left-15 top-4 sm:left-8 sm:top-6"
    }
  ];

  useGSAP(() => {
    gsap.to(".btn-peta-hover", {
      opacity: 1,
      duration: 0.4,
      ease: "power2.in",
    });

    // Animate the line when selectedIzinTambang changes
    if (selectedIzinTambang !== null) {
      gsap.fromTo(
        `.line-anim-${selectedIzinTambang}`,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [selectedIzinTambang]);

  const renderLine = (data, index) => {
    if (selectedIzinTambang !== index) return null;

    const baseClasses = `absolute line-anim-${index}`;
    
    if (data.lineType === "corner") {
      return (
        <div className={`${baseClasses} ${data.position} w-12 h-12 sm:w-[70px] sm:h-[70px]`}>
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <div className="absolute -top-[5px] -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
          <div className={`text-white absolute text-nowrap ${data.textPosition}`}>
            <h1 className="text-white font-inter text-xs sm:text-base font-semibold">
              {data.name}
            </h1>
            <p className="font-extralight text-xs sm:text-sm">Komoditas: {data.komoditas}</p>
            <p className="font-extralight text-xs sm:text-sm">Luas: {data.luas}</p>
            <p className="font-extralight text-xs sm:text-sm">Kegiatan: {data.kegiatan}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`${baseClasses} ${data.position} w-16 sm:w-[100px] h-1`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <div className="absolute -top-[5px] -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></div>
          <div className={`text-white absolute text-nowrap ${data.textPosition}`}>
            <h1 className="text-white font-inter text-xs sm:text-base font-semibold">
              {data.name}
            </h1>
            <p className="font-extralight text-xs sm:text-sm">Komoditas: {data.komoditas}</p>
            <p className="font-extralight text-xs sm:text-sm">Luas: {data.luas}</p>
            <p className="font-extralight text-xs sm:text-sm">Kegiatan: {data.kegiatan}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="z-20 relative justify-center items-center flex flex-col mt-32 sm:mt-64 px-4">
      <h1 className="font-playfair-display text-2xl sm:text-4xl font-medium relative text-center mb-8 sm:mb-0">
        Peta izin tambang di Raja Ampat
        <img 
          className="absolute -right-8 sm:-right-25 top-10 w-6 sm:w-auto" 
          src="/gambar/taliItem.png" 
          alt="" 
        />
      </h1>
      
      <div className="mt-8 sm:mt-29 relative w-full max-w-4xl">
        {/* Map container with responsive sizing */}
        <div className="relative w-full">
          <img 
            src="/gambar/peta.png" 
            alt="Peta" 
            className="w-full h-auto max-w-full"
          />
          
          {/* Cloud decorations - hidden on mobile for cleaner look */}
          <img 
            className="absolute -right-20 sm:-right-40 -top-25 sm:-top-50 w-16 sm:w-auto hidden sm:block" 
            src="/gambar/awanPeta.png" 
            alt="" 
          />
          <img 
            className="absolute -left-20 sm:-left-50 -top-25 sm:-top-50 w-16 sm:w-auto hidden sm:block" 
            src="/gambar/awanPeta.png" 
            alt="" 
          />
          
          {/* Dynamic lines and info boxes */}
          {izinTambangData.map((data, index) => renderLine(data, index))}
        </div>
        
        {/* Buttons section - responsive grid */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-5">
          {/* Mobile: Single column, Desktop: Two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl">
            {izinTambangData.slice(0, 4).map((data, index) => (
              <button
                key={index}
                onClick={() => toggleIzinTambang(index)}
                className={`font-inter text-sm sm:text-lg w-full h-16 sm:h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover transition-all duration-200 hover:shadow-xl hover:scale-105 px-4 ${
                  selectedIzinTambang === index ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
          
          {/* Last button - full width on mobile, centered on desktop */}
          <div className="w-full max-w-2xl">
            <button
              onClick={() => toggleIzinTambang(4)}
              className={`font-inter text-sm sm:text-lg w-full sm:w-96 h-16 sm:h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover transition-all duration-200 hover:shadow-xl hover:scale-105 px-4 mx-auto block ${
                selectedIzinTambang === 4 ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
            >
              {izinTambangData[4].name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peta;