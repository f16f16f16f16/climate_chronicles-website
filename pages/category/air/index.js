import { useRouter } from "next/router";
import Image from "next/image";
import NaviBar from "../../../components/navbar/index";
import { Card, CardHeader } from "@nextui-org/react";

import ImgAir from "../../../assets/images/Air.jpg";
import ImgAir2 from "../../../assets/images/Air2.jpg";

const Air = () => {
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
          src={ImgAir}
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
              ฝุ่นควัน ฝุ่นควัน ฝุ่นควัน ฝุ่นควัน ฝุ่นควัน ฝุ่นควัน
            </p>
            <h4 className="text-white font-medium text-large">ฝุ่นควัน</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={ImgAir2}
          />
        </Card>
      </div>
    </div>
  );
};

export default Air;
