import React from 'react'

export default function Playlists() {

  const playlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="playlists">
      <h2>Playlists</h2>
      {playlist.map((playlist) => (
        <p className="playlist">{playlist}</p>
      ))}
    </div>
  );
}
