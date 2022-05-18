import type { ContainerProps } from "@chakra-ui/react";
import { Button, Container, HStack, VStack } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

export function HostOrSponsorButtons({
  mobileProps,
  desktopProps,
}: {
  mobileProps?: ContainerProps;
  desktopProps?: ContainerProps;
}): JSX.Element {
  return (
    <>
      <Container
        justifyContent="center"
        {...desktopProps}
        display={{ base: "none", md: "flex" }}
      >
        <HStack>
          <Button as={GatsbyLink} to="/host" size="lg">
            🎓 Host a conference
          </Button>
          <Button as={GatsbyLink} to="/sponsor" size="lg">
            ⭐ Sponsor us
          </Button>
        </HStack>
      </Container>
      <Container
        {...mobileProps}
        justifyContent="center"
        display={{ base: "flex", md: "none" }}
      >
        <VStack alignItems="stretch">
          <Button as={GatsbyLink} to="/host" size="lg">
            🎓 Host a conference
          </Button>
          <Button as={GatsbyLink} to="/sponsor" size="lg">
            ⭐ Sponsor us
          </Button>
        </VStack>
      </Container>
    </>
  );
}
