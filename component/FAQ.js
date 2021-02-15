import React, { useState } from "react"
import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from "@chakra-ui/react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

const AccordionPanelWrapper = motion.custom(AccordionPanel)

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Accordion allowToggle onClick={toggleOpen}>
      <AccordionItem>
        <AccordionButton
          _focus={{ boxShadow: "none" }}
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
          {isOpen && (
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
          )}
        </AnimatePresence>
      </AccordionItem>
    </Accordion>
  )
}

export default FAQ
