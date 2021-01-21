import React from "react"
import { Box, Heading, Image } from "@chakra-ui/react"

const Sponsor = ({ logo, name }) => {
  return (
    <Box w="100%" p="5px">
      <Heading>{name}</Heading>
      <Image src={logo} />
    </Box>
  )
}

export default Sponsor
