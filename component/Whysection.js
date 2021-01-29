import React from "react"
import { Flex, Image, Box, Text, Stack } from "@chakra-ui/react"

function Whysection({ heading, text, url, reverse }) {
  return (
    <Stack
      direction={reverse === "true" ? "row-reverse" : "row"}
      justifyContent="space-between"
      spacing="80px"
      my="136px"
    >
      <Box maxH="322px">
        <Image src={url} />
      </Box>

      <Box>
        <Text fontSize="36px" fontWeight="normal" lineHeight="45px">
          {heading}
        </Text>
        <Text
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
