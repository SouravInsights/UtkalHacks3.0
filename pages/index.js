import React from "react"
import Head from "next/head"
import { GraphQLClient } from "graphql-request"
import NavBar from "../component/Navbar/Header"
import { Box, Image, Heading, Grid } from "@chakra-ui/react"
import HeroSection from "../component/HeroSection/HeroSection.js"
import WikiSection from "../component/WikiSection"
import FAQ from "../component/FAQ.js"
import About from "../component/HeroSection/About.js"
import WhySection from "../component/WhySection.js"
import SprintSection from "../component/SprintSection"
import BoxContainer from "../component/BoxContainer.js"
import DescriptionSection from "../component/DescriptionSection"
import PrizeSection from "../component/PrizeSection.js"
import SocialMediaSection from "../component/SocialMediaSection"
import Footer from "../component/Footer"
import Badge from "../component/Badge/Badge"

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
        <title>UtkalHacks 3.0</title>
      </Head>
      <Badge />
      <NavBar />
      <HeroSection />
      <Box px={["20px", "30px", "50px", "65px", "80px"]}>
        <About />
        <DescriptionSection />

        <WhySection
          coverImage="/learning-bg.png"
          heading="Learn something new!"
          description="Get exposed to actual problems to work on. Opportunity to solve problems fast, and push yourself beyond your comfort zone. Enhance your ability to work under pressure and acquire new technical skills, the exposure to interact with smart people improving your soft skills. Master the art of pitching project ideas like a pro.
          "
        />
        <WhySection
          reverse="true"
          coverImage="/learning-bg.png"
          heading="Build nifty ideas!"
          description="Ideate with your team. Strategize with the utmost precision. Develop with your tools of choice and bring your hacks to life! If there was a right time to get serious on that handy idea you thought of in the shower, this is it! Ideas may look small in our heads, but nobody really knows their impact until and unless they manifest into reality."
        />
        <WhySection
          coverImage="/learning-bg.png"
          heading="Meet smart people!"
          description="Too shy to approach someone physically? The virtual experience lets you connect with sharp and like-minded people in your comfort zone. Build a circle that pushes you to grow. Network with masters of their crafts and learn from them. Or simply find peers on the same career roadmap. The possibilities are endless!"
        />

        <SprintSection />
        <BoxContainer
          heading="Have an idea?"
          description="So you've got ideas? Like ... a lot of 'em?
          There are way too many of us with ideas but too little time. If you're that person then our hackers at #UtkalHacks might just build those ideas into a real product."
          buttontext="Write us your ideas"
        />

        <PrizeSection />
        {/*      <Wikisection />
         */}
        <Heading
          fontWeight="black"
          fontSize={["3xl", "3xl", "4xl", "4xl", "4xl"]}
          color="#252222"
          letterSpacing="wide"
          textAlign="center"
        >
          Our Past Sponsors
        </Heading>
        {/* Sponsor section starts */}
        <Grid
          alignItems="center"
          placeItems="center"
          templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={10}
          my="40px"
        >
          {sponsors.map((sponsor) => (
            <Box maxW={["100%", "100%", "90%", "80%"]}>
              <Image src={sponsor.company.logo.url} />
            </Box>
          ))}
        </Grid>
        {/* Sponsor section ends */}
        {/* <FAQ /> */}
      </Box>
      <SocialMediaSection />
      <Footer />
    </>
  )
}
