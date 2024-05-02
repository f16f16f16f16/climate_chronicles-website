import { Button, Card, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Navibar from "../../components/navbar/index";

import Team from "../../assets/images/Team.png";
import Advisor from "../../assets/images/Advisor.png";
import Expert from "../../assets/images/Expert.png";

const Aboutus = () => {
  const router = useRouter();
  const navToTeam = () => {
    router.push("/aboutus/team");
  };
  const navToAdvisor = () => {
    router.push("/aboutus/advisor");
  };
  const navToExpert = () => {
    router.push("/aboutus/expert");
  };


  return (
    <div>
      <Navibar />
      <p className="flex justify-center items-center p-6 mt-8 text-black text-5xl md:text-7xl xl:text-8xl">
        About us
      </p>

      <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-6 p-6 xl:p-16">
        <Card className="xl:w-1/3" isPressable onPress={navToAdvisor}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Advisor</p>
            <h4 className="text-black font-medium text-large">Advisor</h4>
          </CardHeader>
          <Image alt="Advisor" className="z-0" src={Advisor} />
        </Card>

        <Card className="xl:w-1/3" isPressable onPress={navToTeam}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Team</p>
            <h4 className="text-black font-medium text-large">Team</h4>
          </CardHeader>
          <Image alt="Team" className="z-0 " src={Team} />
        </Card>

        <Card className="xl:w-1/3" isPressable onPress={navToExpert}>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-black/60 uppercase font-bold">Expert</p>
            <h4 className="text-black font-medium text-large">Expert</h4>
          </CardHeader>
          <Image alt="Expert" className="z-0" src={Expert} />
        </Card>
      </div>
    </div>
  );
};

export default Aboutus;
