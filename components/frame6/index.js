import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame6/gif/BigFrame.webp";
import Boomer from "../../assets/frame6/gif/Boomer.webp";
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame6 = () => {
  useEffect(() => {
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-amber-700">
          <div className="flex">
            <Image src={CCMan} className="w-[20%] ccman-animation" />
            <div className="flex fade-textarea">
              <VoiceOver src="/audio-file-two.mp3" />
              <Textarea
                isReadOnly
                disableAutosize
                color="primary"
                label="CCMan"
                defaultValue="In addition, mining is another
                factor that produces methane gas
                (CH4)"
              />
            </div>
          </div>
          <Image src={BigFrame} alt="BigFrame" />
          <Image
            src={Boomer}
            alt="Boomer"
            className="w-1/3 -mt-[24%] ml-[60%]"
          />
        </div>
      </div>
      <div className="absolute w-[100%] flex fade-textarea mt-2">
        <VoiceOver src="/audio-file-two.mp3" />
        <Textarea
          isReadOnly
          color="primary"
          label="CCMan"
          defaultValue="Carbon dioxide gas (CO2) as well
          because mining involves drilling
          or blasting. And mines will have
          tools or machines for crushing
          rocks or minerals obtained from
          mining. Gases are released from
          coal extraction. There are also
          trucks transporting rocks that
          create pollutant fumes (CO2) and
          dust. All of this also affects
          workers or people in the nearby areas."
        />
      </div>
    </>
  );
};

export default Frame6;
