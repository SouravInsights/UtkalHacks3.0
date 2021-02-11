import React from "react"
import {
  Box,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react"
import { FaPen } from 'react-icons/fa';
import Button from "../Button"
import DevfolioButton from "../DevfolioButton"

const HeroSection = () => {
  return (
    <Box
      bgImage="url('https://res.cloudinary.com/emishalabs/image/upload/q_80/v1612203030/UtkalHacks%203.0/camputer-image_zmpt7b.webp')"
      bgSize={["cover", "cover", "cover", "cover"]}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Stack pt={["150px", "400px", "650px", "650px"]} align="center" zIndex="1">
        <Heading
          fontWeight="black"
          fontSize={["4xl", "5xl", "70px", "70px", "70px"]}
          textAlign="center"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          color="#ffffff"
        >
          UtkalHacks 3.0
          </Heading>
        <Text
          fontWeight="medium"
          fontSize={["xl", "2xl", "3xl", "3xl", "3xl"]}
          color="#ffffff"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          5th March - 20th March
        </Text>
        <DevfolioButton />
      </Stack>
    </Box >

  )
}

export default HeroSection
