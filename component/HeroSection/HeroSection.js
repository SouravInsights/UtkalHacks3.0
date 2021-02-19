import React from "react"
import {
  Box,
  Text,
  Stack,
  Heading,
  Image
} from "@chakra-ui/react"
import { FaPen } from 'react-icons/fa';
import Button from "../Button"
import DevfolioButton from "../DevfolioButton"
import About from "./About"

const HeroSection = () => {
  return (
    <Box>
      <Image
        w="100%"
        top="-60px"
        position="relative"
        src="https://res.cloudinary.com/emishalabs/image/upload/q_80/v1612203030/UtkalHacks%203.0/camputer-image_zmpt7b.webp"
      />
      <Stack position="relative" top={["-140px", "-205px", "-235px", "-235px", "-235px"]} zIndex="1" align="center">
        <Heading
          fontWeight="black"
          fontSize={["3xl", "5xl", "70px", "70px", "70px"]}
          textAlign="center"
          color={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        >
          UtkalHacks 3.0
          </Heading>
        <Text
          fontWeight="medium"
          fontSize={["xl", "2xl", "3xl", "3xl", "3xl"]}
          color={["#ffffff", "#27333f", "#ffffff", "#ffffff", "#ffffff"]}
          mb="20px"
        >
          5th March - 20th March
        </Text>
        <DevfolioButton />
      </Stack>
    </Box >

  )
}

export default HeroSection
