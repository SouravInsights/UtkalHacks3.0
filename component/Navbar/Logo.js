import React from "react"
import { Box, Heading, Image } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      {/*  <Image w={["140px", "140px", "160px", "180px"]} src="/Emisha.svg" /> */}
      <Heading
        fontFamily="Rubik"
        fontWeight="black"
        fontSize={["xl", "xl", "2xl", "2xl"]}
        color="#252222"
        sx={{
          ".my-box:hover &": {
            color: "green.500",
          },
        }}
      >
        UtkalHacks
          </Heading>
    </Box>
  )
}
