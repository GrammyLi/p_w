import { Button } from "antd";
import React, { useRef } from "react";
import "./index.less";

const AudioControls: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="audio-controls">
      <audio
        ref={audioRef}
        src="https://grammyli.com/g/popstar/Music/朝日温子,戸高一生%20-%20K.K.%20Idol%20(しずえ%20Ver.).mp3"
      />
      <Button onClick={playAudio} className="audio-controls__button">
        Play BGM
      </Button>
      <Button onClick={pauseAudio} className="audio-controls__button">
        Pause
      </Button>
    </div>
  );
};

export default AudioControls;
