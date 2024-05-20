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
import BigFrame from "../../assets/frame6/gif/BigFrame.webp";
import Boomer from "../../assets/frame6/gif/Boomer.webp";

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
            <Image src={CCMan} alt="CCMan" className="w-[20%] ccman-animation" />
            <div className="flex fade-textarea">
              <VoiceOver src="/audio/frame6/In_addition_mining.m4a" />
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
          <div className="flex fade-textarea mt-8 md:mt-14 xl:mt-24 2xl:mt-32">
            <VoiceOver src="/audio/frame6/Carbon_dioxide.m4a" />
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
          <div className="flex items-center justify-center fade-textarea mt-24 space-x-24 md:space-x-48 xl:space-x-96">
            <Popover placement="bottom" color="secondary" showArrow={true}>
              <PopoverTrigger>
                <Button color="secondary">Tips</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[17rem]">
                <div className="px-1 py-2">
                  <div className="text-md">
                    Replacing diesel- or engine-powered machinery with
                    electrically powered tools machinery that use electricity
                    produce less pollution than those that run on combustion.
                    Using clean fuels, such as natural gas Instead of using coal
                    or diesel to produce electricity used in mining operations.
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover placement="bottom" color="success" showArrow={true}>
              <PopoverTrigger>
                <Button color="success">Tips</Button>
              </PopoverTrigger>
              <PopoverContent className="w-[17rem]">
                <div className="px-1 py-2">
                  <div className="text-md ">
                    Reducing methane emissions from coal mining by taking
                    advantage of methane gas released during mining. It can also
                    be used as a fuel for power generation or other industrial
                    processes.
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame6;
