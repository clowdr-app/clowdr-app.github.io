import {
  Box,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { menuItems, menuSecondaryItems } from "../misc/menu-items";
import { ArrangeADemoButton } from "./ArrangeADemoButton";

export function MobileMenu(): JSX.Element {
  const mobileNav = useDisclosure();
  return (
    <Flex alignItems="center" mx="auto" flexWrap="wrap">
      <Flex justifyContent="center">
        <chakra.a
          _hover={{ color: "white" }}
          href="/"
          title="Clowdr Home Page"
          alignItems="center"
        >
          <Image src="/Clowdr-logo.svg" maxW="200" h="100" />
          <VisuallyHidden>
            <chakra.h1 fontSize="3xl" fontWeight="400">
              Clowdr
            </chakra.h1>
          </VisuallyHidden>
        </chakra.a>
      </Flex>
      <HStack fontSize="large">
        {menuItems.map((menuItem, i) => (
          <Link as={GatsbyLink} to={menuItem.link} w="full" key={i}>
            {menuItem.text}
          </Link>
        ))}
      </HStack>
      <HStack
        display="flex"
        flexWrap="wrap"
        justifyContent="left"
        ml={4}
        alignItems="center"
        spacing={1}
      >
        <Box display={{ base: "inline-flex", md: "none" }}>
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />

          <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg="brand.700"
            spacing={3}
            rounded="sm"
            shadow="sm"
            textAlign="center"
          >
            <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

            {menuItems.map((menuItem, i) => (
              <Link as={GatsbyLink} to={menuItem.link} w="full" key={i}>
                {menuItem.text}
              </Link>
            ))}
            <ArrangeADemoButton />
            {menuSecondaryItems.map((menuItem, i) => (
              <Link as={GatsbyLink} to={menuItem.link} w="full" key={i}>
                {menuItem.text}
              </Link>
            ))}
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
}
