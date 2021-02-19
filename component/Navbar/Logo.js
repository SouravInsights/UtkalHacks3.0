import React from "react"
import { Box, Heading, Image } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image w={["140px", "140px", "160px", "180px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613730457/UtkalHacks3.0/UH-logo.svg" />
    </Box>
  )
}
