import Frame1 from "@/components/frame1";
import Frame2 from "@/components/frame2";
import Navibar from "../components/navbar/index";

const Fade = () => {
  return (
    <div className="min-h-[1000vh]">
      <Navibar />
      <Frame1/>
      <Frame2/>
    </div>
  );
};

export default Fade;
