import React from 'react'
import { Box } from '@chakra-ui/react'

const CardBody = ({ children }) => {
  return (
    <Box
      fontFamily="Rubik"
      fontStyle="normal"
      fontWeight="normal"
      fontSize="lg"
      color="#454954"
      mt="10px"
    >
      {children}
    </Box>
  )
}
export default CardBody;
