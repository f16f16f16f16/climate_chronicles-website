import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button, Link, Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame7/gif/Wastewater.webp";

const Frame7 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for CCMan
    gsap.fromTo(
      ".ccman-animation5",
      {
        x: "-100%",
      },
      {
        x: "0%",
        scrollTrigger: {
          trigger: ".ccman-animation5",
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
      <div className="bg-green-300">
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation5" />
          <div>
            <Textarea
              isReadOnly
              disableAutosize
              className="absolute w-[60%]"
              color="primary"
              label="CCMan"
              defaultValue="And when humans throw garbage into the water or the things that have not been decomposed These are all factors that can also cause greenhouse gases."
            />
          </div>
        </div>
        <Image src={BigFrame} alt="BigFrame" />
      </div>
      <Textarea
        isReadOnly
        className=""
        color="primary"
        label="CCMan"
        defaultValue="ha-ha-ha, those foul-smelling waters are indeed a result of human intervention. Stagnant or foul water often occurs due to the decomposition or fermentation of organic matter in oxygen-deprived conditions. This process can generate significant amounts of gases when sewage is trapped, possibly producing carbon dioxide (CO2) and methane (CH4) as it decomposes. The unpleasant odor emitted can be hydrogen sulfide gas (H2S), a byproduct of organic decomposition in anaerobic conditions, or other odors from various industrial facilities like fish processing plants and slaughterhouses."
      />
      <div className="bg-black py-24 flex justify-center">
        <Link href="/quiz">
          <Button color="secondary" variant="faded">
            Go Answer Questions!!!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Frame7;
