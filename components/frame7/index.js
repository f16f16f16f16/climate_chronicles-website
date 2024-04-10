import Image from "next/image";

import BigFrame from "../../assets/frame7/gif/Wastewater.gif";

const Frame7 = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-green-300">
        <Image src={BigFrame} alt="BigFrame" />
      </div>
    </div>
  );
};

export default Frame7;
