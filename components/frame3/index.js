import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

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
        <Image src={CCMan} className="absolute w-[20%] ccman-animation" />
        <div className="ml-[20%] md:ml-[30%] xl:ml-[30%]">
          <div className="flex fade-textarea ">
            <VoiceOver src="/audio-file-two.mp3" />
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
            <VoiceOver src="/audio-file-two.mp3" />
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
        <div className="flex fade-textarea mt-2">
          <VoiceOver src="/audio-file-two.mp3" />
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
          <VoiceOver src="/audio-file-two.mp3" />
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
          <VoiceOver src="/audio-file-two.mp3" />
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
