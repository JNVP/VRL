import React from 'react';
import ReactPlayer from 'react-player';

export default function Reactplayer() {
  const url = [
    'https://www.youtube.com/watch?v=6Ux6SlOE9Qk',
    'https://www.youtube.com/watch?v=aCyGvGEtOwc',
    'https://www.youtube.com/watch?v=Ajq4Ek-jChA',
    'https://www.youtube.com/watch?v=UNbOr0ylYZk',
    'https://www.youtube.com/watch?v=K38xNqZvBJI',
    'https://www.youtube.com/watch?v=RoLTPcD1S4Q',
    'https://www.youtube.com/watch?v=1y6smkh6c-0',
    'https://www.youtube.com/watch?v=5NV6Rdv1a3I',
    'https://www.youtube.com/watch?v=I7HahVwYpwo',
    'https://www.youtube.com/watch?v=6_5D4y6x-oo',
    'https://www.youtube.com/watch?v=0NKUpo_xKyQ',
    'https://www.youtube.com/watch?v=fBf2v4mLM8k',
    'https://www.youtube.com/watch?v=BR_DFMUzX4E',
    'https://www.youtube.com/watch?v=IRvGZffXhfk',
    'https://www.youtube.com/watch?v=C6IT5FgrnUA',
    'https://www.youtube.com/watch?v=WpYeekQkAdc',
    'https://www.youtube.com/watch?v=WL1hlzLsUaU',
    'https://www.youtube.com/watch?v=2zNSgSzhBfM',
    'https://www.youtube.com/watch?v=hT_nvWreIhg',
    'https://www.youtube.com/watch?v=EPo5wWmKEaI',
    'https://www.youtube.com/watch?v=FMdQmlEuliE',
    'https://www.youtube.com/watch?v=kqaGZYDGcUw',
    'https://www.youtube.com/watch?v=ABzh6hTYpb8',
    'https://www.youtube.com/watch?v=i-gyZ35074k',
    'https://www.youtube.com/watch?v=7xzU9Qqdqww',
    'https://www.youtube.com/watch?v=FnEKXkGCCU8',
    'https://www.youtube.com/watch?v=2ggzxInyzVE',
    'https://www.youtube.com/watch?v=U5rLz5AZBIA',
    'https://www.youtube.com/watch?v=T-sxSd1uwoU',
    'https://www.youtube.com/watch?v=fDkFLXzwOKA',
    'https://www.youtube.com/watch?v=IxxstCcJlsc',
  ];

  return (
    <div className="react-player">
      <ReactPlayer
        url={url}
        width={'100%'}
        height={'100%'}
        playing={true}
        // muted={false}
        controls={true}
        loop={true}
      />
    </div>
  );
}
