import { AccordionPanel } from "@chakra-ui/accordion";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
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
              Whether your conference has 50 attendees, 5,000, or more, we have
              a plan that can help you deliver a rich social experience.
            </Text>
            <Text fontSize="lg">
              Our packages are a starting point for what Clowdr can provide
              based on your event size and support needs - but please talk to us
              if you need something not currently shown on our website. We want
              to hear from you!
            </Text>
            <Text fontSize="lg">
              We're a small, fast moving team - we may already be working on
              just the thing you need!
            </Text>
          </Container>
          <Flex
            direction={{ base: "column", xl: "row" }}
            justifyContent="center"
            my={12}
          >
            <Flex
              flex={{ sm: 1 }}
              flexBasis={{ lg: 2.3 / 9.3 }}
              rounded="lg"
              borderTopRightRadius={0}
              borderBottomLeftRadius="lg"
              bg="white"
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <Heading as="h3" size="xl" fontWeight="bold">
                  DIY
                </Heading>
                <HStack spacing={3}>
                  <chakra.span fontWeight="bold" fontSize="5xl">
                    Free
                  </chakra.span>
                </HStack>
              </VStack>
              <VStack
                fontSize="md"
                spacing={8}
                h="full"
                bg="gray.100"
                borderBottomLeftRadius="lg"
                p={8}
              >
                <Text my={0}>
                  Want to run the Clowdr platform yourself? We can help you with
                  that.
                </Text>
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                  role="list"
                >
                  <Feature role="listitem">
                    <Link href="#all-features">All software features</Link>
                  </Feature>
                  <Feature role="listitem">
                    If you have sufficient tech know-how, you can run our
                    open-source software on your own hosting services!
                  </Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  <Button
                    as="a"
                    href="https://github.com/clowdr-app/clowdr"
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    color="brand.800"
                    bg="white"
                    _hover={{
                      bg: "brand.50",
                    }}
                  >
                    <Icon mr={4} as={GoMarkGithub} aria-hidden />
                    Get Clowdr on GitHub
                  </Button>
                </Box>
              </VStack>
            </Flex>

            <Flex
              flex={{ base: 1 }}
              flexBasis={{ lg: 2.4 / 9.3 }}
              rounded="lg"
              bg="white"
              mt={{ base: 4, sm: -4 }}
              shadow="xl"
              zIndex={30}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <Heading as="h3" size="xl" fontWeight="bold">
                  50-250 registrants
                </Heading>
                <Text>(up to four days)</Text>
                <HStack spacing={3}>
                  <chakra.span fontWeight="bold" fontSize="6xl">
                    $12
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    color="gray.600"
                  >
                    /registrant
                  </chakra.span>
                </HStack>
              </VStack>
              <VStack
                fontSize="sm"
                h="full"
                roundedBottom="lg"
                spacing={8}
                bg="gray.100"
                p={10}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                  role="list"
                >
                  <Feature role="listitem">
                    <Link href="#all-features">All software features</Link>
                  </Feature>
                  <Feature role="listitem">Standard tech support</Feature>
                  <Feature role="listitem">Up to three organisers</Feature>
                </VStack>
                <Accordion w="full" allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Included quotas
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} fontSize="md">
                      <List
                        listStyleType="circle"
                        fontSize="md"
                        sx={{ ul: { fontSize: "sm" } }}
                      >
                        <ListItem>
                          Access to configure your conference starting up to 4
                          weeks ahead of your conference
                          <List listStyleType="circle" ml={4}>
                            <ListItem>Up to three organisers</ListItem>
                          </List>
                        </ListItem>
                        <ListItem>
                          1 week author submission period starting up to 2 weeks
                          ahead of your conference
                        </ListItem>
                        <ListItem>
                          Pre-publication of schedule, content, pre-recorded
                          videos and text chats up to 5 days ahead of the
                          conference (access for registered users only)
                        </ListItem>
                        <ListItem>
                          Up to 100 pre-recorded videos
                          <List listStyleType="circle" ml={4}>
                            <ListItem>Max 1080p, 30fps</ListItem>
                            <ListItem>Up to 20 minutes long</ListItem>
                            <ListItem>
                              Auto-generated subtitles and author access to edit
                              subtitles
                            </ListItem>
                          </List>
                        </ListItem>
                        <ListItem>
                          3 hours of livestreaming per day
                          <List listStyleType="circle" ml={4}>
                            <ListItem>Max 1 livestream room</ListItem>
                            <ListItem>
                              Up to 5 simultaneous live speakers
                            </ListItem>
                            <ListItem>
                              Live presentations and playback of pre-recorded
                              video
                            </ListItem>
                          </List>
                        </ListItem>
                        <ListItem>Up to 10 social rooms</ListItem>
                        <ListItem>
                          Unlimited one-to-one (direct message) rooms
                        </ListItem>
                        <ListItem>
                          Up to 10 sponsor booths
                          <List listStyleType="circle" ml={4}>
                            <ListItem>
                              Unlimited text, images and PDFs per booth
                            </ListItem>
                            <ListItem>Up to 2 videos per booth</ListItem>
                          </List>
                        </ListItem>
                        <ListItem>
                          Up to one shuffle (randomised attendee networking)
                          queue per day
                          <List listStyleType="circle" ml={4}>
                            <ListItem>Max 30 minutes queue duration</ListItem>
                            <ListItem>
                              Max 5 attendees per shuffle room
                            </ListItem>
                            <ListItem>
                              Max 10 minutes in each shuffle room
                            </ListItem>
                          </List>
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Box display="inline-flex" rounded="md" shadow="md" w="full">
                  <Button
                    as="a"
                    href="https://form.asana.com/?k=vZCogwGG5WSVBz-qgByHAw&d=1198973227684402"
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    color="white"
                    bg="brand.700"
                    _hover={{
                      bg: "brand.700",
                      color: "white",
                    }}
                  >
                    Request a Quote
                  </Button>
                </Box>
                <Text>Quotes are available in USD, EUR and GBP</Text>
              </VStack>
            </Flex>

            <Flex
              flex={{ sm: 1 }}
              flexBasis={{ lg: 2.3 / 9.3 }}
              rounded="lg"
              borderTopRightRadius={0}
              borderBottomLeftRadius="lg"
              bg="white"
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <Heading as="h3" size="xl" fontWeight="bold">
                  250+ registrants
                </Heading>
                <chakra.span fontWeight="bold" fontSize="5xl">
                  Contact us
                </chakra.span>
              </VStack>
              <VStack
                fontSize="sm"
                spacing={8}
                h="full"
                bg="gray.100"
                borderBottomLeftRadius="lg"
                p={8}
              >
                <Text my={0} fontSize="md">
                  Clowdr will work with you to create a quote tailored to the
                  needs of your conference, factoring in your event size,
                  technical support level, and budget constraints.
                </Text>
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                  role="list"
                >
                  <Feature role="listitem">
                    <Link href="#all-features">All software features</Link>
                  </Feature>
                  <Feature role="listitem">
                    Dedicated tech support for attendees{" "}
                    <Badge color="green" variant="outline" ml={2}>
                      Optional
                    </Badge>
                  </Feature>
                  <Feature role="listitem">
                    Conference and schedule design advice{" "}
                    <Badge color="green" variant="outline" ml={2}>
                      Optional
                    </Badge>
                  </Feature>
                  <Feature role="listitem">
                    Hands-on support for organisers (e.g. schedule import, live
                    tech support, training for session chairs and speakers){" "}
                    <Badge color="green" variant="outline" ml={2}>
                      Optional
                    </Badge>
                  </Feature>
                  <Feature role="listitem">
                    A custom package tailored for your event's success!
                  </Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  <Button
                    as="a"
                    href="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&d=1198973227684402"
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    color="brand.800"
                    bg="white"
                    _hover={{
                      bg: "brand.50",
                    }}
                  >
                    Request a Demo
                  </Button>
                </Box>
              </VStack>
            </Flex>

            <Flex
              flex={{ sm: 1 }}
              flexBasis={{ lg: 2.3 / 9.3 }}
              roundedTop="lg"
              borderBottomRightRadius="lg"
              borderTopLeftRadius={0}
              bg="white"
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <Heading as="h3" size="xl" fontWeight="bold">
                  Discounted
                </Heading>
              </VStack>
              <VStack
                fontSize="sm"
                spacing={8}
                h="full"
                bg="gray.100"
                borderBottomRightRadius="lg"
                p={8}
              >
                <Text fontSize="md" my={0}>
                  We offer discounted or at-cost pricing for conferences that
                  align with our company's goals and values - including
                  increasing accessibility of digital services, tackling climate
                  change, and more. If you think your event might fall into this
                  category, please reach out!
                </Text>
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                  role="list"
                >
                  <Feature role="listitem">
                    <Link href="#all-features">All software features</Link>
                  </Feature>
                  <Feature icon="neutral" role="listitem">
                    We do not currently offer conference hosting for free or
                    below-cost
                  </Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  <Button
                    as="a"
                    href="https://form.asana.com/?k=-anuBVrSLfVMyNuXJefdSw&d=1198973227684402"
                    w="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    color="brand.800"
                    bg="white"
                    _hover={{
                      bg: "brand.50",
                    }}
                  >
                    Contact us
                  </Button>
                </Box>
              </VStack>
            </Flex>
          </Flex>
        </Box>
        <Box
          layerStyle="hero"
          px={{ base: 4, xl: 20 }}
          w="auto"
          justifyContent="center"
          bg="brand.800"
          alignItems="center"
        >
          <Heading as="h2" pt={12} id="all-features">
            Features
          </Heading>
          <Text>
            Here are the main features you'll find included with every Clowdr
            package. We're always happy to hear{" "}
            <Link as={GatsbyLink} to="/contact-us">
              feedback about what should be added to Clowdr next
            </Link>
            .
          </Text>
          <Table variant="striped" colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Feature</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Advanced scheduling</Td>
                <Td>Support for complex, multi-track programs.</Td>
              </Tr>
              <Tr>
                <Td>Video rooms</Td>
                <Td>Registrant- and organiser-created video breakout rooms.</Td>
              </Tr>
              <Tr>
                <Td>Text chat</Td>
                <Td>
                  Realtime text chat, including direct messages and global
                  channels.
                </Td>
              </Tr>
              <Tr>
                <Td>Integrated video streaming</Td>
                <Td>
                  Present live from inside Clowdr. Control which people (or
                  screen shares) are shown in your livestream.
                </Td>
              </Tr>
              <Tr>
                <Td>Seamless livestreams</Td>
                <Td>
                  Schedule both live and pre-recorded sessions and Clowdr will
                  switch between them seamlessly in your livestream.
                </Td>
              </Tr>
              <Tr>
                <Td>Content management</Td>
                <Td>
                  Upload and display your conference proceedings, including
                  abstracts, videos, files and links.
                </Td>
              </Tr>
              <Tr>
                <Td>Content collection</Td>
                <Td>
                  Allow your authors to upload content (e.g. pre-recorded
                  videos).
                </Td>
              </Tr>
              <Tr>
                <Td>Auto-generated subtitles</Td>
                <Td>
                  Automatically generated subtitles for pre-recorded video
                  uploads and live recordings. Let your authors edit their own
                  subtitles.
                </Td>
              </Tr>
              <Tr>
                <Td>Shuffle spaces</Td>
                <Td>
                  Randomised networking rooms for your registrants. Can also be
                  used for mentoring sessions.
                </Td>
              </Tr>
              <Tr>
                <Td>Sponsor booths</Td>
                <Td>
                  A dedicated video room page for each of your sponsors.
                  Customisable with text, images, links and video.
                </Td>
              </Tr>
              <Tr>
                <Td>Custom homepage</Td>
                <Td>
                  A customisable landing page to introduce registrants to your
                  conference.
                </Td>
              </Tr>
              <Tr>
                <Td>Admin panel</Td>
                <Td>
                  A self-service admin panel to control everything at your
                  conference.
                </Td>
              </Tr>
              <Tr>
                <Td>Permissions management</Td>
                <Td>
                  Group registrants together to give them access to different
                  areas. Or give specific roles to different organisers.
                </Td>
              </Tr>
              <Tr>
                <Td>YouTube export</Td>
                <Td>Upload your videos or live recordings to YouTube.</Td>
              </Tr>
            </Tbody>
          </Table>

          <Button as={GatsbyLink} fontSize="2xl" my={12} p={8} to="/features">
            Learn more about Clowdr
            <Icon ml={4} as={AiOutlineArrowRight} />
          </Button>
        </Box>
      </Layout>
    </>
  );
}

const Feature = chakra(FeatureInner);

function FeatureInner({
  className,
  children,
  icon,
}: {
  className?: string;
  children: React.ReactNode | React.ReactNodeArray | string;
  icon?: "check" | "neutral";
}): JSX.Element {
  return (
    <Flex alignSelf="start" w="full">
      {icon === "neutral" ? (
        <Icon
          mt={1}
          mr={2}
          boxSize={5}
          color="gray.600"
          w={6}
          h={6}
          as={AiFillInfoCircle}
          aria-hidden
        />
      ) : (
        <Icon
          mt={1}
          mr={2}
          boxSize={5}
          color="brand.600"
          w={6}
          h={6}
          as={AiFillCheckCircle}
          aria-hidden
        />
      )}
      <chakra.p fontSize="lg" className={className}>
        {children}
      </chakra.p>
    </Flex>
  );
}
