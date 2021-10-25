import {
  chakra,
  Container,
  HStack,
  Image,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { menuItems } from "../misc/menu-items";
import { BackToClowdrButton } from "./back-to-clowdr-button";

export function DesktopMenu(): JSX.Element {
  return (
    <chakra.nav
      bgGradient="linear(to-b, purple.900 20%, purple.800)"
      bgColor="purple.900"
    >
      <Container
        as="article"
        itemScope
        itemType="http://schema.org/Article"
        overflowX="auto"
      >
        <HStack
          flexWrap="wrap"
          columngap={0}
          layerStyle="hero"
          shadow="md"
          py={2}
        >
          <HStack fontSize="large" justifyContent="flex-start" flex={1}>
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
            {menuItems.map((menuItem, i) => (
              <Link
                as={GatsbyLink}
                to={menuItem.link}
                key={i}
                flexBasis="max-content"
                fontSize="xl"
                p={4}
              >
                {menuItem.text}
              </Link>
            ))}
          </HStack>
          <HStack
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="flex-end"
            spacing={1}
            px={8}
            py={2}
          >
            <BackToClowdrButton flexGrow={1} maxW="20rem" />
          </HStack>
        </HStack>
      </Container>
    </chakra.nav>
  );
}