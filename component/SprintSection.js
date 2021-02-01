import React from "react"
import { Stack, Heading, Text, Image, Grid, GridItem } from "@chakra-ui/react"
import Section from "./Section"

const SprintSection = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
        "repeat(6, 1fr)",
      ]}
      gap={["16px", "16px", "24px", "32px", "40px"]}
      my={["72px", "72px", "72px", "80px", "80px"]}
    >
      <GridItem
        colSpan={["1", "6", "6", "4", "4"]}

      >
        <Section
          heading="Design Sprint to the Rescue!"
          description="Hackathons are great, until they are not! With unguided, unclear
          direction, hackathons can be bloated with vaporware. When we don’t
          know the problem that we’re trying to solve, we might just build
          something that no one never wanted."
        >
          <Heading
            fontFamily="Rubik Mono One"
            fontWeight="bold"
            fontSize={["xl", "xl", "xl", "xl", "xl"]}
            color="#252222"
            letterSpacing="wide"
          >
            "Build something people want!"
          </Heading>
        </Section>
      </GridItem>

      <GridItem colSpan={["1", "3", "3", "2", "2"]}>
        <Image src="images/DSP1.jpg" />
      </GridItem>

      <GridItem colSpan={["1", "3", "3", "2", "2"]}>
        <Image objectFit="fill" src="images/DSP2.jpg" />
      </GridItem>

      <GridItem colSpan={["1", "3", "3", "2", "2"]}>
        <Image src="images/DSP4.jpg" />
      </GridItem>

      <GridItem
        colSpan={["1", "3", "3", "2", "2"]}
      >
        <Image src="images/DSP3.jpg" />
      </GridItem>
    </Grid>
  )
}

export default SprintSection
