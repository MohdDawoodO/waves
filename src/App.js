import React, { useRef, useState } from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";
import Library from "./components/Library";
import "./styles/app.scss";

function App() {
  //* Variables
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
    animationPercentage: 0,
  });

  //* Functions
  const timeUpdateHandler = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    const animationPercentage = (currentTime / duration) * 100;
    setSongInfo({ duration, currentTime, animationPercentage });
  };

  const LibraryUpdateHandler = () => {
    const newSongs = songs.map((song) => {
      if (currentSong.id === song.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  const endSongSkipHandler = async () => {
    let songIndex = await songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(songIndex + 1) % songs.length]);
    setTimeout(() => {
      if (isPlaying) audioRef.current.play();
    }, 1);
  };

  return (
    <div className={`App ${libraryOpen ? "active" : ""}`}>
      <Nav setLibraryOpen={setLibraryOpen} libraryOpen={libraryOpen} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong}
        songs={songs}
        libraryOpen={libraryOpen}
      />

      <audio
        onTimeUpdate={timeUpdateHandler}
        onCanPlay={() => {
          timeUpdateHandler();
          LibraryUpdateHandler();
        }}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={endSongSkipHandler}
      />
    </div>
  );
}

export default App;
