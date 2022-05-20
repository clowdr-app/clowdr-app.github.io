import {
  chakra,
  Container,
  HStack,
  Image,
  Link,
  Spacer,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { menuItems } from "../../misc/menu-items";

export function DesktopMenu(): JSX.Element {
  return (
    <chakra.nav
      borderBottomColor="purple.700"
      borderBottomWidth={1}
      borderBottomStyle="solid"
    >
      <Container
        as="article"
        itemScope
        itemType="http://schema.org/Article"
        overflowX="auto"
      >
        <HStack flexWrap="wrap" columnGap={0} layerStyle="hero" py={2}>
          <HStack justifyContent="flex-start" flex={1}>
            <chakra.a
              as={GatsbyLink}
              to="/"
              title="Midspace Home Page"
              alignItems="center"
              ml={4}
            >
              <Image alt="" src="/midspace-wordmark.svg" maxW="150" h="100" />
              <VisuallyHidden>
                <chakra.h1>Midspace</chakra.h1>
              </VisuallyHidden>
            </chakra.a>
            <Spacer />
            {menuItems.map((menuItem, i) =>
              menuItem.link.startsWith("http") ? (
                <Link
                  href={menuItem.link}
                  key={i}
                  flexBasis="max-content"
                  p={4}
                >
                  {menuItem.text}
                </Link>
              ) : (
                <Link
                  as={GatsbyLink}
                  to={menuItem.link}
                  key={i}
                  flexBasis="max-content"
                  p={4}
                >
                  {menuItem.text}
                </Link>
              )
            )}
          </HStack>
        </HStack>
      </Container>
    </chakra.nav>
  );
}
