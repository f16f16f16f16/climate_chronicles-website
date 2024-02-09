import { useRouter } from "next/router";
import Navibar from "../components/navbar/index";
import Image from "next/image";
import {
  Textarea,
  Card,
  CardHeader,
} from "@nextui-org/react";

import TemMan from "../assets/images/TemperMan.gif";
import Air from "../assets/images/Air.jpg";
import Earth from "../assets/images/Earth.jpg";
import Water from "../assets/images/Water.jpg";

const Home = () => {
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
      <Navibar />
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4 md:space-x-20">
        <Textarea
          isReadOnly
          variant="bordered"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec quis ante at purus pulvinar tempus. Vivamus et tellus id libero imperdiet congue. 
        Aenean consectetur magna odio, quis porttitor ex mollis in. Nulla pretium malesuada molestie. 
        Curabitur at posuere justo. Integer id tortor id odio cursus vehicula. Nulla dui lectus, posuere quis lectus at, 
        volutpat maximus lacus. Nulla vel odio in ipsum fringilla malesuada quis eu velit. Nullam id euismod enim, 
        at fringilla nisl. Proin quis rutrum purus. Vestibulum gravida urna tellus, mattis cursus ante pharetra id.
         Mauris ut lorem elit. Maecenas a lorem mauris."
          className="max-w-72 pt-10 md:max-w-md"
        />
        <Image className="w-36 py-10 md:w-64" src={TemMan} />
      </div>

      <div className=" gap-2 grid grid-cols-1 px-10 pb-20 space-y-6">
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
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={Air}
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
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={Earth}
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
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={Water}
          />
        </Card>
      </div>
    </div>
  );
};

export default Home;
