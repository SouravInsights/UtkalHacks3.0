import React from "react"
import { Flex, Box, Icon, Text, VStack, Stack, Link } from "@chakra-ui/react"
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
        <Link href="https://discord.gg/hWBpPhXDJd" isExternal>
          <Icon
            as={FaDiscord}
            color="#ffffff"
            boxSize={["4em", "4em", "5em", "6em"]}
            href="https://discord.gg/BHJnCwGr"
            isExternal
          />
        </Link>
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
        <Link href="https://discord.gg/hWBpPhXDJd" isExternal>
          <Button label="Join our Discord" />
        </Link>
      </VStack>
      <VStack spacing={4} justifyContent="center" alignItems="center">
        <Link href="https://twitter.com/emishacommunity" isExternal>
          <Icon
            as={FaTwitter}
            boxSize={["4em", "4em", "5em", "6em"]}
            color="#ffffff"
          />
        </Link>

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
        <Link href="https://twitter.com/emishacommunity" isExternal>
          <Button label="Follow us on Twitter" />
        </Link>
      </VStack>
    </Stack>
  )
}

export default SocialMediaSection
