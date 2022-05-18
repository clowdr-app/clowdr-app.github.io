import {
  Box,
  chakra,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { DesktopMenu } from "./desktop-menu";
import Footer from "./footer";
import { MobileMenu } from "./mobile-menu";

export function ResourcesLayout({
  children,
  headings,
}: {
  children: JSX.Element[] | JSX.Element | string | string[];
  headings?: HeadingNode[];
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
      <HStack
        justifyContent="center"
        alignItems="flex-start"
        w="auto"
        flex="0 1 1"
      >
        {headings?.length ? (
          <chakra.nav
            display={{ base: "none", lg: "block" }}
            visibility={{ base: "hidden", lg: "visible" }}
            flex="1 0 300px"
            maxW="400px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.400"
            borderRadius="md"
            p={2}
            m={2}
            pos="sticky"
            top={2}
            left={0}
          >
            <TOC nodes={headings} noLeftMargin />
          </chakra.nav>
        ) : undefined}
        <Box as="main">{children}</Box>
        {headings?.length ? (
          <Box
            display={{ base: "none", xl: "block" }}
            visibility={{ base: "hidden", xl: "visible" }}
            flex="1 0 300px"
            maxW="400px"
            p={2}
            my={2}
          ></Box>
        ) : undefined}
      </HStack>
      <Footer />
    </Flex>
  );
}

export function TOC({
  nodes,
  noLeftMargin,
}: {
  nodes: HeadingNode[];
  noLeftMargin?: boolean;
}): JSX.Element {
  if (nodes.length === 0) {
    return <></>;
  }

  return (
    <List spacing={1} ml={noLeftMargin ? 0 : 4}>
      {nodes.map((node, idx) => (
        <ListItem key={"node-" + idx}>
          {node.link ? (
            <Link href={node.link}>{node.text}</Link>
          ) : (
            <chakra.span>{node.text}</chakra.span>
          )}
          <TOC nodes={node.children} />
        </ListItem>
      ))}
    </List>
  );
}

export interface HeadingValue {
  text: string;
  link: string | undefined;
  level: number;
}

export interface HeadingNode {
  text: string;
  link: string | undefined;
  children: HeadingNode[];
}

export function buildingHeadingsTree(
  headingValues: HeadingValue[],
  index: { idx: number },
  level: number
): HeadingNode[] {
  if (index.idx >= headingValues.length) {
    return [];
  }

  const result: HeadingNode[] = [];
  while (index.idx < headingValues.length) {
    const currentHeadingValue = headingValues[index.idx];
    if (currentHeadingValue.level !== level) {
      break;
    }

    index.idx++;

    result.push({
      text: currentHeadingValue.text,
      link: currentHeadingValue.link,
      children: buildingHeadingsTree(headingValues, index, level + 1),
    });
  }

  return result;
}
