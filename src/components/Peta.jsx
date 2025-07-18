import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const Peta = () => {
  const [selectedIzinTambang, setSelectedIzinTambang] = useState(0);

  const berapaIzinTambang = 6;

  const toggleIzinTAmbang = (index) => {
    const newIndex = (index + berapaIzinTambang) % berapaIzinTambang;

    setSelectedIzinTambang(newIndex);
    console.log(newIndex);
  };

  const izinTambangList = [
    "PT.KAWEI SEJAHTERA MINIG (IUP)",
    "PT.ANUGERAH SURYA PRATAMA (IUP)",
    "PT.GAG NIKEL (KK)",
    "PT.MULIA RAYMOND PERKASA (IUP)",
    "PT.NURHAM (IUP)",
  ];

  useGSAP(() => {
    gsap.to(".btn-peta-hover", {
      opacity: 1,
      duration: 0.4,
      ease: "power2.in",
    });

    // Animate the blue line when selectedIzinTambang changes
    if (selectedIzinTambang !== null) {
      gsap.fromTo(
        `.line-anim-${selectedIzinTambang}`,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [selectedIzinTambang]);

  return (
    <section className="z-20 relative justify-center items-center flex flex-col mt-64">
      <h1 className="font-playfair-display text-4xl font-medium">
        Peta izin tambang di Raja Ampat
      </h1>
      <div className="mt-29 relative">
        <img src="/gambar/peta.png" alt="Peta" />
        {/* Show lines only if a button has been clicked */}
        {selectedIzinTambang !== null && selectedIzinTambang === 0 && (
          <div className="absolute w-[70px] h-[70px] top-18 left-27 hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-[5px] -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
        )}
        {selectedIzinTambang !== null && selectedIzinTambang === 1 && (
          <div className="absolute w-[70px] h-[70px] top-18 left-27 line-anim-1">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-[5px] -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="text-white absolute left-20 -top-4 text-nowrap">
              <h1 className="text-white -top-4 font-inter">
                PT.KAWEI SEJAHTERA MINING (IUP)
              </h1>
              <p className="font-extralight">Komoditas : Biji Nickel</p>
              <p className="font-extralight">Luas : 5.922 Hektare</p>
              <p className="font-extralight">Kegiatan : Operasi Produksi</p>
            </div>
          </div>
        )}
        {selectedIzinTambang !== null && selectedIzinTambang === 2 && (
          <div className="absolute w-[100px] h-1 top-21 right-72 line-anim-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-[5px] -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="text-white absolute left-14 top-5 text-nowrap">
              <h1 className="text-white -top-4 font-inter">
                PT.ANUGERAH SURYA PRATAMA (IUP)
              </h1>
              <p className="font-extralight">Komoditas : Nickel</p>
              <p className="font-extralight">Luas : 1.173 Hektare</p>
              <p className="font-extralight">Kegiatan : Operasi Produksi</p>
            </div>
          </div>
        )}
        {selectedIzinTambang !== null && selectedIzinTambang === 3 && (
          <div className="absolute w-[100px] h-1 top-94 left-18 line-anim-3">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-[5px] -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="text-white absolute left-30 -top-4 text-nowrap">
              <h1 className="text-white -top-4 font-inter">
                PT.GAG NIKEL (KK)
              </h1>
              <p className="font-extralight">Komoditas : Nickel</p>
              <p className="font-extralight">Luas : 13.136 Hektare</p>
              <p className="font-extralight">Kegiatan : Operasi Produksi</p>
            </div>
          </div>
        )}
        {selectedIzinTambang !== null && selectedIzinTambang === 4 && (
          <div className="absolute w-[70px] h-[70px] top-60 left-40 line-anim-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-[5px] -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="text-white absolute left-20 -top-4 text-nowrap">
              <h1 className="text-white -top-4 font-inter">
                PT.MULIA RAYMOND PERKASA(IUP)
              </h1>
              <p className="font-extralight">Komoditas : Nickel</p>
              <p className="font-extralight">Luas          : 2.193 Hektare</p>
              <p className="font-extralight">Kegiatan    : Operasi Produksi</p>
            </div>
          </div>
        )}
        {selectedIzinTambang !== null && selectedIzinTambang === 5 && (
          <div className="absolute w-[100px] h-1 top-75 right-40 line-anim-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-[5px] -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="text-white absolute left-8 top-6 text-nowrap">
              <h1 className="text-white -top-4 font-inter">
                PT.NURHAM (IUP)
              </h1>
              <p className="font-extralight">Komoditas : Nikel</p>
              <p className="font-extralight">Luas          : 3.000 Hektare</p>
              <p className="font-extralight">Kegiatan : Operasi Produksi</p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-5">
          <div className="btn-peta">
            <button
              onClick={() => toggleIzinTAmbang(1)}
              className="font-inter text-lg w-[362px] h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover"
            >
              {izinTambangList[0]}
            </button>
            <button
              onClick={() => toggleIzinTAmbang(2)}
              className="font-inter text-lg w-[362px] h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover"
            >
              {izinTambangList[1]}
            </button>
          </div>
          <div className="btn-peta">
            <button
              onClick={() => toggleIzinTAmbang(3)}
              className="font-inter text-lg w-[362px] h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover"
            >
              {izinTambangList[2]}
            </button>
            <button
              onClick={() => toggleIzinTAmbang(4)}
              className="font-inter text-lg w-[362px] h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover"
            >
              {izinTambangList[3]}
            </button>
          </div>
          <div className="btn-peta">
            <button
              onClick={() => toggleIzinTAmbang(5)}
              className="font-inter text-lg w-[362px] h-[67px] rounded-xl bg-white shadow-lg btn-peta-hover banget"
            >
              {izinTambangList[4]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peta;
