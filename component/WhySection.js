import React from "react"
import {
  Flex,
  Image,
  SimpleGrid,
} from "@chakra-ui/react"
import Section from "./Section"
import NextImage from "next/image";

function WhySection({ heading, description, coverImage, reverse }) {
  return (

    <SimpleGrid
      spacing={10}
      my="32px"
      spacing={["24px", "24px", "32px", "32px", "40px"]}
      columns={{ base: 1, lg: 2 }}
    >
      <Section heading={heading} description={description} />
      <Flex
        justifyContent={["center", "center", "space-around", "flex-end", "flex-end"]}
      >
        <Image w={["100%", "100%", "80%", "auto", "auto"]} src={coverImage} />
      </Flex>
    </SimpleGrid>

  )
}

export default WhySection
