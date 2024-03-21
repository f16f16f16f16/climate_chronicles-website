import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import Climate from "../../assets/frame1/images/Climate.png";
import Dek from "../../assets/frame1/images/Dek.png";
import Cloud1 from "../../assets/frame1/images/Cloud1.png";
import Cloud2 from "../../assets/frame1/images/Cloud2.png";
import Cloud3 from "../../assets/frame1/images/Cloud3.png";
import Heaven from "../../assets/frame1/images/Heaven.png";
import God from "../../assets/frame1/images/God.png";

const Frame1 = () => {
  const dekRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with ScrollTrigger
    gsap.to(dekRef.current, {
      scrollTrigger: {
        trigger: dekRef.current, // Use the Dek image as the trigger
        start: "top center", // Start the animation when the top of Dek hits the center of the viewport
        end: "bottom top", // End the animation when the bottom of Dek is at the top of the viewport
        scrub: 1, // Smooth scrubbing, linking animation progress to scroll progress
        markers: true, // Shows start and end markers; useful for debugging, remove in production
      },
      rotation: 360, // Rotate by 360 degrees
      y: 200, // Move Dek 200 pixels down
      ease: "none", // No easing for smooth, continuous animation
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center w-full p-24 bg-white">
        <Image src={Climate} className="w-full" />
      </div>

      <div className="relative p-4 md:p-10 xl:p-20 py-16 md:py-28 xl:py-32 bg-blue-100 overflow-hidden flex flex-col items-center">
        <div>
          <div className="absolute inset-0 flex flex-wrap justify-around items-center z-0 opacity-50">
            <Image
              src={Cloud1}
              className="w-1/3 h-auto"
              alt="Cloud Background 1"
            />
            <Image
              src={Cloud2}
              className="w-1/3 h-auto"
              alt="Cloud Background 2"
            />
            <Image
              src={Cloud3}
              className="w-1/3 h-auto"
              alt="Cloud Background 3"
            />
            <Image
              src={Cloud1}
              className="w-1/4 h-auto"
              alt="Cloud Background 4"
            />
            <Image
              src={Cloud2}
              className="w-1/4 h-auto"
              alt="Cloud Background 5"
            />
          </div>

          <div
            className="relative z-20 mt-4 md:mt-8 xl:mt-16"
            style={{
              boxShadow: "0 0 100px 50px rgba(255, 215, 0, 0.5)", // Soft yellow glow
              borderRadius: "50%", // Makes the shadow spread in a circular shape
            }}
          >
            <div className="relative">
              <Image
                src={Heaven}
                className="w-96 md:w-[60rem] xl:w-[80rem] h-auto"
                alt="Heaven"
              />
              <Image
                src={God}
                className="w-36 md:w-96 xl:w-[30rem] h-auto absolute top-16 md:top-32 xl:top-52 left-1/2 transform -translate-x-1/2"
                alt="God"
              />
            </div>
          </div>
        </div>

        {/* Responsive spacer */}
        <div className="mt-14 md:mt-24 xl:mt-36"></div>

        <div className="relative z-30 -bottom-20 md:-bottom-40 xl:-bottom-60">
          <Image
            src={Dek}
            className="w-20 md:w-44 xl:w-64 h-auto"
            alt="Dek Speaking"
            ref={dekRef} // Step 2: Apply the reference to the Image component
          />
        </div>

        <div className="relative z-10 -bottom-10 md:-bottom-20 xl:-bottom-30 h-20 md:h-48 xl:h-64 overflow-hidden">
          <Image
            src={Cloud1}
            className="w-full h-full opacity-70"
            alt="Foreground Cloud 1"
          />
          <Image
            src={Cloud2}
            className="absolute w-full h-full opacity-60"
            alt="Foreground Cloud 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
