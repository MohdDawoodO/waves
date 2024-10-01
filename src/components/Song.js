import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img
        style={{
          boxShadow: `0px 0px 50px ${currentSong.color[1]}AA`,
        }}
        src={currentSong.cover}
        alt=""
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
