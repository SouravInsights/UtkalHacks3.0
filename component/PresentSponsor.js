import React from "react"
import { Box, SimpleGrid, Heading, Image, Flex, Link } from "@chakra-ui/react"

function PresentSponsor() {
  return (
    <Box my="80px">
      <Heading
        fontWeight="black"
        fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
        color="#252222"
        letterSpacing="wide"
        textAlign="center"
      >
        Our Sponsors
      </Heading>
      <Flex direction="column">
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          color="#252222"
          letterSpacing="wide"
          textAlign="left"
          py="20px"
        >
          Diamond
        </Heading>
        <hr />
        <Box py="20px">
          <Link href="https://spline.design/" isExternal align="center">
            <Image
              src="https://res.cloudinary.com/emishalabs/image/upload/q_92/v1612849588/UtkalHacks%203.0/spline_logo_jdvyns.webp"
              boxSize={["100px", "100px", "200px", "200px", "250px"]}
            />
          </Link>
        </Box>
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          color="#252222"
          letterSpacing="wide"
          textAlign="left"
          py="20px"
        >
          Platinum
        </Heading>
        <hr />
        <Link href="https://devfolio.co/" isExternal align="center" py="20px">
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/q_88/v1612891243/UtkalHacks%203.0/Devfolio_-_Normal_2x_tkexpg.webp"
            w={["300px", "300px", "500px", "500px", "500px"]}
          />
        </Link>
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          color="#252222"
          letterSpacing="wide"
          textAlign="left"
          py="20px"
        >
          Gold
        </Heading>
        <hr />
        <SimpleGrid columns={2} py="20px" placeItems="center">
          <Box>
            <Link href="https://graphcms.com" isExternal>
              <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1612878839/UtkalHacks%203.0/GraphCMS_Logo_-_Dark_Transparent_ngbwtq.webp" />
            </Link>
          </Box>
        </SimpleGrid>
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          color="#252222"
          letterSpacing="wide"
          textAlign="left"
          py="20px"
        >
          Silver
        </Heading>
        <hr />
        <SimpleGrid columns={3} py="20px" placeItems="center" gap={10}>
          <Box>
            <Link href="https://nhost.io/" isExternal>
              <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1612891805/UtkalHacks%203.0/nhost-logo_au2zn4.webp" />
            </Link>
          </Box>
          <Box>
            <Link href="https://tezos.com/" isExternal>
              <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1612892691/UtkalHacks%203.0/Tezos_iwio1d.webp" />
            </Link>
          </Box>
          <Box>
            <Link href="https://matic.network/" isExternal>
              <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1612893075/UtkalHacks%203.0/matic-logo-dark-3x_mj2dif.webp" />
            </Link>
          </Box>
        </SimpleGrid>
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "4xl", "4xl", "4xl"]}
          color="#252222"
          letterSpacing="wide"
          textAlign="left"
          py="20px"
        >
          Educational Partner
        </Heading>
        <hr />
        <SimpleGrid columns={2} py="20px" placeItems="center">
          <Box>
            <Link href="https://egghead.io/" isExternal>
              <Image src="https://res.cloudinary.com/emishalabs/image/upload/q_85/v1612894419/UtkalHacks%203.0/Egghead-Logo-Dark_qwqnnr.webp" />
            </Link>
          </Box>
          <Box>
            <Link href="https://threejs-journey.xyz" isExternal>
              <Image src="" />
            </Link>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default PresentSponsor
