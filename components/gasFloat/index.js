import Image from "next/image";

import CH4 from "../../assets/frame2/images/CH4.png";
import CO2 from "../../assets/frame2/images/CO2.png";
import HFCs from "../../assets/frame2/images/HFCs.png";
import N2O from "../../assets/frame2/images/N2O.png";
import PFCs from "../../assets/frame2/images/PFCs.png";
import SF6 from "../../assets/frame2/images/SF6.png";

const GasFloat = () => {
  return (
    <div className="flex flex-col float-animation">
      <div className="w-2 opacity-15">
        <Image src={CH4} alt="CH4" />
      </div>
      <div className="w-2 -ml-2 opacity-30">
        <Image src={CO2} alt="CO2" />
      </div>
      <div className="w-2 opacity-45">
        <Image src={HFCs} alt="HFCs" />
      </div>
      <div className="w-2 -ml-2 opacity-60">
        <Image src={N2O} alt="N2O" />
      </div>
      <div className="w-2 opacity-75">
        <Image src={PFCs} alt="PFCs" />
      </div>
      <div className="w-2 -ml-2 opacity-90">
        <Image src={SF6} alt="SF6" />
      </div>
    </div>
  );
};

export default GasFloat;
