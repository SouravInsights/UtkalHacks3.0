import React from "react"
import { Heading, Box, Text, Stack, Flex, SimpleGrid } from "@chakra-ui/react"
import PrizeCard from "./Card/PrizeCard"
import Button from "./Button"


const prizeCardData = [
  {
    id: 1,
    heading: "Winner",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/c_scale,q_89,w_120/v1613534060/UtkalHacks%203.0/trophy_1_2_sp15je.webp",
    prizesData: [
      {
        id: 1,
        title: "Worth Gadgets",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614710235/UtkalHacks%203.0/30000_u49uvl.png"
      },
      {
        id: 2,
        title: "GraphCMS T-shirt",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672987/UtkalHacks%203.0/T-shirt_ha8vkm.png"
      },
      {
        id: 3,
        title: "GraphCMS Tote Bag",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672990/UtkalHacks%203.0/bag_qw5m43.png"
      },
      {
        id: 4,
        title: "GraphCMS MUG",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672998/UtkalHacks%203.0/Mug_xlbryb.png"
      },
      {
        id: 5,
        title: "GraphCMS Pillow",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614673003/UtkalHacks%203.0/Pillow_xixihc.png"
      },
      {
        id: 6,
        title: "GraphCMS Snapback",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672994/UtkalHacks%203.0/cap_usgbkg.png"
      },
      {
        id: 7,
        title: "6 months professional plan",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Graphcmslogo_ksk6ua.png"
      },
      {
        id: 8,
        title: "1 year subscripton for the team",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Egghead.io_mfzmpu.png"
      },
      {
        id: 9,
        title: "Subscription for each member",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/3jslogo_i6rqna.png"
      },
    ]
  },
  {
    id: 2,
    heading: "Runner Up",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_92,w_120/v1613533923/UtkalHacks%203.0/trophy_2_1_nbngun.webp",
    prizesData: [
      {
        id: 1,
        title: "Worth Gadgets",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614621712/UtkalHacks%203.0/20_000_lcybiw.png"
      },
      {
        id: 2,
        title: "GraphCMS T-shirt",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672987/UtkalHacks%203.0/T-shirt_ha8vkm.png"
      },
      {
        id: 3,
        title: "GraphCMS Tote Bag",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672990/UtkalHacks%203.0/bag_qw5m43.png"
      },
      {
        id: 4,
        title: "GraphCMS MUG",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672998/UtkalHacks%203.0/Mug_xlbryb.png"
      },
      {
        id: 5,
        title: "GraphCMS Pillow",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614673003/UtkalHacks%203.0/Pillow_xixihc.png"
      },
      {
        id: 6,
        title: "GraphCMS Snapback",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672994/UtkalHacks%203.0/cap_usgbkg.png"
      },
      {
        id: 7,
        title: "6 months professional plan",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Graphcmslogo_ksk6ua.png"
      },
      {
        id: 8,
        title: "1 year subscripton for the team",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Egghead.io_mfzmpu.png"
      },
      {
        id: 9,
        title: "Subscription for each member",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/3jslogo_i6rqna.png"
      },

    ]
  },
  {
    id: 3,
    heading: "Best Design Team",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_90,w_120/v1613533927/UtkalHacks%203.0/trophy_3_1_w0yuui.webp",
    prizesData: [
      {
        id: 1,
        title: "Subscription for each member",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614675419/UtkalHacks%203.0/3jslogo_kkd6ww.png"
      },
      {
        id: 2,
        title: "Pro accounts",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614689741/UtkalHacks%203.0/spline_logo_black_rlj6ds.png"
      },
      {
        id: 3,
        title: "3 months subscription",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614693133/UtkalHacks%203.0/Nhost_tnmlnh.png"
      },
      {
        id: 4,
        title: "1 year subscripton for the team",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Egghead.io_mfzmpu.png"
      },
    ]
  },
  {
    id: 4,
    heading: "Best Girls team",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_90,w_120/v1613533927/UtkalHacks%203.0/trophy_3_1_w0yuui.webp",
    prizesData: [
      {
        id: 1,
        title: "Invertocat 2.0 Shirt",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614707113/UtkalHacks%203.0/Invertocat_2.0_Mock_GithubShop-M1_480x480_crop_center_uuabxk.jpg"
      },
      {
        id: 2,
        title: "Octocat Figurine",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614707118/UtkalHacks%203.0/Small_Octocat_480x480_crop_center_tbhv3p.png"
      },
      {
        id: 3,
        title: "Subscription for each member",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614675419/UtkalHacks%203.0/3jslogo_kkd6ww.png"
      },
      {
        id: 4,
        title: "3 months subscription",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614693133/UtkalHacks%203.0/Nhost_tnmlnh.png"
      },
      {
        id: 5,
        title: "1 year subscripton for the team",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Egghead.io_mfzmpu.png"
      },
    ]
  },
  {
    id: 5,
    heading: "Best Beginners team",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/c_scale,h_100,q_90,w_120/v1613533927/UtkalHacks%203.0/trophy_3_1_w0yuui.webp",
    prizesData: [
      {
        id: 1,
        title: "Subscription for each member",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614675419/UtkalHacks%203.0/3jslogo_kkd6ww.png"
      },
      {
        id: 2,
        title: "Pro accounts",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614689741/UtkalHacks%203.0/spline_logo_black_rlj6ds.png"
      },
      {
        id: 3,
        title: "3 months subscription",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614693133/UtkalHacks%203.0/Nhost_tnmlnh.png"
      },
      {
        id: 4,
        title: "1 year subscripton for the team",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Egghead.io_mfzmpu.png"
      },
    ]
  },
  {
    id: 6,
    heading: "Best Spline 3D design",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/v1613670061/UtkalHacks%203.0/spline_logo_black_xj1yzz.png",
    prizesData: [
      {
        id: 1,
        title: "1st prize",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614694306/UtkalHacks%203.0/400_tuvk7q.png"
      },
      {
        id: 2,
        title: "2nd prize",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614694327/UtkalHacks%203.0/300_y6qvsc.png"
      },
      {
        id: 3,
        title: "3rd prize",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614694321/UtkalHacks%203.0/200_vfni67.png"
      },
    ]
  },
  {
    id: 7,
    heading: "Best GraphCMS Hacks",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/v1613043913/UtkalHacks%203.0/GraphCMS_Logo.webp",
    prizesData: [
      {
        id: 1,
        title: "GraphCMS T-shirt",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672987/UtkalHacks%203.0/T-shirt_ha8vkm.png"
      },
      {
        id: 2,
        title: "GraphCMS Tote Bag",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672990/UtkalHacks%203.0/bag_qw5m43.png"
      },
      {
        id: 3,
        title: "GraphCMS MUG",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672998/UtkalHacks%203.0/Mug_xlbryb.png"
      },
      {
        id: 4,
        title: "GraphCMS Pillow",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614673003/UtkalHacks%203.0/Pillow_xixihc.png"
      },
      {
        id: 5,
        title: "GraphCMS Snapback",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614672994/UtkalHacks%203.0/cap_usgbkg.png"
      },
      {
        id: 6,
        title: "Collab content with GraphCMS(Stream/Post/Guide)",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614691857/UtkalHacks%203.0/Graphcmslogo_ksk6ua.png"
      },
    ]
  },
  {
    id: 8,
    heading: "Best Matic Hacks",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/v1613042718/UtkalHacks%203.0/Matic-Logo_fo377i.webp",
    prizesData: [
      {
        id: 1,
        title: "for best Hack using Matic",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614621710/UtkalHacks%203.0/15_000_j6su23.png"
      },
      {
        id: 2,
        title: "Eligibility for Internship/Full-time interviews",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614697740/UtkalHacks%203.0/Matic_g4rmkr.png"
      },
      {
        id: 3,
        title: "for best Hack using Ethereum",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614621713/UtkalHacks%203.0/10000_kfjiam.png"
      },

    ]
  },
  {
    id: 9,
    heading: "Best Tezos Hacks",
    prizeIcon: "https://res.cloudinary.com/emishalabs/image/upload/v1612892691/UtkalHacks%203.0/Tezos_iwio1d.png",
    prizesData: [
      {
        id: 1,
        title: "for best Dapp built on Tezos",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614621712/UtkalHacks%203.0/20_000_lcybiw.png"
      },
      {
        id: 2,
        title: "Continuity grant opportunity for exceptional builders",
        prizeImage: "https://res.cloudinary.com/emishalabs/image/upload/v1614698239/UtkalHacks%203.0/Tezos_gaozs3.png"
      },

    ]
  },
]


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
      <Flex my="40px" mr="-20px" direction="row" wrap="wrap" justifyContent="space-around">
        {prizeCardData.map((data) => (
          <PrizeCard
            key={data.id}
            heading={data.heading}
            prizeIcon={data.prizeIcon}
            prizesData={data.prizesData}
          />
        ))}
      </Flex>


      {/*  <Box align="center" my="40px">
        <Button label="Checkout all Prizes" />
      </Box> */}
    </Box>
  )
}

export default PrizeSection
