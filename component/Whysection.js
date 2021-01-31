import React from "react"
import { Flex, Image, Box, Text, Stack } from "@chakra-ui/react"

function Whysection({ heading, text, url, reverse }) {
  return (
    <Stack
      direction={reverse === "true" ? "row-reverse" : "row"}
      spacing="80px"
      mb="130px"
    >
      <Image src={url} />
      <Box>
        <Text
          fontFamily="Rubik Mono One"
          fontSize="36px"
          fontWeight="normal"
          lineHeight="45px"
        >
          {heading}
        </Text>
        <Text
          fontFamily="Rubik"
          fontSize="22px"
          fontWeight="normal"
          lineHeight="26px"
          textAlign="justify"
        >
          {text}
        </Text>
      </Box>
    </Stack>
  )
}

export default Whysection
