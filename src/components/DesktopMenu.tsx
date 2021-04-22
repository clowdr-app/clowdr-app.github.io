import {
  chakra,
  Grid,
  HStack,
  Image,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { menuItems, menuSecondaryItems } from "../misc/menu-items";
import { ArrangeADemoButton } from "./ArrangeADemoButton";

export function DesktopMenu(): JSX.Element {
  return (
    <Grid templateColumns="1fr 1fr" columnGap={0}>
      <HStack fontSize="large" bgColor="white" justifyContent="flex-start">
        <chakra.a href="/" title="Clowdr Home Page" alignItems="center">
          <Image src="/Clowdr-logo-green.svg" maxW="200" h="100" />
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
        display="flex"
        flexWrap="wrap-reverse"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        px={8}
        py={2}
        layerStyle="hero"
        bgColor="brand.800"
      >
        <HStack
          spacing={6}
          mr={4}
          fontSize="large"
          color="brand.500"
          display={{ base: "none", md: "inline-flex" }}
          flexGrow={1}
          justifyContent="space-around"
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
        <ArrangeADemoButton flexGrow={1} />
      </HStack>
    </Grid>
  );
}
