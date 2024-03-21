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
import Earth from "../../assets/frame1/images/Earth.png";
import Sun from "../../assets/frame1/images/Sun.png";

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const color = Math.random() > 0.5 ? "#FFF" : "#FFD700"; // Randomly choose white or yellow
    stars.push({ top, left, color });
  }
  return stars;
};

const Frame1 = () => {
  const dekRef = useRef(null);
  const earthRef = useRef(null);
  const stars = generateStars(100);
  const cloudPositions = [
    "top-0 left-0",
    "top-0 right-0",
    "-bottom-20 left-0",
    "-bottom-20 right-0",
    "top-1/4 left-1/4",
    "top-1/4 right-1/4",
    "bottom-1/4 left-1/4",
    "bottom-1/4 right-1/4",
    "center left-1/2",
    "center right-1/2",
    "-bottom-36 left-1/2",
    "-bottom-36 right-1/2",
  ];

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (dekRef.current && earthRef.current) {
      // Calculate the difference in the y-position between Dek and Earth
      const dekPosition = dekRef.current.getBoundingClientRect().top;
      const earthPosition = earthRef.current.getBoundingClientRect().top;
      const distanceToEarth = earthPosition - dekPosition;

      // GSAP animation with ScrollTrigger
      gsap.to(dekRef.current, {
        scrollTrigger: {
          trigger: dekRef.current, // Use the Dek image as the trigger
          start: "bottom center", // Start the animation when the top of Dek hits the center of the viewport
          end: "bottom top", // End the animation when the bottom of Dek is at the top of the viewport
          scrub: 7, // Smooth scrubbing, linking animation progress to scroll progress
          markers: true, // Shows start and end markers; useful for debugging, remove in production
        },
        rotation: 360, // Rotate by 360 degrees
        y: distanceToEarth, // Move Dek to the Earth image
        ease: "none", // No easing for smooth, continuous animation
      });
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center w-full p-24 bg-white">
        <Image src={Climate} className="w-full" />
      </div>

      <div className="relative py-16 md:py-28 xl:py-32 heavenly-background overflow-hidden flex flex-col items-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            {/* Evenly Distributed Clouds */}
            {cloudPositions.map((position, index) => (
              <Image
                key={index}
                src={
                  index % 3 === 0 ? Cloud1 : index % 3 === 1 ? Cloud2 : Cloud3
                }
                alt="Cloud"
                className={`absolute w-1/6 h-auto opacity-75 ${position}`} // Adjust size and opacity as needed
              />
            ))}
          </div>
          <div
            className="relative z-20 mt-4 md:mt-8 xl:mt-16"
            style={{
              boxShadow: "0 0 100px 50px rgba(255, 215, 0, 0.5)",
              borderRadius: "50%",
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
        <div className="mt-10 md:mt-12 xl:mt-18"></div>

        <div className="relative z-30 -bottom-10 md:-bottom-24 xl:-bottom-32">
          <Image
            src={Dek}
            className="w-20 md:w-44 xl:w-64 h-auto"
            alt="Dek Speaking"
            ref={dekRef} // Step 2: Apply the reference to the Image component
          />
        </div>

        <div className="relative z-10 bottom-0 h-20 md:h-48 xl:h-64 overflow-hidden">
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
        <div className="w-full p-24 bg-black space-background">
          {stars.map((star, index) => (
            <div
              key={index}
              className="star"
              style={{
                position: "absolute",
                width: "2px",
                height: "2px",
                backgroundColor: star.color,
                top: `${star.top}%`,
                left: `${star.left}%`,
              }}
            ></div>
          ))}
          <div
            className="shooting-star"
            style={{
              "--shooting-delay": "0s",
              "--shooting-top": "20%",
              "--shooting-left": "20%",
              "--shooting-x": "300px",
              "--shooting-y": "400px",
            }}
          ></div>
          <div
            className="shooting-star"
            style={{
              "--shooting-delay": "1s",
              "--shooting-top": "40%",
              "--shooting-left": "60%",
              "--shooting-x": "-300px",
              "--shooting-y": "200px",
            }}
          ></div>
          <div
            className="shooting-star"
            style={{
              "--shooting-delay": "2s",
              "--shooting-top": "10%",
              "--shooting-left": "50%",
              "--shooting-x": "500px",
              "--shooting-y": "-300px",
            }}
          ></div>
          <div className="flex justify-center items-center">
            <Image
              src={Sun}
              className="md:w-[40rem] xl:w-[60rem] h-full opacity-60"
              alt="Sun"
            />
          </div>
          {/* Spacer */}
          <div className="mt-16 md:mt-24 xl:mt-36"></div>

          <div className="flex justify-center items-center">
            <Image
              src={Earth}
              className="w-44 md:w-[26rem] xl:w-[30rem]  h-full opacity-60"
              alt="Earth"
              ref={earthRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
