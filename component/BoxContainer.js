import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Section from "./Section"
import Button from "./Button"
import { FaPen } from 'react-icons/fa';

const Newsletter = ({ heading, description, buttontext }) => {
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
            <Section center="true" justify="center" align="center" heading={heading} description={description}>
                <Box>
                    <Button
                        label={buttontext}
                        withIcon
                        rightIcon={<FaPen />}
                    />
                </Box>
            </Section>
        </Flex >
    )
}
export default Newsletter;