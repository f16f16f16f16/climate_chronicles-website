import React, { useEffect } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame4/gif/BigFrame.webp";
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame4 = () => {
  useEffect(() => {
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-orange-400">
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation" />
          <div className="flex fade-textarea">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              color="primary"
              label="CCMan"
              defaultValue="Hey, isn't that something? Forest animals fleeing from a forest fire raging in the background."
            />
          </div>
        </div>
        <Image src={BigFrame} alt="BigFrame" />
        <div className="flex fade-textarea mt-2">
          <VoiceOver src="/audio-file-two.mp3" />
          <Textarea
            isReadOnly
            color="primary"
            label="CCMan"
            defaultValue="Forest fires can occur due to various factors, whether natural, like lightning strikes coinciding with windy conditions, which can ignite fires, or due to excessively hot weather conditions. Another factor is human activity, such as deforestation for land expansion or during forest surveys, which can inadvertently lead to fires spreading. Agricultural burning, using fire to clear grass or unwanted vegetation, can also contribute to fires. The aftermath of forest fires includes the release of CO2, damage to the forest, destruction of food sources and habitats for wildlife, potentially leading to species extinction. "
          />
        </div>
      </div>
    </div>
  );
};

export default Frame4;
