import React, {useContext} from 'react';
import '../App.scss';
import { ChakraProvider, Box, Button, Spacer } from "@chakra-ui/react"
import {SongContext} from './SongContext';
import {VideoContext} from './VideoContext';


const Song = () => {
  const [video, setVideo] = useContext(VideoContext);
  const [songs, setSongs] = useContext(SongContext);
  return (
      <div>
        {songs.map(song => {
             return (<div><Button onClick = {(e) => {
               e.preventDefault();
               const search = song.songName + " " + song.artistArr.join(" ");
               fetch(`/youtube/${song.songName}/${song.artistArr.join(" ")}`)
               .then(response => {
                 console.log(response)
                 return response.json()})
               .then(data => {
                 console.log(data);
                 setVideo([data.url])
               })
               .catch(error => console.log(error));
             }} colorScheme='green' size = "xs" variant="outline"> {song.songName} </Button>
                <Spacer /> </div>)
        })}
      </div>
   
  )
}



export default Song