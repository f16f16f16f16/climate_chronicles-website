import { Button } from "@nextui-org/react";
import Link from "next/link";
import Navibar from "../../components/navbar/index";

const Aboutus = () => (
  <div>
    <Navibar />
    <p className="flex justify-center items-center p-6 mt-8 text-black text-5xl md:text-7xl xl:text-8xl">
      About Us
    </p>

    <div className="flex flex-row">
      <Link className="w-1/2" href="/aboutus/team">
        <Button className="w-full bg-red-500 text-white text-4xl md:text-6xl xl:text-7xl font-bold py-56 rounded-none text-center">
          Team
        </Button>
      </Link>
      <Link className="w-1/2" href="/aboutus/advisor">
        <Button className="w-full bg-blue-500 text-white text-4xl md:text-6xl xl:text-7xl font-bold py-56 rounded-none text-center">
          Advisor
        </Button>
      </Link>
    </div>
  </div>
);

export default Aboutus;
