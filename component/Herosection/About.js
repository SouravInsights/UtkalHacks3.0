import React from "react"
import {
  Heading,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react"

const Aboutstory = ({ heading, text, url }) => {
  return (
    <Flex direction="column">
      <Heading
        fontFamily="Rubik"
        fontWeight="black"
        fontSize="4xl"
        lineHeight="taller"
        letterSpacing="wider"
        color="#252222"
      >
        {heading}
      </Heading>
      <Text
        fontFamily="Rubik"
        fontWeight="normal"
        fontSize="xl"
        color="gray.600"
      >
        {text}
      </Text>
    </Flex>
  )
}

const About = () => {
  return (
    <Box my="60px">
      {/* Why online hackthon is better? section starts here */}
      <Aboutstory
        heading="<Hack From Home/>"
        text="From broken coffee machines to the monotony of sitting for long hours at a stretch, this paradigm shift to online hackathons rids you of many such hiccups that you normally face in an offline experience. Going virtual empowers you to create revolutionary hacks at the comfort of your sofa!"
      />
    </Box>
  )
}

export default About
