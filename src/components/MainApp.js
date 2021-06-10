import React from 'react';
import '../App.scss';
import Reactplayer from './Reactplayer';
import Song from './Song';
import {SongContext, SongsProvider} from './SongContext';
import {VideoContext, VideoProvider} from './VideoContext';
import {ChakraProvider, Box, Button, GridItem, Grid} from '@chakra-ui/react';
import Playlists from './Playlists';
import Header from './Header';
// import {theme} from './theme'

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
    {/* <ChakraProvider theme={theme}> */}
      <SongsProvider>
        <div className="wrapper">
        <Grid className="grid">
          <GridItem colSpan={12} bg="#1aa6834">
            <Header />
          </GridItem>
          <GridItem className="playlist" overflow="scroll" overflow-y="hidden"> 
            Playlists
            <Playlists/>
          </GridItem>
            <VideoProvider>
            <Reactplayer />
          <GridItem className="songs" overflow="scroll">Songs
            <Song />
          </GridItem>
            </VideoProvider>
          </Grid>
        </div>
      </SongsProvider>
    </ChakraProvider>
  );
}

export default App;
