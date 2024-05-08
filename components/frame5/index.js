import React, { useEffect } from "react";
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
import FarmFrame from "../../assets/frame5/gif/Farmframe.webp";

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
        <div className="flex fade-textarea mt-2">
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
        <div className="flex items-center justify-center fade-textarea mt-24 space-x-24 md:space-x-48 xl:space-x-96">
          <Popover placement="bottom" color="secondary" showArrow={true}>
            <PopoverTrigger>
              <Button color="secondary">Tips</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[17rem]">
              <div className="px-1 py-2">
                <div className="text-md">
                  Using solar energy and wind energy to produce electricity. It
                  helps reduce greenhouse gases. It also reduces the use of
                  energy from fossil sources and other natural resources. Where
                  GHG may be released, adjust the amount of fertiliser or soil
                  improver correctly and appropriately to the plant's nutrient
                  needs. Increase the use of organic fertilisers and biological
                  fertilisers to reduce the use of chemical fertilisers.
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Frame5;
