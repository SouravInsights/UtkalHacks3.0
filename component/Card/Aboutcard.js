import React from "react"
import { Image, Box } from "@chakra-ui/react"


const AboutCard = ({ children, header, body, coverImage, ...props }) => {


    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" bg="#E3F891">
            <Image src={coverImage} />
            <Box py="24px" px="20px" >
                <Box
                    fontFamily="Rubik"
                    fontStyle="normal"
                    fontWeight="bold"
                    fontSize="2xl"
                    w="100%"
                    color="#000000"
                >
                    {header}
                </Box>

                <Box
                    fontFamily="Rubik"
                    fontStyle="normal"
                    fontWeight="normal"
                    fontSize="lg"
                    color="#454954"
                    mt="10px">
                    {body}
                </Box>
            </Box>
        </Box>
    )
}

export default AboutCard