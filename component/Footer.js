import React from "react"
import { Text, Icon, VStack, HStack, Link, Image } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaGithub, FaMedium } from "react-icons/fa"

const Footer = () => {
  return (
    <VStack
      spacing={3}
      py="30px"
      px="30px"
      justifyContent="center"
      alignContent="center"
      bg="#1D1B1B"
    >
      <Text
        as="p"
        fontWeight="normal"
        fontSize={["lg", "lg", "xl", "xl", "xl"]}
        color="#ffffff"
        letterSpacing="wide"
        textAlign="center"
      >
        You never know what you could possibly build at Hackathons 💡.
      </Text>
      <Text
        fontSize={["2xl", "2xl", "3xl", "4xl", "4xl"]}
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
        color="#ffffff"
      >
        Come hack with us!
      </Text>
      <HStack spacing={4}>
        <Link _focus={{ boxShadow: "none" }} href="https://www.facebook.com/emishacommunity" isExternal>
          <Icon
            as={FaFacebook}
            boxSize="2em"
            color="#ffffff"

          />
        </Link>
        <Link _focus={{ boxShadow: "none" }} href="https://www.instagram.com/emishacommunity/" isExternal>
          <Icon as={FaInstagram} boxSize="2em" color="#ffffff" />
        </Link>
        <Link _focus={{ boxShadow: "none" }} href="https://github.com/EmishaCommunity" isExternal>
          <Icon as={FaGithub} boxSize="2em" color="#ffffff" />
        </Link>
        <Link _focus={{ boxShadow: "none" }} href="https://medium.com/emishacommunity" isExternal>
          <Icon as={FaMedium} boxSize="2em" color="#ffffff" />
        </Link>
        <Link _focus={{ boxShadow: "none" }} href="https://emisha.community/" isExternal>
          <Image boxSize="2em" src="https://res.cloudinary.com/emishalabs/image/upload/v1613738987/UtkalHacks%203.0/Emisha-Icon2_e9h9ng.svg" />
        </Link>
      </HStack>
    </VStack>
  )
}

export default Footer
