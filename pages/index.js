import Navibar from "../components/navbar/index";
import Image from "next/image";

import TemMan from "../assets/images/TemperMan.gif";

const Home = () => (
  <div>
    <Navibar />
    <div className="flex justify-center items-center h-screen">
      <Image src={TemMan} width={350} height={350} />
    </div>
  </div>
);

export default Home;
