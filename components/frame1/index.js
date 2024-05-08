import { useRef, useEffect } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import {
  animateAlien,
  animateAstronaut,
  animateCcmanToLanding,
  animateDekToLanding,
  animateTextAreas,
} from "../gsap";
import VoiceOver from "../voiceOver";

import Climate from "../../assets/frame1/gif/Scene0.webp";
import Dek from "../../assets/frame1/images/Dek.webp";
import Cloud1 from "../../assets/frame1/images/Cloud1.webp";
import Cloud2 from "../../assets/frame1/images/Cloud2.webp";
import Cloud3 from "../../assets/frame1/images/Cloud3.webp";
import Heaven from "../../assets/frame1/images/Heaven.webp";
import GodSpeak from "../../assets/frameQuiz/gif/God_Speaking.webp";
import Earth from "../../assets/frame1/images/Earth.webp";
import Sun from "../../assets/frame1/images/Sun.webp";
import CCMan from "../../assets/frame1/gif/CCMan_Droping.webp";
import Capsule from "../../assets/frame1/gif/TranformationCapsule.webp";
import Astronaut from "../../assets/frame1/images/Astronaut.webp";
import Alien from "../../assets/frame1/images/Alien.webp";
import Warp from "../../assets/frame1/gif/Warp.webp";

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
  const ccmanRef = useRef(null);
  const landingRef = useRef(null);
  const landing2Ref = useRef(null);
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
    animateDekToLanding(dekRef, landingRef);
    animateCcmanToLanding(ccmanRef, landing2Ref);
    animateAstronaut();
    animateAlien();
    animateTextAreas();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center w-full px-20 pt-32 md:pt-44 xl:pt-56 bg-white -mt-16">
        <Image src={Climate} className="w-full" />
      </div>

      {/* Fade color */}
      <div className="bg-gradient-to-b from-white to-[#eef1f5] w-full h-[4rem]" />

      <div className="relative pt-16 md:pt-28 xl:pt-32 heavenly-background overflow-hidden flex flex-col items-center">
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
              <div className="flex fade-textarea absolute top-0 w-[40%] ">
                <VoiceOver src="/audio/frame1/1.m4a" />
                <Textarea
                  isReadOnly
                  disableAutosize
                  className="text-black"
                  color="primary"
                  label="CCMan"
                  defaultValue="God, I want to know why the
                  weather in the human world is so
                  strange"
                />
              </div>
              <div className="flex fade-textarea absolute top-24 right-0 w-[40%] ">
                <VoiceOver src="/audio/frame1/2.m4a" buttonColor="warning" />
                <Textarea
                  isReadOnly
                  disableAutosize
                  className="text-black "
                  color="warning"
                  label="God"
                  defaultValue="You still don't know why the human
                  world's weather is so unstable?"
                />
              </div>
              <Image
                src={Heaven}
                className="w-96 md:w-[60rem] xl:w-[80rem] h-auto"
                alt="Heaven"
              />
              <Image
                src={GodSpeak}
                className="w-52 md:w-96 xl:w-[40rem] h-auto absolute top-16 md:top-32 xl:top-52 left-1/2 transform -translate-x-1/2"
                alt="God"
              />
              <div className="flex fade-textarea absolute bottom-0 w-[40%] ">
                <VoiceOver src="/audio/frame1/3.m4a" />
                <Textarea
                  isReadOnly
                  disableAutosize
                  className="text-black"
                  color="primary"
                  label="CCMan"
                  defaultValue="I don't know yet."
                />
              </div>
              <div className="flex fade-textarea absolute right-0 pt-2 w-[40%] ">
                <VoiceOver src="/audio/frame1/4.m4a" buttonColor="warning" />
                <Textarea
                  isReadOnly
                  disableAutosize
                  className="text-black"
                  color="warning"
                  label="God"
                  defaultValue="Then I'll send you down to see
                  what's happening to the world
                  below us."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="mt-10 md:mt-12 xl:mt-18"></div>

        <div className="relative z-30 -bottom-10 md:-bottom-24 xl:-bottom-32">
          <div className="flex fade-textarea absolute right-24 md:right-48 xl:right-72 w-36 md:w-64 xl:w-96">
            <VoiceOver src="/audio-file-two.mp3" buttonColor="warning" />
            <Textarea
              isReadOnly
              className="text-black"
              color="warning"
              label="God"
              defaultValue="But before going down, you must
              change your clothes first. Because
              when you go down into that world,
              you must pass through the
              atmosphere and encounter other
              gases. It may make breathing
              difficult."
            />
          </div>
          <Image
            src={Dek}
            className="w-24 md:w-44 xl:w-64 h-auto"
            alt="Dek Speaking"
            ref={dekRef}
          />
        </div>

        {/* Foreground Cloud to Dek */}
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

        {/* Fade color */}
        <div className="bg-gradient-to-b from-[#eef1f5] to-[#00010d] w-full h-[30rem]" />

        {/* Space Scene */}
        <div className="w-full pt-24 bg-black space-background">
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

          <div className="w-full h-full p-24 overflow-hidden flex justify-center items-center">
            <div className="absolute z-10">
              <Image
                className="w-40 md:w-56 xl:w-80"
                src={CCMan}
                alt="Avatar"
                ref={ccmanRef}
              />
            </div>

            <Image
              className="w-48 md:w-64 xl:w-96 z-30"
              src={Capsule}
              alt="Capsule"
              ref={landingRef}
            />
          </div>

          <div className="flex justify-center items-center">
            <Image
              src={Sun}
              className="w-32 md:w-56 xl:w-96 h-full"
              alt="Sun"
            />
          </div>

          {/* Spacer */}
          <div className="mt-16 md:mt-24 xl:mt-36"></div>

          <Image
            src={Astronaut}
            alt="Astronaut"
            className="w-[15%]"
            id="astronaut"
          />

          <Image
            src={Alien}
            alt="Alien"
            className="w-[15%]  absolute right-0"
            id="alien"
          />

          <div className="flex justify-center items-center">
            <Image src={Earth} className="w-[75%] slow-rotate" alt="Earth" />
          </div>

          <div className="z-20 relative flex justify-center items-center">
            <Image
              src={Warp}
              className="w-[60%] md:w-[50%]"
              ref={landing2Ref}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
