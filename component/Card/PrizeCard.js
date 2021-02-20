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
  Box,
} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"
import { motion } from 'framer-motion';

const PrizeCardWrapper = motion.custom(VStack);

const PrizeCard = ({ CoverImage, heading, description, data = [], to }) => {
  return (
    <Link href={to} _hover={{ outline: "none" }} isExternal>
      <PrizeCardWrapper
        maxW="330px"
        minH="380px"
        p="20px"
        border="1px  #252222"
        boxShadow="lg"
        my="20px"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
      >
        <Box>
          <Image src={CoverImage} />
        </Box>
        <Heading fontSize="24px" fontWeight="bold" textAlign="center" py="16px">
          {heading}
        </Heading>
        <Text fontSize="lg" fontWeight="normal" textAlign="justify">
          {description}
        </Text>
        <List spacing={3}>
          {data.map((prizeData) => (
            <ListItem key={prizeData} color="#454954">
              <ListIcon as={MdCheckCircle} />
              {prizeData}
            </ListItem>
          ))}
        </List>
      </PrizeCardWrapper>
    </Link>
  )
}

export default PrizeCard
