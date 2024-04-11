import React, { useState } from 'react';
import ReactHowler from 'react-howler';

const BackgroundAudio = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={togglePlay}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {playing ? 'Pause Music' : 'Play Music'}
      </button>
      <ReactHowler
        src="/PCIII-Remembering-Past-Everything.mp3"
        playing={playing}
        loop={true}
        volume={1}
      />
    </div>
  );
}

export default BackgroundAudio;
