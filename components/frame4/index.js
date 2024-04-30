import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame4/gif/BigFrame.webp";

const Frame4 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for CCMan
    gsap.fromTo(
      ".ccman-animation2",
      {
        x: "-100%",
      },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".ccman-animation2",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-orange-400">
        <Textarea
          isReadOnly
          className=""
          color="primary"
          label="CCMan"
          defaultValue="When burning fossil fuels like gasoline for vehicles, coal for electricity generation, or wood for cooking, the combustion process releases carbon dioxide (CO2) into the atmosphere
          The operation of machinery, such as factory equipment or transportation vehicles, requires energy, and this energy consumption often leads to the burning of fossil fuels within the machinery, resulting in the emission of carbon dioxide (CO2) 
          Air conditioning: The use of air conditioning units in homes or buildings often relies on energy produced from burning fossil fuels, such as oil or natural gas 
          The movement of vehicles, such as cars, airplanes, or ships, typically relies on energy derived from burning fossil fuels, such as gasoline or other combustible fuels. 
          "
        />
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation2" />
          <Textarea
            isReadOnly
            disableAutosize
            className=""
            color="primary"
            label="CCMan"
            defaultValue="Hey, isn't that something? Forest animals fleeing from a forest fire raging in the background."
          />
        </div>
        <Image src={BigFrame} alt="BigFrame" />
        <Textarea
          isReadOnly
          className=""
          color="primary"
          label="CCMan"
          defaultValue="Forest fires can occur due to various factors, whether natural, like lightning strikes coinciding with windy conditions, which can ignite fires, or due to excessively hot weather conditions. Another factor is human activity, such as deforestation for land expansion or during forest surveys, which can inadvertently lead to fires spreading. Agricultural burning, using fire to clear grass or unwanted vegetation, can also contribute to fires. The aftermath of forest fires includes the release of CO2, damage to the forest, destruction of food sources and habitats for wildlife, potentially leading to species extinction. "
        />
      </div>
    </div>
  );
};

export default Frame4;
