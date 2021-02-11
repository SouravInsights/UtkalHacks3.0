import React, { useState } from "react";
import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text
} from "@chakra-ui/react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const AccordionPanelWrapper = motion.custom(AccordionPanel);

const Faqdata = [
  {
    id: 1,
    question: "Who can Participate?",
    answer:
      "We encourage and welcome undergraduate students, recent graduates and also working professionals to join us. But the ratio of students particpants will be higher than professianls. We also highly encourage UX Designers to join us at UtkalHacks.",
  },
  {
    id: 2,
    question: "How the registration process works?",
    answer:
      "Unlike all other hackathons, our registration process will be slightly different. But the entire process is very simple, just go to top and hit that Apply With Devfolio button. That's it. Then you will be prompted to make a quick submission of the questionnaires within the Devfolio platform.",

  },
  {
    id: 3,
    question: "What happen during the Sprint Day?",
    answer:
      "SprintDay is the first day of the hackathon where teams will collaborate with UI / UX Designers and will begin working on their ideas on site. SprintDay is all about working on the problem statement, brainstorming and prototyping before jumping into solving the problem. We will invite some expert mentors who will conduct a Design Sprint that will help you to understand the problems first, develop your idea and the prototype. Most of the of SprintDay is about understanding the problem and developing prototypes, so please remember to bring your laptops and any other equipment and materials you might need to work. Food and beverages are provided throughout. ",
  },
  {
    id: 4,
    question: "How much UtkalHacks costs?",
    answer:
      "Admissions is completely free. Just bring yourself and your best ideas, and we take care of the rest! That means meals, drinks, snacks, workspace, swag, and WiFi are completely on us. ",
  },
  {
    id: 5,
    question: "Can we apply as a team?",
    answer:
      "Yes! It's always good to have a team because it's not just the hackathon for which you are building a team. Who knows you might end up building the first working model of your startup at UtkalHacks. And it's no kidding, we aim to support our best hacks even after the Hackathon through our post hackathon activities. So, we always encourage to have a team. You can join or create a team once you've started an individual application.",
  },
  {
    id: 6,
    question: "How big are the teams?",
    answer:
      "Your team should have at least two members but it should not more than four people. You can either apply as a individual or a team. Once you receive your acceptance, you will be sent an email further prompting you on our team formation opportunities. ",
  },
  {
    id: 7,
    question: "What do you look for in participants?",
    answer:
      "The We believe that anyone and everyone has the power to make a difference. In our application, you get a chance to demonstrate your interests and past projects by sharing anything from your GitHub, LinkedIn, portfolios, or writing samples. We don't require prior hackathon experience because we want you to show us what makes you, YOU! ",
  },
  {
    id: 8,
    question: "What is the code of conduct?",
    answer:
      "UtkalHacks values the importance of a safe and all-inclusive space. We welcome students from all backgrounds. Anyone attending must adhere to our Code of Conduct. ",
  },
  {
    id: 9,
    question: "What if I don't know how to code?",
    answer:
      "Interest in learning and working with technology is much more important than your current experience level. No experience is needed — whether you're a coder, an artist, a designer, or a writer, you'll get a chance to work with various mentors, attend workshops, interact with companies, and learn alongside fellow participants",
  },
  {
    id: 10,
    question: "404:Question not found",
    answer:
      "If you have any other questions or concerns, just send us a #tweet at @emishacommunity or reach out to us via email at contact@emishacommunity. ",
  },
]

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (

    <Accordion allowToggle onClick={toggleOpen} _focus={{ boxShadow: "none" }}>
      <AccordionItem _focus={{ boxShadow: "none" }}>
        <AccordionButton
          border="5px"
          boxShadow="outline"
          outline="none"
          _hover={{ bg: "#F3E352" }}
          justifyContent="space-between"
        >
          <Box
            flex="1"
            fontSize={["lg", "xl", "xl", "xl"]}
            fontWeight="semibold"
            textAlign="left"
          >
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AnimatePresence>
          {isOpen &&
            <AccordionPanelWrapper
              _focus={{ boxShadow: "none" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              pb={4}
              fontSize={["sm", "md", "lg", "xl"]}
            >
              {answer}
            </AccordionPanelWrapper>
          }</AnimatePresence>
      </AccordionItem>
    </Accordion>

  )
}

const FAQSection = () => {
  return (
    <Flex
      direction="column"
      mx={["10px", "40px", "60px", "100px"]}
      my="60px"
    >
      <Heading size="2xl" fontFamily="Rubik" textAlign="center" m="30px">
        FAQ
      </Heading>

      {Faqdata.map((data) => (
        <Faq key={data.id} question={data.question} answer={data.answer} />
      ))}
    </Flex>
  )
}

export default FAQSection
