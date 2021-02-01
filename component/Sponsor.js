import React from "react"
import { Box, Heading, Image, Grid, SimpleGrid } from "@chakra-ui/react"

const Sponsor = ({ logo, name }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Box>
        <Image src={logo} />
      </Box>
    </Grid>
  )
}

export default Sponsor
