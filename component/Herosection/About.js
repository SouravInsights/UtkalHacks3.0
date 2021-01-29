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
      <Aboutstory
        heading="<Hack From Home/>"
        text="From broken coffee machines to the monotony of sitting for long hours at a stretch, this paradigm shift to online hackathons rids you of many such hiccups that you normally face in an offline experience. Going virtual empowers you to create revolutionary hacks at the comfort of your sofa!"
      />
      <SimpleGrid columns={3} gap="80px">
        <Box>
          <Image src="/card.png" />
        </Box>
        <Box>
          <Image src="/card.png" />
        </Box>
        <Box>
          <Image src="/card.png" />
        </Box>
      </SimpleGrid>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={10}
        my="20px"
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Image src="images/DSP1.jpg" />
        </GridItem>
        <GridItem colSpan={4} alignContent="center" justifyContent="center">
          <Heading>Design Sprint to the Rescue!</Heading>
          <Text>
            Hackathons are great, until they are not! With unguided, unclear
            direction, hackathons can be bloated with vaporware. When we don’t
            know the problem that we’re trying to solve, we might just build
            something that no one never wanted.
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Image src="images/DSP2.jpg" />
        </GridItem>
        <GridItem colSpan={2}>
          <Image src="images/DSP3.jpg" />
        </GridItem>
        <GridItem colSpan={2}>
          <Image src="images/DSP4.jpg" />
        </GridItem>
      </Grid>
      <Box
        justifyContent="center"
        textAlign="center"
        py="10px"
      >
        <Heading
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="black"
          fontSize="220px"
          lineHeight="261px"
          color="#FE4A26"
        >
          15
        </Heading>
        <Text
          fontFamily="Rubik Mono One"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="80px"
          lineHeight="99px"
          color="#252222"
        >
          DAYS
        </Text>
        <Text
          fontFamily="Rubik Mono One"
          fontStyle="normal"
          fontWeight="normal"
          fontSize="66px"
          lineHeight="82px"
          color="#252222"
        >
          OF...
        </Text>
        <Text
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="bold"
          fontSize="30px"
          lineHeight="36px"
          letterSpacing="wider"
          color="#252222"
        >
          DESIGNING / BUILDING / CODING / HACKING
        </Text>
        <Text
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="medium"
          fontSize="26px"
          lineHeight="31px"
          letterSpacing="wider"
          color="#252222"
        >
          NETWORKING / FRIENDS / MENTORS / CHALLENGES
        </Text>
        <Text
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="medium"
          fontSize="20px"
          lineHeight="24px"
          letterSpacing="wider"
          color="#252222"
        >
          TECH TALKS / WORKSHOPS / FUN ACTIVITIES/ SCHWAGS/ PRIZES
        </Text>
        <Text
          fontFamily="Rubik"
          fontStyle="normal"
          fontWeight="medium"
          fontSize="16px"
          lineHeight="19px"
          letterSpacing="wider"
          color="#252222"
        >
          AND/ A / WHOLE/LOT/ MORE . . .
        </Text>
      </Box>
    </Box>

  )
}

export default About
