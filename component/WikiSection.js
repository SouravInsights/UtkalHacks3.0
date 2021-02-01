import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react"

const WikiSection = () => {
  return (
    <Flex direction="column" my="60px">
      <Box align="center">
        <Text
          fontSize="4xl"
          fontFamily="Rubik"
          fontWeight="black"
          letterSpacing="wide"
        >
          Our Wiki
        </Text>
        <Text
          fontStyle="Rubik"
          fontSize={["lg", "lg", "xl", "22px"]}
          fontWeight="normal"
          color="gray.600"
          textAlign="justify"
        >
          There has been a lot of Hackathons happening all over the globe and
          especially in india it's being skyrocketed. But the question is, do we
          truly impact the developer & designer community? Do we have a strong
          purpose? Read our wiki to find all the nitty gritty details regarding
          the WHY, HOW, and WHAT of UtkalHacks in one single place.
        </Text>
        <Button
          size={["lg"]}
          color="#ffffff"
          borderRadius="0px"
          outline="none"
          _hover={{ bg: "gray.300" }}
          my="20px"
          bg="#000000"
        >
          Read our Wiki
        </Button>
      </Box>
    </Flex>
  )
}
export default WikiSection
