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
  HStack,
  Avatar,
  IconButton
} from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight, FaDiscord } from 'react-icons/fa';

import Card from '../Card/Card'
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import Aboutcard from '../Card/Aboutcard';


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

      <HStack spacing="24px" overflow="auto">
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
          header="Better team collaboration."
          body="No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done! "
        />
      </HStack>
    </Box>
  )
}

export default About
