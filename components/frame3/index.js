import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import Plane from "../../assets/frame3/images/Plane.webp";
import Building from "../../assets/frame3/gif/Mask_Billboard.gif";
import Factory1 from "../../assets/frame3/gif/Factory1.gif";
import Factory2 from "../../assets/frame3/gif/Factory2.gif";
import Road from "../../assets/frame3/images/Road.webp";
import Car1 from "../../assets/frame3/gif/Car1.gif";
import Car2 from "../../assets/frame3/gif/Car2.gif";
import Car3 from "../../assets/frame3/gif/Car3.gif";

const Frame3 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for CCMan
    gsap.fromTo(
      ".ccman-animation",
      {
        x: "-100%",
      },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".ccman-animation",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-neutral-500">
      <Image src={CCMan} className="w-[20%] ccman-animation" />
      <div className="flex justify-center items-center">
        <Image
          src={Plane}
          className="w-28 md:w-52 xl:w-96 py-20 md:py-36 xl:py-52 2xl:py-72 plane-flip-animation"
        />
      </div>
      <div className="flex gap-x-4 overflow-hidden">
        <Image src={Building} className="w-1/3" />
        <Image src={Factory1} className="w-1/3" />
        <Image src={Factory2} className="w-1/3" />
      </div>

      <div>
        <Image src={Road} className="-mt-[22%]" />
        <div className="flex gap-x-4">
          <div>
            <Image
              src={Car1}
              className="w-2/3 -mt-[60%] ml-10 md:ml-16 xl:ml-28 2xl:ml-36"
            />
          </div>
          <div>
            <Image
              src={Car2}
              className="w-2/3 -mt-[65%] ml-10 md:ml-16 xl:ml-28 2xl:ml-36"
            />
          </div>
          <div>
            <Image
              src={Car3}
              className="w-2/3 -mt-[35%] ml-4 md:ml-16 xl:ml-28 2xl:ml-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
