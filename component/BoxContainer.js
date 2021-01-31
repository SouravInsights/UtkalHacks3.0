import React from 'react'
import { Flex, Text, Heading, Stack, Button, HStack } from '@chakra-ui/react'

const Newsletter = ({ heading, text, buttontext }) => {
    return (
        <Flex
            py="32px"
            px={["20px", "30px", "50px", "80px"]}
            bg="#FFFFA0"
            borderRadius="0px"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            align="center"
            flexDirection="column"
        >
            <Stack spacing="20px" alignItems="center">
                <Heading
                    fontFamily="Rubik"
                    fontWeight="black"
                    fontSize={["2xl", "2xl", "4xl", "4xl"]}
                    color="#252222"
                >
                    {heading}
                </Heading>
                <Text
                    as="p"
                    fontFamily="Rubik"
                    fontWeight="normal"
                    fontSize={["xl", "xl", "2xl", "2xl"]}
                    color="454954"
                >
                    {text}
                </Text>
                <Button
                    size={["lg"]}
                    color="#ffffff"
                    borderRadius="0px"
                    outline="none"
                    _hover={{ bg: "gray.300" }}
                    bg="#000000"
                >
                    {buttontext}
                </Button>
            </Stack>

        </Flex >
    );
}
export default Newsletter;