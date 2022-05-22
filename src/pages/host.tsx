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
  StatHelpText,
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
import { SubscribeButton } from "../components/subscribe-button";
import Title from "../components/title";

export default function HostAConference() {
  return (
    <>
      <Title title="Host a conference" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Host a conference using Midspace
          </Heading>
        </Container>
        <Container my={16}>
          <Heading as="h2" size="2xl">
            Self-host or use our hosted service
          </Heading>
          <Text fontSize="xl">
            Midspace is open-source software that you can host yourself on
            public cloud services. Alternatively, we offer a hosted version of
            Midspace.
          </Text>
          <Text>
            There are no limitations to the open-source software and
            there&apos;s no &ldquo;enterprise upgrade&rdquo; option. We would
            love it if you are able to contribute by fixing any bugs you
            encounter or sponsoring the cost of continued development.
          </Text>
          <Text>
            We offer a hosted version of Midspace if you would like to benefit
            from the cost-savings of shared cloud infrastructure
            (&ldquo;operation at scale&rdquo;) or don&apos;t feel comfortable
            hosting the software yourself.
          </Text>
          <Text fontSize="sm">
            Please note: To host Midspace yourself, you are going to need
            someone on your team that is comfortable deploying and operating AWS
            cloud services (including MediaLive) and various other cloud
            infrastructure. This is not for the faint of heart and requires
            continuous monitoring throughout your conference to keep the
            platform operational. In addition, this person will need to spend
            time learning how the platform works to resolve any issues that may
            arise - for example, a user forgetting their login or an AWS
            Live-stream failing to start correctly.
          </Text>
        </Container>
        <Container my={16}>
          <Heading as="h2" size="2xl">
            Book now for September 2022 onwards
          </Heading>
          <Text fontSize="xl">
            We&apos;ll be back in September! Our team needed a short break from
            hosting conferences and we&apos;re working on a fully-self-service
            online checkout and onboarding. Get subscribed to be notified when
            our online checkout goes live!
          </Text>
          <Text>
            When we return, we will have limited availability for additional
            support. Please contact us as early as possible to book support
            hours (this can be done prior to our online checkout becoming
            available).
          </Text>
          <SubscribeButton
            text="Subscribe to be notified"
            size="lg"
            mr={2}
            mb={2}
          />
          <Button
            as={Link}
            href="mailto:hello@midspace.app"
            size="lg"
            mr={2}
            mb={2}
          >
            <CalendarIcon />
            &nbsp;&nbsp;Book additional support
          </Button>
        </Container>
        <Container my={40}>
          <Heading as="h2" size="2xl">
            Free demo?
          </Heading>
          <Text fontSize="xl">
            We are working on providing free-trial access to Midspace for anyone
            to try out the platform. Get subscribed to be notified when free
            trials are available!
          </Text>
          <SubscribeButton
            text="Subscribe to be notified"
            size="lg"
            mr={2}
            mb={2}
          />
          <Button
            as={GatsbyLink}
            to="/past-conferences"
            whiteSpace="normal"
            size="lg"
            mb={2}
          >
            <InfoIcon />
            &nbsp;&nbsp;See conferences using Midspace
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
            service or, if you have the expertise, you can run the software
            yourself in the cloud. Either way, it will cost you the same because
            we only charge you for what you use - at cost, no markup.
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
            Examples
          </Heading>
          <Text>
            Below are some representative examples from conferences we hosted in
            2022 and 2021. While every conference varies and the exact cost of
            your conference will depend upon how you and your attendees use
            Midspace, these examples should give you a suitable guide to
            estimating the cost of your conference.
          </Text>
          <Text>
            Larger conferences typically benefit from the increased efficiency
            of larger cloud infrastructure. The costs below are representative
            as of May 2022. If Midspace is able to host more conferences per
            month on a regular basis, the average cost per conference will go
            down as all conferences benefit from the efficiency gains. If this
            happens, we will update our estimates accordingly.
          </Text>
          <FeatureTabs mt={8} defaultIndex={2}>
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
                  Example based on FPGA 2022.
                </Text>
                <HStack alignItems="flex-start">
                  <Stat>
                    <StatLabel fontSize="xl">Registrants</StatLabel>
                    <StatNumber fontSize="4xl">450</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Days</StatLabel>
                    <StatNumber fontSize="4xl">3</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Tracks/day</StatLabel>
                    <StatNumber fontSize="4xl">1</StatNumber>
                    <StatHelpText>Estimated average</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Hours/track</StatLabel>
                    <StatNumber fontSize="4xl">4</StatNumber>
                    <StatHelpText>Estimated average</StatHelpText>
                  </Stat>
                </HStack>
                <HStack>
                  <Stat>
                    <StatLabel fontSize="xl">Session hours/day</StatLabel>
                    <StatNumber fontSize="4xl">4</StatNumber>
                    <StatHelpText>
                      Estimated average. Tracks/day * hours/track
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Session hours total</StatLabel>
                    <StatNumber fontSize="4xl">12</StatNumber>
                    <StatHelpText>
                      Estimated total. Hours/day * days
                    </StatHelpText>
                  </Stat>
                </HStack>
                <HStack>
                  <Stat>
                    <StatLabel fontSize="xl">Cost</StatLabel>
                    <StatNumber fontSize="4xl">
                      $1,230&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Cost/registrant</StatLabel>
                    <StatNumber fontSize="4xl">
                      $2.69&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Cost/registrant/day</StatLabel>
                    <StatNumber fontSize="4xl">
                      $0.90&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
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
                  Example based on RE 2021.
                </Text>
                <HStack alignItems="flex-start">
                  <Stat>
                    <StatLabel fontSize="xl">Registrants</StatLabel>
                    <StatNumber fontSize="4xl">350</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Days</StatLabel>
                    <StatNumber fontSize="4xl">5</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Tracks/day</StatLabel>
                    <StatNumber fontSize="4xl">2</StatNumber>
                    <StatHelpText>Estimated average</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Hours/track</StatLabel>
                    <StatNumber fontSize="4xl">5</StatNumber>
                    <StatHelpText>Estimated average</StatHelpText>
                  </Stat>
                </HStack>
                <HStack>
                  <Stat>
                    <StatLabel fontSize="xl">Session hours/day</StatLabel>
                    <StatNumber fontSize="4xl">10</StatNumber>
                    <StatHelpText>
                      Estimated average. Tracks/day * hours/track
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Session hours total</StatLabel>
                    <StatNumber fontSize="4xl">50</StatNumber>
                    <StatHelpText>
                      Estimated total. Hours/day * days
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">
                      Session hours compared to small conference
                    </StatLabel>
                    <StatNumber fontSize="4xl">4.17x</StatNumber>
                  </Stat>
                </HStack>
                <HStack>
                  <Stat>
                    <StatLabel fontSize="xl">Cost</StatLabel>
                    <StatNumber fontSize="4xl">
                      $1,940&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                    <StatHelpText>1.58x cost of small conference</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Cost/registrant</StatLabel>
                    <StatNumber fontSize="4xl">
                      $6.47&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                    <StatHelpText>
                      2.41x cost/registrant of small conference
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Cost/registrant/day</StatLabel>
                    <StatNumber fontSize="4xl">
                      $1.29&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                    <StatHelpText>
                      1.43x cost/registrant/day of small conference
                    </StatHelpText>
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
                    <StatNumber fontSize="4xl">2,100</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Days</StatLabel>
                    <StatNumber fontSize="4xl">14</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Tracks/day</StatLabel>
                    <StatNumber fontSize="4xl">8</StatNumber>
                    <StatHelpText>Estimated average</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Hours/track</StatLabel>
                    <StatNumber fontSize="4xl">6</StatNumber>
                    <StatHelpText>Estimated average</StatHelpText>
                  </Stat>
                </HStack>
                <HStack>
                  <Stat>
                    <StatLabel fontSize="xl">Session hours/day</StatLabel>
                    <StatNumber fontSize="4xl">48</StatNumber>
                    <StatHelpText>
                      Estimated average. Tracks/day * hours/track
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Session hours total</StatLabel>
                    <StatNumber fontSize="4xl">672</StatNumber>
                    <StatHelpText>
                      Estimated total. Hours/day * days
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">
                      Session hours compared to medium conference
                    </StatLabel>
                    <StatNumber fontSize="4xl">13.44x</StatNumber>
                  </Stat>
                </HStack>
                <HStack>
                  <Stat>
                    <StatLabel fontSize="xl">Cost</StatLabel>
                    <StatNumber fontSize="4xl">
                      $8,800&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                    <StatHelpText>4.53x cost of medium conference</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Cost/registrant</StatLabel>
                    <StatNumber fontSize="4xl">
                      $4.14&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                    <StatHelpText>
                      63% of the cost/registrant of medium conference
                    </StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize="xl">Cost/registrant/day</StatLabel>
                    <StatNumber fontSize="4xl">
                      $0.30&nbsp;<chakra.span fontSize="md">USD</chakra.span>
                    </StatNumber>
                    <StatHelpText>
                      Excluding support and development
                    </StatHelpText>
                    <StatHelpText>
                      23% of the cost/registrant/day of medium conference
                    </StatHelpText>
                  </Stat>
                </HStack>
              </TabPanel>
            </FeatureTabPanels>
          </FeatureTabs>
          <Heading as="h3" size="xl" mt={16}>
            Cost estimator
          </Heading>
          <Text>
            Coming soon! Get a quick or detailed estimate of how much your
            conference will cost.
          </Text>
          {/* <Text fontSize="sm">
            This produces an indication of the cost of your conference that you
            can use for budgeting but not a quote or legally binding figure.
            This estimate is based on our hosted version of Midspace - if you
            choose to self-host the software, please expect costs to be rather
            higher as you will not be benefitting from the economy-of-scale that
            comes from shared cloud infrastructure.
          </Text>
            <CostCalculator />*/}
          <Heading as="h3" size="xl" mt={16}>
            Billing in detail
          </Heading>
          <Text>
            Coming soon! We&apos;re in the process of finalising our prices for
            2022 and 2023. Get subscribed for updates about our pricing over the
            next few months!
          </Text>
          <SubscribeButton text="Subscribe to be notified" size="lg" />
          {/* <Text>
            The following section describes what we will bill you for and at
            what rate. These prices are subject to change from month to month
            and we will bill you for your usage at the price set at the
            beginning of the month in which that usage occurs. We expect these
            prices will go down as we scale up our hosted version of Midspace.
          </Text>
          <Text>
            All prices are given in USD, though you can pay in other currencies.
            Fractional quantities will be rounded up to their nearest whole
            unit.
          </Text>
          <FeatureTabs mt={8} defaultIndex={1}>
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
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Item</Th>
                      <Th>Includes</Th>
                      <Th>Units</Th>
                      <Th>Accrual basis</Th>
                      <Th>Minimum billable quantity</Th>
                      <Th>Price per unit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Static hosting</Td>
                      <Td>
                        Hosting of files including the frontend code, backend
                        code, built-in images and videos, resources website and
                        similar.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$1</Td>
                    </Tr>
                    <Tr>
                      <Td>Email</Td>
                      <Td>
                        Automated emails sent by us as part of running your
                        conference. For example, invitation emails, submission
                        requests and custom emails.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$1.50</Td>
                    </Tr>
                    <Tr>
                      <Td>GraphQL API</Td>
                      <Td>
                        Provision and data transfer of the GraphQL API - a core
                        part of Midspace.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$3</Td>
                    </Tr>
                    <Tr>
                      <Td>Database</Td>
                      <Td>
                        Provision and operation of our main database - a core
                        part of midspace.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$25</Td>
                    </Tr>
                    <Tr>
                      <Td>Queuing and Real-time services</Td>
                      <Td>
                        Provision and operation of essential queuing and
                        real-time processing services - a core part of our
                        services.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$5.30</Td>
                    </Tr>
                    <Tr>
                      <Td>Monitoring</Td>
                      <Td>
                        Automated monitoring of our cloud infrastructure - a
                        core part of midspace.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$5</Td>
                    </Tr>
                    <Tr>
                      <Td>Micro-services</Td>
                      <Td>
                        Compute-time for our various micro-services that power
                        everything from authentication to caching to video
                        processing to chat - these are core parts of our
                        services.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$25</Td>
                    </Tr>
                    <Tr>
                      <Td>Service-provider support</Td>
                      <Td>
                        Support and Service Level Agreements with our service
                        providers to provide up time guarantees and quality of
                        service levels. Although not essential to operating
                        Midspace, these do help keep the platform running
                        smoothly by reducing outages, glitches, downtime and
                        ensuring support is on hand in the moments when
                        it&apos;s needed and an issue is outside of
                        Midspace&apos;s control.
                      </Td>
                      <Td>Days</Td>
                      <Td>Daily</Td>
                      <Td>1</Td>
                      <Td>$10</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Item</Th>
                      <Th>Includes</Th>
                      <Th>Units</Th>
                      <Th>Accrual basis</Th>
                      <Th>Minimum billable quantity</Th>
                      <Th>Price per unit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Participation</Td>
                      <Td>
                        Participation in a video-chat whether in a session, a
                        social room, a direct-message video-chat, a networking
                        event, a backstage of a live-stream or another form of
                        video-chat.
                      </Td>
                      <Td>Registrants * Minutes</Td>
                      <Td>Per registrant each minute</Td>
                      <Td>1</Td>
                      <Td>$0.004</Td>
                    </Tr>
                    <Tr>
                      <Td>Recording</Td>
                      <Td>Recording of a video-chat.</Td>
                      <Td>Minutes</Td>
                      <Td>Each minute</Td>
                      <Td>5 per recording</Td>
                      <Td>$0.04</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Item</Th>
                      <Th>Includes</Th>
                      <Th>Units</Th>
                      <Th>Accrual basis</Th>
                      <Th>Minimum billable quantity</Th>
                      <Th>Price per unit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Backstage capture</Td>
                      <Td>
                        Streaming of a &ldquo;Midspace backstage&rdquo;
                        video-chat to an RTMP destination.
                      </Td>
                      <Td>Minutes</Td>
                      <Td>Each minute</Td>
                      <Td>5 per stream</Td>
                      <Td>$0.1</Td>
                    </Tr>
                    <Tr>
                      <Td>Streaming</Td>
                      <Td>
                        Everything you need to stream privately within Midspace.
                        Ingestion of an RTMP stream (e.g. from a Midspace
                        backstage), packaging the stream, content delivery, and
                        recording. Up to 5,000 simultaneous viewers.
                      </Td>
                      <Td>Minutes</Td>
                      <Td>Each minute</Td>
                      <Td>5 per stream</Td>
                      <Td>$0.45</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Item</Th>
                      <Th>Includes</Th>
                      <Th>Units</Th>
                      <Th>Accrual basis</Th>
                      <Th>Minimum billable quantity</Th>
                      <Th>Price per unit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Pre-recorded video files</Td>
                      <Td>
                        Ingestion, storage, transcoding, transcription and
                        content delivery of video files uploaded to Midspace
                        (usually by authors).
                      </Td>
                      <Td>Minutes</Td>
                      <Td>Duration of video file</Td>
                      <Td>5 per video</Td>
                      <Td>$0.04</Td>
                    </Tr>
                    <Tr>
                      <Td>Recordings</Td>
                      <Td>
                        Storage, transcription and and content delivery of
                        recordings made of sessions within Midspace (via
                        video-chat or live-streaming). Please see Video-chat and
                        Live-streaming sections for the price of creating a
                        recording.
                      </Td>
                      <Td>Minutes</Td>
                      <Td>Duration of video file</Td>
                      <Td>5 per video</Td>
                      <Td>$0.04</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Item</Th>
                      <Th>Includes</Th>
                      <Th>Units</Th>
                      <Th>Accrual basis</Th>
                      <Th>Minimum billable quantity</Th>
                      <Th>Price per unit</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Authentication</Td>
                      <Td>
                        Our authentication provider (Auth0) charges per active
                        user per month.
                      </Td>
                      <Td>Users * Months</Td>
                      <Td>Per created registrant</Td>
                      <Td>1</Td>
                      <Td>$0.02</Td>
                    </Tr>
                    <Tr>
                      <Td>User-load</Td>
                      <Td>
                        Users generate a computational workload on midspace
                        which we must scale to meet. As such, we charge larger
                        conferences for their increased load.
                      </Td>
                      <Td>Users * Months</Td>
                      <Td>Per accepted invitation</Td>
                      <Td>1</Td>
                      <Td>$1</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>
                  Our free support only includes assisting users with their
                  camera, microphone or screenshare and their login for the
                  platform (but does not extend to managing registration for
                  your conference). We provide a 2-working-day response time
                  promise, but please don&apos;t expect our two-person team to
                  respond to a presenter&apos;s last-minute issue. We work to
                  normal UK working hours and are not available on weekends,
                  national holidays and at certain other times of the year.
                </Text>
                <Text>
                  We provide additional support upon request when agreed in
                  advance. This can encompass anything from managing
                  registration to setting up your conference to chairing live
                  sessions and much more. We are experts at running conferences
                  so please ask for our assistance if you need it.
                </Text>
                <Text fontWeight="bold">
                  Additional support is charged at a rate of $150/hour.
                </Text>
                <Box>
                  <Text fontStyle="italic" mt={0}>
                    Why is our support fee so high?
                  </Text>
                  <Text fontStyle="italic" mt={2}>
                    Our hope is Midspace is easy enough to use that you
                    won&apos;t need our assistance with the technology.
                    Therefore, you&apos;re drawing upon our combined experience
                    running conferences over the last 10 years.
                  </Text>
                  <Text fontStyle="italic" mt={2}>
                    Every hour we spend on support we are not working on the
                    platform - this is a big opportunity cost, so our support
                    fees cover the cost of the support person as well as the
                    cost of an additional person to continue the tasks that
                    would otherwise not be worked on.
                  </Text>
                  <Text fontStyle="italic" mt={2}>
                    In addition, our support typically extends outside of normal
                    working hours (often into the early AM!) so we provide
                    compensation to our team for this.
                  </Text>
                </Box>
              </TabPanel>
              <TabPanel
                as={VStack}
                spacing={6}
                pt={0}
                alignItems="stretch"
                justifyContent="flex-start"
                w="100%"
              >
                <Text mt={0}>
                  TODO: Bring in the sponsorship packages components, along with
                  conference-size suggestions
                </Text>
              </TabPanel>
            </FeatureTabPanels>
          </FeatureTabs> */}
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
