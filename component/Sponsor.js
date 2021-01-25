import React from "react"
import { Box, Heading, Image, Grid, SimpleGrid } from "@chakra-ui/react"

const Sponsor = ({ logo, name }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Box w="100%" h="10" /* p="5px" */>
        <Image src={logo} />
      </Box>
    </Grid>
  )
}

export default Sponsor
