import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

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
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <div className="bg-neutral-500">
      <div className="flex">
        <Image src={CCMan} alt="CCMan" className="absolute w-[20%] ccman-animation" />
        <div className="ml-[20%] md:ml-[30%] xl:ml-[30%]">
          <div className="flex fade-textarea ">
            <VoiceOver src="/audio/frame3/In_addition.m4a" />
            <Textarea
              isReadOnly
              disableAutosize
              className=""
              color="primary"
              label="CCMan"
              defaultValue="In addition to the Earth receiving
              heat from the sun and carbon
              dioxide being released, there are
              also other human activities that
              create greenhouse gases."
            />
          </div>
          <div className="flex mt-12 fade-textarea xl:w-[230%]">
            <VoiceOver src="/audio/frame3/Here_ccman.m4a" />
            <Textarea
              isReadOnly
              className=""
              color="primary"
              label="CCMan"
              defaultValue="Here, Ccman will tell everyone
              about human activities that cause
              GHGs and how these gases also
              cause greenhouse gases. It also
              has the effect of stimulating an
              increase in heat in the
              atmosphere."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Plane}
          className="w-28 md:w-52 xl:w-96 py-20 md:py-36 xl:py-52 2xl:py-72 plane-flip-animation"
          alt="Plane"
        />
      </div>

      <div className="flex gap-x-4 overflow-hidden">
        <Image src={Building} className="w-1/3" alt="Building"/>
        <Image src={Factory1} className="w-1/3" alt="Factory"/>
        <Image src={Factory2} className="w-1/3" alt="Factory"/>
      </div>

      <div>
        <Image src={Road} className="-mt-[22%]" alt="Road"/>
        <div className="flex gap-x-4">
          <div>
            <Image
              src={Car1}
              className="w-2/3 -mt-[60%] ml-10 md:ml-16 xl:ml-28 2xl:ml-36"
              alt="Car"
            />
          </div>
          <div>
            <Image
              src={Car2}
              className="w-2/3 -mt-[65%] ml-10 md:ml-16 xl:ml-28 2xl:ml-36"
              alt="Car"
            />
          </div>
          <div>
            <Image
              src={Car3}
              className="w-2/3 -mt-[35%] ml-4 md:ml-16 xl:ml-28 2xl:ml-36"
              alt="Car"
            />
          </div>
        </div>
        <div className="flex fade-textarea mt-2">
          <VoiceOver src="/audio/frame3/Whether.m4a" />
          <Textarea
            isReadOnly
            className=""
            color="primary"
            label="CCMan"
            defaultValue="Whether it be industrial plants,
            machinery, land-air
            transportation, or even a
            department store, all that is said
            here is in the process that causes
            carbon dioxide gas (CO2)."
          />
        </div>
        <div className="flex fade-textarea mt-2">
          <VoiceOver src="/audio/frame3/Buring_fuels.m4a" />
          <Textarea
            isReadOnly
            className=""
            color="primary"
            label="CCMan"
            defaultValue="Burning fuels such as gasoline
            used to drive cars, coal used to
            produce electricity, or wood used
            to cook food. When this fuel is
            burned, carbon dioxide (CO2) is
            released.
          "
          />
        </div>
        <div className="flex fade-textarea mt-2">
          <VoiceOver src="/audio/frame3/The_rotation.m4a" />
          <Textarea
            isReadOnly
            className=""
            color="primary"
            label="CCMan"
            defaultValue="The rotation of machinery, such
            as factory machinery or transportation machinery, when operating, uses energy and triggers
            the combustion of fuel within the machine.
            Air Conditioning Using air conditioning in a home or building. It uses energy produced from
            combustion, such as oil or natural gas.
            Vehicle movement: The use of automobiles, airplanes, or boats when moving is powered by
            oil or other combustion fuel.
          "
          />
        </div>
        <div className="flex items-center justify-center fade-textarea mt-24 space-x-24 md:space-x-48 xl:space-x-96">
          <Popover placement="bottom" color="secondary" showArrow={true}>
            <PopoverTrigger>
              <Button color="secondary">Tips</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[17rem]">
              <div className="px-1 py-2">
                <div className="text-md">
                  CO2 reduces the amount of GHG (greenhouse gases). Changing
                  from vehicles that use gasoline to electric cars, EVs, or
                  hybrid cars (cars that use engines and electric motors to
                  work) because cars use fuel and engines to drive. Causes
                  combustion and releases carbon dioxide up to 150–200 grammes
                  per kilometer. Using CCS (carbon capture and storage)
                  technology
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover placement="bottom" color="success" showArrow={true}>
            <PopoverTrigger>
              <Button color="success">Tips</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[17rem]">
              <div className="px-1 py-2">
                <div className="text-md ">
                  Using CCS (carbon capture and storage) technology means
                  capturing and storing carbon. It is a process of capturing
                  carbon dioxide from the work of industrial sectors or power
                  plants. which is about to be released into the atmosphere.
                  Then the carbon dioxide is injected deep underground. To store
                  it safely, securely, and permanently.
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
