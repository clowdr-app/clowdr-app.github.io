import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineCustomerService,
  AiOutlineExperiment,
  AiOutlineMail,
  AiOutlineRocket,
  AiOutlineTool,
} from "react-icons/ai";
import { Feature } from "../components/Feature";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Pricing() {
  return (
    <>
      <Title title="Pricing" />
      <Layout>
        <Box my={12}>
          <Container>
            <Heading as="h2" size="2xl">
              Packages
            </Heading>
            <Text fontSize="lg">
              Whether your conference has 50 attendees, 5,000, or more, we can
              help you deliver a rich social experience. These packages are a
              guide to what we can provide, but please talk to us if you need
              something not currently shown on our website. We're a small, fast
              moving team - we may already be working on just the thing you
              need!
            </Text>
          </Container>
          <Box p={8} my={12} bgColor="brand.800" layerStyle="hero">
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
              spacingX={{ base: 8, lg: 16 }}
              spacingY={12}
            >
              <Feature color="white" icon={AiOutlineTool} title="Click-and-go">
                <Text>
                  We worry about the technology; you organize the conference.
                  Recommended for events with a simple, single-track program.
                </Text>
              </Feature>
              <Feature
                color="white"
                icon={AiOutlineCustomerService}
                title="Expert support"
              >
                <Text>
                  You organize, we help. We'll advise you on how to plan and set
                  up your conference and provide virtual on-site support to make
                  sure everything runs smoothly. Recommended for more complex
                  events, especially ones with multiple tracks.
                </Text>
              </Feature>
              <Feature
                color="white"
                icon={AiOutlineRocket}
                title="Hands-on support"
              >
                <Text>
                  We organize, you help. We'll take your requirements and
                  deliver a successful event from start to finish.
                </Text>
              </Feature>
              <Feature
                color="white"
                icon={AiOutlineExperiment}
                title="Advanced customisation"
              >
                <Text>
                  Want to wow your attendees with something new? We can design
                  and build it.
                </Text>
              </Feature>
              <Feature
                color="white"
                icon={AiOutlineTool}
                title="Do-it-yourself"
              >
                <Text>
                  Want to run the Clowdr platform yourself? We can help you with
                  that.
                </Text>
              </Feature>
            </SimpleGrid>
          </Box>
          <Container>
            <Heading as="h2" size="2xl">
              Guide Prices
            </Heading>
            <Badge mt={4}>valid through March 2021</Badge>
            <Text>
              We recognise that one price doesn't fit everyone. When you contact
              us, we'll meet with you (virtually 😉) for a free consultation to
              understand your requirements and provide an appropriate quote for
              your conference.
            </Text>
          </Container>
          <Box
            maxW={{ base: "100%", xl: "80%" }}
            overflow="auto"
            my="4"
            mx="auto"
          >
            <Table mx="auto">
              <Thead>
                <Tr>
                  <Th>
                    <Text>Package</Text>
                  </Th>
                  <Th>Hosting</Th>
                  <Th>Features</Th>
                  <Th>
                    <HStack alignItems="flex-start">
                      <Text>Training &amp; attendee support</Text>
                      <Tooltip
                        label="All packages include our standard tech support that we provide to keep our services up and running."
                        fontSize="md"
                      >
                        <QuestionOutlineIcon />
                      </Tooltip>
                    </HStack>
                  </Th>
                  <Th>Organiser support</Th>
                  <Th>Event management</Th>
                  <Th>Extended features</Th>
                  <Th>
                    <HStack alignItems="flex-start">
                      <Text>Guide price</Text>
                      <Tooltip
                        label="All prices are shown in USD
                        and exclusive of tax. GBP and EUR currencies also available. All
                        prices shown are for guidance only and are subject to change at any
                        time. We will provide an exact quote for your conference after a
                        free consultation. Clowdr CIC is a UK company operating in the UK -
                        contracts are generally made under UK jurisdiction."
                        fontSize="md"
                      >
                        <QuestionOutlineIcon />
                      </Tooltip>
                    </HStack>
                  </Th>
                  <Th>Minimum price</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr textAlign="center">
                  <Td>Pure open source</Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>N/A</Td>
                  <Td>N/A</Td>
                </Tr>
                <Tr textAlign="center">
                  <Td>Do-it-yourself</Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    $250/hour of support
                    <br />
                    (inc. training)
                  </Td>
                  <Td>$500</Td>
                </Tr>
                <Tr textAlign="center">
                  <Td>Click-and-go</Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>$20/attendee</Td>
                  <Td>$1,000</Td>
                </Tr>
                <Tr textAlign="center">
                  <Td>Expert support</Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>$30/attendee</Td>
                  <Td>$6,000</Td>
                </Tr>
                <Tr textAlign="center">
                  <Td>Hands-on support</Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>$50/attendee</Td>
                  <Td>$25,000</Td>
                </Tr>
                <Tr textAlign="center">
                  <Td>Advanced customisation</Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>
                    <Cross />
                  </Td>
                  <Td>
                    <Check />
                  </Td>
                  <Td>$50/attendee</Td>
                  <Td>$50,000</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Container textAlign="center" style={{ padding: "2em 0 1em" }}>
            <Button
              variant="outline"
              as={Link}
              size="lg"
              href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
              color="brand.800"
            >
              <Icon as={AiOutlineMail} w={6} h={6} mr={4} />
              Arrange a free consultation
            </Button>
          </Container>

          <Box
            maxW={{ base: "100%", xl: "80%" }}
            overflow="auto"
            my="4"
            mx="auto"
          >
            <Table>
              <Thead>
                <Tr>
                  <Th>Package item</Th>
                  <Th>What's included</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Days</Td>
                  <Td>All guide prices are based on a five day conference.</Td>
                </Tr>
                <Tr>
                  <Td>Hosting</Td>
                  <Td>
                    Clowdr's software is open source and free for anyone to use.
                    Alternatively, we offer our software as a{" "}
                    <i>hosted service</i> so you don't have to worry about the
                    tech and infrastructure. Just log in and start creating your
                    program!
                  </Td>
                </Tr>
                <Tr>
                  <Td>Features</Td>
                  <Td>
                    All packages include{" "}
                    <Link as={GatsbyLink} to="/features">
                      every feature
                    </Link>{" "}
                    of the Clowdr software. You can disable some features if you
                    don't wish to use them.
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <HStack alignItems="center">
                      <Text>Training &amp; attendee support</Text>
                      <Tooltip
                        p={2}
                        label="All packages include our standard tech support that we provide to keep our services up and running."
                        fontSize="md"
                      >
                        <QuestionOutlineIcon />
                      </Tooltip>
                    </HStack>
                  </Td>
                  <Td>
                    <List bulleted>
                      <ListItem>
                        Three 1-hour training sessions for your committee,
                        volunteers, and presenters on how to use Clowdr.
                      </ListItem>
                      <ListItem>
                        One of our team online for 30 mins/100 attendees each
                        day of your conference, up to a maximum of 4 hours/day.
                      </ListItem>
                      <ListItem>
                        For larger conferencs, we may be able to provide
                        additional members of our team and/or more hours of
                        support.
                      </ListItem>
                    </List>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Organiser support</Td>
                  <Td>
                    Learn from{" "}
                    <Link as={GatsbyLink} to="/about">
                      our team's
                    </Link>{" "}
                    &gt;10 years experience organising conferences. We will
                    advise your organising committee on best practices for the
                    design and delivery of virtual conferences, and how to get
                    the most out of the Clowdr software.
                  </Td>
                </Tr>
                <Tr>
                  <Td>Extended features (/feature guarantees)</Td>
                  <Td>
                    We are always developing new features, but if your
                    conference needs something specific that isn't on our
                    roadmap (or you need it sooner than we have planned), please
                    talk to us. If you'd like a guarantee of the feature being
                    available for your conference, we may offer this package
                    option to you.{" "}
                    <i style={{ fontWeight: 600, fontSize: "95%" }}>
                      Please talk to us as early as possible so we can allow
                      enough time to address your requirements.
                    </i>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Event management</Td>
                  <Td>
                    If you'd like our team to help you design your program,
                    provide extra training for your volunteers, or assist your
                    conference in any other way, let's talk about it!
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

function Check({ className }: { className?: string }): JSX.Element {
  return (
    <Icon
      color="brand.600"
      as={AiFillCheckCircle}
      aria-label="Included"
      title="Included"
      w={6}
      h={6}
      className={className}
    />
  );
}

function Cross({ className }: { className?: string }): JSX.Element {
  return (
    <Icon
      color="red.100"
      as={AiFillCloseCircle}
      aria-label="Not included"
      title="Not included"
      w={6}
      h={6}
      className={className}
    />
  );
}
