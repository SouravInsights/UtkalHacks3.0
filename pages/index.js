import React from "react"
import Head from "next/head"
import { GraphQLClient } from "graphql-request"
import NavBar from "../component/Navbar/Header"
import {
  Box, Heading, Flex, Drawer,
  useDisclosure, DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react"

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
import PresentSponsor from "../component/PresentSponsor"
import PastSponsor from "../component/PastSponsor"
import SpeakerSection from "../component/SpeakerSection"
import FAQSection from "../component/FAQ.js"
import ContactUs from "../component/ContactForm"
import { motion } from 'framer-motion';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckh5adtt3ablq01z92dom8ylv/master"
  )

  const { faqs } = await graphcms.request(
    `
    {
      faqs {
        question
        answer
      }
    }
    `
  )
  return {
    props: {
      faqs,
    },
    revalidate: 1,
  }
}

const DrawerCloseButtonWrapper = motion.custom(DrawerCloseButton);

export default function Home({ faqs }) {
  const firstField = React.useRef();
  const btnRef = React.useRef();

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Head>
        <title>UtkalHacks 3.0</title>
      </Head>

      {/* <Badge /> */}
      <NavBar />
      <HeroSection />
      <Box px={["20px", "30px", "50px", "65px", "80px"]}>
        <About />
        <DescriptionSection />

        <WhySection
          coverImage="https://res.cloudinary.com/emishalabs/image/upload/q_69/v1613858174/UtkalHacks%203.0/learning-bg_q4aton.webp"
          heading="Learn something new!"
          description="Get exposed to actual problems to work on. Opportunity to solve problems fast, and push yourself beyond your comfort zone. Enhance your ability to work under pressure and acquire new technical skills, the exposure to interact with smart people improving your soft skills. Master the art of pitching project ideas like a pro.
          "
        />
        <WhySection
          reverse
          coverImage="https://res.cloudinary.com/emishalabs/image/upload/q_68/v1613857432/UtkalHacks%203.0/nifty-ideas-bg_krrrdj.webp"
          heading="Build nifty ideas!"
          description="Ideate with your team. Strategize with the utmost precision. Develop with your tools of choice and bring your hacks to life! If there was a right time to get serious on that handy idea you thought of in the shower, this is it! Ideas may look small in our heads, but nobody really knows their impact until and unless they manifest into reality."
        />
        <WhySection
          coverImage="https://res.cloudinary.com/emishalabs/image/upload/q_65/v1613859118/UtkalHacks%203.0/meet-smart-people-bg_gndcpg.webp"
          heading="Meet smart people!"
          description="Too shy to approach someone physically? The virtual experience lets you connect with sharp and like-minded people in your comfort zone. Build a circle that pushes you to grow. Network with masters of their crafts and learn from them. Or simply find peers on the same career roadmap. The possibilities are endless!"
        />

        <SprintSection />
        <BoxContainer
          ref={btnRef}
          onClick={onOpen}
          heading="Have an idea?"
          buttontext="Tell your ideas"
          description="So you've got ideas? Like ... a lot of 'em?
          There are way too many of us with ideas but too little time. If you're that person then our hackers at #UtkalHacks might just build those ideas into a real product."
        >

          <Drawer
            isOpen={isOpen}
            placement="bottom"
            initialFocusRef={firstField}
            finalFocusRef={btnRef}
            onClose={onClose}
            preserveScrollBarGap
          >
            <DrawerOverlay />
            <DrawerContent bg="white" roundedTop={[20]}>
              <DrawerCloseButtonWrapper _focus={{ boxShadow: "none" }} borderRadius="20px" whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} />
              <DrawerHeader>
                <Heading
                  textAlign="center"
                  fontWeight="extrabold"
                  color="black"
                  mt="20px"
                >
                  Tell us your ideas!
            </Heading>
              </DrawerHeader>
              <DrawerBody px={["25px", "25px", "220px", "280px"]}>
                <ContactUs />
              </DrawerBody>
            </DrawerContent>
          </Drawer>

        </BoxContainer>


        <PrizeSection />
        {/*  <Wikisection />
         */}
        <SpeakerSection />
        <PresentSponsor />
        <PastSponsor />
        {/* Sponsor section ends */}
        <Flex
          direction="column"
          mx={["10px", "40px", "60px", "100px"]}
          my="60px"
        >
          <Heading size="2xl" fontFamily="Rubik" textAlign="center" m="30px">
            FAQ
          </Heading>

          {faqs.map((data) => (
            <FAQ key={data.id} question={data.question} answer={data.answer} />
          ))}
        </Flex>
      </Box>
      <SocialMediaSection />
      <Footer />
    </>
  )
}
