import React from "react"
import { Heading, Text, Image, VStack, Link, Flex, Box } from "@chakra-ui/react"

function PrizeCard({ CoverImage, heading, description, to }) {
  return (
    <Link href={to} _hover={{ outline: "none" }} isExternal>
      <VStack minW="300px" maxW="350px" p="16px" border="1px solid #252222">
        <Image src={CoverImage} />
        <Heading fontSize="24px" fontWeight="bold" textAlign="center" py="16px">
          {heading}
        </Heading>
        <Text fontSize="lg" fontWeight="normal" textAlign="justify">
          {description}
        </Text>
      </VStack>
    </Link>
  )
}

export default PrizeCard
