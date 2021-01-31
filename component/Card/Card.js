import React from "react"
import { Image, Box, Divider } from "@chakra-ui/react"

const Card = ({ children, header, body, footer, coverImage, ...props }) => {
  return (
    <Box
      w={"auto"}
      h={"auto"}
      mr="50px"
      background="rgba(255, 255, 160, 1)"
      boxShadow="lg"
      {...props}
    >
      <Image
        w="100%"
        maxH="200px"

        /* borderRadius="10px" */ src={coverImage}
      />
      <Box px="20px" pt="10px" pb="10px">
        <Box>{header}</Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
export default Card
