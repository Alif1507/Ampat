import React from "react";
import { gambar1, gambar2 } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

const Gambaran = () => {
  useGSAP(() => {
    gsap.from(".gbr-ats", {
      scrollTrigger: {
        trigger: ".banget",
        start: "bottom bottom",
        scrub: true,
      },
      xPercent: -100,
      ease: "",
    });

    gsap.from(".gbr-bwh", {
      scrollTrigger: {
        trigger: ".banget",
        start: "bottom bottom",
        scrub: true,
      },
      xPercent: 100,
      ease: "power1.inOut",
    });
  });

  // useGSAP(() => {
  //   gsap.from(".gbr-ats", {
  //     xPercent: -100,

  //   })
  // })
  return (
    <section className="flex relative flex-col justify-center items-center mt-58 gambaran">
      <h1 className="text-head relative max-md:text-center max-md:px-7">Perampakan Pertambangan Raja Ampat 
        <img className="absolute -right-25 max-md:right-10 max-md:hidden" src="/gambar/taliItem.png" alt="" />
      </h1>
      <img
        className="absolute right-0 top-0  z-30"
        src="/gambar/Rectangle 15.png"
        alt=""
      />
      <img
        className="absolute right-0 top-50  z-30"
        src="/gambar/Rectangle 15.png"
        alt=""
      />
      <img
        className="absolute left-0 top-0  z-30"
        src="/gambar/Rectangle 12.png"
        alt=""
      />
      <img
        className="absolute left-0 top-50  z-30"
        src="/gambar/Rectangle 12.png"
        alt=""
      />
      <Marquee pauseOnHover={true} speed={40} direction="left">
        <div className="flex gap-20 mx-20 mt-20 gbr-ats max-md:mx-0 max-md:gap-0">
          {gambar1.map((g, index) => (
            <img key={index} src={g.src} className="max-md:w-50" alt="Gambar TAMBANG" />
          ))}
        </div>
      </Marquee>

      <Marquee pauseOnHover={true} speed={40} direction="right">
        <div className="flex gap-20 mx-20 mt-20 gbr-bwh max-md:mx-0 max-md:gap-0">
          {gambar2.map((g, index) => (
            <img key={index} src={g.src} className="max-md:w-50" alt="Gambar TAMBANG" />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Gambaran;
