import React from "react"
import { Box, VStack, Text, Heading, Tag } from "@chakra-ui/react"

const CardHeader = ({ date, title, mode }) => {
  return (
    <Box maxH="180px" align="normal" spacing="3px">
      <Heading
        fontFamily="Rubik"
        fontStyle="normal"
        fontWeight="bold"
        fontSize="2xl"
        w="100%"
        color="#000000"
      >
        {title}
      </Heading>
    </Box>
  )
}
export default CardHeader
