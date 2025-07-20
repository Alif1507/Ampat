import React from "react";
import { social } from "../../constants";

const Footer = () => {
  return (
    <section class="relative flex flex-col mt-60 oks pb-10">
      {/* <img className="absolute w-screen bg-[#F5F5DC] -z-20" src="/gambar/Rectangle 45.png" alt="" /> */}

      <footer className="w-screen  h-auto relative z-10 mt-60 flex pointer-events-none">
        <div className="flex items-center justify-between w-full mx-40">
          <div className="flex flex-col">
            <img
              className="w-[106px] h-auto"
              src="/gambar/LOGO.png"
              alt="Logo"
            />
            <h1 className="text-white font-play text-xl text-center">Ampat</h1>
          </div>
          <div className="flex relative z-10 gap-5">
            {social.map((s) => (
              <img
                className="w-[50px] h-[50px]"
                key={s.id}
                src={s.src}
                alt="Social"
              />
            ))}
          </div>
        </div>
      </footer>

      <footer className="mt-15 flex justify-between mx-40">
        <div className="">
          <h1 className="text-white font-inter font-bold">Quick Links</h1>
          <div className="flex flex-col gap-12 mt-10">
            <div className="flex gap-2 item text-white font-inter opacity-85">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#home" className="mr-24">Home</a>

               <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#about">About</a>
            </div>
            <div>
              <div className="flex gap-2 item text-white font-inter opacity-85">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <a className="mr-15" href="#information">Information</a>

               <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="#quiz">Quiz</a>
            </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-white font-inter font-bold">Contact Us</h1>
            <div className="flex flex-col justify-start gap-10 text-white font-inter opacity-85 mt-10">

               <div className="flex items-center gap-6">
                <img src="/gambar/ic_baseline-whatsapp.png" alt="whatsapp" />
                <h1>
                  +764-887-904
                </h1>
              </div>
              <div className="flex items-center gap-6">
                <img src="/gambar/ic_baseline-email.png" alt="whatsapp" />
                <h1>
                  RajaAmpat@gmail.com
                </h1>
              </div>
            </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-white font-inter font-bold">
            Kirim Pesan Seputar Raja Ampat
          </h1>
          <input type="text" placeholder="Send Your Question" className="min-w-[306px] h-[51px] bg-white pl-5 rounded-lg" />
          <button className="w-[135px] h-[37px] bg-[#F5F5DC] text-[#03374C] px-3 py-1 rounded-lg text-bold">Kirim Pesan</button>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
