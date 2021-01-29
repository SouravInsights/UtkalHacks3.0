import React from "react"
import Head from "next/head"
import { GraphQLClient } from "graphql-request"
import NavBar from "../component/Navbar.js/Header.js"
import { Box, Image, Heading, Grid } from "@chakra-ui/react"
import HeroSection from "../component/Herosection/Herosection.js"
import Wikisection from "../component/Wiki"
import FAQ from "../component/FAQ.js"
import About from "../component/Herosection/about.js"
import Whysection from "../component/Whysection.js"

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
        <Wikisection />
        <Heading size="2xl" textAlign="center" m="30px">
          Our Past Sponsors
        </Heading>
        {/* Sponsor section starts */}
        <Grid
          alignItems="center"
          placeItems="center"
          templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={10}
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
