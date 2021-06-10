import React from 'react';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    title: "Changa One",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      // ...
      900: "#171923",
    },
    green: {
      200: "#8aefad",
      300: "#1cd25c",
      700: "#276749"
    }
  },
});

export default theme