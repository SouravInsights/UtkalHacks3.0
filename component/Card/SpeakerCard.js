import React from "react"
import {
  Heading,
  Text,
  Link,
  Icon,
  Image,
  VStack,
  HStack,
  Stack,
  Flex
} from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaGlobe } from "react-icons/fa"

const SpeakerCard = ({ profilePic, name, title, company, linkedin, github, twitter, dribbble, website }) => {
  return (
      <Flex
        flexDirection="column"
        p="20px"
        border="2px solid #252222"
        minW="240px"
      >
        <VStack spacing="10px">
          <Image borderRadius="50%" src={profilePic} h="100px" />
          <Heading fontSize="20px" fontWeight="bold" textAlign="center">
            {name}
          </Heading>
          <Heading fontSize="16px" fontWeight="medium" textAlign="center">
            {title}
          </Heading>
          <Text as="span" fontSize="lg" fontWeight="medium" textAlign="center">
            {company}
          </Text>
        </VStack>
        <HStack mt="20px" justifyContent="center" alignContent="center">
            { linkedin ? 
              <Link href={linkedin} isExternal>
                  <Icon as={FaLinkedin} boxSize="1.5em" color="#000000" />
              </Link>
              : null 
            }
            { twitter ? 
              <Link href={twitter} isExternal>
                  <Icon as={FaTwitter} boxSize="1.5em" color="#000000" />
              </Link>
              : null 
            }
            { github ? 
              <Link href={github} isExternal>
                  <Icon as={FaGithub} boxSize="1.5em" color="#000000" />
              </Link>
              : null 
            }
            { dribbble ? 
              <Link href={dribbble} isExternal>
                  <Icon as={FaDribbble} boxSize="1.5em" color="#000000" />
              </Link>
              : null
            }
            { website ?
              <Link href={website} isExternal>
                  <Icon as={FaGlobe} boxSize="1.5em" color="#000000" />
              </Link>
              : null 
            }
        </HStack>   
      </Flex>
 
  )
}

export default SpeakerCard
