import Navbar from "../components/navbar/index";
import Image from "next/image";

import TemMan from "../assets/images/TemperMan.gif";

const Home = () => (
  <div>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
    <Image src={TemMan} width={350} height={350} />
    </div>
  </div>
);

export default Home;
