import { CalendarIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  HStack,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  TabPanel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import {
  FeatureTab,
  FeatureTabList,
  FeatureTabPanels,
  FeatureTabs,
} from "../components/features";
import { Layout } from "../components/layouts/main-layout";
import Title from "../components/title";

export default function HostAConference() {
  return (
    <>
      <Title title="Host a conference" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Host a conference
          </Heading>
        </Container>
        <Container my={16}>
          <Heading as="h2" size="2xl">
            Book now for September 2022 onwards
          </Heading>
          <Text fontSize="xl">
            We&apos;ll be back in September! Our team needed a short break from
            hosting conferences. When we return, we will have limited
            availability, so if you&apos;d like to secure your booking, please{" "}
            <Link href="mailto:hello@midspace.app">contact us</Link>.
          </Text>
          <Button as={Link} href="mailto:hello@midspace.app" size="lg">
            <CalendarIcon />
            &nbsp;&nbsp;Make a booking
          </Button>
        </Container>
        <Container my={40}>
          <Heading as="h2" size="2xl">
            Free demo?
          </Heading>
          <Text fontSize="xl">
            We are working on providing free-trial access to Midspace for anyone
            to try out the platform. In the meantime, please{" "}
            <Link href="mailto:hello@midspace.app">contact us</Link> if you are
            interested in trying out the platform and we will set up a demo
            space for you.
          </Text>
          <Button
            as={Link}
            href="mailto:hello@midspace.app"
            size="lg"
            mr={2}
            mb={2}
          >
            <EmailIcon />
            &nbsp;&nbsp;Request a demo
          </Button>
          <Button
            as={GatsbyLink}
            to="/past-conferences"
            whiteSpace="normal"
            size="lg"
            mb={2}
          >
            <InfoIcon />
            &nbsp;&nbsp;Conferences we&apos;ve hosted
          </Button>
        </Container>
        <Container my={40}>
          <Heading as="h2" size="2xl">
            Pricing
          </Heading>

          <Heading as="h3" size="xl" mt={4}>
            Pay for what you use
          </Heading>
          <Text fontSize="xl">
            We&apos;re here to support the academic community by increasing
            diversity and inclusion. We can&apos;t think of a better way to do
            that than to drive down the cost of virtual conferences!
          </Text>
          <Text fontSize="md">
            Midspace is a social, open-source project. You can use our hosted
            service or, if you have the expertise, you can run our cloud-based
            software yourself. Either way, it will cost you the same because we
            only charge you for what you use - at cost, no markup.
          </Text>
          <HStack
            justifyContent="space-evenly"
            alignItems="stretch"
            color="white"
            mt={8}
          >
            <Box
              borderRadius="lg"
              shadow="lg"
              p={4}
              flex="0 1 30%"
              bgColor="purple.800"
            >
              <Heading as="h4" fontSize="lg" p={0}>
                Usage
              </Heading>
              <Text>
                Pay for the cloud computing that you use - no markup, no hidden
                costs.
              </Text>
            </Box>
            <Box
              borderRadius="lg"
              shadow="lg"
              p={4}
              flex="0 1 30%"
              bgColor="purple.800"
            >
              <Heading as="h4" fontSize="lg" p={0}>
                Support
              </Heading>
              <Text>Pay by the hour for any support that you request.</Text>
            </Box>
            <Box
              borderRadius="lg"
              shadow="lg"
              p={4}
              flex="0 1 30%"
              bgColor="purple.800"
            >
              <Heading as="h4" fontSize="lg" p={0}>
                Development
              </Heading>
              <Text>
                Contribute to the cost of development - a one-off fixed fee
                based on the size of your conference.
              </Text>
            </Box>
          </HStack>
          <Heading as="h3" size="xl" mt={16}>
            Example costs
          </Heading>
          <Text>
            Below are some representative examples from conferences we hosted in
            2022 and 2021. While every conference varies and the exact cost of
            your conference will depend upon how you and your attendees use
            Midspace, these examples should give you a suitable guide to
            estimating the cost of your conference.
          </Text>
          <FeatureTabs>
            <FeatureTabList>
              <FeatureTab>Small conference</FeatureTab>
              <FeatureTab>Medium conference</FeatureTab>
              <FeatureTab>Large conference</FeatureTab>
            </FeatureTabList>
            <FeatureTabPanels>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0} fontStyle="italic">
                  Example based on RE 2021.
                </Text>
                <HStack alignItems="flex-start">
                  <Stat>
                    <StatLabel fontSize="xl">Registrants</StatLabel>
                    <StatNumber fontSize="4xl">200</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Days</StatLabel>
                    <StatNumber fontSize="4xl">2</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Tracks/day</StatLabel>
                    <StatNumber fontSize="4xl">1</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Total cost</StatLabel>
                    <StatNumber fontSize="4xl">
                      $500&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                  </Stat>
                </HStack>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0} fontStyle="italic">
                  Example based on FPGA 2022.
                </Text>
                <HStack alignItems="flex-start">
                  <Stat>
                    <StatLabel fontSize="xl">Registrants</StatLabel>
                    <StatNumber fontSize="4xl">1,000</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Days</StatLabel>
                    <StatNumber fontSize="4xl">4</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Tracks/day</StatLabel>
                    <StatNumber fontSize="4xl">2</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Total cost</StatLabel>
                    <StatNumber fontSize="4xl">
                      $1,000&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                  </Stat>
                </HStack>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0} fontStyle="italic">
                  Example based on ICSE 2022.
                </Text>
                <HStack alignItems="flex-start">
                  <Stat>
                    <StatLabel fontSize="xl">Registrants</StatLabel>
                    <StatNumber fontSize="4xl">2,000</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Days</StatLabel>
                    <StatNumber fontSize="4xl">14</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Tracks/day</StatLabel>
                    <StatNumber fontSize="4xl">8</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Total cost</StatLabel>
                    <StatNumber fontSize="4xl">
                      $6,000&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                  </Stat>
                </HStack>
              </TabPanel>
            </FeatureTabPanels>
          </FeatureTabs>
          <Heading as="h3" size="xl" mt={16}>
            Cost calculator
          </Heading>
          <Text>TODO</Text>
          <Heading as="h3" size="xl" mt={16}>
            Billing in detail
          </Heading>
          <Text>TODO</Text>
          <FeatureTabs>
            <FeatureTabList>
              <FeatureTab>Baseline service</FeatureTab>
              <FeatureTab>Video-chat</FeatureTab>
              <FeatureTab>Live-streaming</FeatureTab>
              <FeatureTab>Video files</FeatureTab>
              <FeatureTab>Registrants</FeatureTab>
              <FeatureTab>Support</FeatureTab>
              <FeatureTab>Development</FeatureTab>
            </FeatureTabList>
            <FeatureTabPanels>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>TODO</Text>
              </TabPanel>
            </FeatureTabPanels>
          </FeatureTabs>
        </Container>
        <Container my={40}>
          <Heading as="h2" size="2xl">
            Not a research conference?
          </Heading>
          <Text fontSize="xl">
            We&apos;re happy to host non-research/non-academic conferences but
            we kindly ask that any industry-led conferences contribute to the
            cost of development by{" "}
            <Link as={GatsbyLink} to="/sponsor">
              sponsoring us
            </Link>
            .
          </Text>
          <Text fontSize="md">
            If you are a charity, university or similar, we cannot offer
            discounts or subsidies at this time. Please refer to our pricing
            above - we think you&apos;ll like it anyway!
          </Text>
          <Button
            as={Link}
            href="mailto:hello@midspace.app"
            size="lg"
            mr={2}
            mb={2}
          >
            <CalendarIcon />
            &nbsp;&nbsp;Make a booking
          </Button>
          <Button as={Link} href="mailto:hello@midspace.app" size="lg" mb={2}>
            <EmailIcon />
            &nbsp;&nbsp;Request a demo
          </Button>
        </Container>
      </Layout>
    </>
  );
}
