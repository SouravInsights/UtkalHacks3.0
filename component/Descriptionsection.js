import React, { useState } from "react"
import { Heading, Box, Text } from "@chakra-ui/react"


const Description = () => {

    return (
        <Box
            justifyContent="center"
            textAlign="center"
            pt="10px"
            pb="20px"
        >
            <Heading
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="black"
                fontSize="220px"
                lineHeight="261px"
                color="#FE4A26"
            >
                15
</Heading>
            <Text
                fontFamily="Rubik Mono One"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="80px"
                lineHeight="99px"
                color="#252222"
            >
                DAYS
</Text>
            <Text
                fontFamily="Rubik Mono One"
                fontStyle="normal"
                fontWeight="normal"
                fontSize="66px"
                lineHeight="82px"
                color="#252222"
            >
                OF...
</Text>
            <Text
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="bold"
                fontSize="30px"
                lineHeight="36px"
                letterSpacing="wider"
                color="#252222"
            >
                DESIGNING / BUILDING / CODING / HACKING
</Text>
            <Text
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="medium"
                fontSize="26px"
                lineHeight="31px"
                letterSpacing="wider"
                color="#252222"
            >
                NETWORKING / FRIENDS / MENTORS / CHALLENGES
</Text>
            <Text
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="medium"
                fontSize="20px"
                lineHeight="24px"
                letterSpacing="wider"
                color="#252222"
            >
                TECH TALKS / WORKSHOPS / FUN ACTIVITIES/ SCHWAGS/ PRIZES
</Text>
            <Text
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="medium"
                fontSize="16px"
                lineHeight="19px"
                letterSpacing="wider"
                color="#252222"
            >
                AND/ A / WHOLE/LOT/ MORE . . .
</Text>
        </Box>

    )
}

export default Description 
