import React from "react"
import { Stack, Heading, Text, Image, Grid, GridItem } from "@chakra-ui/react"

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
        <Stack spacing="20px">
          <Heading
            fontFamily="Rubik"
            fontWeight="black"
            fontSize={["2xl", "2xl", "4xl", "4xl"]}
            color="#252222"
          >
            Design Sprint to the Rescue!
        </Heading>
          <Text
            as="p"
            fontFamily="Rubik"
            fontWeight="normal"
            fontSize={["xl", "xl", "2xl", "2xl"]}
            color="454954"
          >
            Hackathons are great, until they are not! With unguided, unclear
            direction, hackathons can be bloated with vaporware. When we don’t
            know the problem that we’re trying to solve, we might just build
            something that no one never wanted.
        </Text>
          <Heading
            fontFamily="Rubik Mono One"
            fontWeight="bold"
            fontSize={["xl", "xl", "xl", "xl"]}
          >
            "Build something people want!"
        </Heading>
        </Stack>
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
