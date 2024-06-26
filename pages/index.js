import Frame1 from "@/components/frame1";
import Frame2 from "@/components/frame2";
import Frame3 from "@/components/frame3";
import Frame4 from "@/components/frame4";
import Frame5 from "@/components/frame5";
import Frame6 from "@/components/frame6";
import Frame7 from "@/components/frame7";
import Navibar from "../components/navbar/index";
import BackgroundAudio from "@/components/bgAudio";
import Frame8 from "@/components/frame8";

const Home = () => {
  return (
    <div>
      <Navibar />
      <BackgroundAudio />
      <Frame1 />
      <div className="bg-gradient-to-b from-[#00010d] to-zinc-900 h-[30rem]" />
      <Frame2 />
      <div className="bg-gradient-to-b from-sky-200 to-neutral-500 h-[20rem]" />
      <Frame3 />
      <div className="bg-gradient-to-b from-neutral-500 to-orange-400 h-[15rem]" />
      <Frame4 />
      <div className="bg-gradient-to-b from-orange-400 to-yellow-200 h-[15rem]" />
      <Frame5 />
      <div className="bg-gradient-to-b from-yellow-200 to-amber-700 h-[15rem]" />
      <Frame6 />
      <div className="bg-gradient-to-b from-amber-700 to-slate-500 h-[15rem]" />
      <Frame7 />
      <div className="bg-gradient-to-b from-slate-500 to-rose-300 h-[15rem]" />
      <Frame8 />
    </div>
  );
};

export default Home;
