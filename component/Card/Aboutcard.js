import React from "react"
import { Image, Box, wRAP } from "@chakra-ui/react"
import NextImage from "next/image";

const AboutCard = ({ children, header, body, coverImage, ...props }) => {

    return (
        <Box borderWidth="1px" borderRadius="2px" bg="#E3F891">
            <Image width="100%" borderRadius="2px" src={coverImage} />
            <Box py="24px" px="20px" >
                <Box
                    as="h1"
                    fontStyle="normal"
                    fontWeight="extrabold"
                    fontSize={["2xl", "2xl", "2xl", "2xl", "2xl"]}
                    color="#252222"
                >
                    {header}
                </Box>

                <Box
                    as="p"
                    fontWeight="normal"
                    fontSize={["xl", "xl", "xl", "xl", "xl"]}
                    color="454954"
                    letterSpacing="wide"
                >
                    {body}
                </Box>
            </Box>
        </Box>
    )
}

export default AboutCard