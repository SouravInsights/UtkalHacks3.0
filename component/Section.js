import React from "react"
import {
    Heading,
    Text,
    Stack,
} from "@chakra-ui/react"

const Section = ({ heading, description, children, center, ...props }) => {

    return (
        <Stack spacing="20px" {...props}>
            <Heading
                fontWeight="black"
                fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                color="#252222"
                letterSpacing="wide"
                textAlign={center ? "center" : "none"}
            >
                {heading}
            </Heading>
            <Text
                as="p"
                fontWeight="normal"
                fontSize={["xl", "xl", "2xl", "2xl", "2xl"]}
                color="454954"
                letterSpacing="wide"
            >
                {description}
            </Text>
            {children}
        </Stack>
    )
}

export default Section