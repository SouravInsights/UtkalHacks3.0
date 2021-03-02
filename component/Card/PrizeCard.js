import React, { useState } from "react"
import {
  Heading, Text, Image, VStack, Box, useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  SimpleGrid
} from "@chakra-ui/react"
import { motion } from 'framer-motion';


const PrizeCardWrapper = motion.custom(VStack);

const PrizeCard = ({ prizeIcon, heading, prizeImage, title, prizesData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState("inside")
  const btnRef = React.useRef()

  return (
    <>
      <PrizeCardWrapper
        alignContent="center" justifyContent="center"
        cursor="pointer"
        w="300px"
        h="300px"
        p="20px"
        bg="white"
        boxShadow="lg"
        mb="30px"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        onClick={onOpen}
        ref={btnRef}
        mr="20px"
      >
        <Box>
          <Image src={prizeIcon} />
        </Box>
        <Heading fontSize="24px" fontWeight="bold" textAlign="center" py="16px">
          {heading}
        </Heading>
      </PrizeCardWrapper>
      <Modal
        isCentered
        motionPreset="slideInBottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent width={{ md: "100px", xs: "100px" }} height={{ md: "100px", xs: "100px" }}>
          <ModalHeader>
            <ModalCloseButton _focus={{ boxShadow: "none" }} />
          </ModalHeader>

          <ModalBody >
            <SimpleGrid gap={4} columns={["1", "2", "2", "3", "3"]} placeItems="center">
              {prizesData.map((data) => (
                <>
                  {console.log("Here's what inside prizesData:", data)}
                  <VStack gap={8} key={data.id} >
                    <Image mb="10px" maxH="200px" maxW="200px" src={data.prizeImage} />
                    <Text as="p"
                      fontWeight="normal"
                      fontSize={["xl", "xl", "2xl", "2xl", "2xl"]}
                      color="454954"
                      letterSpacing="wide"
                    >
                      {data.title}
                    </Text>
                  </VStack>
                </>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

export default PrizeCard
