import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  isPlaying,
  songs,
  setCurrentSong,
  audioRef,
  libraryOpen,
}) => {
  return (
    <div className={`library ${libraryOpen ? "library-active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
            isPlaying={isPlaying}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
