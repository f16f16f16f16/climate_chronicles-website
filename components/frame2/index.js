import Image from "next/image";
import Dek from "../../assets/frame1/images/Dek.png";
import DekSpeak from "../../assets/frame1/gif/DekSpeaking.gif";
import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.gif";

const Frame2 = () => {
  return (
    <div>
      {/* Transformation Stage Start */}
      <div className="relative w-full h-full">
        {/* Green Energy Burst */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-green-500 opacity-20 animate-pulse" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-green-500 opacity-10 animate-spin rounded-full w-44 h-96" />
          </div>
        </div>

        {/* Background and Avatar */}
        <div className="w-full h-full p-24 bg-gradient-to-t from-purple-700 to-black overflow-hidden flex justify-center items-center z-10">
          <Image
            className="w-36 md:w-44 xl:w-64 blink"
            src={Dek}
            alt="Avatar"
          />
        </div>
      </div>

      {/* Transformation Stage Final */}
      <div className="relative w-full h-full">
        {/* Dynamic Energy Burst */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-red-500 opacity-25 animate-pulse" />
          <div className="absolute inset-0 ml-20 flex justify-center items-center">
            <div className="bg-red-500 opacity-20 animate-spin rounded-full w-40 h-40 md:w-52 md:h-52 xl:w-64 xl:h-64"></div>
            <div className="animate-bounce absolute w-20 h-20 md:w-26 md:h-26 xl:w-32 xl:h-32 bg-yellow-400 opacity-75 rounded-full mix-blend-screen filter blur-xl" />
          </div>
        </div>

        {/* Background and Avatar */}
        <div className="w-full h-full p-24 bg-gradient-to-br from-yellow-700 via-red-700 to-purple-900 bg-[url('/path/to/your/final-pattern.png')] bg-opacity-25 overflow-hidden flex justify-center items-center z-10">
          <Image
            className="ml-20 w-46 md:w-80 xl:w-96 contrast-125"
            src={CCMan}
            alt="Avatar"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
