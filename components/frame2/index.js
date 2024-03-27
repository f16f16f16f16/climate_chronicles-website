import React, { useEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

import CCMan from "../../assets/frame2/gif/CCManFly.gif";
import UFO from "../../assets/frame2/images/UFO.png";

gsap.registerPlugin(MotionPathPlugin);

const Frame2 = () => {  
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const path = [
      {x: -100, y: 0}, // start outside the screen on the left
      {x: window.innerWidth * 0.25, y: 100}, // move to 1/4 of the screen width and down
      {x: window.innerWidth * 0.5, y: -100}, // move to 1/2 of the screen width and up
      {x: window.innerWidth * 0.75, y: 100}, // move to 3/4 of the screen width and down
      {x: window.innerWidth, y: -100}, // exit the screen on the right and up
    ];

    gsap.to(".ufo", {
      duration: 3, // Increased duration for smoother animation over the zigzag path
      ease: "power1.inOut",
      motionPath: {
        path: path,
        curviness: 1.5, // Adjusted for more pronounced zigs and zags
        autoRotate: true,
      },
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-gradient-to-b from-zinc-900 via-indigo-700 to-sky-200 pt-24 min-h-[600vh] ">
        <div className="ufo">
          <Image src={UFO} alt="ufo" />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
