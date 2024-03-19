import Image from "next/image";

import Climate from "../../assets/frame1/Climate.png";
import DekSpeaking from "../../assets/frame1/DekSpeaking.gif";
import Cloud1 from "../../assets/frame1/Cloud1.gif";
import Cloud2 from "../../assets/frame1/Cloud2.gif";
import Cloud3 from "../../assets/frame1/Cloud3.gif";
import Heaven from "../../assets/frame1/Heaven.gif";
import God from "../../assets/frame1/God.gif";

const Frame1 = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full p-24 bg-white">
        <Image src={Climate} className="w-full" />
      </div>

      <div className="relative p-4 md:p-10 xl:p-20 py-16 md:py-28 xl:py-32 bg-blue-100 overflow-hidden flex flex-col items-center">
        {/* Responsive background container for clouds */}
        <div className="absolute inset-0 flex flex-wrap justify-around items-center space-x-1 space-y-1 md:space-x-2 md:space-y-2 xl:space-x-2 xl:space-y-2 z-0 opacity-50">
          {/* Clouds background, responsive sizes */}
          <Image
            src={Cloud1}
            className="w-1/3 h-auto"
            alt="Cloud Background 1"
          />
          <Image
            src={Cloud2}
            className="w-1/3 h-auto"
            alt="Cloud Background 2"
          />
          <Image
            src={Cloud3}
            className="w-1/3 h-auto"
            alt="Cloud Background 3"
          />
          <Image
            src={Cloud1}
            className="w-1/4 h-auto"
            alt="Cloud Background 4"
          />
          <Image
            src={Cloud2}
            className="w-1/4 h-auto"
            alt="Cloud Background 5"
          />
        </div>

        {/* Spotlight effect for Heaven and God */}
        <div
          className="relative z-20 mt-4 md:mt-8 xl:mt-16"
          style={{
            boxShadow: "0 0 100px 50px rgba(255, 215, 0, 0.5)", // Soft yellow glow
            borderRadius: "50%", // Makes the shadow spread in a circular shape
          }}
        >
          <div className="relative">
            <Image
              src={Heaven}
              className="w-56 md:w-[24rem] xl:w-[36rem] h-auto"
              alt="Heaven"
            />
            <Image
              src={God}
              className="w-28 md:w-56 xl:w-72 h-auto absolute -top-6 md:-top-12 xl:-top-20 left-1/2 transform -translate-x-1/2"
              alt="God"
            />
          </div>
        </div>

        {/* Responsive spacer */}
        <div className="mt-14 md:mt-24 xl:mt-36"></div>

        {/* DekSpeaking Image, responsive */}
        <div className="relative z-30">
          <Image
            src={DekSpeaking}
            className="w-16 md:w-36 xl:w-48 h-auto"
            alt="Dek Speaking"
          />
        </div>

        {/* Expanded and responsive foreground cloud layer */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-32 md:h-48 xl:h-64 overflow-hidden">
          <Image
            src={Cloud1}
            className="w-full h-full opacity-70"
            alt="Foreground Cloud 1"
          />
          <Image
            src={Cloud2}
            className="absolute w-full h-full opacity-60"
            alt="Foreground Cloud 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
