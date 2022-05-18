import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { EnablingResearch } from "../components/home-page/enabling-research";
import { EventFeatures } from "../components/home-page/event-features";
import { ExpertlySupported } from "../components/home-page/expertly-supported";
import { InteractiveFeatures } from "../components/home-page/interactive-features";
import { ScalabilityFeatures } from "../components/home-page/scalability-features";
import { HostOrSponsorButtons } from "../components/host-or-sponsor-buttons";
import { Layout } from "../components/layouts/main-layout";
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
                maxH="50vh"
              />
            </Box>
          </VStack>
        </Container>
        <HostOrSponsorButtons
          desktopProps={{
            mt: "9vh",
          }}
          mobileProps={{ mt: "2vh" }}
        />
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
          <Button
            as={GatsbyLink}
            to="/past-conferences"
            whiteSpace="normal"
            size="md"
          >
            Find out more about conferences we&apos;ve hosted
          </Button>
        </VStack>
        <EventFeatures mt={40} minH="80vh" />
        <ScalabilityFeatures mt={40} minH="80vh" />
        <InteractiveFeatures mt={40} minH="80vh" />
        <HostOrSponsorButtons
          desktopProps={{
            mt: 40,
          }}
          mobileProps={{ mt: 40 }}
        />
        <ExpertlySupported mt="max(var(--chakra-space-40), 15vh)" minH="80vh" />
        <EnablingResearch mt={40} minH="80vh" />
        <HostOrSponsorButtons
          desktopProps={{
            mt: 40,
          }}
          mobileProps={{ mt: 40 }}
        />
        <Container mt={40} textAlign="center"></Container>
      </Layout>
    </>
  );
}
