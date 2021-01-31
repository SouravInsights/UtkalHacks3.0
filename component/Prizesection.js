import React from "react"
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react"

const Prizesection = () => {
  return (
    <Box my="80px">
      <Flex direction="column">
        <Text
          fontFamily="Rubik"
          fontSize="4xl"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Did we forget about prizes?
        </Text>
        <Text
          fontFamily="Rubik"
          fontSize="22px"
          textAlign="justify"
          letterSpacing="tight"
        >
          No, not at all. We know hackers love prizes and swags! But sometimes
          useless prizes are a great turnoff for the people who hack out of
          passion. This year we are focusing more on providing valuable prizes
          that’s useful to everyone in the long run. And we’ve got a bunch of
          cool yet useful prizes in this year’s edition.
        </Text>
      </Flex>
    </Box>
  )
}

export default Prizesection
