import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame6/gif/BigFrame.webp";
import Boomer from "../../assets/frame6/gif/Boomer.webp";

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
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation4" />
          <div>
            <Textarea
              isReadOnly
              disableAutosize
              className="absolute w-[60%]"
              color="primary"
              label="CCMan"
              defaultValue="Furthermore, mining is another factor contributing to the production of methane (CH4) and carbon dioxide (CO2). This is because mining involves drilling, blasting, and machinery for crushing rocks or minerals obtained from mining. Gases are released during coal extraction, and there are also trucks transporting rocks that emit CO2 and particulate matter. All of these activities have adverse effects on workers and people in nearby areas. "
            />
          </div>
        </div>
        <Image src={BigFrame} alt="BigFrame" />
        <Image src={Boomer} alt="Boomer" className="w-1/3 -mt-[24%] ml-[60%]" />
      </div>
    </div>
  );
};

export default Frame6;
