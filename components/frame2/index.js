import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

import CCMan from "../../assets/frame2/gif/CCManFly.webp";
import Aura from "../../assets/frame2/images/Aura.webp";
import UFO from "../../assets/frame2/images/UFO.webp";
import CH4_1 from "../../assets/frame2/images/gasSeparate/CH4_1.webp";
import CH4_2 from "../../assets/frame2/images/gasSeparate/CH4_2.webp";
import CO2_1 from "../../assets/frame2/images/gasSeparate/CO2_1.webp";
import CO2_2 from "../../assets/frame2/images/gasSeparate/CO2_2.webp";
import HFCs_1 from "../../assets/frame2/images/gasSeparate/HFCs_1.webp";
import HFCs_2 from "../../assets/frame2/images/gasSeparate/HFCs_2.webp";
import N2O_1 from "../../assets/frame2/images/gasSeparate/N2O_1.webp";
import N2O_2 from "../../assets/frame2/images/gasSeparate/N2O_2.webp";
import PFCs_1 from "../../assets/frame2/images/gasSeparate/PFCs_1.webp";
import PFCs_2 from "../../assets/frame2/images/gasSeparate/PFCs_2.webp";
import SF6_1 from "../../assets/frame2/images/gasSeparate/SF6_1.webp";
import SF6_2 from "../../assets/frame2/images/gasSeparate/SF6_2.webp";

