import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import BigFrame from "../../assets/frame4/gif/BigFrame.gif";

const Frame4 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for CCMan
    gsap.fromTo(
      ".ccman-animation2",
      {
        x: "-100%",
      },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".ccman-animation2",
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
      <div className="bg-orange-400">
        <Image src={CCMan} className="w-[20%] ccman-animation2" />
        <Image src={BigFrame} alt="BigFrame" />
      </div>
    </div>
  );
};

export default Frame4;
