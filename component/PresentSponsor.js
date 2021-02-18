import React from "react"
import { Box, SimpleGrid, Heading, Image, Flex, Link, Divider, Stack } from "@chakra-ui/react"

function PresentSponsor() {
  return (
    <Box my="80px">
      <Heading
        fontWeight="black"
        fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
        color="#252222"
        letterSpacing="wide"
        textAlign="center"
        mb="30px"
      >
        Our Sponsors
      </Heading>

      {/* Diamond Tier Start */}
      <Stack mb="20px" direction="row" alignItems="center" spacing={["5", "8", "8", "8"]} >
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "2xl", "2xl", "2xl"]}
          color="#70d1f4"
        >
          Diamond
        </Heading>
        <Box bg="#70d1f4" h="2px" w="100%" />
      </Stack >
      <SimpleGrid columns={["1", "1", "2", "2", "2"]} placeItems="center" >
        <Link href="https://spline.design/" isExternal>
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/v1613670061/UtkalHacks%203.0/spline_logo_black_xj1yzz.png"

          />
        </Link>
      </ SimpleGrid>

      {/* Platinum Tier Start */}
      <Stack my="20px" direction="row" alignItems="center" spacing={["5", "8", "8", "8"]} >
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "2xl", "2xl", "2xl"]}
          color="#c7c7c7"
        >
          Platinum
        </Heading>
        <Box bg="#c7c7c7" h="2px" w="100%" />
      </Stack>
      <SimpleGrid columns={["1", "1", "2", "2", "2"]} py="20px" placeItems="center">
        <Link href="https://devfolio.co/" isExternal >
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/v1612958316/UtkalHacks%203.0/Devfolio-Logo.webp"
            w={["300px", "300px", "500px", "500px", "500px"]}
          />
        </Link>
      </SimpleGrid>

      {/* Gold Tier Start */}
      <Stack my="20px" direction="row" alignItems="center" spacing={["5", "8", "8", "8"]} >
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "2xl", "2xl", "2xl"]}
          color="#feb631"
        >
          Gold
        </Heading>
        <Box bg="#feb631" h="2px" w="100%" />
      </Stack >
      <SimpleGrid columns={["1", "1", "2", "2", "2"]} py="20px" placeItems="center">
        <Link href="https://graphcms.com" isExternal>
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/v1613043913/UtkalHacks%203.0/GraphCMS_Logo.webp"
            w={["300px", "300px", "500px", "500px", "500px"]}
          />
        </Link>
      </SimpleGrid>

      {/* Silver Tier Start */}
      <Stack my="20px" direction="row" alignItems="center" spacing={["5", "8", "8", "8"]} >
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "2xl", "2xl", "2xl"]}
          color="#a4a0b7"
        >
          Silver
        </Heading>
        <Box bg="#a4a0b7" h="2px" w="100%" />
      </Stack>
      <SimpleGrid columns={["2", "2", "3", "3", "3"]} py="20px" placeItems="center" gap={10}>

        <Link href="https://nhost.io/" isExternal>
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/v1612891805/UtkalHacks%203.0/nhost-logo_au2zn4.webp"
            w={["200px", "200px", "300px", "300px", "300px"]}
          />
        </Link>

        <Link href="https://tezos.com/" isExternal>
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/v1612892691/UtkalHacks%203.0/Tezos_iwio1d.webp"
            w={["200px", "200px", "300px", "300px", "300px"]}
          />
        </Link>

        <Link href="https://matic.network/" isExternal>
          <Image
            src="https://res.cloudinary.com/emishalabs/image/upload/v1613042718/UtkalHacks%203.0/Matic-Logo_fo377i.svg"
            w={["200px", "200px", "300px", "300px", "300px"]}
          />
        </Link>
      </SimpleGrid>

      {/* Silver Tier end */}

      {/* Educational Partner Tier Start */}
      <Stack my="20px" direction="row" alignItems="center" py="20px" >
        <Heading
          fontWeight="normal"
          fontSize={["2xl", "2xl", "2xl", "2xl", "2xl"]}
          color="#f86ca1"
        >
          Educational Partner
        </Heading>
        <Box bg="#f86ca1" h="2px" w="100%" />
      </Stack>
      <SimpleGrid columns={["1", "1", "3", "3", "3"]} gap={10} placeItems="center">

        <Link href="https://egghead.io/" isExternal>
          <Image src="https://res.cloudinary.com/emishalabs/image/upload/q_85/v1612894419/UtkalHacks%203.0/Egghead-Logo-Dark_qwqnnr.webp" />
        </Link>

        <Link href="https://threejs-journey.xyz" isExternal>
          <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1613043143/UtkalHacks%203.0/3jsJourney-Logo.webp" />
        </Link>

      </SimpleGrid>

    </Box>
  )
}

export default PresentSponsor
