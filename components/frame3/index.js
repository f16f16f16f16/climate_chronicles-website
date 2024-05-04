import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

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
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/PCIII-Remembering-Past-Everything.mp3");
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const content = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  );

  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "foreground",
  ];

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
        <Image src={CCMan} className="absolute w-[20%] ccman-animation" />
        <div className="ml-[20%] md:ml-[30%] xl:ml-[30%]">
          <div className="flex">
            <Button
              isIconOnly
              color="primary"
              aria-label="Audio"
              className=""
              onClick={playAudio}
            >
              <SpeakerWaveIcon className="h-5 w-5" />
            </Button>
            <Textarea
              isReadOnly
              disableAutosize
              className=""
              color="primary"
              label="CCMan"
              defaultValue="Does everyone understand, right?"
            />
          </div>
          <div className="flex mt-12">
            <Button
              isIconOnly
              color="primary"
              aria-label="Audio"
              className=""
              onClick={playAudio}
            >
              <SpeakerWaveIcon className="h-5 w-5" />
            </Button>
            <Textarea
              isReadOnly
              className=""
              color="primary"
              label="CCMan"
              defaultValue="Next, Ccman will tell everyone about human activities that produce various gases, which also contribute to greenhouse gases. They also have the effect of increasing heat in the atmosphere"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Plane}
          className="w-28 md:w-52 xl:w-96 py-20 md:py-36 xl:py-52 2xl:py-72 plane-flip-animation"
        />
      </div>

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
        <div className="flex">
          <Button
            isIconOnly
            color="primary"
            aria-label="Audio"
            className=""
            onClick={playAudio}
          >
            <SpeakerWaveIcon className="h-5 w-5" />
          </Button>
          <Textarea
            isReadOnly
            disableAutosize
            className=""
            color="primary"
            label="CCMan"
            defaultValue="Whether it's industrial factories, machinery, transportation by land or air, or even shopping malls, all of the mentioned activities are involved in processes that result in the emission of carbon dioxide (CO2)"
          />
        </div>
        <div className="flex">
          <Button
            isIconOnly
            color="primary"
            aria-label="Audio"
            className=""
            onClick={playAudio}
          >
            <SpeakerWaveIcon className="h-5 w-5" />
          </Button>
          <Textarea
            isReadOnly
            className="mt-2"
            color="primary"
            label="CCMan"
            defaultValue="When burning fossil fuels like gasoline for vehicles, coal for electricity generation, or wood for cooking, the combustion process releases carbon dioxide (CO2) into the atmosphere
          The operation of machinery, such as factory equipment or transportation vehicles, requires energy, and this energy consumption often leads to the burning of fossil fuels within the machinery, resulting in the emission of carbon dioxide (CO2) 
          Air conditioning: The use of air conditioning units in homes or buildings often relies on energy produced from burning fossil fuels, such as oil or natural gas 
          The movement of vehicles, such as cars, airplanes, or ships, typically relies on energy derived from burning fossil fuels, such as gasoline or other combustible fuels. 
          "
          />
        </div>
        {/* <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <Popover key={color} placement="bottom" color={color}>
              <PopoverTrigger>
                <Button color={color} className="capitalize">
                  {color}
                </Button>
              </PopoverTrigger>
              {content}
            </Popover>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Frame3;
