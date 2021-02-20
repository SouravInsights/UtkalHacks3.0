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
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordionButtonWrapper = motion.custom(AccordionButton);
const AccordionPanelWrapper = motion.custom(AccordionPanel)

const FAQ = ({ question, answer }) => {

  return (
    <Accordion allowToggle>
      <AccordionItem >
        {({ isExpanded }) => (
          <>
            <AccordionButtonWrapper
              py={[3, 3, 4, 4, 4]}
              _focus={{ boxShadow: "none" }}
              justifyContent="space-between"
            >
              <Box
                flex="1"
                fontSize={["lg", "xl", "xl", "xl", "xl"]}
                color="#252222"
                fontWeight="semibold"
                textAlign="left"
              >
                {question}
              </Box>
              {isExpanded ? (
                <FaMinus fontSize="12px" />
              ) : (
                  <FaPlus fontSize="12px" />
                )}
            </AccordionButtonWrapper>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <AccordionPanelWrapper
                  _focus={{ boxShadow: "none" }}
                  fontSize={["lg", "lg", "lg", "xl", "xl"]}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {answer}
                </AccordionPanelWrapper>
              )}
            </AnimatePresence>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default FAQ
