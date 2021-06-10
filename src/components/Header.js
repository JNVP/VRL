import React from 'react';
import { Box, Text, Flex } from "@chakra-ui/react"
// import Theme from "./theme"

const Header = () => {
  return (

    <Box bg="green.700" h="100%" w="100%" p={4} color="green.200" align="center">
     <Text bg="green.700" fontSize="5xl" fontFamily="'Changa One', cursive">Video Request Live</Text>
     {/* <Text bg="green.700" color="red" fontSize="5xl" fontFamily="'Changa One', cursive">Live</Text> */}
    </Box>
  )
}


  export default Header;