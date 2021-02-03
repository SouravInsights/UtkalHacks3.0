import React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { Global } from "@emotion/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
