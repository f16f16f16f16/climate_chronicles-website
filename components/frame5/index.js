import React, { useEffect } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import FarmFrame from "../../assets/frame5/gif/Farmframe.webp";
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame5 = () => {
  useEffect(() => {
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-yellow-200">
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation" />
          <div className="fade-textarea flex">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              color="primary"
              label="CCMan"
              defaultValue="Do you see villagers doing
              agriculture? And did you know
              that agriculture can also cause
              global warming?"
            />
          </div>
        </div>
        <div className="">
          <Image src={FarmFrame} alt="Farmer" className="" />
        </div>
        <div className="absolute w-[100%] flex fade-textarea mt-2">
          <VoiceOver src="/audio-file-two.mp3" />
          <Textarea
            isReadOnly
            color="primary"
            label="CCMan"
            defaultValue="Because nitrous oxide (N2O) is a
            gas in nature, they originate from
            various bacteria. both from
            bacteria in the soil and in the
            ocean, including the
            decomposition of organic matter
            (chemical fertilisers), while the
            industrial sector and energy
            sector include the burning of
            agricultural waste and various fuels. It is the main human activity that causes the release of
            nitrous oxide into the earth's atmosphere. In addition, some human activities also produce
            methane gas (CH4), such as agriculture and livestock. It is caused by waste from domestic
            animals, such as cattle and buffalo, and farming in flooded areas."
          />
        </div>
      </div>
    </div>
  );
};

export default Frame5;
