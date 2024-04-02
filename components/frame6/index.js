import Image from "next/image";

import BigFrame from "../../assets/frame6/gif/BigFrame.gif";
import Boomer from "../../assets/frame6/gif/Boomer.gif";

const Frame6 = () => {
  return (
    <div className="mt-96 overflow-hidden">
      <div className="bg-sky-200">
      <Image src={BigFrame} alt="BigFrame"/>
      <Image src={Boomer} alt="Boomer" className="w-1/3 -mt-[24%] ml-[60%]"/>
      </div>
    </div>
  );
};

export default Frame6;
