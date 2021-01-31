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
      bg="#000000"
    >
      <Text
        fontFamily="Rubik"
        fontSize={["lg", "lg", "2xl", "2xl"]}
        fontWeight="normal"
        textAlign="center"
        letterSpacing="wide"
        color="#ffffff"
      >
        You never know what you could possibly build at Hackathons.
      </Text>
      <Text
        fontFamily="Rubik"
        fontSize={["xl", "xl", "4xl", "4xl"]}
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
