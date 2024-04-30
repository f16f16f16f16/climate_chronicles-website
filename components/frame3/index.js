import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import Plane from "../../assets/frame3/images/Plane.webp";
import Building from "../../assets/frame3/gif/Mask_Billboard.webp";
import Factory1 from "../../assets/frame3/gif/Factory1.webp";
import Factory2 from "../../assets/frame3/gif/Factory2.webp";
import Road from "../../assets/frame3/images/Road.webp";
import Car1 from "../../assets/frame3/gif/Car1.webp";
import Car2 from "../../assets/frame3/gif/Car2.webp";
import Car3 from "../../assets/frame3/gif/Car3.webp";

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
      <div className="flex">
        <Image src={CCMan} className="w-[20%] ccman-animation" />
        <div>
          <Textarea
            isReadOnly
            disableAutosize
            className=""
            color="primary"
            label="CCMan"
            defaultValue="Does everyone understand, right?"
          />
          <Textarea
            isReadOnly
            disableAutosize
            className="absolute w-[60%]"
            color="primary"
            label="CCMan"
            defaultValue="Next, Ccman will tell everyone about human activities that produce various gases, which also contribute to greenhouse gases. They also have the effect of increasing heat in the atmosphere"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Plane}
          className="w-28 md:w-52 xl:w-96 py-20 md:py-36 xl:py-52 2xl:py-72 plane-flip-animation"
        />
      </div>
      <Textarea
        isReadOnly
        disableAutosize
        className=""
        color="primary"
        label="CCMan"
        defaultValue="Whether it's industrial factories, machinery, transportation by land or air, or even shopping malls, all of the mentioned activities are involved in processes that result in the emission of carbon dioxide (CO2)"
      />
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
