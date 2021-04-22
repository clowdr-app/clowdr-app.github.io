import { Box, chakra, Flex } from "@chakra-ui/react";
import React from "react";
import { DesktopMenu } from "./DesktopMenu";
import Footer from "./Footer";
import { MobileMenu } from "./MobileMenu";

export function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string | string[];
}) {
  return (
    <Flex direction="column" m="0 auto" minH="100vh">
      <chakra.header layerStyle="header" w="full">
        <Box display={{ base: "none", md: "block" }}>
          <DesktopMenu />
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <MobileMenu />
        </Box>
      </chakra.header>
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
}
