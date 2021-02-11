import React from "react"
import { Heading, VStack, Text, Box } from "@chakra-ui/react"
import NextImage from "next/image";

const ChallengeCard = ({ children, heading, description, ...props }) => {

    return (

        <VStack minW="300px" maxW="350px" p="16px" border="1px solid #252222" m="10px" >
            <Heading fontSize="24px" fontWeight="bold" textAlign="left" py="16px">
                {heading}
            </Heading>
            <Text fontSize="lg" fontWeight="normal" textAlign="justify">
                {description}
            </Text>
        </VStack>

    )
}

export default ChallengeCard