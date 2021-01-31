import React from "react"
import Head from "next/head"
import { GraphQLClient } from "graphql-request"
import NavBar from "../component/Navbar/Header"
import { Box, Image, Heading, Grid } from "@chakra-ui/react"
import HeroSection from "../component/Herosection/Herosection.js"
import Wikisection from "../component/Wiki"
import FAQ from "../component/FAQ.js"
import About from "../component/Herosection/about.js"
import Whysection from "../component/Whysection.js"
import Sprintsection from "../component/Sprintsection"
import BoxContainer from "../component/BoxContainer.js"
import Description from "../component/Descriptionsection.js"
import Prizesection from "../component/Prizesection.js"

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckh5adtt3ablq01z92dom8ylv/master"
  )

  const { sponsors } = await graphcms.request(
    `
  {
    sponsors {
      tier
      company {
        name
        website
        logo {
          url
        }
      }
    }
  }
  `
  )
  return {
    props: {
      sponsors,
    },
    revalidate: 1,
  }
}

export default function Home({ sponsors }) {
  return (
    <>
      <Head>
        <title>UtkalHacks3.0</title>
      </Head>
      <NavBar />
      <HeroSection />
      <Box
        justifyContent="space-between"
        px={["30px", "30px", "80px", "120px"]}
      >
        <About />
        <Description />

        <Whysection
          url="/learning-bg.png"
          heading="Learn something new!"
          text="Get exposed to actual problems to work on. Opportunity to solve problems fast, and push yourself beyond your comfort zone. Enhance your ability to work under pressure and acquire new technical skills. The exposure to interact with smart people improving your soft skills. Master the art of pitching project ideas like a pro."
        />
        <Whysection
          reverse="true"
          url="/learning-bg.png"
          heading="Build nifty ideas!"
          text="Get exposed to actual problems to work on. Opportunity to solve problems fast, and push yourself beyond your comfort zone. Enhance your ability to work under pressure and acquire new technical skills. The exposure to interact with smart people improving your soft skills. Master the art of pitching project ideas like a pro."
        />
        <Whysection
          url="/learning-bg.png"
          heading="Meet smart people!"
          text="Get exposed to actual problems to work on. Opportunity to solve problems fast, and push yourself beyond your comfort zone. Enhance your ability to work under pressure and acquire new technical skills. The exposure to interact with smart people improving your soft skills. Master the art of pitching project ideas like a pro."
        />

        <Sprintsection />
        <BoxContainer
          heading="Have an idea?"
          text="So you've got ideas? Like ... a lot of 'em?
        There are way too many of us with ideas but too little time. If you're that person then our hackers at #UtkalHacks might just build those ideas into a real product."
          buttontext="Write us your ideas"
        />

        <Prizesection />
        <Wikisection />

        <Heading
          fontFamily="Rubik"
          size="2xl"
          fontWeight="extrabold"
          textAlign="center"
          mt="60px"
        >
          Our Past Sponsors
        </Heading>
        {/* Sponsor section starts */}
        <Grid
          alignItems="center"
          placeItems="center"
          templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={10}
          mt="20px"
        >
          {sponsors.map((sponsor) => (
            <Box maxW={["100%", "100%", "90%", "80%"]}>
              <Image src={sponsor.company.logo.url} />
            </Box>
          ))}
        </Grid>
        {/* Sponsor section ends */}
        <FAQ />
      </Box>
    </>
  )
}
