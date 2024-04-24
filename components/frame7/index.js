import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button, Link } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame7/gif/Wastewater.webp";

const Frame7 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for CCMan
    gsap.fromTo(
      ".ccman-animation5",
      {
        x: "-100%",
      },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".ccman-animation5",
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
      <div className="bg-green-300">
        <Image src={CCMan} className="w-[20%] ccman-animation5" />
        <Image src={BigFrame} alt="BigFrame" />
      </div>
      <div className="bg-rose-950 py-24 flex justify-center">
        <Link href="/quiz">
          <Button color="secondary" variant="faded">
            Go Answer Questions!!!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Frame7;
