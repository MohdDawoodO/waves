import React from "react";

const LibrarySong = ({ isPlaying, song, setCurrentSong, audioRef }) => {
  const selectSong = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={selectSong}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img className="image" src={song.cover} alt="" />
      <div className="song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
