import React from "react"
import { Heading, Box, Text, Stack, Flex } from "@chakra-ui/react"
import PrizeCard from "./Card/PrizeCard"
import Button from "./Button"

const PrizeSection = () => {
  return (
    <Box my="80px">
      <Stack spacing="20px" direction="column">
        <Heading
          fontWeight="black"
          fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
          color="#252222"
        >
          Did we forget Prizes?
        </Heading>
        <Text
          as="p"
          fontWeight="normal"
          fontSize={["xl", "xl", "2xl", "2xl"]}
          color="454954"
        >
          No, not at all. We know hackers love prizes and swags! But sometimes
          useless prizes are a great turnoff for the people who hack out of
          passion. This year, we are focusing more on providing valuable prizes
          that are useful to everyone in the long run. And we’ve got a bunch of
          cool but useful ones in this year’s edition.
        </Text>
      </Stack>
      <Stack
        spacing={["20px", "30px", "30px", "40px", "50px"]}
        direction={["row", "row", "row", "row", "row"]}
        my="40px"
        justifyContent={["flex-start", "flex-start", "space-around", "space-around", "space-around"]}
        overflowX="auto"
      >
        <PrizeCard
          to="https://threejs-journey.xyz/"
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/q_91/v1612549874/UtkalHacks%203.0/cover_2_ugjej7.webp"
          heading="Three.js Journey"
          description="Have you ever wanted to create stunning 3D websites?
          Whether you are a beginner or a more advanced developer,
          Three.js Journey is the only course you need to learn WebGL with Three.js."
        />
        {/* <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1612549847/UtkalHacks%203.0/cover_1_lquepn.webp"
          heading="Typescript Book"
          description="Everything you need to know about TypeScript in 50 short lessons! Find errors before they happen, and strengthen your code base by leveraging TypeScript's vast and flexible type system."
        /> */}
        <PrizeCard
          to="https://egghead.io/"
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1612549833/UtkalHacks%203.0/cover_anklnh.webp"
          heading="Egghead"
          description="Learn the best JavaScript tools and frameworks from industry pros. Egghead provides you with the resources you need to craft a developer portfolio to get a good/better job as a web developer."
        />
      </Stack>
      <Box align="center" my="40px">
        <Button label="Checkout all Prizes" />
      </Box>
    </Box>
  )
}

export default PrizeSection
