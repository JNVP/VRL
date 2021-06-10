import React from 'react';
import '../App.scss';
import Reactplayer from './Reactplayer'
import Song from './Song';
import { SongContext, SongsProvider } from './SongContext'
import { VideoContext, VideoProvider } from './VideoContext';
import { ChakraProvider, Box, Button } from "@chakra-ui/react"
import Playlists from './Playlists';
// import logo from './spotify.svg';
function App() {
  // const [data, setData] = React.useState(null);

  // // React.useEffect(() => {
  // //   fetch('/api')
  // //     .then((res) => {
  // //       console.log(res)
  // //       return res.json()
  // //     })
  // //     .then((data) => setData(data.message));
  // // }, []);

  // React.useEffect(async () => {
  //   const response1 = await fetch('/api');
  //   const response2 = await response1.json();
  //   const data = await response2;
  //   console.log(data.message);
  //   setData(data.message);
  // }, []);

  return (
    <ChakraProvider>
    <SongsProvider>
    <div className="wrapper">
    <div className="grid">
    <div className="header">header
    </div>
 
    <div className="playlist"> playlist
    <Playlists/>
    </div>
    

    <VideoProvider>
    <Reactplayer />
    <div className="searchbar">searchbar</div>
    <div className="alternative-videos">alternative-videos
    <Song />
    </div>
    </VideoProvider>
    
    <div className="footer">footer</div>
    </div>
    </div>
    </SongsProvider>
    </ChakraProvider>
  );
}

export default App;
