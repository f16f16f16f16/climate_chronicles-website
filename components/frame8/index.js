import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Link, Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame8/gif/CCMan_Stand+hand+speak.webp";
import CCmanWatering from "../../assets/frame8/gif/CCman_Watering.webp";
import CCmanDriving from "../../assets/frame8/gif/Ccman_Driving.webp";
import CCmanTrashing from "../../assets/frame8/gif/CCman_Trashing.webp";
import CCmanShopping from "../../assets/frame8/gif/CCman_Shopping.webp";

const Frame8 = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-center py-10">
        <Image src={CCMan} className="w-[20%]" />
      </div>

      <div className="flex flex-col items-center justify-center space-y-20">
        <div className="flex flex-col items-center justify-center justify-center">
          <Image
            src={CCmanWatering}
            className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]"
          />
          <Textarea
            isReadOnly
            disableAutosize
            className="xl:w-[75%] py-4"
            color="primary"
            label="CCMan"
            defaultValue="And when humans throw garbage into the water or the things that have not been decomposed These are all factors that can also cause greenhouse gases."
          />
        </div>
        <div className="flex flex-col items-center justify-center justify-center">
          <Image src={CCmanDriving} className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]" />
          <Textarea
            isReadOnly
            disableAutosize
            className="xl:w-[75%] py-4"
            color="primary"
            label="CCMan"
            defaultValue="And when humans throw garbage into the water or the things that have not been decomposed These are all factors that can also cause greenhouse gases."
          />
        </div>
        <div className="flex flex-col items-center justify-center justify-center">
          <Image src={CCmanTrashing} className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]" />
          <Textarea
            isReadOnly
            disableAutosize
            className="xl:w-[75%] py-4"
            color="primary"
            label="CCMan"
            defaultValue="And when humans throw garbage into the water or the things that have not been decomposed These are all factors that can also cause greenhouse gases."
          />
        </div>
        <div className="flex flex-col items-center justify-center justify-center">
          <Image src={CCmanShopping} className="md:w-[90%] xl:w-[70%] 2xl:w-[60%]" />
          <Textarea
            isReadOnly
            disableAutosize
            className="xl:w-[75%] py-4"
            color="primary"
            label="CCMan"
            defaultValue="And when humans throw garbage into the water or the things that have not been decomposed These are all factors that can also cause greenhouse gases."
          />
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
