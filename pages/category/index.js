import NaviBar from "../../components/navbar/index";
import TemMan from "../../assets/images/TemperMan.gif";
import Image from "next/image";

const Category = () => (
  <div>
    <NaviBar />
    <div className="flex justify-center items-center h-screen">
      <Image src={TemMan} width={350} height={350} />
    </div>
  </div>
);

export default Category;
