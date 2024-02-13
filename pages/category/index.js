import { useRouter } from "next/router";
import NaviBar from "../../components/navbar/index";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

import ImgAir from "../../assets/images/Air.jpg";
import ImgEarth from "../../assets/images/Earth.jpg";
import ImgWater from "../../assets/images/Water.jpg";

const Category = () => {
  const router = useRouter();
  const navToAir = () => {
    router.push("/category/air");
  };
  const navToEarth = () => {
    router.push("/category/earth");
  };
  const navToWater = () => {
    router.push("/category/water");
  };

  return (
    <div>
      <NaviBar />
      <div className=" gap-2 grid grid-cols-1 px-10 py-20 space-y-6">
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onPress={navToAir}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Air Air Air Air Air Air
            </p>
            <h4 className="text-white font-medium text-large">Air</h4>
          </CardHeader>
          <Image          
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={ImgAir}
          />
        </Card>
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onPress={navToEarth}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Earth Earth Earth Earth Earth Earth
            </p>
            <h4 className="text-white font-medium text-large">Earth</h4>
          </CardHeader>
          <Image
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={ImgEarth}
          />
        </Card>
        <Card
          className="col-span-12 sm:col-span-4 h-[300px]"
          isPressable
          onPress={navToWater}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Water Water Water Water Water Water
            </p>
            <h4 className="text-white font-medium text-large">Water</h4>
          </CardHeader>
          <Image
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={ImgWater}
          />
        </Card>
      </div>
    </div>
  );
};

export default Category;
