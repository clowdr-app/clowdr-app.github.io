import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
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
import { Feature } from "../components/Feature";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Title title="Virtual conferences for social good" />
      <Layout>
        <Box
          layerStyle="hero"
          px={{ base: 0, xl: 20 }}
          w="auto"
          justifyContent="center"
          bg="brand.800"
          alignItems="center"
        >
          <HStack flexWrap="wrap">
            <Box flex="1">
              <Heading as="h1" size="4xl">
                Virtual conferences for social good
              </Heading>
              <Heading as="h2" size="lg" fontWeight="normal">
                Clowdr makes it easy to create an engaging virtual conference
                experience, giving you time to focus on the things that matter
              </Heading>
              <Button
                w="min-content"
                as={Link}
                fontSize="2xl"
                my={12}
                p={8}
                bgColor="brand.900"
                _hover={{
                  bgColor: "brand.700",
                }}
                to="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&amp;d=1198973227684402"
              >
                Request a demo
                <Icon ml={4} as={AiOutlineArrowRight} />
              </Button>
            </Box>
            <Box flex="1">
              <div
                style={{
                  margin: "1em",
                  width: "80%",
                  maxHeight: "30em",
                  textAlign: "left",
                }}
              >
                <Image
                  src="/Clowdr-logo.svg"
                  style={{
                    height: "30em",
                  }}
                />
              </div>
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
              fontSize="2xl"
              p={4}
              my={4}
              borderRadius="lg"
            >
              How do I organise video streaming and Q&amp;A?
            </Box>
            <Box
              bgColor="gray.200"
              w="max-content"
              fontSize="2xl"
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
              fontSize="2xl"
              p={4}
              my={4}
              borderRadius="lg"
            >
              How do I run poster sessions and exhibitions?
            </Box>
            <Box
              bgColor="gray.200"
              w="max-content"
              fontSize="2xl"
              p={4}
              my={4}
              borderRadius="lg"
              ml="auto"
            >
              What about providing booths for our sponsors?
            </Box>
          </Box>
          <Text>
            Clowdr solves these problems and more, giving you time to focus on
            the thing that really matters: bringing people together.
          </Text>
        </Container>

        <Box
          layerStyle="hero"
          px={{ base: 0, xl: 20 }}
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
            w="min-content"
            as={GatsbyLink}
            fontSize="2xl"
            my={12}
            p={8}
            bgColor="brand.900"
            _hover={{
              bgColor: "brand.700",
            }}
            to="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&amp;d=1198973227684402"
          >
            Learn more about Clowdr
            <Icon ml={4} as={AiOutlineArrowRight} />
          </Button>

          <Heading as="h2" size="2xl">
            Why go virtual with Clowdr?
          </Heading>

          <HStack mt={8} textAlign="center" alignItems="flex-start">
            <VStack flexBasis="0" flexGrow={1}>
              <Icon as={AiOutlineArrowsAlt} w={16} h={16} />
              <Heading as="h3">Scales to your event</Heading>
              <Text>
                Clowdr was founded by academics with decades of combined
                experience organising large, complex academic conferences. It
                handles everything from simple seminars to week-long,
                multi-track conferences with thousands of attendees.
              </Text>
            </VStack>
            <VStack flexBasis="0" flexGrow={1}>
              <Icon as={AiOutlineComment} w={16} h={16} />
              <Heading as="h3">A sociable experience</Heading>
              <Text>
                Clowdr lets your attendees talk to one another with text and
                video chat. You can set up your own custom meeting rooms,
                sponsor booths, announcement channels and more.
              </Text>
            </VStack>
            <VStack flexBasis="0" flexGrow={1}>
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

        {/*

        <Container text style={{ paddingTop: "4em", textAlign: "center" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Why go virtual with Clowdr?
          </Header>
        </Container>

        <Grid
          celled="internally"
          columns="equal"
          stackable
          style={{ marginTop: "4em" }}
        >
          <Grid.Row textAlign="center" style={{ padding: "2em 0" }}>
            <Grid.Column>
              <Icon
                name="smile outline"
                style={{ fontSize: "4em" }}
                color="teal"
              />
              <Header as="h3" style={{ fontSize: "2em" }}>
                Scales to your event
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr was founded by academics with decades of combined
                experience organising large, complex academic conferences. It
                handles everything from simple seminars to week-long,
                multi-track conferences with thousands of attendees.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon
                name="handshake outline"
                style={{ fontSize: "4em" }}
                color="purple"
              />
              <Header as="h3" style={{ fontSize: "2em" }}>
                A sociable experience
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr lets your attendees talk to one another with text and
                video chat. You can set up your own custom meeting rooms,
                sponsor booths, announcement channels and more.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon
                name="paper plane outline"
                style={{ fontSize: "4em" }}
                color="green"
              />
              <Header as="h3" style={{ fontSize: "2em" }}>
                By the community, for the community
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr is a social enterprise, incorporated as a Community
                Interest Company. Our mission is to make inclusive, accessible,
                climate-friendly virtual conferences just as socially engaging
                as physical conferences.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container text style={{ padding: "4em 0" }}>
          <Header as="h3" style={{ fontSize: "2em", marginTop: "1em" }}>
            Interested in using Clowdr?
          </Header>
          <p style={{ fontSize: "1.33em" }}>We can provide:</p>
          <List divided relaxed>
            <List.Item>
              <List.Header>Click-and-go</List.Header>
              <List.Content>
                We worry about the technology; you organize the conference.
                Recommended for events with a simple, single-track program.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Expert support</List.Header>
              <List.Content>
                You organize, we help. We'll advise you on how to plan and set
                up your conference and provide virtual on-site support to make
                sure everything runs smoothly. Recommended for more complex
                events, especially ones with multiple tracks.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Hands-on support</List.Header>
              <List.Content>
                We organize, you help. We'll take your requirements and deliver
                a successful event from start to finish.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Advanced customisation</List.Header>
              <List.Content>
                Want to wow your attendees with something new? We can design and
                build it.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Do-it-yourself</List.Header>
              <List.Content>
                Want to run the Clowdr platform yourself? We can help you with
                that.
              </List.Content>
            </List.Item>
          </List>
          <p style={{ fontSize: "1.33em" }}>
            If you're interested in using Clowdr, we'd love to hear from you.
          </p>
          <Button
            as="a"
            size="big"
            href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
            color="green"
            content="Contact us today"
            icon="mail"
          />
          <Button
            as="a"
            size="big"
            href="/pricing"
            color="green"
            content="View package pricing"
            icon="dollar"
          />
        </Container> */}
      </Layout>
    </>
  );
}
