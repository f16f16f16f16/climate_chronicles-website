import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

import CCMan from "../../assets/frame2/gif/CCManFly.gif";
import Aura from "../../assets/frame2/images/Aura.png";
import UFO from "../../assets/frame2/images/UFO.png";
import CH4_1 from "../../assets/frame2/images/gasSeparate/CH4.1.png";
import CH4_2 from "../../assets/frame2/images/gasSeparate/CH4.2.png";
import CO2_1 from "../../assets/frame2/images/gasSeparate/CO2.1.png";
import CO2_2 from "../../assets/frame2/images/gasSeparate/CO2.2.png";
import HFCs_1 from "../../assets/frame2/images/gasSeparate/HFCs.1.png";
import HFCs_2 from "../../assets/frame2/images/gasSeparate/HFCs.2.png";
import N2O_1 from "../../assets/frame2/images/gasSeparate/N2O.1.png";
import N2O_2 from "../../assets/frame2/images/gasSeparate/N2O.2.png";
import PFCs_1 from "../../assets/frame2/images/gasSeparate/PFCs.1.png";
import PFCs_2 from "../../assets/frame2/images/gasSeparate/PFCs.2.png";
import SF6_1 from "../../assets/frame2/images/gasSeparate/SF6.1.png";
import SF6_2 from "../../assets/frame2/images/gasSeparate/SF6.2.png";

// Register GSAP plugins outside of the component to avoid registering multiple times.
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Frame2 = () => {
  const ccmanRef = useRef(null);
  // Initialize state as an object where keys are image set identifiers and values are booleans
  const [isActive, setIsActive] = useState({ CH4: false, CO2: false, HFCs: false, N2O: false, PFCs: false, SF6: false });

  // Handler function that takes an image set identifier
  const handleImageClick = (id) => {
    setIsActive(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Toggle the state for the specific image set
    }));
  };

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
      <div className="bg-gradient-to-b from-zinc-900 via-indigo-700 to-sky-200 py-28 md:py-32 xl:py-40">
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
            className="h-72 md:h-[45rem] xl:h-[64rem] 2xl:h-[85rem] 2xl:w-screen object-cover"
          />
          <div className="w-44 md:w-96 xl:w-[40rem]">
            <div className="w-1/2 md:w-full space-y-[100%]">
              <div>
                <button className="flex -space-x-[3%]" onClick={() => handleImageClick('CH4')}>
                  <Image src={CH4_1} alt="CH4" className={`transition-transform duration-500 ${isActive.CH4 ? '-translate-x-[100%]' : ''}`}/>
                  <Image src={CH4_2} alt="CH4" className={`transition-transform duration-500 ${isActive.CH4 ? 'translate-x-[100%]' : ''}`}/>
                </button>
              </div>
              <div>
                <button className="flex -space-x-[3%]" onClick={() => handleImageClick('CO2')}>
                  <Image src={CO2_1} alt="CO2" className={`transition-transform duration-500 ${isActive.CO2 ? '-translate-x-[100%]' : ''}`}/>
                  <Image src={CO2_2} alt="CO2" className={`transition-transform duration-500 ${isActive.CO2 ? 'translate-x-[100%]' : ''}`}/>
                </button>
              </div>
              <div>
                <button className="flex -space-x-[3%]" onClick={() => handleImageClick('HFCs')}>
                  <Image src={HFCs_1} alt="HFCs" className={`transition-transform duration-500 ${isActive.HFCs ? '-translate-x-[100%]' : ''}`}/>
                  <Image src={HFCs_2} alt="HFCs" className={`transition-transform duration-500 ${isActive.HFCs ? 'translate-x-[100%]' : ''}`}/>
                </button>
              </div>
              <div>
                <button className="flex -space-x-[3%]" onClick={() => handleImageClick('N2O')}>
                  <Image src={N2O_1} alt="N2O" className={`transition-transform duration-500 ${isActive.N2O ? '-translate-x-[100%]' : ''}`}/>
                  <Image src={N2O_2} alt="N2O" className={`transition-transform duration-500 ${isActive.N2O ? 'translate-x-[100%]' : ''}`}/>
                </button>
              </div>
              <div>
                <button className="flex -space-x-[3%]" onClick={() => handleImageClick('PFCs')}>
                  <Image src={PFCs_1} alt="PFCs" className={`transition-transform duration-500 ${isActive.PFCs ? '-translate-x-[100%]' : ''}`}/>
                  <Image src={PFCs_2} alt="PFCs" className={`transition-transform duration-500 ${isActive.PFCs ? 'translate-x-[100%]' : ''}`}/>
                </button>
              </div>
              <div>
                <button className="flex -space-x-[3%]" onClick={() => handleImageClick('SF6')}>
                  <Image src={SF6_1} alt="SF6" className={`transition-transform duration-500 ${isActive.SF6 ? '-translate-x-[100%]' : ''}`}/>
                  <Image src={SF6_2} alt="SF6" className={`transition-transform duration-500 ${isActive.SF6 ? 'translate-x-[100%]' : ''}`}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
