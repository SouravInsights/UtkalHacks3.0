import React from "react"
import { Heading, Box, Text, Stack } from "@chakra-ui/react"

const PrizeSection = () => {
  return (
    <Box my="80px">
      <Stack spacing="20px" direction="column">
        <Heading
          fontWeight="black"
          fontSize={["2xl", "2xl", "4xl", "4xl"]}
          color="#252222"
        >
          Did we forget Prizes?
        </Heading>
        <Text
          as="p"
          fontWeight="normal"
          fontSize={["xl", "xl", "2xl", "2xl"]}
          color="454954"
        >
          No, not at all. We know hackers love prizes and swags! But sometimes
          useless prizes are a great turnoff for the people who hack out of
          passion. This year, we are focusing more on providing valuable prizes
          that are useful to everyone in the long run. And we’ve got a bunch of
          cool but useful ones in this year’s edition.
        </Text>
      </Stack>
    </Box>
  )
}

export default PrizeSection
