import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { EventFeatures } from "../components/event-features";
import { Layout } from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <>
      <Title title="" />
      <Layout>
        <Container mt="5vh">
          <VStack spacing={4}>
            <Heading as="h1" size="3xl" lineHeight="120%">
              Accessible virtual conferences for research
            </Heading>
            <Text fontSize="xl">
              Our open-source platform is actively researched and developed to
              support academic conferences.
            </Text>
            <Box py={5}>
              <Image
                src="/images/2022-05 - Demo Conf Screenshot.png"
                h="50vh"
              />
            </Box>
          </VStack>
        </Container>
        <Container
          mt="9vh"
          justifyContent="center"
          display={{ base: "none", md: "flex" }}
        >
          <HStack>
            <Button as={GatsbyLink} to="/host" size="lg">
              🎓 Host a conference
            </Button>
            <Button as={GatsbyLink} to="/sponsor" size="lg">
              ⭐ Sponsor development
            </Button>
          </HStack>
        </Container>
        <Container
          mt="2vh"
          justifyContent="center"
          display={{ base: "flex", md: "none" }}
        >
          <VStack alignItems="stretch">
            <Button as={GatsbyLink} to="/host" size="lg">
              🎓 Host a conference
            </Button>
            <Button as={GatsbyLink} to="/sponsor" size="lg">
              ⭐ Sponsor development
            </Button>
          </VStack>
        </Container>
        <VStack mt={40} alignItems="center" spacing={7} pt={3} pb={10} w="100%">
          <Heading as="h2" size="xl">
            We&apos;ve hosted events big and small
          </Heading>
          <Flex
            justifyContent="space-evenly"
            flexWrap="wrap"
            w="100%"
            px={10}
            py={4}
          >
            <Image src="/images/logos/acm.png" h="7vh" minH="80px" m={8} />
            <Image src="/images/logos/ibm.svg" h="7vh" minH="80px" m={8} />
            <Image src="/images/logos/ieee.svg" h="7vh" minH="70px" m={8} />
            <Image src="/images/logos/clsummit.png" h="7vh" minH="70px" m={8} />
            <Image
              src="/images/logos/4s.png"
              h="7vh"
              maxH="50px"
              minH="50px"
              m={8}
            />
            <Image
              src="/images/logos/ismir.png"
              h="7vh"
              maxH="50px"
              minH="50px"
              m={8}
            />
          </Flex>
          <Button as={GatsbyLink} to="/past-conferences" size="lg">
            Find out more about conferences we&apos;ve hosted
          </Button>
        </VStack>
        <EventFeatures mt={40} />
        <Container mt={20} textAlign="center"></Container>
      </Layout>
    </>
  );
}
