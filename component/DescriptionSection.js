import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

const DescriptionSection = () => {
  return (
    <Stack justifyContent="center" textAlign="center" my="60px">
      <Heading
        as="h1"
        fontWeight="black"
        fontSize={["180px", "180px", "180px", "220px", "220px"]}
        lineHeight="normal"
        color="#FE4A26"
      >
        15
      </Heading>
      <Heading
        as="h1"
        fontWeight="black"
        fontSize={["60px", "60px", "60px", "60px", "60px"]}
        lineHeight="normal"
        color="#252222"
      >
        DAYS
      </Heading>
      <Heading
        as="h1"
        fontWeight="black"
        fontSize={["60px", "60px", "60px", "60px", "60px"]}
        lineHeight="normal"
        color="#252222"
      >
        OF..
      </Heading>
      <Text
        fontWeight="bold"
        fontSize="30px"
        lineHeight="normal"
        color="#252222"
      >
        DESIGNING / BUILDING / CODING / HACKING
      </Text>
      <Text
        fontWeight="medium"
        fontSize="26px"
        lineHeight="normal"
        color="#252222"
      >
        NETWORKING / FRIENDS / MENTORS / CHALLENGES
      </Text>
      <Text
        fontWeight="medium"
        fontSize="20px"
        lineHeight="normal"
        color="#252222"
      >
        TECH TALKS / WORKSHOPS / FUN ACTIVITIES/ SCHWAGS/ PRIZES
      </Text>
      <Text
        fontWeight="medium"
        fontSize="16px"
        lineHeight="normal"
        color="#252222"
      >
        AND/ A / WHOLE/LOT/ MORE . . .
      </Text>
    </Stack>
  );
};

export default DescriptionSection;
