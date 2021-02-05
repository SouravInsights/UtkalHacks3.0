import React from "react"
import { Text, Icon, Box, VStack, HStack } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <VStack
      spacing={3}
      py="30px"
      px="30px"
      justifyContent="center"
      alignContent="center"
      bg="#1D1B1B"
    >
      <Text
        as="p"
        fontWeight="normal"
        fontSize={["lg", "lg", "xl", "xl", "xl"]}
        color="#ffffff"
        letterSpacing="wide"
        textAlign="center"
      >
        You never know what you could possibly build at Hackathons.
      </Text>
      <Text
        fontSize={["2xl", "2xl", "3xl", "4xl", "4xl"]}
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
        color="#ffffff"
      >
        Come hack with us!
      </Text>
      <HStack spacing={4}>
        <Icon as={FaFacebook} boxSize="2em" color="#ffffff" />
        <Icon as={FaInstagram} boxSize="2em" color="#ffffff" />
        <Icon as={FaGithub} boxSize="2em" color="#ffffff" />
      </HStack>
    </VStack>
  )
}

export default Footer
