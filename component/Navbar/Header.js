import React from "react"
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react"

import Logo from "./Logo"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
)

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, isExternal, to = "/", ...rest }) => {
  return (
    <Link href={to} isExternal={isExternal ? isExternal : null}>
      <Text
        display="block"
        fontSize={"lg"}
        fontWeight="medium"
        lineHeight="lg"
        {...rest}
      >
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem isExternal to="https://www.notion.so/utkalhacks/UtkalHacks-Schedule-feee511dc8c8405a9bc4759b69154ead">Schedule</MenuItem>
        {/* <MenuItem to="/">Prizes </MenuItem> */}
        <MenuItem isExternal to="https://www.notion.so/utkalhacks/UtkalHacks-Mini-Challenges-384e736650044e00bd90fa8bdf8ecfa1">Challenges</MenuItem>
        <MenuItem isExternal to="https://www.notion.so/utkalhacks/UtkalHacks-Ideas-Vault-cead37d84a4744f38121d19b6bc8afaa">Ideas</MenuItem>
        <MenuItem isExternal to="https://wiki.utkalhacks.tech">Wiki</MenuItem>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      zIndex="2"
      boxShadow="xl"
      position={["sticky", "sticky", "sticky", "sticky", "sticky"]}
      top="25px"
      left="0"
      right="0"
      mx="auto"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="90%"
      px={[6, 8, 10, 12, 14]}
      py={[3, 4, 4, 4, 4]}
      bg="#ffffff"
    >
      {children}
    </Flex>
  )
}

export default NavBar
