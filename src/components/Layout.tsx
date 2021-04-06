import {
  Box,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { menuItems } from "../misc/menu-items";
import ArrangeADemoButton from "./ArrangeADemoButton";
import Footer from "./Footer";

export function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string | string[];
}) {
  const headerBg = useColorModeValue("brand.800", "brand.800");
  const mobileNav = useDisclosure();

  return (
    <Flex direction="column" m="0 auto" minH="100vh">
      <chakra.header
        bg={headerBg}
        layerStyle="header"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex
          alignItems="center"
          justifyContent="space-around"
          mx="auto"
          flexWrap="wrap"
        >
          <Flex justifyContent="center">
            <chakra.a
              _hover={{ color: "white" }}
              href="/"
              title="Clowdr Home Page"
              display="flex"
              alignItems="center"
            >
              <chakra.h1 fontSize="3xl" fontWeight="400">
                Clowdr
              </chakra.h1>
            </chakra.a>
          </Flex>
          <HStack
            display="flex"
            flexWrap="wrap"
            justifyContent="right"
            ml={4}
            alignItems="center"
            spacing={1}
          >
            <HStack
              spacing={6}
              mr={4}
              fontSize="large"
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              {menuItems.map((menuItem, i) => (
                <Link as={GatsbyLink} to={menuItem.link} key={i}>
                  {menuItem.text}
                </Link>
              ))}
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
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
                bg="brand.600"
                spacing={3}
                rounded="sm"
                shadow="sm"
                textAlign="center"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                {menuItems.map((menuItem, i) => (
                  <Link as={GatsbyLink} to={menuItem.link} w="full" key={i}>
                    {menuItem.text}
                  </Link>
                ))}
                <ArrangeADemoButton />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
}
