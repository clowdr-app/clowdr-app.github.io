import { Box, chakra, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer";
import { DesktopMenu } from "../menus/desktop-menu";
import { MobileMenu } from "../menus/mobile-menu";

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
      <Box as="main" p={2} w="100vw" overflow="none">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
