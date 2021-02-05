import React from "react"
import { Heading, Box, Text, Stack } from "@chakra-ui/react"
import Aboutcard from "../Card/Aboutcard"
import Section from "../Section"

const About = () => {
  return (
    <Box mt={["60px", "60px", "80px", "80px", "80px"]}>
      {/* Why online hackthon is better? section starts here */}
      <Section
        heading="Hack From Home"
        description="From broken coffee machines to the monotony of sitting for long hours at a stretch, this paradigm shift to online hackathons rids you of many such hiccups that you normally face in an offline experience. Going virtual empowers you to create revolutionary hacks at the comfort of your sofa!"
      />

      {/* WhyCard section starts here */}
      <Stack
        spacing="15px"
        mt="30px"
        direction={["column", "column", "column", "row"]}
        overflow="auto"
      >
        <Aboutcard
          coverImage="https://res.cloudinary.com/emishalabs/image/upload/q_30/v1612203030/UtkalHacks%203.0/camputer-image_zmpt7b.webp"
          header="A better working environment"
          body="No more chaotic working table. No more random snacks on the floor. Now you can just lock yourself in your room and get the work done! "
        />

        <Aboutcard
          coverImage="https://res.cloudinary.com/emishalabs/image/upload/q_30/v1612203738/UtkalHacks%203.0/E122FB34-4451-46B4-880A-A992B5EDD8AF_p2okwy.webp"
          header="Better physical & mental state"
          body=" No more back strains. No more burnouts. Now you can get into serious hacking without serious repercussions, focusing on your idea and not that sleeping space you could miss out on."
        />

        <Aboutcard
          coverImage="https://res.cloudinary.com/emishalabs/image/upload/q_30/v1612203007/UtkalHacks%203.0/8530A1AB-D8AB-4A67-8081-8ACCBA272448_buopz2.webp"
          header="Better team collaboration"
          body="
          No more limitations on teammate inclusiveness. No more distractions. Now you can get anyone from anywhere on your team and collaborate in your own solitary virtual space. "
        />
      </Stack>
    </Box>
  )
}

export default About
