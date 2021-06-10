import React, {useContext} from 'react';
import ReactPlayer from 'react-player'
import {VideoContext} from './VideoContext';

export default function Reactplayer() {
  
  const [video, setVideo] = useContext(VideoContext);
  // const url = [
  //   "https://www.youtube.com/watch?v=K38xNqZvBJI", "https://www.youtube.com/watch?v=UNbOr0ylYZk"
  // ]

  return (
    <div className="react-player">
      <ReactPlayer
        url={video}
        width={'100%'}
        height={'100%'}
        playing={true}
       // muted={false}
        controls={true}
      />
    </div>
  )
}
