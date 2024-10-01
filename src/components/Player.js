import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPlay,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //* Fucntions
  const playSongHandler = () => {
    setIsPlaying(!isPlaying);
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  const skipSongHandler = async (direction) => {
    let songIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction) {
      await setCurrentSong(songs[(songIndex + 1) % songs.length]);
    } else {
      if (songIndex - 1 === -1) {
        songIndex = songs.length;
      }
      await setCurrentSong(songs[(songIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const timeUpdateHandler = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const divAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p className="start-time">{timeUpdateHandler(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            min={0}
            step={0.001}
            max={songInfo.duration || 0}
            type="range"
          />
          <div style={divAnim} className="animate-track"></div>
        </div>
        <p className="start-time">{timeUpdateHandler(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler(false)}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler(true)}
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
