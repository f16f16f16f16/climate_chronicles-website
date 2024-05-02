import Image from "next/image";

import Navibar from "../../../components/navbar/index";

import ImgSpecLnw from "../../../assets/images/RjarnLnw.png";

const Expert = () => (
  <div>
    <Navibar />
    <p className="flex justify-center items-center p-6 mt-8 text-black text-5xl md:text-7xl xl:text-8xl font-semibold">
      Expert
    </p>

    <div className="flex flex-col items-center space-y-8 p-10 md:flex-row md:justify-center  md:space-y-0 md:space-x-24">
      <div className="flex flex-col items-center">
        <Image className="w-60 md:w-72 " src={ImgSpecLnw} alt="Expert" />
      </div>
    </div>
  </div>
);

export default Expert;
