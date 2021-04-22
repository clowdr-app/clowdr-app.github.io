import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink, Link } from "gatsby";
import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowsAlt,
  AiOutlineCalendar,
  AiOutlineComment,
  AiOutlineCustomerService,
  AiOutlinePlayCircle,
  AiOutlineRetweet,
  AiOutlineTeam,
} from "react-icons/ai";
import ReactPlayer from "react-player";
import { ArrangeADemoButton } from "../components/ArrangeADemoButton";
import { Feature } from "../components/Feature";
import { Layout } from "../components/Layout";
import { Packages } from "../components/Packages";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Title title="Virtual conferences for social good" />
      <Layout>
        <Box w="auto" layerStyle="hero" bgColor="brand.800">
          <HStack
            alignItems="stretch"
            justifyContent="center"
            spacing={0}
            flexWrap="wrap"
          >
            <Box flexBasis="40%" flexGrow={1} flexShrink={0} py={12} px={8}>
              <Heading as="h1" size="3xl" lineHeight={1.2}>
                Create community around your content
              </Heading>
              <Heading as="h2" size="lg" fontWeight="normal" lineHeight={1.6}>
                Clowdr makes it easy to create an engaging virtual conference
                experience, giving you time to focus on the things that matter
              </Heading>
              <Button
                my={12}
                p={8}
                fontSize="2xl"
                variant="solid"
                as={Link}
                to="/features"
              >
                Learn more
                <Icon ml={4} as={AiOutlineArrowRight} />
              </Button>
            </Box>
            <Box
              flexBasis="60%"
              minW="650px"
              flexGrow={1}
              flexShrink={0}
              py={12}
              px={8}
            >
              <Box maxW="90%" w="90%" mx="auto">
                <Box
                  w="100%"
                  h="auto"
                  mx="auto"
                  sx={{
                    ".react-player": {
                      paddingTop: "56.25%",
                      position: "relative",
                    },
                    ".react-player > div": {
                      position: "absolute",
                      left: 0,
                      top: 0,
                    },
                  }}
                >
                  <ReactPlayer
                    url="https://www.youtube-nocookie.com/embed/RqyHVQUYVI4"
                    className="react-player"
                    width="100%"
                    height="auto"
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </HStack>
        </Box>

        <Container my={12} maxW="120ch">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Running a virtual conference can be hard work
          </Heading>
          <Accordion mx="auto" allowToggle={true} allowMultiple={true}>
            <AccordionItem border="0 none">
              <AccordionButton _hover={{ bgColor: "none" }}>
                <Box
                  bgColor="yellow.200"
                  _hover={{
                    bgColor: "yellow.300",
                  }}
                  shadow="inner"
                  w="80%"
                  maxW="100%"
                  fontSize={{ base: "lg", lg: "xl" }}
                  p={4}
                  my={4}
                  borderRadius="lg"
                >
                  <Text>
                    How do I gather videos from authors and create accurate
                    subtitles for them?
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel fontSize="lg" bgColor="yellow.100">
                <Text>
                  <strong>Clowdr makes it easy.</strong> After importing your
                  conference program, it's just a couple of clicks to ask
                  presenters to upload their videos, slides or other
                  information.
                </Text>
                <Image
                  src="/images/submission-requests.webp"
                  alt="Sending a submission request from Clowdr"
                  shadow="dark-lg"
                  my={8}
                  mx="auto"
                  maxW="30rem"
                />
                <Text>
                  Clowdr automatically generates subtitles for videos uploaded
                  by your presenters and authors. After subtitling is complete,
                  Clowdr will email the uploader to notify them that they can
                  now make any corrections they want to.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="0 none">
              <AccordionButton _hover={{ bgColor: "none" }}>
                <Box
                  bgColor="brand.100"
                  _hover={{
                    bgColor: "brand.200",
                  }}
                  shadow="inner"
                  w="80%"
                  maxW="100%"
                  fontSize={{ base: "lg", lg: "xl" }}
                  p={4}
                  my={4}
                  borderRadius="lg"
                  ml="auto"
                >
                  Will the conference be accessible to everyone in my community?
                </Box>
              </AccordionButton>
              <AccordionPanel fontSize="lg" bgColor="brand.100">
                <Text>
                  <strong>Accessibility is one of Clowdr's core values.</strong>{" "}
                  Our platform is designed to work well with screen readers and
                  keyboard navigation. Clowdr also supports video subtitling for
                  your pre-recorded content, and live subtitling is coming soon.
                </Text>
                <Image
                  src="/images/subtitles.webp"
                  alt="Watching a video with subtitles"
                  shadow="dark-lg"
                  my={8}
                  mx="auto"
                  maxW="30rem"
                />
                <Text>
                  We believe that, today, text-based platforms are fundamentally
                  more accessible than trying to replicate a conference in a 2D
                  or 3D virtual environment.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="0 none">
              <AccordionButton _hover={{ bgColor: "none" }}>
                <Box
                  bgColor="purple.100"
                  _hover={{
                    bgColor: "purple.200",
                  }}
                  shadow="inner"
                  w="80%"
                  maxW="100%"
                  fontSize={{ base: "lg", lg: "xl" }}
                  p={4}
                  my={4}
                  borderRadius="lg"
                >
                  How do I encourage social engagement around conference
                  content&#8212;before, during and after?
                </Box>
              </AccordionButton>
              <AccordionPanel bgColor="purple.100" fontSize="lg">
                <Text>
                  <strong>
                    We believe that social connections are the most important
                    thing made at your conference.
                  </strong>{" "}
                  Attendees can personalise their profile with a picture, badges
                  and a bio, and that means it's always just a click away to
                  find out more about someone you've just met. Clowdr also shows
                  you who's in the room with you, which makes the conference
                  feel like a real shared experience.
                </Text>
                <Image
                  src="/images/video-chat.webp"
                  alt="Attendees in a Clowdr video chat"
                  shadow="dark-lg"
                  my={8}
                  mx="auto"
                  maxW="30rem"
                />
                <Text>
                  Clowdr's powerful chat system includes features your attendees
                  expect, like emoji reactions, Q&amp;A and polls. Create themed
                  video meeting rooms for your attendees to meet new people or
                  discuss a particular topic. Networking sessions run great with
                  our Shuffle feature, which groups attendees together randomly
                  for a limited period of time.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="0 none">
              <AccordionButton _hover={{ bgColor: "none" }}>
                <Box
                  bgColor="teal.50"
                  _hover={{
                    bgColor: "teal.100",
                  }}
                  shadow="inner"
                  w="80%"
                  maxW="100%"
                  fontSize={{ base: "lg", lg: "xl" }}
                  p={4}
                  my={4}
                  borderRadius="lg"
                  ml="auto"
                >
                  How do I manage a large and complex program? How do attendees
                  find what they're interested in?
                </Box>
              </AccordionButton>
              <AccordionPanel bgColor="teal.50" fontSize="lg">
                <Text>
                  <strong>
                    Clowdr is designed to work at every scale&mdash;from a
                    single track event through to a multi-week conference with
                    many parallel tracks.
                  </strong>{" "}
                  When your conference has a lots of content and rapid-fire
                  presentations, it can get difficult to manage. Clowdr shows
                  you the right thing at the right time.
                </Text>
                <Image
                  src="/images/schedule.webp"
                  alt="Clowdr's schedule page"
                  shadow="dark-lg"
                  my={8}
                  mx="auto"
                  maxW="30rem"
                />
                <Text>
                  Clowdr's Live Sidebar shows you what's happening right now:
                  who is chatting in a video room? What presentations are coming
                  up next? How many people are in the auditorium right now?
                </Text>
                <Text>
                  You can create a custom landing page for your conference,
                  organising your content in the way that makes sense for your
                  conference. And Clowdr's Schedule page compresses even a large
                  program into an easy-to-navigate timeline.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text fontSize="xl">
            Clowdr solves these problems and more, giving you time to focus on
            the thing that really matters: bringing people together.
          </Text>
        </Container>

        <Box
          layerStyle="hero"
          px={{ base: 4, xl: 20 }}
          w="auto"
          justifyContent="center"
          bg="brand.800"
          alignItems="center"
          pb={12}
        >
          <Text py={12} fontSize="2xl">
            Here are just a few of our great features:
          </Text>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature
              title="Advanced scheduling"
              color="white"
              icon={AiOutlineCalendar}
            >
              Clowdr supports the complex, multi-track conference programs
              common in large academic conferences.
            </Feature>

            <Feature
              title="Audiovisual production"
              color="white"
              icon={AiOutlinePlayCircle}
            >
              Our end-to-end video production workflow seamlessly combines
              pre-recorded videos with live presentations, panel sessions and
              Q&amp;A.
            </Feature>
            <Feature
              title="Attendee networking"
              color="white"
              icon={AiOutlineTeam}
            >
              Get your attendees talking with shuffle spaces, a way to create
              spontaneous group conversations.
            </Feature>

            <Feature
              title="Expert support"
              color="white"
              icon={AiOutlineCustomerService}
            >
              Our experienced team is ready to make your conference a success.
            </Feature>
          </Stack>
          <Button
            as={GatsbyLink}
            fontSize="2xl"
            my={12}
            p={4}
            to="/features"
            h="auto"
            whiteSpace="normal"
          >
            Learn more about Clowdr
            <Icon ml={4} as={AiOutlineArrowRight} />
          </Button>

          <Heading as="h2" size="2xl">
            Why go virtual with Clowdr?
          </Heading>

          <HStack
            mt={8}
            textAlign="center"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <VStack flexBasis="20rem" flexGrow={1}>
              <Icon as={AiOutlineArrowsAlt} w={16} h={16} />
              <Heading as="h3">Scales to your event</Heading>
              <Text>
                Clowdr was founded by academics with decades of combined
                experience organising large, complex academic conferences. It
                handles everything from simple seminars to week-long,
                multi-track conferences with thousands of attendees.
              </Text>
            </VStack>
            <VStack flexBasis="20rem" flexGrow={1}>
              <Icon as={AiOutlineComment} w={16} h={16} />
              <Heading as="h3">A sociable experience</Heading>
              <Text>
                Clowdr lets your attendees talk to one another with text and
                video chat. You can set up your own custom meeting rooms,
                sponsor booths, announcement channels and more.
              </Text>
            </VStack>
            <VStack flexBasis="20rem" flexGrow={1}>
              <Icon as={AiOutlineRetweet} w={16} h={16} />
              <Heading as="h3">By the community, for the community</Heading>
              <Text>
                Clowdr is a social enterprise, incorporated as a Community
                Interest Company. Our mission is to make inclusive, accessible,
                climate-friendly virtual conferences just as socially engaging
                as physical conferences.
              </Text>
            </VStack>
          </HStack>
        </Box>

        <Box px={{ base: 4, xl: 20 }} my={12}>
          <Heading as="h2" size="2xl" my={8}>
            What we offer
          </Heading>
          <Packages />
          <VStack my={8} gridRowGap={4}>
            <Button
              as={GatsbyLink}
              fontSize="2xl"
              p={4}
              h="auto"
              to="/pricing"
              whiteSpace="normal"
            >
              Find out more about our packages
              <Icon ml={4} as={AiOutlineArrowRight} />
            </Button>

            <ArrangeADemoButton />
          </VStack>
        </Box>
      </Layout>
    </>
  );
}
