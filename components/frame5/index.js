import React, { useEffect } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import Mill from "../../assets/frame5/images/Mill.webp";
import Straw from "../../assets/frame5/images/Straw.webp";
import Tractor from "../../assets/frame5/gif/Tractor.webp";
import Fence from "../../assets/frame5/images/Fence.webp";
import Fertilizer from "../../assets/frame5/images/Fertilizer.webp";
import Farmer1 from "../../assets/frame5/images/Farmer1.webp";
import Farmer2 from "../../assets/frame5/images/Farmer2.webp";
import Cow from "../../assets/frame5/gif/Cow.webp";
import Horse from "../../assets/frame5/gif/Horse.webp";
import Rice from "../../assets/frame5/gif/Rice.webp";
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame5 = () => {
  useEffect(() => {
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-yellow-200 py-[30%]">
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation" />
          <div className="fade-textarea flex">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              color="primary"
              label="CCMan"
              defaultValue="Do you see villagers farming? Did you know that agriculture also contributes to global warming?"
            />
          </div>
        </div>
      </div>
      <div className="bg-lime-700">
        <div className="flex items-center">
          <Image
            src={Mill}
            alt="Mill"
            className="w-[28%] -mt-[5rem] md:-mt-[11rem] xl:-mt-[20rem] 2xl:-mt-[24rem]"
          />
          <Image src={Straw} alt="Straw" className="w-[12%]" />
          <Image
            src={Straw}
            alt="Straw"
            className="w-[12%] -mt-10 md:-mt-20 xl:-mt-36 2xl:-mt-40 -ml-10 md:-ml-20 xl:-ml-32 2xl:-ml-40"
          />
          <Image
            src={Straw}
            alt="Straw"
            className="w-[12%] -ml-12 md:-ml-24 xl:-ml-36 2xl:-ml-52"
          />
        </div>
        <div className="flex items-center  ">
          <Image
            src={Fence}
            alt="Fence"
            className="w-[50%] -mt-[5.4rem] md:-mt-[11rem] xl:-mt-[20rem] 2xl:-mt-[26rem]"
          />
          <Image
            src={Fertilizer}
            alt="Fertilizer"
            className="w-[7%] -mt-6 md:-mt-16 xl:-mt-32 2xl:-mt-40 -ml-16 md:-ml-28 xl:-ml-56 2xl:-ml-72"
          />
          <Image
            src={Fertilizer}
            alt="Fertilizer"
            className="w-[7%] -mt-6 md:-mt-16 xl:-mt-32 2xl:-mt-40"
          />
        </div>
        <div className="flex items-center gap-x-10 md:gap-x-14 xl:gap-x-24 2xl:gap-x-32 ">
          <Image
            src={Farmer2}
            alt="Farmer"
            className="w-[10%] -mt-20 md:-mt-32 xl:-mt-56 2xl:-mt-80 ml-4 md:ml-6 xl:ml-10 2xl:ml-12"
          />
          <Image
            src={Cow}
            alt="Cow"
            className="w-[15%] -mt-20 md:-mt-32 xl:-mt-56 2xl:-mt-80"
          />
          <Image
            src={Horse}
            alt="Horse"
            className="w-[15%] -ml-28 md:-ml-52 xl:-ml-96 2xl:-ml-[30rem] md:-mb-12 xl:-mb-24 2xl:-mb-32"
          />
          <Image
            src={Farmer1}
            alt="Farmer"
            className="w-[8%] -mt-[8rem] md:-mt-[9rem] xl:-mt-[18rem] 2xl:-mt-[26rem] -ml-[2rem] md:ml-[2rem] xl:ml-[3rem] 2xl:ml-[2rem]"
          />
          <Image
            src={Tractor}
            alt="Tractor"
            className="w-[25%] -mt-[12rem] md:-mt-[20rem] xl:-mt-[42rem] 2xl:-mt-[50rem] ml-[3rem] md:ml-[5rem] xl:ml-[10rem] 2xl:ml-[17rem]"
          />
          <Image
            src={Rice}
            alt="Rice"
            className="w-[35%] -ml-48 md:-ml-[20rem] xl:-ml-[37rem] 2xl:-ml-[50rem] -mb-[1rem] md:-mb-[4rem] xl:-m-[18rem] 2xl:-mb-[24rem]"
          />
        </div>
        <div>
          <Image
            src={Fence}
            alt="Fence"
            className="w-1/2 -mt-20 md:-mt-28 xl:-mt-52 2xl:-mt-72"
          />
        </div>
      </div>
      <div className="flex fade-textarea bg-yellow-200">
        <VoiceOver src="/audio-file-two.mp3" />
        <Textarea
          isReadOnly
          color="primary"
          label="CCMan"
          defaultValue="This is because nitrous oxide (N2O) is a natural gas originating from various sources, including bacteria in soil and oceans, as well as the decomposition of organic matter (chemical fertilizers). Additionally, industrial and energy sectors, including burning agricultural residues and various fuels, are major human activities that release nitrous oxide into the Earth's atmosphere. Furthermore, some human activities also produce methane (CH4), such as agriculture and livestock farming, from animal waste, such as cows and buffaloes, and from flooded rice paddies."
        />
      </div>
    </div>
  );
};

export default Frame5;
