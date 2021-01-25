import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react"

const Wikisection = () => {
  return (
    <Flex direction="column" zIndex="1" mx="10px" my="40px">
      <Box align="center">
        <Heading size="2xl" fontFamily="Rubik">
          Our Wiki
        </Heading>
        <Text
          fontStyle="Rubik"
          fontSize={["lg", "lg", "xl", "xl"]}
          fontWeight="normal"
          textAlign="left"
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
          _hover={{ bg: "blue" }}
          _active={{ borderColor: "" }}
          my="20px"
          backgroundColor="#3182ce"
        >
          Read our Wiki
        </Button>
      </Box>
    </Flex>
  )
}
export default Wikisection
