import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Link, Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame7/gif/Wastewater.webp";
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame7 = () => {
  useEffect(() => {
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-slate-500">
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation" />
          <div className="flex fade-textarea">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              color="primary"
              label="CCMan"
              defaultValue="Hahaha, look at that polluted
              water"
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
            defaultValue="It's all caused by humans.
          And sewage water or water that
          has been trapped for a long time
          It is caused by the fermentation
          or decomposition process of
          organic substances in the absence
          of air and is often the main
          ingredient of gases that occur in
          large quantities in trapped
          wastewater. It may create carbon
          dioxide (CO2) and methane (CH4)
          when decomposed. And the bad
          smell that is emitted is the smell caused by hydrogen sulphide gas (H2S), which is from the
          decomposition of organic substances using air or other odours from various industrial plants
          such as fishmeal factories and slaughterhouses, etc."
          />
        </div>
      </div>
    </div>
  );
};

export default Frame7;
