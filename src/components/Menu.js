import React from 'react';
import '../App.scss';
import Playlists from './Playlists'
import { ChakraProvider, Box, Button, GridItem } from "@chakra-ui/react"


function Menu () {
    return (
        <Grid>
            <Playlists></Playlists>
        </GridItem>
    )
}


export default Menu;