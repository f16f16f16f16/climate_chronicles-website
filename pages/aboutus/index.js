import Image from "next/image";
import { Divider } from "@nextui-org/react";

import Navibar from "../../components/navbar/index";

import ImgProO from "../../assets/images/RjarnOak.png";
import ImgProP from "../../assets/images/RjarnPat.png";
import ImgF from "../../assets/images/Folk.png";
import ImgJ from "../../assets/images/Joke.png";
import ImgO from "../../assets/images/Owen.png";

const Aboutus = () => (
  <div>
    <Navibar />
    <p className="flex justify-center items-center p-6 mt-8 text-black text-5xl md:text-8xl ">
      About Us
    </p>

    <div className="flex flex-col items-center space-y-8 p-10 md:flex-row md:justify-center  md:space-y-0 md:space-x-24">
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgProO} alt="Advisor" />
        {/* <span className="block font-semibold text-md md:text-lg text-gray-900">Nontaphat Pongpis</span>
        <span className="block text-xs md:text-sm text-gray-600">folkyuseforwork@gmail.com</span>
        <span className="block text-xs md:text-sm text-blue-500">Programmer (Frontend, Backend)</span> */}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgProP} alt="Advisor" />
        {/* <span className="block font-semibold text-md md:text-lg text-gray-900">Pomphet Damlert</span>
        <span className="block text-xs md:text-sm text-gray-600">pomphetdamlert@gmail.com</span>
        <span className="block text-xs md:text-sm text-blue-500">Programmer (Backend)</span> */}
      </div>
    </div>
    <Divider className="my-4" style={{height: '2px'}} />
    <div className="flex flex-col items-center space-y-8 p-10 md:flex-row md:justify-center  md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgF} alt="Developer" />
        {/* <span className="block font-semibold text-md md:text-lg text-gray-900">Nontaphat Pongpis</span>
        <span className="block text-xs md:text-sm text-gray-600">folkyuseforwork@gmail.com</span>
        <span className="block text-xs md:text-sm text-blue-500">Programmer (Frontend, Backend)</span> */}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgJ} alt="Developer" />
        {/* <span className="block font-semibold text-md md:text-lg text-gray-900">Pomphet Damlert</span>
        <span className="block text-xs md:text-sm text-gray-600">pomphetdamlert@gmail.com</span>
        <span className="block text-xs md:text-sm text-blue-500">Programmer (Backend)</span> */}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Image className="w-60 md:w-72 " src={ImgO} alt="UX/UI Designer" />
        {/* <span className="block font-semibold text-md md:text-lg text-gray-900">Tanapat Kongnomnan</span>
        <span className="block text-xs md:text-sm text-gray-600">owensickzz@gmail.com</span>
        <span className="block text-xs md:text-sm text-blue-500">UX/UI Designer</span> */}
      </div>
    </div>
  </div>
);

export default Aboutus;
