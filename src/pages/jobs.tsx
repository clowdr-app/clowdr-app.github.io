import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function About() {
  return (
    <>
      <Title title="Jobs" />
      <Layout>
        <Container my={12}>
          <Heading as="h2" size="2xl" textAlign="center" w="100%">
            Join our team
          </Heading>

          <VStack
            bg="green.50"
            shadow="md"
            rounded="lg"
            my={8}
            p={8}
            alignItems="flex-start"
            spacing={6}
          >
            <Heading as="h4" size="lg" p={0} mt={0}>
              UX / UI designer
            </Heading>

            <Text>
              Our ideal candidate for this position is a designer with 2 to 4
              years of experience, with an interest beyond just the UX/UI design
              reaching into front-end implementation. You should have an eye for
              what looks good and an instinct for good user experience.
            </Text>

            <Flex w="100%" flexWrap="wrap">
              <VStack
                flexGrow="0"
                flexShrink="0"
                flexBasis={["100%", "50%"]}
                px={[0, 2]}
              >
                <Heading as="h5" fontSize="lg">
                  Essential skills
                </Heading>
                <Divider borderColor="gray.400" w="80px" />
                <UnorderedList>
                  <ListItem>User experience design (UX)</ListItem>
                  <ListItem>User interface design (UI)</ListItem>
                  <ListItem>User studies / research</ListItem>
                  <ListItem>Accessible design</ListItem>
                  <ListItem>React-ready design</ListItem>
                </UnorderedList>
              </VStack>

              <VStack
                flexGrow="0"
                flexShrink="0"
                flexBasis={["100%", "50%"]}
                px={[0, 2]}
              >
                <Heading as="h5" fontSize="lg">
                  Nice to have
                </Heading>
                <Divider borderColor="gray.400" w="80px" />
                <UnorderedList>
                  <ListItem>Chakra UI</ListItem>
                  <ListItem>Front-end development</ListItem>
                  <ListItem>TypeScript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>GraphQL</ListItem>
                </UnorderedList>
              </VStack>
            </Flex>

            <SimpleGrid
              fontSize="sm"
              columns={2}
              spacingY={1}
              spacingX={4}
              templateColumns="max-content auto"
              maxW="100%"
              flexWrap="wrap"
            >
              <Text fontWeight="bold" p={0} m={0}>
                Hours
              </Text>
              <Text p={0} m={0}>
                Full-time (8hrs/day), flexible (see timezone below)
              </Text>
              <Text fontWeight="bold" p={0} m={0}>
                Location
              </Text>
              <Text p={0} m={0}>
                Remote (from most countries)
              </Text>
              <Text fontWeight="bold" p={0} m={0}>
                Timezone
              </Text>
              <Text p={0} m={0}>
                Your chosen working hours should have at least 4 hours overlap
                with usual working hours of GMT.
              </Text>
              <Text fontWeight="bold" p={0} m={0}>
                Salary
              </Text>
              <Text p={0} m={0}>
                Comparable to USD $80k+, depending on experience
              </Text>
              <Text fontWeight="bold" p={0} m={0}>
                Start date
              </Text>
              <Text p={0} m={0}>
                As soon as convenient
              </Text>
              <Text fontWeight="bold" p={0} m={0}>
                Benefits
              </Text>
              <Text p={0} m={0}>
                Pension, holiday (min 24 days pa.) and other usual benefits.
                Depending on location, may also include health insurance and
                similar benefits.
              </Text>
            </SimpleGrid>

            <VStack alignItems="flex-start">
              <Heading as="h5" fontSize="lg">
                Goals
              </Heading>

              <Text>
                Clowdr is a large and complex progressive-web-app. Your main
                task will be to tame that complexity into an easy-to-use
                experience for the wide variety of people that attend
                conferences on our platform.
              </Text>
            </VStack>

            <VStack alignItems="flex-start">
              <Heading as="h5" fontSize="lg">
                Responsibilities
              </Heading>

              <Text>
                You will be responsible for the UX/UI design process (and if you
                are interested in helping with the frontend implementation,
                that's cool too!) We expect you to undertake the creation of
                personas and user stories, refine UX designs through trials on
                our groups of willing testers (real conference attendees from
                our community) and translate those user experiences into a
                modern, sleek UI design.
              </Text>
            </VStack>

            <Center w="100%">
              <Button as="a" href="#apply">
                Apply now
              </Button>
            </Center>
          </VStack>

          <VStack
            bg="gray.50"
            shadow="md"
            rounded="lg"
            my={8}
            p={8}
            spacing={6}
            alignItems="flex-start"
          >
            <VStack alignItems="flex-start">
              <Heading as="h3" fontSize="xl" p={0} mt={0}>
                What we're looking for
              </Heading>

              <Text>
                You should be friendly and easy to work with, and comfortable
                working remotely with an internationally distributed team. We
                encourage flexible working and asynchronous collaboration, but
                the international nature of our business means meetings can be
                at a wide range of hours. Our existing engineering team work
                from European timezones.
              </Text>

              <Text>
                Clowdr is incorporated in the UK, but there is no need to be
                resident or have the right to work in the UK for this role. (We
                are not offering visa sponsorship at this time.)
              </Text>

              <Text>
                Ideal candidates for these positions will have a broad skillset
                related to web application development, with at least 3-5 years
                of experience designing or developing web-based systems. Talent
                is more important than specific skills, so it's still worth
                contacting us if you don't precisely match the specific job
                descriptions above.
              </Text>

              <Text>
                The ideal candidate for any position will be comfortable
                pitching in ideas or code at all levels of our stack when
                necessary. We develop all of our software{" "}
                <a href="https://github.com/clowdr-app/clowdr">in the open</a>.
              </Text>
            </VStack>

            <Divider borderColor="gray.300" w="80%" alignSelf="center" />

            <VStack alignItems="flex-start">
              <Heading as="h3" fontSize="xl" p={0} mt={0}>
                What we offer
              </Heading>

              <Text>
                A critical role in a public-interest, community-focused company
                that is developing cutting-edge, open-source technology for a
                hot market sector, driven by a passion to combat climate change
                while increasing inclusivity at conferences.
              </Text>

              <Text>
                We enjoy a friendly, flexible remote working environment.
                Sometimes a live conference can get a bit stressful but the
                challenge and thrill make it worthwhile and fun. There's nothing
                quite like the feeling of 2,000 conference attendees expressing
                appreciation for your product at the end of a 3 week conference!
              </Text>
            </VStack>
          </VStack>

          <VStack
            alignItems="flex-start"
            bg="gray.50"
            shadow="md"
            rounded="lg"
            my={8}
            p={8}
          >
            <Heading as="h3" fontSize="xl" p={0} mt={0}>
              The company
            </Heading>

            <Text>
              Clowdr is a young and quickly growing conference platform that
              aims to reduce the carbon footprint of academic conferences by
              offering a more attractive virtual alternative.
            </Text>

            <Text>
              Clowdr CIC has 5 founders, all contributing to every aspect of the
              business. Ed and Ross are full time CEO and CTO. Both are software
              developers by background, though Ed also has entrepreneurship
              training. Benjamin, Jonathan, and Crista remain full-time in their
              academic positions and contribute as much as possible to Clowdr.
              Ed and Ross currently do the bulk of technical development, and
              the whole team contributes to business development and operations.
              We have recently been joined by a new business development manager
              to focus on scaling up the latter activities.
            </Text>
          </VStack>

          <VStack
            bg="green.50"
            shadow="md"
            rounded="lg"
            my={8}
            p={8}
            spacing={4}
            alignItems="flex-start"
          >
            <Heading as="h3" fontSize="xl" p={0} mt={0} id="apply">
              To apply
            </Heading>

            <Text>
              Please send your CV, together with a cover letter telling us why
              Clowdr might be a good fit for you and vice versa. Applications
              will be considered as they arrive.
            </Text>

            <Button as="a" href="mailto:jobs@clowdr.org" alignSelf="center">
              Apply via jobs@clowdr.org
            </Button>
          </VStack>

          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>
              We are not looking for external recruitment partners at this time.
            </AlertDescription>
          </Alert>
        </Container>
      </Layout>
    </>
  );
}
