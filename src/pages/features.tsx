import {
  Box,
  Button,
  chakra,
  Flex,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineCustomerService,
  AiOutlineGithub,
  AiOutlineMessage,
  AiOutlinePicRight,
  AiOutlinePicture,
  AiOutlinePlayCircle,
  AiOutlineProfile,
  AiOutlineShop,
  AiOutlineTeam,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import ReactPlayer from "react-player";
import ArrangeADemoButton from "../components/ArrangeADemoButton";
import { Feature } from "../components/Feature";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Features() {
  return (
    <>
      <Title title="Features" />
      <Layout>
        <Box
          layerStyle="hero"
          px={{ base: 0, xl: 20 }}
          w="auto"
          justifyContent="center"
          bg="brand.800"
          alignItems="center"
        >
          <Flex>
            <Box px={8} pt={20} pb={12} mx="auto">
              <SimpleGrid
                alignItems="center"
                columns={{ base: 1, lg: 3 }}
                spacingY={{ base: 10, lg: 32 }}
                spacingX={{ base: 10, lg: 24 }}
              >
                <Box alignSelf="start">
                  <Heading
                    as="h2"
                    mb={3}
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="extrabold"
                    textAlign={{ base: "center", sm: "left" }}
                    lineHeight="shorter"
                    letterSpacing="tight"
                  >
                    Everything you need to deliver a great conference
                  </Heading>
                  <Text
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    textAlign={{ base: "center", sm: "left" }}
                  >
                    Clowdr is an all-in-one solution for your next virtual
                    conference. We know how much work it is to organise a
                    conference. Clowdr is designed to make your conference
                    platform 'just work' - so that you can concentrate on the
                    things that really matter.
                  </Text>

                  <ReactPlayer
                    url="https://www.youtube-nocookie.com/embed/RqyHVQUYVI4"
                    width="100%"
                    className="react-player"
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 },
                      },
                    }}
                  />
                </Box>
                <GridItem colSpan={2}>
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
                      Clowdr supports the complex, multi-track conference
                      programs common in large academic conferences.
                    </Feature>
                    <Feature
                      title="Video rooms"
                      color="white"
                      icon={AiOutlineVideoCamera}
                    >
                      Attendees can create ad-hoc video breakout rooms at the
                      click of a button.
                    </Feature>
                    <Feature
                      title="Text chat"
                      color="white"
                      icon={AiOutlineMessage}
                    >
                      A familiar and interactive chat experience. Have a rich
                      conversation with polls, Q&amp;A, emoji and more.
                    </Feature>
                    <Feature
                      title="Audio-visual production"
                      color="white"
                      icon={AiOutlinePlayCircle}
                    >
                      Our end-to-end video production workflow seamlessly
                      combines pre-recorded videos with live presentations,
                      panel sessions and Q&amp;A.
                    </Feature>
                    <Feature
                      title="Attendee networking"
                      color="white"
                      icon={AiOutlineTeam}
                    >
                      Get your attendees talking with shuffle spaces, a way to
                      create spontaneous group conversations.
                    </Feature>
                    <Feature
                      title="Sponsor booths"
                      color="white"
                      icon={AiOutlineShop}
                    >
                      Create custom video booths for sponsors and exhibitors at
                      your conference.
                    </Feature>
                    <Feature
                      title="Exhibition hall"
                      color="white"
                      icon={AiOutlinePicture}
                    >
                      Build a virtual exhibition hall to show posters or an
                      important collection of conference items.
                    </Feature>
                    <Feature
                      title="Content management"
                      color="white"
                      icon={AiOutlineProfile}
                    >
                      Clowdr helps you gather and manage all the content at your
                      conference, including papers, abstracts, links and videos.
                    </Feature>
                    <Feature
                      title="Custom homepage"
                      color="white"
                      icon={AiOutlinePicRight}
                    >
                      Welcome attendees to your conference with a custom
                      homepage.
                    </Feature>
                    <Feature
                      title="Expert support"
                      color="white"
                      icon={AiOutlineCustomerService}
                    >
                      Our experienced team is ready to make your conference a
                      success.
                    </Feature>
                  </Stack>
                </GridItem>
              </SimpleGrid>
            </Box>
          </Flex>
          <Box textAlign="center" py={12}>
            <Text fontSize="xl">We'd love to show you around!</Text>
            <ArrangeADemoButton />
          </Box>
        </Box>

        <Box
          backgroundColor="brand.800"
          layerStyle="hero"
          mx={{ base: 0, lg: 20 }}
          borderRadius="lg"
          shadow="xl"
          mt={12}
          py={4}
        >
          <HStack>
            <Box pr={4}>
              <Stat p={4} textAlign="center">
                <StatLabel fontSize="xl">Clowdr is</StatLabel>
                <StatNumber fontSize="4xl">100%</StatNumber>
                <StatHelpText fontSize="xl">open source</StatHelpText>
              </Stat>
            </Box>
            <Box flex="1">
              <Text fontSize="xl">
                Clowdr is proudly open-source. As a social enterprise, this is
                part of how we serve the academic community.
              </Text>
              <Text>
                If you want to do-it-yourself, you can run your very own Clowdr.
                We also support researchers who want to modify Clowdr or use it
                in their research.
              </Text>
            </Box>

            <IconButton
              as={Link}
              href="https://github.com/clowdr-app/"
              aria-label="Clowdr on GitHub"
              icon={<AiOutlineGithub size="32px" />}
              color="black"
              bgColor="gray.800"
              _hover={{
                bgColor: "gray.800",
              }}
              w={16}
              h={16}
              style={{ margin: "0 1em" }}
            />
          </HStack>
        </Box>

        <Box w="100%" my={12}>
          <HStack
            mx="auto"
            justifyContent="center"
            flexWrap="wrap"
            flex="1"
            gridColumnGap={8}
          >
            <Heading as="h2" minW={72} my={8} textAlign="center">
              Trusted by thousands
            </Heading>
            <VStack spacing={6}>
              <Testimonial
                title="ICSE 2020"
                name="July 2020"
                description="The International Conference on Software Engineering
                        chose Clowdr to support a virtual conference for 1500
                        academic and professional engineers."
              />
              <Testimonial
                title="ICFP 2020"
                name="August 2020"
                description="Clowdr was used by 1300 attendees at the International
                Conference on Functional Programming."
              />
              <Testimonial
                title="SPLASH 2020"
                name="November 2020"
                description="Over 900 attendees used Clowdr to attend the ACM SIGPLAN
                conference on Systems, Programming, Languages, and
                Applications: Software for Humanity."
              />
              <Testimonial
                title="FPGA 2021"
                name="February 2021"
                description="FPGA 2021 made use of Clowdr's advanced video broadcast capabilities to deliver content to 500 attendees."
              />
              <Testimonial description="and many more!" />
            </VStack>
          </HStack>
        </Box>

        <Box
          backgroundColor="brand.800"
          layerStyle="hero"
          mx={{ base: 0, lg: 20 }}
          borderRadius="lg"
          shadow="xl"
          my={12}
          p={12}
        >
          <chakra.blockquote pos="relative" fontSize="xl">
            <chakra.span pos="absolute" left="-10" top="-12" fontSize="72px">
              “
            </chakra.span>
            Good call on Clowdr – I have joined so many virtual conferences with
            fancy platforms and this is by far my favorite. Pretty easy to
            navigate and very straight forward – just what these types of
            academic conferences need.
          </chakra.blockquote>
          <Text textAlign="right" fontSize="lg">
            - sponsor at CSCW 2020
          </Text>
        </Box>

        {/* <Container text style={{ paddingTop: "2em" }}>
        <Header as="h3" style={{ fontSize: "1.5em" }}>
          The earth is facing a climate emergency
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Science tells us we must limit warming to 1.5°C. That means reducing our carbon emissions
          by 7.6% every year from now until 2030.
        </p>
      </Container>

      <Segment
        color="green"
        inverted
        stacked
        compact
        style={{ margin: "2em auto 0", padding: "2em 0" }}
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Statistic inverted>
                <Statistic.Value>70%</Statistic.Value>
                <Statistic.Label>of emissions</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={10}>
              <p style={{ fontSize: "1.4em" }}>
                That's how much of a conference's emissions comes from your attendees' air travel
                and hotels alone.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Container text style={{ paddingTop: "2em" }}>
        <p style={{ fontSize: "1.33em" }}>
          Virtual conferences have a much lower environmental impact. We have also found that they
          can significantly improve diversity and inclusion at your event.
        </p>
      </Container> */}

        <Box
          layerStyle="hero"
          px={{ base: 8, xl: 20 }}
          w="auto"
          justifyContent="center"
          bg="brand.800"
          alignItems="center"
          py={12}
        >
          <Heading as="h2" size="2xl">
            A community-owned platform
          </Heading>
          <Text fontSize="xl">
            Clowdr CIC is a social enterprise dedicated to making virtual
            conferences better for everyone.
          </Text>
          <Text fontSize="xl">
            All improvements we make to Clowdr become part of the open source
            platform that anybody can use freely.
          </Text>

          <Heading as="h2" size="2xl" mt={12}>
            Interested in using Clowdr?
          </Heading>

          <Text fontSize="xl">
            There are lots of ways to use Clowdr. Most conferences choose to use
            our fully hosted 'click-and-go' solution. But you can also run
            Clowdr yourself at no cost.
          </Text>

          <Button
            as={Link}
            href="/pricing"
            bgColor="brand.900"
            color="white"
            size="lg"
            fontSize="xl"
            _hover={{
              bgColor: "brand.700",
              color: "white",
            }}
          >
            Discover our packages
          </Button>
        </Box>
      </Layout>
    </>
  );
}

const Testimonial = chakra(TestimonialInternal);

function TestimonialInternal({
  title,
  name,
  description,
  className,
  link,
}: {
  title?: string;
  name?: string;
  description: string;
  className?: string;
  link?: string;
}): JSX.Element {
  return (
    <Flex
      className={className}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="md" mx="auto" py={4} px={8} bg="white" shadow="lg" rounded="lg">
        {title ? (
          <Heading
            as="h3"
            color="gray.800"
            fontSize={{ base: "2xl", md: "3xl" }}
            mt={{ base: 2, md: 0 }}
            fontWeight="bold"
          >
            {title}
          </Heading>
        ) : undefined}

        <Text mt={2} color="gray.600">
          {description}
        </Text>

        {name ? (
          <Flex justifyContent="end" mt={2}>
            {link ? (
              <Link href={link} fontSize="xl" color={"brand.800"}>
                {name}
              </Link>
            ) : (
              <Text color="brand.800" fontSize="xl">
                {name}
              </Text>
            )}
          </Flex>
        ) : undefined}
      </Box>
    </Flex>
  );
}
