import React from "react"
import {
    Heading,
    Box,
    Text,
    Image,
    Grid,
    GridItem
} from "@chakra-ui/react"

const Sprint = () => {

    return (
        < Box >
            {/* Design-sprint section starts here */}

            <Grid
                display={{ sm: "flex", md: "grid" }}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={10}
                my="20px"
            >
                <GridItem rowSpan={1} colSpan={2}>
                    <Image src="images/DSP1.jpg" />
                </GridItem>
                <GridItem colSpan={4} alignContent="center" justifyContent="center">
                    <Heading fontSize={["md", "md", "lg", "50px"]}>
                        Design Sprint to the Rescue!
                 </Heading>
                    <Text fontSize={["sm", "lg", "md", "xl"]}>
                        Hackathons are great, until they are not! With unguided, unclear
                        direction, hackathons can be bloated with vaporware. When we don’t
                        know the problem that we’re trying to solve, we might just build
                        something that no one never wanted.
           </Text>
                </GridItem>
                <GridItem colSpan={2}>
                    <Image src="images/DSP2.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                    <Image src="images/DSP3.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                    <Image src="images/DSP4.jpg" />
                </GridItem>
            </Grid>
        </Box >
    )
}

export default Sprint