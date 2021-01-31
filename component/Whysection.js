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
            fontSize={["2xl", "3xl", "3xl", "4xl"]}
            fontWeight="extrabold"
          >
            {heading}
          </Heading>
          <Text
            fontSize={["lg", "lg", "xl", "22px"]}
            fontWeight="normal"
            textAlign="justify"
            color="gray.600"
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
