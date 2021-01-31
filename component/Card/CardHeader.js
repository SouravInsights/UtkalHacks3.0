import React from "react"
import { Box, VStack, Text, Heading, Tag } from "@chakra-ui/react"

const CardHeader = ({ date, title, mode }) => {
  return (
    <Box maxH="180px" align="normal" spacing="3px">
      <Heading
        fontFamily="Rubik"

        w="100%"
        fontWeight="bold"
        fontSize="lg"
        lineHeight="short"
        color="#000000"
      >
        {title}
      </Heading>
    </Box>
  )
}
export default CardHeader
