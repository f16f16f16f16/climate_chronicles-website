import Image from "next/image";
import Navibar from "../../components/navbar/index";
import ImgF from "../../assets/images/Folk.jpeg"
import ImgJ from "../../assets/images/Joke.png"
import ImgO from "../../assets/images/Owen.jpg"


const Aboutus = () => (
  <div>
    <Navibar />
    <p className="flex justify-center items-center p-6 text-8xl text-black">
      About Us
    </p>
    <div class="flex flex-row justify-center space-x-8 p-10 h-screen">
      <div class="flex flex-col items-center space-y-2">
        <Image className="w-72 h-80 object-cover mb-2" src={ImgF} />
        <span class="block font-semibold text-lg text-gray-900">Nontaphat Pongpis</span>
        <span class="block text-sm text-gray-600">folkyuseforwork@gmail.com</span>
        <span class="block text-sm text-blue-500">Programmer (Frontend, Backend)</span>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <Image className="w-72 h-80 object-cover mb-2" src={ImgJ} />
        <span class="block font-semibold text-lg text-gray-900">Pomphet Damlert</span>
        <span class="block text-sm text-gray-600">pomphetdamlert@gmail.com</span>
        <span class="block text-sm text-blue-500">Programmer (Backend)</span>
      </div>
      <div class="flex flex-col items-center space-y-2">
        <Image className="w-72 h-80 object-cover mb-2" src={ImgO} />
        <span class="block font-semibold text-lg text-gray-900">Tanapat Kongnomnan</span>
        <span class="block text-sm text-gray-600">owensickzz@gmail.com</span>
        <span class="block text-sm text-blue-500">UX/UI Designer</span>
      </div>
    </div>
  </div>
);

export default Aboutus;
