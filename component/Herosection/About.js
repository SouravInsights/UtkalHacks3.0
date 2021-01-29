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
      <Heading size="3xl" fontFamily="rubik">
        {heading}
      </Heading>
      <Text fontFamily="rubik" fontSize="3xl" fontWeight="normal">
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
      {/* Design-sprint section starts here */}
      <Grid
        display={{ sm: "flex", md: "grid" }}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={10}
        my="20px"
      >
        <GridItem rowSpan={1} colSpan={2}>
          <Image src="/DSP1.jpg" />
        </GridItem>
        <GridItem colSpan={4} alignContent="center" justifyContent="center">
          <Heading fontSize={["md", "md", "lg", "50px"]}>
            Design Sprint to the Rescue!
          </Heading>
          <Text fontSize={["sm", "lg", "md", "xl"]}>
            Hackathons are great, until they are not! With unguided, unclear
            direction, hackathons can be bloated with vaporware. When we don’t
            know the problem that we’re trying to solve, we might just build
            something that no one never wanted.
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Image src="/DSP2.jpg" />
        </GridItem>
        <GridItem colSpan={2}>
          <Image src="/DSP3.jpg" />
        </GridItem>
        <GridItem colSpan={2}>
          <Image src="/DSP4.jpg" />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default About
