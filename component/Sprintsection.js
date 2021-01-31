import React from "react"
import { Heading, Box, Text, Image, Grid, GridItem } from "@chakra-ui/react"

const Sprint = () => {
  return (
    <Grid
      templateRows={[
        "none",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ]}
      templateColumns={[
        "none",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap="45px"
      my="80px"
    >
      <GridItem
        colSpan={["1", "4", "4", "4"]}
        alignContent="center"
        justifyContent="center"
      >
        <Text
          fontSize={["md", "md", "lg", "36px"]}
          fontFamily="Rubik"
          fontWeight="black"
          letterSpacing="wide"
        >
          Design Sprint to the Rescue!
        </Text>
        <Text
          fontSize={["sm", "lg", "md", "xl"]}
          fontFamily="Rubik"
          fontWeight="normal"
          color="gray.600"
        >
          Hackathons are great, until they are not! With unguided, unclear
          direction, hackathons can be bloated with vaporware. When we don’t
          know the problem that we’re trying to solve, we might just build
          something that no one never wanted.
        </Text>
        <Text
          fontFamily="Rubik Mono One"
          fontWeight="bold"
          lineHeight="tall"
          letterSpacing="wide"
        >
          "Build something people want!"
        </Text>
      </GridItem>

      <GridItem colSpan={["1", "2", "2", "2"]} maxW="348px" maxH="232px">
        <Image src="images/DSP1.jpg" />
      </GridItem>

      <GridItem colSpan={["1", "2", "2", "2"]} maxW="348px" maxH="232px">
        <Image src="images/DSP2.jpg" />
      </GridItem>
      <GridItem colSpan={["1", "2", "2", "2"]} maxW="348px" maxH="232px">
        <Image src="images/DSP3.jpg" />
      </GridItem>
      <GridItem colSpan={["1", "2", "2", "2"]} maxW="348px" maxH="232px">
        <Image src="images/DSP4.jpg" />
      </GridItem>
    </Grid>
  )
}

export default Sprint
