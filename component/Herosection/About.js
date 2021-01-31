import React, { useState } from "react"
import {
  Heading,
  Box,
  Text,
  Flex,
  SimpleGrid,
  Image,
  Grid,
  GridItem,
  Stack,
  Avatar,
  IconButton
} from "@chakra-ui/react"
import { FaArrowLeft, FaArrowRight, FaDiscord } from 'react-icons/fa';

import Card from '../Card/Card'
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import Description from '../Descriptionsection'


const Aboutstory = ({ heading, text, url }) => {
  return (
    <Flex direction="column">
      <Heading
        fontFamily="Rubik"
        fontWeight="black"
        fontSize="42px"
        lineHeight="3.125em"
        letterSpacing="wider"
        color="#252222"
      >
        {heading}
      </Heading>
      <Text
        fontFamily="Rubik"
        fontWeight="normal"
        fontSize="2xl"
        lineHeight="taller"

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

      {/* Card Section start here */}
      {/*  <SimpleGrid columns={3} gap="80px" > */}
      <Flex direction="row" my="20px" >

        <Flex
          direction="row"
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: "none",
            }
          }}
        >
          {/* Card 1*/}
          <Card
            border="1px solid #DED9D9"
            coverImage={'images/Bgimage2.jpg'}
            header={
              <CardHeader
                title="A better working environment."
              />
            }
          >
            <CardBody>
              <Text direction="row">
                No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done!
                </Text>
            </CardBody>
          </Card>

          {/* Card 2*/}
          <Card
            border="1px solid #DED9D9"
            coverImage={'images/Bgimage3.jpg'}
            header={
              <CardHeader
                title="Better physical & mental state!"
              />
            }
          >
            <CardBody>
              <Text direction="row">
                No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done!
                </Text>
            </CardBody>
          </Card>

          {/* Card 3*/}
          <Card
            border="1px solid #DED9D9"
            coverImage={'images/DSP1.jpg'}
            header={
              <CardHeader
                title="Better team collaboration ."
              />
            }
          >
            <CardBody>
              <Text direction="row">
                No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done!
                </Text>
            </CardBody>
          </Card>

        </Flex>
        {/* <IconButton
            boxShadow="2xl"
            borderRadius="50px"
            color="black"
            colorScheme="white"
            size="lg"
            icon={<FaArrowLeft />}
            onClick={prevSlide}
          /> */}
        {/*    <IconButton
            boxShadow="2xl"
            borderRadius="50px"
            color="black"
            colorScheme="gray.400"
            size="lg"
            icon={<FaArrowRight />}
            onClick={nextSlide}
          />*/}
      </Flex>
      {/* </SimpleGrid> */}

      < Description />



    </Box>

  )
}

export default About
