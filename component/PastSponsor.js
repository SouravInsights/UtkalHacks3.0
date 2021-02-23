import React from "react"
import { Box, SimpleGrid, Heading, Image, Flex, Link, Divider, Stack } from "@chakra-ui/react"

function PastSponsor() {
    return (
        <Box my="50px">
            <Heading
                fontWeight="black"
                fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
                color="#252222"
                letterSpacing="wide"
                textAlign="center"
                mb="30px"
            >
                Our Past Sponsors
            </Heading>

            <SimpleGrid columns={["2", "2", "3", "3", "3"]} placeItems="center" gap={10}>

                <Link _focus={{ boxShadow: "none" }} href="https://github.com/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613058549/UtkalHacks%203.0/GitHub_Logo_sour5l.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://devfolio.co/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1612958316/UtkalHacks%203.0/Devfolio-Logo.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://startupodisha.gov.in/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} w={["200px", "300px", "300px", "300px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613059765/UtkalHacks%203.0/StartupOdisha_u12av1.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://www.pratilipi.com/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613065708/UtkalHacks%203.0/logo_welskm.webp" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://www.elastic.co/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613059766/UtkalHacks%203.0/logo-elastic-horizontal-color_vpalax.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://clarisights.com/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613067009/UtkalHacks%203.0/clarisights_zzomxf.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://www.cloudflare.com/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613070866/UtkalHacks%203.0/cf-logo-v-rgb_nqkwde.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://matic.network/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613042718/UtkalHacks%203.0/Matic-Logo_fo377i.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://transak.com/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613059788/UtkalHacks%203.0/logo_tf1jbp.png " />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://www.blockstack.org/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613065442/UtkalHacks%203.0/blockstack_nxngqf.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://status.im/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613065003/UtkalHacks%203.0/Status-full-logo-lockup_ahc2pi.png" />
                </Link>

                <Link _focus={{ boxShadow: "none" }} href="https://3box.io/" isExternal>
                    <Image p={["10px", "10px", "20px", "20px"]} src="https://res.cloudinary.com/emishalabs/image/upload/v1613059745/UtkalHacks%203.0/3box_m0ytj0.png" />
                </Link>

                {/*  <Link href="https://bhubaneswar.tie.org/" isExternal>
                        <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1613059717/UtkalHacks%203.0/tie-silicon-logo_nogniv.png" />
                    </Link> */}

            </SimpleGrid>

            {/*  <SimpleGrid columns={["3", "3", "4", "4", "4"]} py="20px" placeItems="center" gap={10}>
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
                            <Image src="https://res.cloudinary.com/emishalabs/image/upload/v1613042718/UtkalHacks%203.0/Matic-Logo_fo377i.svg" />
                        </Link>
                    </Box>
                </SimpleGrid> */}

        </Box>
    )
}

export default PastSponsor
