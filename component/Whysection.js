import React from "react"
import {
  Flex,
  Image,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Container,
} from "@chakra-ui/react"

function Whysection({ heading, text, url, reverse }) {
  return (
    <Container maxW={"8xl"}>
      <SimpleGrid py={8} spacing={6} columns={{ base: 1, lg: 2 }}>
        <Stack spacing={5} maxW={{ md: "xl" }}>
          <Heading
            fontFamily="Rubik"
            fontWeight="black"
            fontSize={["2xl", "2xl", "4xl", "4xl"]}
            color="#252222"
          >
            {heading}
          </Heading>
          <Text
            as="p"
            fontFamily="Rubik"
            fontWeight="normal"
            fontSize={["xl", "xl", "2xl", "2xl"]}
            color="454954"
            textAlign="justify"
          >
            {text}
          </Text>
        </Stack>

        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image src={url} width={400} height={280} />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}

export default Whysection
