import Image from "next/image";

import BigFrame from "../../assets/frame4/gif/BigFrame.gif";
import GasFloat from "../gasFloat";

const Frame4 = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-orange-400">
        <Image src={BigFrame} alt="BigFrame" />
      </div>
    </div>
  );
};

export default Frame4;
