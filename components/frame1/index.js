import Image from "next/image";

import DekSpeaking from "../../assets/frame1/DekSpeaking.gif";
import Cloud1 from "../../assets/frame1/Cloud1.gif";
import Cloud2 from "../../assets/frame1/Cloud2.gif";
import Cloud3 from "../../assets/frame1/Cloud3.gif";
import Heaven from "../../assets/frame1/Heaven.gif";
import God from "../../assets/frame1/God.gif";


const Frame1 = () => {
    return (
      <div className="relative p-8 md:p-20 xl:p-20 flex justify-between items-center space-x-2 md:space-x-4 xl:space-x-4 bg-blue-100 overflow-hidden">
        {/* Background container for clouds, covering the entire component */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center space-x-1 md:space-x-2 xl:space-x-2 z-0">
          <Image src={Cloud1} className="w-1/2 md:w-1/2 xl:w-2/3 h-auto opacity-50" alt="Cloud 1" />
          <Image src={Cloud2} className="w-1/2 md:w-1/2 xl:w-2/3 h-auto opacity-50" alt="Cloud 2" />
          <Image src={Cloud3} className="w-1/2 md:w-1/2 xl:w-2/3 h-auto opacity-50" alt="Cloud 3" />
        </div>
  
        {/* DekSpeaking Image */}
        <div className="relative z-10 flex-shrink-0">
          <Image src={DekSpeaking} className="w-20 md:w-48 xl:w-60 h-auto" alt="Dek Speaking" />
        </div>
    
        {/* Heaven and God, with God positioned over Heaven */}
        <div className="relative z-10 flex-shrink-0">
          <Image src={Heaven} className="w-48 md:w-[28rem] xl:w-[36rem] h-auto " alt="Heaven" />
          <Image src={God} className="w-24 md:w-64 xl:w-80 h-auto absolute top-4 md:top-8 xl:top-10 left-1/2 transform -translate-x-1/2" alt="God" />
        </div>
      </div>
    );
  };
  
export default Frame1;
