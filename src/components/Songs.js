import React from 'react';

export default function Playlist() {
  const playlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="songs">
      <h2>Songs</h2>
      {playlist.map((song) => (
        <p className="song">{song}</p>
      ))}
    </div>
  );
}
