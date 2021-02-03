import React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Fonts from "../styles/Fonts"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
