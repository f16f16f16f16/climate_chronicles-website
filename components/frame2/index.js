import React, { useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

import CCMan from "../../assets/frame2/gif/CCManFly.gif";
import Aura from "../../assets/frame2/images/Aura.png";
import UFO from "../../assets/frame2/images/UFO.png";
import CH4 from "../../assets/frame2/images/CH4.png";
import CO2 from "../../assets/frame2/images/CO2.png";
import HFCs from "../../assets/frame2/images/HFCs.png";
import N20 from "../../assets/frame2/images/N2O.png";
import PFCs from "../../assets/frame2/images/PFCs.png";
import SF6 from "../../assets/frame2/images/SF6.png";

// Register GSAP plugins outside of the component to avoid registering multiple times.
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Frame2 = () => {
  const ccmanRef = useRef(null);

  useEffect(() => {
    // Define the zigzag path for CCMan. Adjust the points as needed.
    const ufoPath = [
      { x: -100, y: 0 }, // start outside the screen on the left
      { x: window.innerWidth * 0.25, y: 100 }, // move to 1/4 of the screen width and down
      { x: window.innerWidth * 0.5, y: -100 }, // move to 1/2 of the screen width and up
      { x: window.innerWidth * 0.75, y: 100 }, // move to 3/4 of the screen width and down
      { x: window.innerWidth, y: -100 }, // exit the screen on the right and up
    ];

    const zigzagPath = [
      { x: 0, y: -window.innerHeight * 0.2 }, // Start higher than the initial position
      { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5 }, // Increase vertical distance
      { x: -window.innerWidth * 0.3, y: window.innerHeight * 1.0 },
      { x: window.innerWidth * 0.3, y: window.innerHeight * 1.5 },
      { x: -window.innerWidth * 0.3, y: window.innerHeight * 2.0 },
      { x: window.innerWidth * 0.3, y: window.innerHeight * 2.5 },
      { x: -window.innerWidth * 0.3, y: window.innerHeight * 3.0 },
      { x: window.innerWidth * 0.3, y: window.innerHeight * 3.5 },
      { x: -window.innerWidth * 0.3, y: window.innerHeight * 4.0 },
      { x: window.innerWidth * 0.3, y: window.innerHeight * 4.5 },
      { x: 0, y: window.innerHeight * 5.0 },
    ];

    // Animate UFO separately as before
    gsap.to(".ufo", {
      duration: 3,
      ease: "power1.inOut",
      motionPath: {
        path: ufoPath,
        curviness: 1.5,
        autoRotate: true,
      },
      yoyo: true,
      repeat: -1,
    });

    // Animate CCMan along the zigzag path during scroll
    ScrollTrigger.create({
      animation: gsap.to(ccmanRef.current, {
        ease: "none",
        motionPath: {
          path: zigzagPath,
          align: ccmanRef.current,
          autoRotate: true,
        },
      }),
      trigger: ccmanRef.current,
      start: "top bottom", // Adjust as necessary
      end: "bottom top",
      scrub: 40,
      markers: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-b from-zinc-900 via-indigo-700 to-sky-200 pt-24 min-h-[600vh] ">
        <div className="ufo">
          <Image src={UFO} alt="ufo" />
        </div>
        <div ref={ccmanRef}>
          <Image
            src={CCMan}
            alt="CCMan Flying"
            className="ccman-image w-52 md:w-96 xl:w-[35rem]"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl py-5 font-bold shadow-md">
            Ozone Layer
          </h1>
          <Image
            src={Aura}
            className="h-72 md:h-[35rem] xl:h-[64rem] object-cover"
          />
          <Image src={CH4} />
          <Image src={CO2} />
          <Image src={HFCs} />
          <Image src={N20} />
          <Image src={PFCs} />
          <Image src={SF6} />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
