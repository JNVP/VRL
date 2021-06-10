import React from 'react';
import '../App.scss';
import Reactplayer from './Reactplayer';
import Song from './Song';
import {SongContext, SongsProvider} from './SongContext';
import {VideoContext, VideoProvider} from './VideoContext';
import {ChakraProvider, Box, Button, GridItem, Grid} from '@chakra-ui/react';
import Playlists from './Playlists';
import Header from './Header';
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
          <Grid className="grid">
            <GridItem colSpan={12}>
              <Header />
            </GridItem>

            <GridItem className="playlist" overflow="scroll">
              {' '}
              playlist
              <Playlists />
            </GridItem>

            <VideoProvider>
              <Reactplayer />
              <div className="searchbar">searchbar</div>
              <div className="alternative-videos">
                alternative-videos
                <Song />
              </div>
            </VideoProvider>

            <div className="footer">
              <a href="/spotify/login">Signout</a>
            </div>
          </Grid>
        </div>
      </SongsProvider>
    </ChakraProvider>
  );
}

export default App;
