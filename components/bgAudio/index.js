import React, { useState } from 'react';
import ReactHowler from 'react-howler';

const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleTogglePlay}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <ReactHowler
        src="/PCIII-Remembering-Past-Everything.mp3"
        playing={isPlaying}
        loop={true}
        volume={1}
      />
    </div>
  );
};

export default BackgroundAudio;
