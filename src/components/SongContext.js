import { propNames } from '@chakra-ui/styled-system';
import React, {useState, createContext} from 'react';



export const SongContext = createContext();

export const SongsProvider = () => {
    const [songs, setSongs] = useState([])
    return (
        <SongContext.Provider value = {[songs, setSongs]}>
        </SongContext.Provider>
    )
}






