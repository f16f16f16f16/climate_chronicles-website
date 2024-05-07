import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame6/gif/BigFrame.webp";
import Boomer from "../../assets/frame6/gif/Boomer.webp";
import { animateCCMan, animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame6 = () => {
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
                defaultValue="Having beautiful jewelry, diamonds, and minerals Did you know that these things also come from mining, and mining also can cause greenhouse gases?"
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
      <div className="flex fade-textarea">
        <VoiceOver src="/audio-file-two.mp3" />
        <Textarea
          isReadOnly
          color="primary"
          label="CCMan"
          defaultValue="Furthermore, mining is another factor contributing to the production of methane (CH4) and carbon dioxide (CO2). This is because mining involves drilling, blasting, and machinery for crushing rocks or minerals obtained from mining. Gases are released during coal extraction, and there are also trucks transporting rocks that emit CO2 and particulate matter. All of these activities have adverse effects on workers and people in nearby areas."
        />
      </div>
    </>
  );
};

export default Frame6;
