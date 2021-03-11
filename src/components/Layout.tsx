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
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
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
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={6}
              mr={4}
              fontSize="large"
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link as={GatsbyLink} to="/features">
                Features
              </Link>
              <Link as={GatsbyLink} to="/pricing">
                Pricing
              </Link>
              <Link as={GatsbyLink} to="/about">
                About
              </Link>
              <Link as={GatsbyLink} to="/jobs">
                Jobs
              </Link>
              <Link as={GatsbyLink} to="/feedback">
                Feedback
              </Link>
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
                bg={headerBg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                textAlign="center"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link as={GatsbyLink} to="/features" w="full">
                  Features
                </Link>
                <Link as={GatsbyLink} to="/pricing" w="full">
                  Pricing
                </Link>
                <Link as={GatsbyLink} to="/about" w="full">
                  About
                </Link>
                <Link as={GatsbyLink} to="/jobs" w="full">
                  Jobs
                </Link>
                <Link as={GatsbyLink} to="/feedback" w="full">
                  Feedback
                </Link>
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
