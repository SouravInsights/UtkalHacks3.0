import React from "react"
import {
  Stack,
  Box,
  Image,
  Text,
  Button,
  Heading,
  StylesProvider,
} from "@chakra-ui/react"
import { FaPen } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <Box
      bgImage="url('images/Bgimage3.jpg')"
      bgSize={["cover", "cover", "cover", "cover"]}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box pt={["150px", "400px", "650px", "650px"]} align="center" zIndex="1" direction="column" >
        <Heading
          fontFamily="rubik"
          fontWeight="black"
          fontSize={["3xl", "4xl", "70px", "70px"]}
          lineHeight="83px"
          textAlign="center"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          color="#ffffff"
        >
          UtkalHacks 3.0
          </Heading>
        <Text
          fontFamily="rubik"
          fontWeight="medium"
          fontSize={["lg", "2xl", "3xl", "3xl"]}
          lineHeight="33px"
          zIndex="1"
          mb="5px"
          color="#ffffff"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          20th Feb - 7th March
        </Text>

        <Button
          size={["xs", "sm", "lg", "lg"]}
          w={["250px", "300px", "300px", "300px"]}
          h={["40px", "50px", "60px", "60px"]}
          mb={["-20px", "-24px", "-30px", "-30px"]}
          borderRadius="0px"
          color="white"
          bg="black"
          _hover={{
            bg: ["primary.100", "primary.100", "blue.100", "blue.100"]
          }}
          rightIcon={<FaPen />}
        >
          Apply with Devfolio
      </Button>

      </Box>

    </Box >

  )
}

export default HeroSection
