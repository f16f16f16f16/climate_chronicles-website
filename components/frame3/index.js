import Image from "next/image";

import Plane from "../../assets/frame3/images/Plane.png";
import Mask from "../../assets/frame3/gif/Mask.gif";
import Building from "../../assets/frame3/gif/Mask_Billboard.gif";
import Factory1 from "../../assets/frame3/gif/Factory1GIF.gif";
import Factory2 from "../../assets/frame3/gif/Factory2GIF.gif";
import Road from "../../assets/frame3/images/Road.png";
import Car1 from "../../assets/frame3/gif/Car1GIF.gif";
import Car2 from "../../assets/frame3/gif/Car2GIF.gif";
import Car3 from "../../assets/frame3/gif/Car3GIF.gif";

const Frame3 = () => {
  return (
    <div className="bg-sky-200">
      <div className="flex justify-center items-center">
        <Image
          src={Plane}
          className="w-28 md:w-52 xl:w-96 py-20 md:py-36 xl:py-52 2xl:py-72"
        />
      </div>
      <div className="flex gap-x-4 overflow-hidden">
        <Image src={Building} className="w-1/3" />
        <Image src={Factory1} className="w-1/3" />
        <Image src={Factory2} className="w-1/3" />
      </div>

      <div>
        <Image
          src={Road}
          className="-mt-[5.7rem] md:-mt-[10.5rem] xl:-mt-[20rem] 2xl:-mt-[26.5rem]"
        />
        <div className="flex gap-x-4">
          <div>
            <Image
              src={Car1}
              className="w-2/3 -mt-16 md:-mt-32 xl:-mt-56 2xl:-mt-72 ml-10 md:ml-16 xl:ml-28 2xl:ml-36"
            />
          </div>
          <div>
            <Image
              src={Car2}
              className="w-2/3 -mt-20 md:-mt-40 xl:-mt-80 2xl:-mt-96 ml-10 md:ml-16 xl:ml-28 2xl:ml-36"
            />
          </div>
          <div>
            <Image
              src={Car3}
              className="w-2/3 -mt-12 md:-mt-24 xl:-mt-48 2xl:-mt-60 ml-4 md:ml-16 xl:ml-28 2xl:ml-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
