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
        <Box ml="130px" zIndex="1" my="170px">
          <Text fontSize="5xl" color="#ffffff" fontWeight="bold">
            Hack From Home
          </Text>
        </Box>
        <Box zIndex="1" my="150px" Align="right" mx="100px">
          <Text fontSize="xl" color="#ffffff" fontWeight="noraml" pr="10px">
            20th Feb - 7th March
          </Text>
          <Button
            size="lg"
            borderRadius="10px"
            color="#ffffff"
            _hover={{ bg: "blue" }}
            _active={{ borderColor: "" }}
            my="20px"
            boxShadow="2xl"
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
