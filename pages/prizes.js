import {
  SimpleGrid,
  VStack,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"
import React from "react"

const Prizesbody = ({ prizename }) => {
  return (
    <VStack minW="300px" maxW="350px" p="16px" border="1px solid #252222">
      <Heading>{prizename}</Heading>
      <List spacing={3}>
        {data.map((prizeData) => (
          <ListItem key={prizeData} color="#000000">
            <ListIcon as={MdCheckCircle} color="green.500" />
            {prizeData}
          </ListItem>
        ))}
      </List>
    </VStack>
  )
}
const Prizes = () => {
  return (
    <SimpleGrid columns={30}>
      <Prizesbody
        prizename="Winner"
        data={["First perk", "Second perk", "Third perk"]}
      />
    </SimpleGrid>
  )
}
export default Prizes
