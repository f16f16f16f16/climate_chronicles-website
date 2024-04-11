import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import BigFrame from "../../assets/frame6/gif/BigFrame.gif";
import Boomer from "../../assets/frame6/gif/Boomer.gif";

const Frame6 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for CCMan
    gsap.fromTo(
      ".ccman-animation4",
      {
        x: "-100%",
      },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".ccman-animation4",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-amber-700">
        <Image src={CCMan} className="w-[20%] ccman-animation4" />
        <Image src={BigFrame} alt="BigFrame" />
        <Image src={Boomer} alt="Boomer" className="w-1/3 -mt-[24%] ml-[60%]" />
      </div>
    </div>
  );
};

export default Frame6;
