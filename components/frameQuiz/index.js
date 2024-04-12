import Image from "next/image";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import God from "../../assets/frameQuiz/images/GOD.png";

const FrameQuiz = () => {
  return (
    <div className="flex flex-row justify-center items-center py-20 space-x-[40%]">
      <div className="w-[30%]">
        <Image src={CCMan} alt="CCMan" />
      </div>
      <div className="w-[20%]">
        <Image src={God} alt="God" />
      </div>
    </div>
  );
};

export default FrameQuiz;
