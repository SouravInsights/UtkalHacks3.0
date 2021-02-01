import React from "react"
import { Heading, Stack, Text } from "@chakra-ui/react"

const DescriptionSection = () => {
  return (
    <Stack justifyContent="center" textAlign="center" my="60px">
      <Heading
        fontFamily="Rubik"
        fontStyle="normal"
        fontWeight="black"
        fontSize={["180px", "180px", "180px", "220px", "220px"]}
        lineHeight="normal"
        color="#FE4A26"
      >
        15
      </Heading>
      <Text
        fontFamily="Rubik Mono One"
        fontStyle="normal"
        fontWeight="normal"
        fontSize={["60px", "60px", "60px", "60px", "60px"]}
        lineHeight="normal"
        color="#252222"
      >
        DAYS
      </Text>
      <Text
        fontFamily="Rubik Mono One"
        fontStyle="normal"
        fontWeight="normal"
        fontSize={["60px", "60px", "60px", "60px", "60px"]}
        lineHeight="normal"
        color="#252222"
      >
        OF..
      </Text>
      <Text
        fontFamily="Rubik"
        fontStyle="normal"
        fontWeight="bold"
        fontSize="30px"
        lineHeight="normal"
        color="#252222"
      >
        DESIGNING / BUILDING / CODING / HACKING
      </Text>
      <Text
        fontFamily="Rubik"
        fontStyle="normal"
        fontWeight="medium"
        fontSize="26px"
        lineHeight="normal"
        color="#252222"
      >
        NETWORKING / FRIENDS / MENTORS / CHALLENGES
      </Text>
      <Text
        fontFamily="Rubik"
        fontStyle="normal"
        fontWeight="medium"
        fontSize="20px"
        lineHeight="normal"
        color="#252222"
      >
        TECH TALKS / WORKSHOPS / FUN ACTIVITIES/ SCHWAGS/ PRIZES
      </Text>
      <Text
        fontFamily="Rubik"
        fontStyle="normal"
        fontWeight="medium"
        fontSize="16px"
        lineHeight="normal"
        color="#252222"
      >
        AND/ A / WHOLE/LOT/ MORE . . .
      </Text>
    </Stack>
  )
}

export default DescriptionSection
