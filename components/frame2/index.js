import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

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
import { animateTextAreas, ccmanZigzag, ufoZigzag } from "../gsap";
import VoiceOver from "../voiceOver";

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
    ccmanZigzag(ccmanRef);
    ufoZigzag();
    animateTextAreas();
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
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="flex fade-textarea absolute left-0 md:left-20 xl:left-32 2xl:left-48 -mt-[100%] md:-mt-[75%] xl:-mt-[70%] 2xl:-mt-[50%] w-[40%] md:w-[30%] xl:w-[20%]">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="What is this"
              />
            </div>
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[75%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.CO2 === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="CO2 is a greenhouse gas that is
              released into the atmosphere. and
              has the greatest influence on the
              accumulation of heat energy in
              the atmosphere. Greenhouse gases
              can occur naturally. But nowadays,
              humans have become the main
              contributor to the creation and
              release of CO2, which is caused by
              various activities, including the
              burning of fossil fuels. This causes
              the amount of carbon dioxide to
              increase rapidly."
            />
            <div className={`${zIndexes.CO2 === 10 ? "z-10" : "z-0"}`}>
              <VoiceOver src="/audio-file-two.mp3" />
            </div>
            <button
              className="absolute flex -space-x-[1%] scale-[.75] md:scale-50 xl:scale-100 overflow-hidden"
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
            <div className="flex fade-textarea absolute right-0 md:right-20 xl:right-32 2xl:right-48 -mt-[100%] md:-mt-[90%] xl:-mt-[70%] 2xl:-mt-[50%] w-[40%] md:w-[30%] xl:w-[20%]">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="Oh wow, we don't know anything about these gases."
              />
            </div>
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.CH4 === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="Methane gas (CH4) is a greenhouse
              gas that is released into the earth's
              atmosphere in large amounts.
              Released from both natural and
              human activities. with a high value
              of 60 percent, which can have a
              greenhouse effect 25 times greater
              than carbon dioxide."
            />
            <div className={`${zIndexes.CH4 === 10 ? "z-10" : "z-0"}`}>
              <VoiceOver src="/audio-file-two.mp3" />
            </div>
            <button
              className="absolute flex -space-x-[1%] scale-[.75] md:scale-50 xl:scale-100 overflow-hidden"
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
            <div className="flex fade-textarea absolute left-0 md:left-20 xl:left-32 2xl:left-48 -mt-[100%] md:-mt-[90%] xl:-mt-[70%] 2xl:-mt-[50%] w-[40%] md:w-[30%] xl:w-[20%]">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="Why does this place feel so uncomfortable and hot?"
              />
            </div>
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.N2O === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="N2O gas gives the
              sensation of increased heat. It
              has the potential to cause
              global warming as high as 310
              times compared to CO2 gas.
              N2O gas is one of the important
              greenhouse gases that affect
              the world's climate. And it is
              another type that occurs
              naturally, such as lightning and
              volcanic eruptions. Including
              the decomposition of organic
              matter. agricultural activities
              such as using chemical
              fertilizers, burning charcoal, and raising animals This is because it is an activity that results in
              chemical processes that cause more N2O to be released into the atmosphere. This can
              cause long-term effects on the environment and climate change and cause an increase in
              heat in the atmosphere."
            />
            <div className={`${zIndexes.N2O === 10 ? "z-10" : "z-0"}`}>
              <VoiceOver src="/audio-file-two.mp3" />
            </div>
            <button
              className="absolute flex -space-x-[1%] scale-[.75] md:scale-50 xl:scale-100 overflow-hidden"
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
            <div className="flex fade-textarea absolute right-0 md:right-20 xl:right-32 2xl:right-48 -mt-[100%] md:-mt-[90%] xl:-mt-[70%] 2xl:-mt-[50%] w-[40%] md:w-[30%] xl:w-[20%]">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="Why does it feel so stifling and hot here?"
              />
            </div>
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-white ${
                zIndexes.HFCs === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="HFCS is a greenhouse gas. that humans synthesize. Used in various cooling systems, it is a
              substance used in air conditioners, refrigerators, and sprays. It is also used as an expanding
              foam of a substance for fire extinguishing. They have a very high heat-trapping potential."
            />
            <div className={`${zIndexes.HFCs === 10 ? "z-10" : "z-0"}`}>
              <VoiceOver src="/audio-file-two.mp3" />
            </div>
            <button
              className="absolute flex -space-x-[1%] scale-[.75] md:scale-50 xl:scale-100 overflow-hidden"
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
            <div className="flex fade-textarea absolute left-0 md:left-20 xl:left-32 2xl:left-48 -mt-[100%] md:-mt-[90%] xl:-mt-[70%] 2xl:-mt-[50%] w-[40%] md:w-[30%] xl:w-[20%]">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="There are several gases here that can both destroy greenhouse gases and contribute to increased atmospheric heat."
              />
            </div>
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-black ${
                zIndexes.PFCs === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="PFCs are another greenhouse gas. that humans synthesise from some industrial sectors. It is
              used as a solvent and precursor in various industrial productions. and causes a greater
              greenhouse effect than carbon dioxide."
            />
            <div className={`${zIndexes.PFCs === 10 ? "z-10" : "z-0"}`}>
              <VoiceOver src="/audio-file-two.mp3" />
            </div>
            <button
              className="absolute flex -space-x-[1%] scale-[.75] md:scale-50 xl:scale-100 overflow-hidden"
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
            <div className="flex fade-textarea absolute right-0 md:right-20 xl:right-32 2xl:right-48 -mt-[100%] md:-mt-[90%] xl:-mt-[70%] 2xl:-mt-[50%] w-[40%] md:w-[30%] xl:w-[20%]">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="Before reaching the Earth's surface, we have to pass through multiple atmospheric layers and encounter gases that are destroying greenhouse gases."
              />
            </div>
            <Textarea
              isReadOnly
              variant="bordered"
              className={`h-full w-[80%] md:w-[150%] xl:w-[200%] text-black ${
                zIndexes.SF6 === 10 ? "z-10" : "z-0"
              }`}
              defaultValue="SF6 gas is a gas with a high density and a mass higher than air. and is popularly used in the
              electronics industry. This gas is used in various fields, such as automobile tyres, electrical
              insulation, and the production of electrical semiconductors. magnesium industry, etc.
              However, even if it is released in small quantities, it will have a very high impact with the
              potential to cause global warming. Up to 14,800 more carbon dioxides, depending on gas
              type."
            />
            <div className={`${zIndexes.SF6 === 10 ? "z-10" : "z-0"}`}>
              <VoiceOver src="/audio-file-two.mp3" />
            </div>
            <button
              className="absolute flex -space-x-[1%] scale-[.75] md:scale-50 xl:scale-100 overflow-hidden"
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
