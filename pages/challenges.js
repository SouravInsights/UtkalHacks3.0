import React from "react"
import Head from "next/head"
import NavBar from "../component/Navbar/Header"
import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react"
import Footer from "../component/Footer"
import Badge from "../component/Badge/Badge"
import Section from "../component/Section"
import ChallengeCard from "../component/Card/ChallengeCard"

export default function challengs() {
    return (
        <>
            <Head>
                <title>UtkalHacks 3.0</title>
            </Head>
            <Badge />
            <NavBar />
            <Box px={["20px", "30px", "50px", "65px", "80px"]}>
                <Flex py="50px" justifyContent={["center", "center", "space-around", "center", "center"]} >
                    <Image w={["100%", "100%", "80%", "auto", "auto"]} src="images/Challengesimage.jpg" />
                </Flex>

                <Section
                    center="true" justify="center" align="center"
                    heading="We know you love challenges!"
                    description="We are putting together some mini challenges to spark your creativity and get your fingers ready for the long walk! We know that humans are driven by returns hence we got some cool swags & prizes but we believe you have come here out of your passion!"
                />
                <Stack
                    spacing={["20px", "30px", "30px", "40px", "50px"]}
                    direction={["row", "row", "row", "row", "row"]}
                    my="40px"
                    justifyContent={["flex-start", "flex-start", "space-around", "space-around", "space-around"]}
                    overflowX="auto"
                >
                    <ChallengeCard
                        heading="Build an accessible form using React Hooks."
                        description="Here’s a dummy description of the challenge.  "
                    />
                    <ChallengeCard
                        heading="Build an accessible form using React Hooks."
                        description="Here’s a dummy description of the challenge.  "
                    />
                    <ChallengeCard
                        heading="Build an accessible form using React Hooks."
                        description="Here’s a dummy description of the challenge.  "
                    />
                </Stack>
            </Box>
            <Footer />
        </>
    )
}
