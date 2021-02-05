import React from "react"
import { Box, HStack, Spacer } from "@chakra-ui/react"

const Button = ({ label, rightIcon, withIcon, onClick, ...props }) => {
  return (
    <HStack
      spacing="16px"
      as="button"
      outline="none"
      lineHeight="1"
      letterSpacing="wide"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      py="18px"
      px="34px"
      borderRadius="2px"
      fontSize="16px"
      fontWeight="semibold"
      bg="#1D1B1B"
      borderColor="#ccd0d5"
      color="#ffffff"
      _hover={{ bg: "#ffffff", color: "#1D1B1B" }}
      _active={{
        bg: "#ffffff",
        transform: "scale(0.98)",
        borderColor: "#1D1B1B",
      }}
      onClick={onClick}
      {...props}
    >
      <Box textAlign="center">{label}</Box>
      {withIcon ? <Box> {rightIcon} </Box> : null}
    </HStack>
  )
}

export default Button
