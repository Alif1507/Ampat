import React from "react";
import { social } from "../../constants";

const Footer = () => {
  return (
    <section className="relative flex flex-col oks mt-32 md:mt-60 pb-50">
      {/* Top section with logo and social media */}
      <footer className="w-full h-auto mt-100 relative z-10 flex pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-40 gap-6 md:gap-0">
          <div className="flex flex-col items-center">
            <img
              className="w-[80px] md:w-[106px] h-auto"
              src="/gambar/LOGO.png"
              alt="Logo"
            />
            <h1 className="text-white font-play text-lg md:text-xl text-center mt-2">
              Ampat
            </h1>
          </div>
          <div className="flex relative z-10 gap-4 md:gap-5">
            {social.map((s) => (
              <img
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] cursor-pointer hover:opacity-80 transition-opacity pointer-events-auto"
                key={s.id}
                src={s.src}
                alt="Social"
              />
            ))}
          </div>
        </div>
      </footer>

      {/* Main footer content */}
      <footer className="mt-8 md:mt-15 px-6 md:px-40">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          {/* Quick Links Section */}
          <div className="flex-1 max-w-md">
            <h1 className="text-white font-inter font-bold text-lg md:text-xl mb-6 md:mb-10">
              Quick Links
            </h1>
            <div className="flex flex-col gap-6 md:gap-8">
              {/* First row of links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-2 text-white font-inter opacity-85 hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </div>

                <div className="flex items-center gap-2 text-white font-inter opacity-85 hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </div>
              </div>

              {/* Second row of links */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-2 text-white font-inter opacity-85 hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="#information" className="hover:underline">
                    Information
                  </a>
                </div>

                <div className="flex items-center gap-2 text-white font-inter opacity-85 hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="#quiz" className="hover:underline">
                    Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex-1 max-w-md">
            <h1 className="text-white font-inter font-bold text-lg md:text-xl mb-6 md:mb-10">
              Contact Us
            </h1>
            <div className="flex flex-col gap-6 md:gap-8 text-white font-inter opacity-85">
              <div className="flex items-center gap-4 md:gap-6 hover:opacity-100 transition-opacity">
                <img 
                  src="/gambar/ic_baseline-whatsapp.png" 
                  alt="whatsapp" 
                  className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                />
                <span className="text-sm md:text-base">+764-887-904</span>
              </div>
              <div className="flex items-center gap-4 md:gap-6 hover:opacity-100 transition-opacity">
                <img 
                  src="/gambar/ic_baseline-email.png" 
                  alt="email" 
                  className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                />
                <span className="text-sm md:text-base break-all">RajaAmpat@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="flex flex-col gap-4 md:gap-6 flex-1 max-w-md lg:max-w-sm">
            <h1 className="text-white font-inter font-bold text-lg md:text-xl">
              Kirim Pesan Seputar Raja Ampat
            </h1>
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Send Your Question" 
                className="w-full min-h-[45px] md:min-h-[51px] bg-white pl-4 md:pl-5 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
              <button className="w-full sm:w-[135px] h-[40px] md:h-[37px] bg-[#F5F5DC] text-[#03374C] px-3 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-opacity-90 transition-colors cursor-pointer">
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;