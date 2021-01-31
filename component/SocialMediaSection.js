import React from "react"
import { Flex, Box, Icon, Button, Text, VStack, Stack } from "@chakra-ui/react"
import { FaDiscord, FaTwitter } from "react-icons/fa"

const Socialmedia = () => {
  return (
    <Stack
      spacing={4}
      w="100%"
      direction={{ base: "column", md: "row" }}
      bg="#7289DA"
      py={["30px", "30px", "40px", "50px"]}
      px="30px"
      justifyContent="space-around"
      alignItems="center"
    >
      <VStack spacing={4} justifyContent="center" alignItems="center">
        <Icon
          as={FaDiscord}
          color="#ffffff"
          boxSize={["4em", "4em", "5em", "6em"]}
        />
        <Text
          textAlign="center"
          fontFamily="Rubik"
          fontSize={["lg", "xl", "2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="wide"
          lineHeight="shorter"
          color="#ffffff"
        >
          Start the Conversation
        </Text>
        <Button
          size={["lg"]}
          color="#ffffff"
          borderRadius="0px"
          outline="none"
          _hover={{ bg: "gray.300" }}
          bg="#000000"
        >
          Join our Discord
        </Button>
      </VStack>
      <VStack spacing={4} justifyContent="center" alignItems="center">
        <Icon
          as={FaTwitter}
          boxSize={["4em", "4em", "5em", "6em"]}
          color="#ffffff"
        />
        <Text
          textAlign="center"
          fontFamily="Rubik"
          fontSize={["lg", "xl", "2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="wide"
          lineHeight="shorter"
          color="#ffffff"
        >
          Don't miss any updates!
        </Text>
        <Button
          size={["lg"]}
          color="#ffffff"
          borderRadius="0px"
          outline="none"
          _hover={{ bg: "gray.300" }}
          bg="#000000"
        >
          Follow us on Twitter
        </Button>
      </VStack>
    </Stack>
  )
}

export default Socialmedia
