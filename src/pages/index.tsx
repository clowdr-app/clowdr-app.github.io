import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { EnablingResearch } from "../components/home-page/enabling-research";
import { EventFeatures } from "../components/home-page/event-features";
import { ExpertlySupported } from "../components/home-page/expertly-supported";
import { HybridReady } from "../components/home-page/hybrid-ready";
import { InteractiveFeatures } from "../components/home-page/interactive-features";
import { ScalabilityFeatures } from "../components/home-page/scalability-features";
import { HostOrSponsorButtons } from "../components/host-or-sponsor-buttons";
import { LogoList } from "../components/hosted-conferences/logo-list";
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
              Midspace is an open-source platform used by academic conferences.
            </Text>
            <HostOrSponsorButtons
              desktopProps={{
                pt: 5,
              }}
              mobileProps={{ pt: 5 }}
            />
            <Box py={5}>
              <Image
                src="/images/2022-05 - Demo Conf Screenshot.png"
                maxH="50vh"
              />
            </Box>
            <Container maxW="3xl" fontSize="lg">
              <Text>
                The aim of the Midspace project is to increase diversity and
                inclusion of academic events by creating a platform which is:
              </Text>
              <UnorderedList>
                <ListItem>
                  <chakra.span fontWeight="bold">accessible</chakra.span>, so
                  anyone can participate in conferences
                </ListItem>
                <ListItem>
                  <chakra.span fontWeight="bold">low cost</chakra.span>, so any
                  student or researcher can afford to attend conferences
                </ListItem>
                <ListItem>
                  <chakra.span fontWeight="bold">climate friendly</chakra.span>,
                  to reduce the impact of academic events on our climate
                </ListItem>
                <ListItem>
                  <chakra.span fontWeight="bold">open source</chakra.span>, to
                  enable self-hosting for conferences and to pursue research
                  into virtual interactions and environments
                </ListItem>
              </UnorderedList>
            </Container>
          </VStack>
        </Container>
        <VStack mt={40} alignItems="center" spacing={7} pt={3} pb={10} w="100%">
          <Heading as="h2" size="xl">
            Events big and small have used Midspace
          </Heading>
          <LogoList />
          <Button
            as={GatsbyLink}
            to="/past-conferences"
            whiteSpace="normal"
            size="md"
          >
            Find out more about conferences using Midspace
          </Button>
        </VStack>
        <HostOrSponsorButtons
          desktopProps={{
            mt: "18vh",
          }}
          mobileProps={{ mt: "10vh" }}
        />
        <EventFeatures mt={40} minH="80vh" />
        <ScalabilityFeatures mt={40} minH="80vh" />
        <InteractiveFeatures mt={40} minH="80vh" />
        <HybridReady mt={40} minH="80vh" />
        <HostOrSponsorButtons
          desktopProps={{
            mt: 40,
          }}
          mobileProps={{ mt: 40 }}
        />
        <ExpertlySupported mt="max(var(--chakra-space-40), 20vh)" minH="60vh" />
        <EnablingResearch mt={20} minH="60vh" />
        <HostOrSponsorButtons
          desktopProps={{
            mt: 20,
          }}
          mobileProps={{ mt: 20 }}
        />
        <Container h={40} textAlign="center"></Container>
      </Layout>
    </>
  );
}
