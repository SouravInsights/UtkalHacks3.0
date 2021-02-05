import React from "react"
import { Flex, Box, Icon, Text, VStack, Stack } from "@chakra-ui/react"
import { FaDiscord, FaTwitter } from "react-icons/fa"
import Button from "./Button"

const SocialMediaSection = () => {
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
          fontSize={["lg", "xl", "2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="wide"
          lineHeight="shorter"
          color="#ffffff"
        >
          Start the Conversation
        </Text>
        <Button label=" Join our Discord" />
      </VStack>
      <VStack spacing={4} justifyContent="center" alignItems="center">
        <Icon
          as={FaTwitter}
          boxSize={["4em", "4em", "5em", "6em"]}
          color="#ffffff"
        />
        <Text
          textAlign="center"
          fontSize={["lg", "xl", "2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="wide"
          lineHeight="shorter"
          color="#ffffff"
        >
          Don't miss any updates!
        </Text>
        <Button label="Follow us on Twitter" />
      </VStack>
    </Stack>
  )
}

export default SocialMediaSection
