import { chakra, HStack, Image, Link, VisuallyHidden } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { menuItems, menuSecondaryItems } from "../misc/menu-items";
import { ArrangeADemoButton } from "./ArrangeADemoButton";

export function DesktopMenu(): JSX.Element {
  return (
    <HStack
      flexWrap="wrap"
      columnGap={0}
      bgGradient="linear(to-b, brand.900 20%, brand.800)"
      bgColor="brand.900"
      layerStyle="hero"
      shadow="md"
      py={2}
    >
      <HStack fontSize="large" justifyContent="flex-start" flex={1}>
        <chakra.a href="/" title="Clowdr Home Page" alignItems="center" ml={4}>
          <Image src="/Clowdr-logo-white.svg" maxW="200" h="100" />
          <VisuallyHidden>
            <chakra.h1 fontSize="3xl" fontWeight="400">
              Clowdr
            </chakra.h1>
          </VisuallyHidden>
        </chakra.a>
        {menuItems.map((menuItem, i) => (
          <Link
            as={GatsbyLink}
            to={menuItem.link}
            w="full"
            key={i}
            flex={0}
            fontSize="2xl"
            p={4}
          >
            {menuItem.text}
          </Link>
        ))}
      </HStack>
      <HStack
        flex={1}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        px={8}
        py={2}
      >
        <HStack
          spacing={6}
          mr={8}
          fontSize="large"
          color="brand.500"
          display={{ base: "none", md: "inline-flex" }}
          justifyContent="flex-end"
          flexGrow={1}
        >
          {menuSecondaryItems.map((menuItem, i) => (
            <Link
              as={GatsbyLink}
              to={menuItem.link}
              w="max-content"
              key={i}
              p={2}
              fontSize="xl"
            >
              {menuItem.text}
            </Link>
          ))}
        </HStack>
        <ArrangeADemoButton flexGrow={1} maxW="20rem" />
      </HStack>
    </HStack>
  );
}
