import React from 'react';
import '../App.scss';
import Reactplayer from './Reactplayer'
import Song from './Song';
import { SongContext, SongsProvider } from './SongContext'
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
    <div className="wrapper">
    <div className="grid">
    <div className="header">header
    </div>
    {/* <SongsProvider> */}
    <div className="playlist"> playlist
    <Playlists/>
    </div>
    
    <Reactplayer />
    <div className="searchbar">searchbar</div>
    <div className="alternative-videos">alternative-videos</div>
    {/* </SongsProvider> */}
    <div className="footer">footer</div>
    </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
