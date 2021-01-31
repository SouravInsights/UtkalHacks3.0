import React from "react"
import { Image, Box } from "@chakra-ui/react"

const Card = ({ children, header, body, coverImage, ...props }) => {
  return (
    <Box
      w="auto"
      h="auto"
      mx="22px"
      mt="16px"
      background="rgba(255, 255, 160, 1)"
      boxShadow="lg"
      {...props}
    >
      <Image
        w="100%"
        maxH="200px"
        src={coverImage}
      />
      <Box px="20px" pt="16px" pb="16px">
        <Box>{header}</Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
export default Card
