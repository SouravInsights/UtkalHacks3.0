import React from "react"
import {
  Flex,
  Stack,
  Box,
  Image,
  SimpleGrid,
} from "@chakra-ui/react"
import Section from "./Section"
import NextImage from "next/image";

function WhySection({ heading, description, coverImage, reverse }) {
  return (
    <Stack
      direction={["column", "column", "column", reverse ? "row-reverse" : "row", reverse ? "row-reverse" : "row"]}
      justifyContent="space-between"
      my={["40px", "60px", "80px", "80px", "80px"]}
      spacing={["12px", "12px", "26px", "26px", "26px"]}
    >
      <Box>
        <Image src={coverImage} />
      </Box>

      <Section heading={heading} description={description} />

    </Stack>

  )
}

export default WhySection

