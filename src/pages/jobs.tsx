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
              Open position: Front-end developer
            </Heading>

            <Text>
              Our ideal candidate for this position is an experienced developer
              with a particular interest in front-end design and implementation.
              You should have an eye for what looks good and an instinct for good
              user experience.
              </Text>

              <Text>
              <b>Essential skills: </b>
              Front-end web application development,
              TypeScript,
              React.
            {" "}
            <b>Nice to have: </b>
              User experience design (UX),
              Chakra UI,
              Heroku,
              GraphQL,
              AWS,
              Hasura.
            </Text>
          </VStack>

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
              Open position: DevOps / back-end developer
            </Heading>

            <Text>
              Our ideal candidate for this position is an experienced software
              developer with an interest in infrastructure and DevOps. You would
              be comfortable implementing backend APIs and services, working on
              our build and deployment systems; designing and securing our AWS
              infrastructure; deploying monitoring, alerting and load testing.
              Ideally, you would have significant experience working on
              cloud-hosted applications; even better if at serious
              scale.
              </Text>

              <Text>
            <b>Essential skills: </b>
              Web application development,
              Typescript,
              Cloud infrastructure (particularly AWS).
            {" "}
            <b>Nice to have: </b>
              Postgres,
              Heroku,
              Hasura,
              GraphQL,
              Technical writing.
            </Text>
          </VStack>

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
              Open position: UX / UI designer
            </Heading>

              <Text>
                Clowdr is a large and complex Progressive Web App. Your main
                task will be to help us tame that complexity into an easy-to-use
                experience for the wide variety of people that attend
                conferences on our platform.

                You will be responsible for the UX/UI design process (and if you
                are interested in helping with the frontend implementation,
                that's cool too!) We expect you to undertake the creation of
                personas and user stories, refine UX designs through trials on
                our groups of willing testers (real conference attendees from
                our community) and translate those user experiences into a
                modern, sleek UI design.
              </Text>

            <Text>
              Our ideal candidate for this position is a designer with 2 to 4
              years of experience, with an interest beyond just the UX/UI design
              reaching into front-end implementation. You should have an eye for
              what looks good and an instinct for good user experience.
            </Text>

              <Text>
            <b>Essential skills: </b>
              User experience design (UX),
              User interface design (UI),
              User studies / research,
              Accessible design,
              React-ready design.
            {" "}
            <b>Nice to have: </b>
              Chakra UI,
              Front-end development,
              TypeScript,
              React,
              GraphQL.
            </Text>
          </VStack>

          <Heading as="h2" size="2xl" textAlign="center" w="100%">
            Working at Clowdr
          </Heading>


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
                Who we're looking for
              </Heading>

              <Text>
                You should be friendly, easy to work with, and comfortable
                working remotely with an internationally distributed team. We
                encourage flexible working and asynchronous collaboration, but
                the international nature of our business means meetings can be
                at a wide range of hours. Our existing engineering team works
                in European timezones.
              </Text>

              <Text>
                Ideal candidates for these positions will have a broad skillset
                related to web application development, with at least 3-5 years
                of experience designing or developing web-based systems. Talent
                is more important than specific skills, so it's still worth
                contacting us if you don't precisely match the specific job
                descriptions above.
              </Text>

            </VStack>

            <Divider borderColor="gray.300" w="80%" alignSelf="center" />

            <VStack alignItems="flex-start">
              <Heading as="h3" fontSize="xl" p={0} mt={0}>
                What we offer
              </Heading>

              <Text> Working at Clowdr is an opportunity to play a
                critical role in a public-interest, community-focused
                company that is developing cutting-edge, open-source
                technology for a hot market sector, driven by a
                passion to combat climate change while increasing
                inclusiveness and accessibility of virtual conferences.
              </Text>

              <Text>
                We enjoy a friendly, flexible remote working environment.
                Sometimes a live conference can get a bit stressful but the
                challenge and thrill make it worthwhile and fun. There's nothing
                quite like the feeling of 2,000 conference attendees expressing
                appreciation for your product at the end of a 3 week conference!
              </Text>

              <Text>
                We develop all of our software{" "}
                <a href="https://github.com/clowdr-app/clowdr">in the open</a>.
              </Text>
            </VStack>

            <Divider borderColor="gray.300" w="80%" alignSelf="center" />

            <VStack alignItems="flex-start">
              <Heading as="h3" fontSize="xl" p={0} mt={0}>
                The nitty-gritty 
              </Heading>

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
            </VStack>

              <Text>
                Clowdr is incorporated in the UK, but there is no need to be
                resident or have the right to work in the UK for this role. We
                are not offering visa sponsorship at this time.
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

            <Text>
                          (We are not looking to partner with external
                          recruitment agencies at this time.)
            </Text>
          </VStack>
        </Container>
      </Layout>
    </>
  );
}
