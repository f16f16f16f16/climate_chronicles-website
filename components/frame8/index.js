import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Link, Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame8/gif/CCMan_Stand+hand+speak.webp";
import CCmanWatering from "../../assets/frame8/gif/CCman_Watering.webp";
import CCmanDriving from "../../assets/frame8/gif/Ccman_Driving.webp";
import CCmanTrashing from "../../assets/frame8/gif/CCman_Trashing.webp";
import CCmanShopping from "../../assets/frame8/gif/CCman_Shopping.webp";
import { animateTextAreas } from "../gsap";
import VoiceOver from "../voiceOver";

const Frame8 = () => {
  useEffect(() => {
    animateTextAreas();
  }, []);

  return (
    <div className="overflow-hidden bg-rose-300">
      <div className="flex items-center justify-center py-10">
        <Image src={CCMan} className="w-[20%]" />
        <div className="flex fade-textarea w-[50%]">
          <VoiceOver src="/audio-file-two.mp3" />
          <Textarea
            isReadOnly
            disableAutosize
            className=""
            color="primary"
            label="CCMan"
            defaultValue="I think we need to start doing something to save our world. By starting from these small things."
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-20">
        <div className="flex flex-col items-center justify-center justify-center">
          <Image
            src={CCmanWatering}
            className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]"
          />
          <div className="flex fade-textarea py-4 w-[100%] xl:w-[75%]">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              className=" "
              color="primary"
              label="CCMan"
              defaultValue="Trees are very beneficial to our world. It can help absorb carbon dioxide and increase oxygen in the air. Therefore, we should help each other plant a lot of trees."
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center justify-center">
          <Image
            src={CCmanDriving}
            className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]"
          />
          <div className="flex fade-textarea py-4 w-[100%] xl:w-[75%]">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              className=""
              color="primary"
              label="CCMan"
              defaultValue="Human transportation is a major contributor to the production of large amounts of greenhouse gases. Therefore, we should reduce the use of private transport. and change to use public transport."
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center justify-center">
          <Image
            src={CCmanTrashing}
            className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]"
          />
          <div className="flex fade-textarea py-4 w-[100%] xl:w-[75%]">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              className=""
              color="primary"
              label="CCMan"
              defaultValue="Garbage separation is something that should not be overlooked. It can help reduce the amount of waste. Because if we separate waste correctly, we can reuse more recycled waste. and can eliminate each type of waste more easily It also has a positive effect on hygiene."
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center justify-center">
          <Image
            src={CCmanShopping}
            className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]"
          />
          <div className="flex fade-textarea py-4 w-[100%] xl:w-[75%]">
            <VoiceOver src="/audio-file-two.mp3" />
            <Textarea
              isReadOnly
              disableAutosize
              className=""
              color="primary"
              label="CCMan"
              defaultValue="The cloth bag is durable. It can be reused many times and it can decompose naturally. The campaign to use cloth bags instead of plastic bags may be something we've been hearing about for 10 years. But nowadays plastic bags are still being used and discarded in large numbers without being biodegradable."
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-24 flex justify-center">
        <Link href="/quiz">
          <Button
            className="text-xl text-blue font-medium h-20"
            variant="faded"
          >
            Go Answer Questions!!!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Frame8;
