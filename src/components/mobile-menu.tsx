import {
  Box,
  chakra,
  CloseButton,
  Flex,
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
import { menuItems } from "../misc/menu-items";

export function MobileMenu(): JSX.Element {
  const mobileNav = useDisclosure();
  return (
    <nav>
      <Flex
        alignItems="center"
        mx="auto"
        flexWrap="wrap"
        bgColor="brand.900"
        justifyContent="space-between"
        px={4}
      >
        <Flex justifyContent="center">
          <chakra.a
            href="/"
            title="Midspace Home Page"
            alignItems="center"
            ml={4}
          >
            <Image alt="" src="/midspace-wordmark.svg" maxW="200" h="100" />
            <VisuallyHidden>
              <chakra.h1 fontSize="3xl" fontWeight="400">
                Midspace
              </chakra.h1>
            </VisuallyHidden>
          </chakra.a>
        </Flex>
        <Box flexGrow={1} flexBasis={0} my={2}>
          <IconButton
            ml="auto"
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            fontSize="20px"
            variant="ghost"
            color="white"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
            disabled={mobileNav.isOpen}
          />
        </Box>

        <VStack
          pos="absolute"
          top={0}
          left={0}
          right={0}
          display={mobileNav.isOpen ? "flex" : "none"}
          flexDirection="column"
          p={2}
          pb={4}
          my={2}
          bg="brand.900"
          layerStyle="hero"
          spacing={3}
          rounded="sm"
          shadow="sm"
          textAlign="center"
        >
          <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

          {menuItems.map((menuItem, i) => (
            <Link
              as={GatsbyLink}
              to={menuItem.link}
              w="full"
              key={i}
              fontSize="lg"
            >
              {menuItem.text}
            </Link>
          ))}
        </VStack>
      </Flex>
    </nav>
  );
}
