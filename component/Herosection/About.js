import React from "react"
import { Heading, Box, Text, Flex, SimpleGrid, Image } from "@chakra-ui/react"

const Aboutstory = ({ heading, text }) => {
  return (
    <Flex direction="column" my="165px">
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
    <Box>
      <Aboutstory
        heading="<Hack From Home />"
        text="From broken coffee machines to the monotony of sitting for long hours at a stretch, this paradigm shift to online hackathons rids you of many such hiccups that you normally face in an offline experience. Going virtual empowers you to create revolutionary hacks at the comfort of your sofa!"
      />
      <SimpleGrid columns={3} gap="80px">
        <Box>
          <Image src="/card.png" />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default About
