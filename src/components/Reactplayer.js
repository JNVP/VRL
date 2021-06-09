import React from 'react'
import ReactPlayer from 'react-player'

export default function Reactplayer() {
  
  const url = [
    "https://www.youtube.com/watch?v=K38xNqZvBJI", "https://www.youtube.com/watch?v=UNbOr0ylYZk"
  ]

  return (
    <div className="react-player">react-player
      <ReactPlayer
        url={url}
        width={'100%'}
        height={'90%'}
        playing={true}
       // muted={false}
        controls={true}
      />
    </div>
  )
}
