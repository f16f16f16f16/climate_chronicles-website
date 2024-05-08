import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Link, Textarea } from "@nextui-org/react";

import CCMan from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import VoiceOver from "../voiceOver";

const Frame8 = () => {
  return (
    <div className="overflow-hidden">
      <div className=" flex items-center justify-center">
        <Image src={CCMan} className="w-[20%]" />
      </div>
    </div>
  );
};

export default Frame8;
