import { useRouter } from "next/router";
import Image from "next/image";
import NaviBar from "../../../components/navbar/index";
import { Card, CardHeader } from "@nextui-org/react";

import ImgWater from "../../../assets/images/Water.jpg";
import ImgWater2 from "../../../assets/images/Water2.jpg";

const Water = () => {
  const router = useRouter();
  const navToAir = () => {
    router.push("#");
  };

  return (
    <div>
      <NaviBar />
      <div className="w-full h-64 md:flex md:h-full">
        <Image
          className="w-full h-full object-cover md:object-fill"
          src={ImgWater}
        />
      </div>

      <div className=" gap-2 grid grid-cols-1 px-10 py-10 space-y-6">
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onPress={navToAir}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
            Tsunami Tsunami Tsunami Tsunami
            </p>
            <h4 className="text-white font-medium text-large">Tsunami</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={ImgWater2}
          />
        </Card>
      </div>
    </div>
  );
};

export default Water;
