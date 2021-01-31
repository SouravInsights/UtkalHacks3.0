import React from 'react'
import { Flex, Text, Heading, Input, Button, HStack, FormControl } from '@chakra-ui/react'

const Newsletter = ({ heading, text, buttontext }) => {
    return (
        <Flex
            p="32px 150px 36px"
            m="32px"
            bg="#FFFFA0"
            borderRadius="0px"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            align="center"
            flexDirection="column"
        >
            <Heading
                as="h1"
                fontFamily="Rubik"
                fontWeight="extrabold"
                lineHeight={'normal'}
                fontSize={['2xl', '3xl', '42px', '42px']}
                textAlign={'center'}
                color="#252222, 100%"
                mb="5px"

            >
                {heading}
            </Heading>
            <Text
                fontFamily="rubik"
                fontWeight="400"
                fontSize={['sm', 'lg', 'xl', '22px']}
                lineHeight="tall"
                color="#252222, 100%"
                textAlign="center"
                mb="5px"
            >
                {text}
            </Text>
            < Button
                fontFamily="Rubik"
                fontStyle="normal"
                fontWeight="bold"
                fontSize={['xs', 'sm', 'sm', 'xl']}
                lineHeight="base"
                color="white"
                margin="auto 0px"
                /*    mt="5px" */
                py="4"
                px="6"


                borderRadius="0px"
                bg="black"
                outline="none"

            >
                {buttontext}
            </Button>


        </Flex >
    );
}
export default Newsletter;