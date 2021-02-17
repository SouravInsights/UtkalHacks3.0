import React from "react"
import {
  Heading,
  Text,
  Image,
  VStack,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

const PrizeCard = ({ CoverImage, heading, description, data = [], to }) => {
  return (
    <Link href={to} _hover={{ outline: "none" }} isExternal>
      <VStack
        minW="300px"
        maxW="350px"
        minH="380px"
        p="16px"
        border="1px solid #252222"
        my="20px"
      >
        <Image src={CoverImage} />
        <Heading fontSize="24px" fontWeight="bold" textAlign="center" py="16px">
          {heading}
        </Heading>
        <Text fontSize="lg" fontWeight="normal" textAlign="justify">
          {description}
        </Text>
        <List spacing={3}>
          {data.map((prizeData) => (
            <ListItem key={prizeData} color="#000000">
              <ListIcon as={MdCheckCircle} color="black.500" />
              {prizeData}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Link>
  )
}

export default PrizeCard
