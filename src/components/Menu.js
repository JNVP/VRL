import React from 'react';
import '../App.scss';
import Playlists from './Playlists'
import { ChakraProvider, Box, Button } from "@chakra-ui/react"


function Menu () {
    return (
        <div>
            <Playlists></Playlists>
        </div>
    )
}


export default Menu;