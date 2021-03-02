import React from "react"
import { Heading, Image, Grid, GridItem } from "@chakra-ui/react"
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
      my={["72px", "72px", "72px", "80px", "120px"]}
    >
      <GridItem colSpan={["1", "6", "6", "4", "4"]}>
        <Section
          heading="Design Sprint to the Rescue!"
          description="Hackathons are great, until they are not! With unguided, unclear
          direction, hackathons can be bloated with vaporware. When we don’t
          know the problem that we’re trying to solve, we might just build
          something that no one never wanted."
        >
          <Heading
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
        <Image src="https://res.cloudinary.com/emishalabs/image/upload/q_50/v1612205738/UtkalHacks%203.0/DSP1_e8fym8.webp" />
      </GridItem>

      <GridItem colSpan={["1", "3", "3", "2", "2"]}>
        <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1612205708/UtkalHacks%203.0/DSP2_oqpurs.webp" />
      </GridItem>

      <GridItem colSpan={["1", "3", "3", "2", "2"]}>
        <Image src="https://res.cloudinary.com/emishalabs/image/upload/q_50/v1612205684/UtkalHacks%203.0/DSP4_ieytm6.webp" />
      </GridItem>

      <GridItem colSpan={["1", "3", "3", "2", "2"]}>
        <Image src="https://res.cloudinary.com/emishalabs/image/upload/q_50/v1612205701/UtkalHacks%203.0/DSP3_dyd0u6.webp" />
      </GridItem>
    </Grid>
  )
}

export default SprintSection
