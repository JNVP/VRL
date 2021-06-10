import React from 'react';
import '../App.scss';
import Reactplayer from './Reactplayer';
import Songs from './Songs'
import { ChakraProvider, Box, Button } from '@chakra-ui/react';
import Playlists from './Playlists'

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
          <div className="header">
            <h1>Video Request Live</h1>
          </div>
          <Songs />
          <Reactplayer />
          <div className="searchbar"></div>
          <Playlists />
          <div className="footer"></div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