// Register GSAP plugins outside of the component to avoid registering multiple times.
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Frame2 = () => {
  const ccmanRef = useRef(null);
  // Initialize state as an object where keys are image set identifiers and values are booleans
  const [isActive, setIsActive] = useState({
    CH4: false,
    CO2: false,
    HFCs: false,
    N2O: false,
    PFCs: false,
    SF6: false,
  });
  const [zIndexes, setZIndexes] = useState({
    CH4: 0,
    CO2: 0,
    HFCs: 0,
    N2O: 0,
    PFCs: 0,
    SF6: 0,
  });

  // Handler function that takes an image set identifier
  const handleImageClick = (id) => {
    setIsActive((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the specific image set
    }));
    setZIndexes((prevZIndexes) => ({
      ...prevZIndexes,
      [id]: prevZIndexes[id] === 0 ? 10 : 0,
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
      // markers: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-900 via-indigo-700 to-sky-200 py-28 md:py-32 xl:py-40 overflow-hidden">
      <div className="ufo">
        <Image className="w-[50%]" src={UFO} alt="ufo" />
      </div>
      <div ref={ccmanRef}>
        <Image
          src={CCMan}
          alt="CCMan Flying"
          className="ccman-image w-52 md:w-96 xl:w-[35rem]"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl py-5 font-bold shadow-md">
          Earth&apos;s Atmosphere
        </h1>
        <Image
          src={Aura}
          className="h-72 md:h-[45rem] xl:h-[64rem] 2xl:h-[85rem] 2xl:w-screen object-cover"
        />
        <div className="space-y-48 md:space-y-[34rem] xl:space-y-[60rem]">
          <div className="flex flex-col items-center justify-center">
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.CH4 === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="This is methane gas (CH4), a greenhouse gas released into the Earth's atmosphere in large quantities. It occurs naturally but 60% of it in the atmosphere is due to human activities, which can have a greater greenhouse effect than carbon dioxide, up to 25 times more."
            />
            <button
              className="absolute flex -space-x-[1%] scale-[.65] md:scale-50 xl:scale-100 overflow-hidden"
              onClick={() => handleImageClick("CH4")}
            >
              <Image
                src={CH4_1}
                alt="CH4"
                className={`transition-transform duration-500 ${
                  isActive.CH4 ? "-translate-x-[100%]" : ""
                }`}
              />
              <Image
                src={CH4_2}
                alt="CH4"
                className={`transition-transform duration-500 ${
                  isActive.CH4 ? "translate-x-[120%]" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.CO2 === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="This is CO2 (Carbon dioxide), a greenhouse gas released into the atmosphere, having the most significant influence on trapping heat in the atmosphere. It can occur naturally, but humans have become the main contributors to its production and release. It's mainly from activities like burning fossil fuels, especially coal, oil, and natural gas, which rapidly increase the amount of carbon dioxide."
            />
            <button
              className="absolute flex -space-x-[1%] scale-[.65] md:scale-50 xl:scale-100 overflow-hidden"
              onClick={() => handleImageClick("CO2")}
            >
              <Image
                src={CO2_1}
                alt="CO2"
                className={`transition-transform duration-500 ${
                  isActive.CO2 ? "-translate-x-[100%]" : ""
                }`}
              />
              <Image
                src={CO2_2}
                alt="CO2"
                className={`transition-transform duration-500 ${
                  isActive.CO2 ? "translate-x-[120%]" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.HFCs === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="HFCs (Hydrofluorocarbons) are synthetic greenhouse gases used in various cooling systems such as air conditioners, refrigerators, sprays, and fire extinguishers. They have a high heat-trapping potential and can contribute significantly to the greenhouse effect, even more so than carbon dioxide, ranging from 124 to 14,800 times."
            />
            <button
              className="absolute flex -space-x-[1%] scale-[.65] md:scale-50 xl:scale-100 overflow-hidden"
              onClick={() => handleImageClick("HFCs")}
            >
              <Image
                src={HFCs_1}
                alt="HFCs"
                className={`transition-transform duration-500 ${
                  isActive.HFCs ? "-translate-x-[100%]" : ""
                }`}
              />
              <Image
                src={HFCs_2}
                alt="HFCs"
                className={`transition-transform duration-500 ${
                  isActive.HFCs ? "translate-x-[120%]" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.N2O === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="N2O (Nitrous oxide), Another important greenhouse gas affecting the Earth's climate. It's naturally occurring, like from lightning, volcanic eruptions, and the decay of organic matter. However, it's also produced by human activities such as agricultural practices like using chemical fertilizers, burning fossil fuels, and livestock farming, which accelerate its release into the atmosphere. This can have long-term environmental impacts and contribute to increased heat in the atmosphere."
            />
            <button
              className="absolute flex -space-x-[1%] scale-[.65] md:scale-50 xl:scale-100 overflow-hidden"
              onClick={() => handleImageClick("N2O")}
            >
              <Image
                src={N2O_1}
                alt="N2O"
                className={`transition-transform duration-500 ${
                  isActive.N2O ? "-translate-x-[100%]" : ""
                }`}
              />
              <Image
                src={N2O_2}
                alt="N2O"
                className={`transition-transform duration-500 ${
                  isActive.N2O ? "translate-x-[120%]" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.PFCs === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="PFCs (Perfluorocarbons), synthetic greenhouse gases originating from industrial processes, primarily used as solvents and starting materials in various industrial productions. They have a high heat-trapping potential and can contribute significantly to the greenhouse effect, even more so than carbon dioxide."
            />
            <button
              className="absolute flex -space-x-[1%] scale-[.65] md:scale-50 xl:scale-100 overflow-hidden"
              onClick={() => handleImageClick("PFCs")}
            >
              <Image
                src={PFCs_1}
                alt="PFCs"
                className={`transition-transform duration-500 ${
                  isActive.PFCs ? "-translate-x-[100%]" : ""
                }`}
              />
              <Image
                src={PFCs_2}
                alt="PFCs"
                className={`transition-transform duration-500 ${
                  isActive.PFCs ? "translate-x-[120%]" : ""
                }`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.SF6 === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="SF6 (Sulfur hexafluoride), a gas with high density and mass compared to air. It's commonly used in the electronics industry as electrical insulation to prevent electrical sparks from high-voltage electrical switchgear or to assist in dissipating heat from high-voltage electrical equipment."
            />
            <button
              className="absolute flex -space-x-[1%] scale-[.65] md:scale-50 xl:scale-100 overflow-hidden"
              onClick={() => handleImageClick("SF6")}
            >
              <Image
                src={SF6_1}
                alt="SF6"
                className={`transition-transform duration-500 ${
                  isActive.SF6 ? "-translate-x-[100%]" : ""
                }`}
              />
              <Image
                src={SF6_2}
                alt="SF6"
                className={`transition-transform duration-500 ${
                  isActive.SF6 ? "translate-x-[120%]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
