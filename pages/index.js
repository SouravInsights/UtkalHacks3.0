import React from "react"
import Head from "next/head"
import { GraphQLClient } from "graphql-request"
import NavBar from "../component/Navbar.js/Header.js"
import {
  Flex,
  Box,
  Text,
  StylesProvider,
  Heading,
  Grid,
} from "@chakra-ui/react"
import HeroSection from "../component/Herosection/index.js"
import Wikisection from "../component/WikiSection/index.js"
import FAQ from "../component/FAQ.js"
import Sponsor from "../component/Sponsor.js"

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

const ConsoleLog = ({ children }) => {
  return console.log(children)
}

export default function Home({ sponsors, tier }) {
  return (
    <>
      <Head>
        <title>UtkalHacks3.0</title>
      </Head>
      <NavBar />
      <Flex
        direction="column"
        px={["30px", "30px", "80px", "120px"]}
        justifyContent="space-between"
      >
        <HeroSection />
        <Wikisection />
        {sponsors
          .filter((sponsors) => sponsors.tier === "Platinum")
          .map((sponsor) => (
            <>
              <Heading
                size="2xl"
                fontWeight="bold"
                color="black"
                textAlign="center"
              >
                {sponsor.tier}
              </Heading>

              <Sponsor
                /* name={sponsor.company.name} */
                logo={sponsor.company.logo.url}
              />
            </>
          ))}
        <FAQ />
      </Flex>
    </>
  )
}
