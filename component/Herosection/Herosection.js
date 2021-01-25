import React from "react"
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  StylesProvider,
} from "@chakra-ui/react"
import styles from "../../styles/Home.module.css"

const HeroSection = () => {
  return (
    <Box
      bgImage="url('/bgimage.jpeg')"
      backgroundSize={["cover"]}
      backgroundClip="border-box"
    >
      {/* <Image src="/bgimage.jpeg" /> */}
      <Flex direction="column">
        <Box ml="150px" zIndex="1" my="170px">
          <Text fontSize={["xl", "5xl"]} color="#ffffff" fontWeight="bold">
            Hack From Home
          </Text>
        </Box>
        <Box zIndex="1" my="150px" Align="center">
          <Text fontSize="xl" color="#ffffff" fontWeight="noraml" pr="10px">
            20th Feb - 7th March
          </Text>
          <Button
            size="lg"
            color="#ffffff"
            _hover={{ bg: "blue" }}
            _active={{ borderColor: "" }}
            backgroundColor="#3182ce"
          >
            Apply with Devfolio
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroSection
