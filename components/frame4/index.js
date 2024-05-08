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
              defaultValue="Oh, do you see that there? Wild
              animals running away from a
              burning forest fire."
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
            defaultValue="Wildfires can occur for many
            reasons. Whether it is caused by
            nature, such as lightning causing
            sparks along with the wind, when
            these two things happen
            together, they can cause wildfires
            and extreme weather conditions
            and temperatures. It can also
            cause forest fires. Another factor
            is caused by humans, such as
            burning wood to destroy forests to expand the area or in the process of surveying the forest
            floor, which may cause the fire to spread and cause a forest fire. agricultural burning Using
            fire to burn grass or burn unwanted plants in agriculture may cause the fire to spread and
            cause a forest fire as well."
          />
        </div>
        <div className="flex fade-textarea mt-2">
          <VoiceOver src="/audio-file-two.mp3" />
          <Textarea
            isReadOnly
            color="primary"
            label="CCMan"
            defaultValue="And the consequences of forest fires are that carbon dioxide gas (CO2) is produced, forests
            are damaged, and food sources and habitats for wild animals are destroyed. This may cause
            wildlife to become extinct as well."
          />
        </div>
      </div>
    </div>
  );
};

export default Frame4;
