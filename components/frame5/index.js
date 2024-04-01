import Image from "next/image";

import Mill from "../../assets/frame5/images/Mill.png";
import Straw from "../../assets/frame5/images/Straw.png";
import Tractor from "../../assets/frame5/gif/Tractor.gif";
import Fence from "../../assets/frame5/images/Fence.png";
import Fertilizer from "../../assets/frame5/images/Fertilizer.png";
import Farmer1 from "../../assets/frame5/images/Farmer1.png";
import Farmer2 from "../../assets/frame5/images/Farmer2.png";
import Cow from "../../assets/frame5/gif/Cow.gif";
import Horse from "../../assets/frame5/gif/Horse.gif";
import Rice from "../../assets/frame5/images/Rice.png";
import Shiiit from "../../assets/frame5/images/Shiiit.png";

const Frame5 = () => {
  return (
    <div className="mt-96 overflow-hidden">
      <div className="bg-sky-200 py-24"></div>
      <div className="bg-lime-700">
        <div className="flex items-center">
          <Image
            src={Mill}
            alt="Mill"
            className="w-1/3 -mt-[6rem] md:-mt-[12rem] xl:-mt-[22rem] 2xl:-mt-[28rem]"
          />
          <Image src={Straw} alt="Straw" className="w-1/6" />
          <Image
            src={Straw}
            alt="Straw"
            className="w-1/6 -mt-10 md:-mt-20 xl:-mt-36 2xl:-mt-40 -ml-10 md:-ml-20 xl:-ml-32 2xl:-ml-40"
          />
          <Image
            src={Straw}
            alt="Straw"
            className="w-1/6 -ml-12 md:-ml-24 xl:-ml-36 2xl:-ml-52"
          />
        </div>
        <div className="flex items-center  ">
          <Image
            src={Fence}
            alt="Fence"
            className="w-1/2 -mt-[5.4rem] md:-mt-[11rem] xl:-mt-[20rem] 2xl:-mt-[26rem]"
          />
          <Image
            src={Fertilizer}
            alt="Fertilizer"
            className="w-1/12 -mt-6 md:-mt-16 xl:-mt-32 2xl:-mt-40 -ml-16 md:-ml-28 xl:-ml-56 2xl:-ml-72"
          />
          <Image
            src={Fertilizer}
            alt="Fertilizer"
            className="w-1/12 -mt-6 md:-mt-16 xl:-mt-32 2xl:-mt-40"
          />
        </div>
        <div className="flex items-center gap-x-4 ">
          <Image
            src={Farmer2}
            alt="Farmer"
            className="w-1/6 -mt-20 md:-mt-32 xl:-mt-56 2xl:-mt-80 ml-4 md:ml-6 xl:ml-10 2xl:ml-12"
          />
          <Image
            src={Cow}
            alt="Cow"
            className="w-1/5 -mt-20 md:-mt-32 xl:-mt-56 2xl:-mt-80"
          />
          <Image
            src={Horse}
            alt="Horse"
            className="w-1/5 -ml-28 md:-ml-52 xl:-ml-96 2xl:-ml-[30rem] -mb-12 md:-mb-32 xl:-mb-56 2xl:-mb-80"
          />
          <Image
            src={Farmer1}
            alt="Farmer"
            className="w-[11%] -mt-[5rem] md:-mt-[7rem] xl:-mt-[12rem] 2xl:-mt-[18rem] ml-[2rem] md:ml-[7rem] xl:ml-[12rem] 2xl:ml-[18rem]"
          />
          <Image
            src={Tractor}
            alt="Tractor"
            className="w-1/3 -mt-[12rem] md:-mt-[26rem] xl:-mt-[46rem] 2xl:-mt-[67rem]"
          />
          <Image src={Rice} alt="Rice" className="w-5/12 -ml-48 md:-ml-[23rem] xl:-ml-[37rem] 2xl:-ml-[50rem] -mb-[9rem] md:-mb-[20rem] xl:-mb-[38rem] 2xl:-mb-[42rem]" />
        </div>
        <div>
          <Image src={Fence} alt="Fence" className="w-1/2 " />
        </div>
      </div>
    </div>
  );
};

export default Frame5;
