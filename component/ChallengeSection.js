import React from "react"
import { Box, Image, Heading, Text, Flex, Grid } from "@chakra-ui/react"
import ChallengeCard from "../component/Card/ChallengeCard"

export default function challeng({ coverImage, heading, description }) {
    return (
        <>

            <Box px={["20px", "30px", "50px", "65px", "80px"]}>
                <Flex py="50px" justifyContent={["center", "center", "space-around", "center", "center"]} >
                    <Image w={["100%", "100%", "80%", "auto", "auto"]} src={coverImage} />
                </Flex>
                <Heading
                    fontWeight="black"
                    fontSize={["3xl", "3xl", "5xl", "5xl", "5xl"]}
                    color="#252222"
                    textAlign="center"
                >
                    {heading}
                </Heading>
                <Text
                    as="p"
                    fontWeight="normal"
                    fontSize={["xl", "xl", "2xl", "2xl", "2xl"]}
                    color="454954"
                    letterSpacing="wide"
                    textAlign="center"
                >
                    {description}
                </Text>

                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    <ChallengeCard
                    />
                </Grid>

            </Box>

        </>
    )
}
