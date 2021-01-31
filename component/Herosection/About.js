import React from "react"
import {
  Heading,
  Box,
  Text,
  Flex,
  Stack
} from "@chakra-ui/react"

import Description from '../Descriptionsection';
import Aboutcard from '../Card/Aboutcard';


const Aboutstory = ({ heading, text, url }) => {
  return (
    <Flex direction="column">
      <Heading
        fontFamily="Rubik"
        fontWeight="black"
        fontSize="36px"
        letterSpacing="wider"
        color="#252222"
      >
        {heading}
      </Heading>
      <Text
        fontFamily="Rubik"
        fontWeight="normal"
        fontSize={["xl", "xl", "2xl", "2xl"]}
      >
        {text}
      </Text>
    </Flex>
  )
}

const About = () => {

  return (
    <Box my="80px">
      {/* Why online hackthon is better? section starts here */}
      <Aboutstory
        heading="<Hack From Home/>"
        text="From broken coffee machines to the monotony of sitting for long hours at a stretch, this paradigm shift to online hackathons rids you of many such hiccups that you normally face in an offline experience. Going virtual empowers you to create revolutionary hacks at the comfort of your sofa!"
      />

      {/* Card section starts here */}

      <Stack spacing="15px" mt="30px" direction={["column", "column", "row", "row"]} >
        <Aboutcard
          coverImage="images/Card1.jpg"
          header="A better working environment"
          body="No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done! "
        />

        <Aboutcard
          coverImage="images/Card2.jpg"
          header="Better physical & mental state"
          body="No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done! "
        />

        <Aboutcard
          coverImage="images/Card3.jpg"
          header="Better team collaboration"
          body="No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done! "
        />
      </Stack>

      < Description />



    </Box>

  )
}

export default About
