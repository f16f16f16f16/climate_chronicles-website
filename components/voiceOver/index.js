import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import ReactHowler from "react-howler";

const VoiceOver = ({ src, buttonColor = "primary" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <Button
        onClick={handleTogglePlay}
        isIconOnly
        color={buttonColor}
        aria-label={isPlaying ? "Stop audio" : "Play audio"}
      >
        {isPlaying ? (
          <SpeakerXMarkIcon className="h-5 w-5" />
        ) : (
          <SpeakerWaveIcon className="h-5 w-5" />
        )}
      </Button>
      <ReactHowler
        src={src}
        playing={isPlaying}
        onEnd={handleAudioEnd}
        volume={1}
      />
    </div>
  );
};

export default VoiceOver;
