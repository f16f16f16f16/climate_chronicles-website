import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import ReactHowler from "react-howler";

const VoiceOver = ({ src, buttonColor = "primary" }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="">
      <Button
        onClick={togglePlay}
        isIconOnly
        color={buttonColor}
        aria-label="Toggle audio"
        className=""
      >
        {playing ? (
          <SpeakerXMarkIcon className="h-5 w-5" />
        ) : (
          <SpeakerWaveIcon className="h-5 w-5" />
        )}
      </Button>
      <ReactHowler
        src={src}
        playing={playing}
        loop={true}
        volume={1}
      />
    </div>
  );
};

export default VoiceOver;
