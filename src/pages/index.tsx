import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
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
        <Box w="auto">
          <HStack
            alignItems="stretch"
            justifyContent="center"
            spacing={0}
            flexWrap="wrap"
          >
            <Box flexBasis="50%" flexGrow={1} flexShrink={0} py={12} px={8}>
              <Heading as="h1" size="3xl">
                Virtual conferences for social good
              </Heading>
              <Heading as="h2" size="lg" fontWeight="normal">
                Clowdr makes it easy to create an engaging virtual conference
                experience, giving you time to focus on the things that matter
              </Heading>
              <Button
                my={12}
                p={8}
                fontSize="2xl"
                variant="solid"
                as="a"
                href="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&amp;d=1198973227684402"
              >
                Arrange a demo
                <Icon ml={4} as={AiOutlineArrowRight} />
              </Button>
            </Box>
            <Box
              flexBasis="50%"
              minW="650px"
              flexGrow={1}
              flexShrink={0}
              bg="brand.800"
              layerStyle="hero"
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

        <Container my={12} maxW="80ch">
          <Heading as="h2" size="2xl" mb={8}>
            Running a virtual conference can be hard work
          </Heading>
          <Box mx="auto">
            <Box
              bgColor="gray.200"
              w="max-content"
              maxW="100%"
              fontSize={{ base: "lg", lg: "2xl" }}
              p={4}
              my={4}
              borderRadius="lg"
            >
              How do I organise video streaming and Q&amp;A?
            </Box>
            <Box
              bgColor="gray.200"
              w="max-content"
              maxW="100%"
              fontSize={{ base: "lg", lg: "2xl" }}
              p={4}
              my={4}
              borderRadius="lg"
              ml="auto"
            >
              How will attendees socialise with one another?
            </Box>
            <Box
              bgColor="gray.200"
              w="max-content"
              maxW="100%"
              fontSize={{ base: "lg", lg: "2xl" }}
              p={4}
              my={4}
              borderRadius="lg"
            >
              How do I run poster sessions and exhibitions?
            </Box>
            <Box
              bgColor="gray.200"
              w="max-content"
              maxW="100%"
              fontSize={{ base: "lg", lg: "2xl" }}
              p={4}
              my={4}
              borderRadius="lg"
              ml="auto"
            >
              What about providing booths for our sponsors?
            </Box>
          </Box>
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
            bgColor="brand.900"
            _hover={{
              bgColor: "brand.700",
            }}
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
