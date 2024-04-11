import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

import BigFrame from "../../assets/frame7/gif/Wastewater.gif";

const Frame7 = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-green-300">
        <Image src={BigFrame} alt="BigFrame" />
      </div>
      <div className="bg-rose-950 py-24 flex justify-center">
        <Link href="/quiz">
          <Button color="secondary" variant="faded">
            Go Answer Questions!!!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Frame7;
