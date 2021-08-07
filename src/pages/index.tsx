import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Title title="Resources - Clowdr" />
      <Layout>
        <Box w="auto" bgColor="brand.50">
          <HStack
            alignItems="stretch"
            justifyContent="center"
            spacing={0}
            px="20%"
            flexWrap="wrap"
          >
            <Box
              flexBasis="40%"
              flexGrow={1}
              flexShrink={0}
              py={{ base: 2, xl: 12 }}
              px={8}
            >
              <Heading as="h1" size="3xl" lineHeight={1.2}>
                Resources
              </Heading>
              <Text fontSize="3xl" fontWeight="normal" lineHeight={1.6}>
                Organising or attending an event on Clowdr? Learn everything you
                need to know here.
              </Text>
            </Box>
            <Box
              flexBasis="max-content"
              flexGrow={1}
              flexShrink={0}
              py={{ base: 4, xl: 12 }}
              px={4}
              display="flex"
              flexDir="column"
              justifyContent="center"
              h="30rem"
              w="auto"
            >
              <Image
                alt="person reading a book"
                src="/artwork/manypixels-reading-book.svg"
              />
            </Box>
          </HStack>
        </Box>

        <Container my={12} maxW="120ch">
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            Top resources
          </Heading>
        </Container>
      </Layout>
    </>
  );
}
