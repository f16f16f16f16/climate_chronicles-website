import Image from "next/image";

import Navibar from "../../../components/navbar/index";

import ImgF from "../../../assets/images/Folk.png";
import ImgJ from "../../../assets/images/Joke.png";
import ImgO from "../../../assets/images/Owen.png";

const Team = () => (
  <div>
    <Navibar />
    <p className="flex justify-center items-center p-6 mt-8 text-black text-[43px] md:text-7xl xl:text-8xl font-semibold">
      Team members
    </p>
    <div className="flex flex-col items-center space-y-8 p-10 md:flex-row md:justify-center  md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgF} alt="Developer" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgJ} alt="Developer" />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgO} alt="UX/UI Designer" />
      </div>
    </div>
  </div>
);

export default Team;
