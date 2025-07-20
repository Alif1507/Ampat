import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Artikel = () => {
  const images = [
    {
      src: "/gambar/artikel 1.png",
      source: "detik.com",
      title: "Ini Daftar 5 Perusahaan Tambang Nikel di Raja Ampat"
    },
    {
      src: "/gambar/artikel 2.png",
      source: "Kementerian ESDM",
      title: "Pemerintah Cabut Empat Izin Perusahaan Tambang di Raja Ampat"
    },
    {
      src: "/gambar/artikel 3.png",
      source: "Tempo.co",
      title: "Tambang Nikel Mengancam Ekowisata di Raja Ampat"
    },
    {
      src: "/gambar/artikel 4.png",
      source: "Kementerian ESDM",
      title: "Pemerintah Perketat Pengawasan Lima Perusahaan Tambang di Raja Ampat"
    },
    {
      src: "/gambar/artikel 5.png",
      source: "Bisnis.com",
      title: "Profil 5 Perusahaan yang Punya Izin Tambang Nikel di Raja Ampat"
    },
  ];

  return (
    <div className="mt-20 px-4 md:px-12">
      <div className="flex flex-col relative  items-center text-white">
        <h1 className="text-4xl font-medium">Artikel</h1>
        <img src="/gambar/garis-putih.png" alt="garis" className="mt-2" />
      </div>

      <div className="mt-12 justify-center ml-10 items-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          grabCursor={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src={img.src}
                  alt={`artikel-${index}`}
                  className=" object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm font-semibold">{img.source}</p>
                  <p className="text-xs">{img.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Artikel;
