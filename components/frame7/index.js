import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Link, Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import BigFrame from "../../assets/frame7/gif/Wastewater.webp";
import { animateCCMan, animateTextAreas } from "../gsap";

const Frame7 = () => {
  useEffect(() => {
    animateCCMan();
    animateTextAreas();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-green-300">
        <div className="flex">
          <Image src={CCMan} className="w-[20%] ccman-animation" />
          <div>
            <Textarea
              isReadOnly
              disableAutosize
              className="fade-textarea absolute w-[60%]"
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
        className="fade-textarea"
        color="primary"
        label="CCMan"
        defaultValue="ha-ha-ha, those foul-smelling waters are indeed a result of human intervention. Stagnant or foul water often occurs due to the decomposition or fermentation of organic matter in oxygen-deprived conditions. This process can generate significant amounts of gases when sewage is trapped, possibly producing carbon dioxide (CO2) and methane (CH4) as it decomposes. The unpleasant odor emitted can be hydrogen sulfide gas (H2S), a byproduct of organic decomposition in anaerobic conditions, or other odors from various industrial facilities like fish processing plants and slaughterhouses."
      />
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

export default Frame7;
