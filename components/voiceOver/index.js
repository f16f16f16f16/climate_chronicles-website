import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import ReactHowler from "react-howler";

const VoiceOver = ({ src, buttonColor = "primary" }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const handleOnEnd = () => {
    setPlaying(false);
  };

  return (
    <div className="">
      <Button
        onClick={togglePlay}
        isIconOnly
        color={buttonColor}
        aria-label="Toggle audio"
      >
        {playing ? (
          <SpeakerXMarkIcon className="h-5 w-5" />
        ) : (
          <SpeakerWaveIcon className="h-5 w-5" />
        )}
      </Button>
      <ReactHowler src={src} playing={playing} onEnd={handleOnEnd} volume={5} />
    </div>
  );
};

export default VoiceOver;
