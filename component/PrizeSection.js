import React from "react"
import { Heading, Box, Text, Stack, Flex, SimpleGrid } from "@chakra-ui/react"
import PrizeCard from "./Card/PrizeCard"
import Button from "./Button"

const PrizeSection = () => {
  return (
    <Box my="80px">
      <Stack spacing="20px" direction="column">
        <Heading
          fontWeight="black"
          fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
          color="#252222"
        >
          Did we forget Prizes?
        </Heading>
        <Text
          as="p"
          fontWeight="normal"
          fontSize={["xl", "xl", "2xl", "2xl"]}
          color="454954"
        >
          No, not at all. We know hackers love prizes and swags! But sometimes
          useless prizes are a great turnoff for the people who hack out of
          passion. This year, we are focusing more on providing valuable prizes
          that are useful to everyone in the long run. And we’ve got a bunch of
          cool but useful ones in this year’s edition.
        </Text>
      </Stack>
      <Flex
        direction={["column", "column", "row", "row", "row"]}
        justifyContent="space-around"
        mt="30px"
      >
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/c_scale,q_89,w_120/v1613534060/UtkalHacks%203.0/trophy_1_2_sp15je.webp"
          heading="Winners"
          data={[
            "Prizes worth Rs.30000",
            "Swags from GraphCMS",
            "1 year subscripton of Egghead for team",
            "Subscription of Three.js for each members",
          ]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_92,w_120/v1613533923/UtkalHacks%203.0/trophy_2_1_nbngun.webp"
          heading="Runner up"
          data={[
            "Prizes worth Rs.20000",
            "Swags from GraphCMS",
            "1 year subscripton of Egghead courses",
            "Subscription of Three.js for each members",
          ]}
        />
      </Flex>
      <SimpleGrid columns={["1", "2", "2", "3", "3"]} placeItems="center">
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_90,w_120/v1613533927/UtkalHacks%203.0/trophy_3_1_w0yuui.webp"
          heading="Best Design team"
          data={[
            " Subscriptions of Three.js Journey",
            "Coupon codes from Spline",
            "3 months subscription of Nhost",
            /* "Access to FigmaAcademy ", */
            "1 year subscripton of Egghead courses",
          ]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_90,w_120/v1613533927/UtkalHacks%203.0/trophy_3_1_w0yuui.webp"
          heading="Best Girls team"
          data={[
            "Swags from GitHub",
            " Subscriptions of Three.js Journey",
            "3 months subscription of Nhost",
            "1 year subscripton of Egghead courses",
          ]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_90,w_120/v1613533927/UtkalHacks%203.0/trophy_3_1_w0yuui.webp"
          heading="Best Beginners team"
          data={[
            " Subscriptions of Three.js Journey",
            "Coupon codes from Spline",
            "3 months subscription of Nhost",
            "1 year subscripton of Egghead courses ",
          ]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1612849588/UtkalHacks%203.0/spline_logo_jdvyns.webp"
          heading="Best Spline 3D design"
          data={[
            " 1st prize of $400",
            "2nd prize of $300",
            "3rd prize of $200",
          ]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1613043913/UtkalHacks%203.0/GraphCMS_Logo.webp"
          heading="Best GraphCMS Hacks"
          data={[" Swags from GraphCMS"]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1613042718/UtkalHacks%203.0/Matic-Logo_fo377i.webp"
          heading="Best Matic Hacks"
          data={[
            " Rs.15000 for best Hack using Matic",
            "Eligibility for Internship/Full-time interviews",
            "Rs.10000 for best Hack using Ethereum",
          ]}
        />
        <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1612892691/UtkalHacks%203.0/Tezos_iwio1d.webp"
          heading="Best Tezos Hacks"
          data={[
            " Rs.20000 for best Dapp built on Tezos",
            "Continuity grant opportunity for exceptional builders",
          ]}
        />
        {/*  <PrizeCard
          to="https://threejs-journey.xyz/"
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/q_91/v1612549874/UtkalHacks%203.0/cover_2_ugjej7.webp"
          heading="Three.js Journey"
          description="Have you ever wanted to create stunning 3D websites?
                       Whether you are a beginner or a more advanced developer,
                      Three.js Journey is the only course you need to learn WebGL with Three.js."
        /> */}
        {/* <PrizeCard
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1612549847/UtkalHacks%203.0/cover_1_lquepn.webp"
          heading="Typescript Book"
          description="Everything you need to know about TypeScript in 50 short lessons! Find errors before they happen, and strengthen your code base by leveraging TypeScript's vast and flexible type system."
        /> */}
        {/* <PrizeCard
          to="https://egghead.io/"
          CoverImage="https://res.cloudinary.com/emishalabs/image/upload/v1612549833/UtkalHacks%203.0/cover_anklnh.webp"
          heading="Egghead"
          description="Learn the best JavaScript tools and frameworks from industry pros. Egghead provides you with the resources you need to craft a developer portfolio to get a good/better job as a web developer."
        /> */}
      </SimpleGrid>

      {/*  <Box align="center" my="40px">
        <Button label="Checkout all Prizes" />
      </Box> */}
    </Box>
  )
}

export default PrizeSection
