import Image from "next/image";

import BigFrame from "../../assets/frame7/gif/Wastewater.gif";

const Frame7 = () => {
  return (
    <div className="mt-96 overflow-hidden">
      <div className="bg-sky-200">
        <Image src={BigFrame} alt="BigFrame" />
      </div>
    </div>
  );
};

export default Frame7;
