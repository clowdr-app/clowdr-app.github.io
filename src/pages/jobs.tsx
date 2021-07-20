import { EmailIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
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

          <Heading as="h3" size="xl" textAlign="center" w="100%" mt={6}>
            Open positions
          </Heading>

          <Text>
            Clowdr is a climate-focused social enterprise. All our positions
            offer fully remote, flexible working from almost anywhere in the
            world. Our software is open source and we are currently a small
            team, meaning you have the opporunity to make a direct and big
            impact on our product and users.
          </Text>

          <SimpleGrid
            justifyContent="center"
            mt={6}
            flexWrap="wrap"
            columns={[1, 1, 3]}
            spacingY={2}
            spacingX={4}
          >
            <Button
              as={Link}
              href="#frontend-position"
              alignSelf="center"
              title="Find out about Clowdr's Front-end developer position"
            >
              <LinkIcon mr={2} />
              Front-end developer
            </Button>
            <Button
              as={Link}
              href="#full-stack-position"
              alignSelf="center"
              title="Find out about Clowdr's Full-stack engineer position"
            >
              <LinkIcon mr={2} />
              Full-stack engineer
            </Button>
            <Button
              as={Link}
              href="#ux-ui-position"
              alignSelf="center"
              title="Find out about Clowdr's UX/UI designer position"
            >
              <LinkIcon mr={2} />
              UX/UI designer
            </Button>
          </SimpleGrid>

          <VStack
            bg="green.50"
            shadow="md"
            rounded="lg"
            my={8}
            p={8}
            alignItems="flex-start"
            spacing={6}
          >
            <Heading as="h4" size="lg" p={0} mt={0} id="frontend-position">
              Front-end developer
            </Heading>

            <Text> Clowdr's aim is to make attending virtual
              conferences as good as, or better than, physical
              ones. By doing this, we reduce the carbon footprint of
              long-distance travel to meetings that can instead take
              place online.  </Text>

            <Text> One of our key challenges is that every conference
              brings hundreds (or thousands) of new users that have
              never seen Clowdr before. We want them to find what
              they're looking for easily and to have a great time
              participating once they're there. To do this, we need a
              UI that stays fast and intuitive while also providing a
              space for messy, complex, real-time interaction between
              users.  </Text>

            <Text> We're looking for someone who wants to build the
              future of online conferences. You should be able to
              build and maintain large, modern front-end
              applications. Ideally, you have an instinct for slick
              user experiences and an eye for design.  </Text>

            <Flex w="100%" flexWrap="wrap">
              <VStack
                flexGrow={0}
                flexShrink={0}
                flexBasis={["100%", "50%"]}
                px={[0, 2]}
              >
                <Heading as="h5" fontSize="lg">
                  Essential skills
                </Heading>
                <Divider borderColor="gray.400" w="80px" />
                <UnorderedList>
                  <ListItem>Front-end web-app development</ListItem>
                  <ListItem>TypeScript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>GraphQL</ListItem>
                </UnorderedList>
              </VStack>

              <VStack
                flexGrow={0}
                flexShrink={0}
                flexBasis={["100%", "50%"]}
                px={[0, 2]}
              >
                <Heading as="h5" fontSize="lg">
                  Nice to have
                </Heading>
                <Divider borderColor="gray.400" w="80px" />
                <UnorderedList>
                  <ListItem>User experience design (UX)</ListItem>
                  <ListItem>Chakra UI</ListItem>
                  <ListItem>Hasura</ListItem>
                  <ListItem>NodeJS (TS) / backend development</ListItem>
                  <ListItem>AWS</ListItem>
                </UnorderedList>
              </VStack>
            </Flex>

            <SimpleGrid
              justifyContent="center"
              mt={6}
              flexWrap="wrap"
              columns={[1, 1, 3]}
              spacingY={2}
              spacingX={4}
              w="100%"
            >
              <Button
                as={Link}
                href="#details"
                colorScheme="blue"
                title="More information about Clowdr's role such as working hours"
              >
                <LinkIcon mr={2} />
                More info
              </Button>
              <Button
                as={Link}
                leftIcon={<AiOutlineTeam />}
                href="#working-at-clowdr"
                colorScheme="blue"
                title="Find out more about working at Clowdr"
              >
                Working at Clowdr
              </Button>
              <Button
                as={Link}
                href="#apply"
                colorScheme="blue"
                title="Apply for Clowdr's Front-end developer position"
              >
                <LinkIcon mr={2} />
                Apply now
              </Button>
            </SimpleGrid>
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
            <Heading as="h4" size="lg" p={0} mt={0} id="full-stack-position">
              Full-stack engineer
            </Heading>

            <Text> Virtual conferences are complex beasts.  Clowdr is
              already a rich platform, but there are dozens more
              features that our users have asked for and that we'd
              like to build.  But delighting users also means building
              increasingly complex infrastructure behind the
              scenes. This means we need developers who can tie
              everything together: from the front end, through our
              back end services, the data API, and down to the cloud
              infrastructure itself.  </Text>

            <Text> We're looking for an experienced software developer
              with an interest in both front- and back-end
              implementation. You should be comfortable implementing
              backend APIs and services; working on our build and
              deployment systems; designing and securing our cloud
              infrastructure; deploying monitoring and alerts; and
              undertaking load testing. Ideally, you have significant
              experience working on highly-scalable, real-world cloud
              software.  </Text>

            <Flex w="100%" flexWrap="wrap">
              <VStack
                flexGrow={0}
                flexShrink={0}
                flexBasis={["100%", "50%"]}
                px={[0, 2]}
              >
                <Heading as="h5" fontSize="lg">
                  Essential skills
                </Heading>
                <Divider borderColor="gray.400" w="80px" />
                <UnorderedList>
                  <ListItem>Web-app development</ListItem>
                  <ListItem>TypeScript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>Cloud infrastructure (particularly AWS)</ListItem>
                  <ListItem>GraphQL</ListItem>
                  <ListItem>Familiarity with Postgres</ListItem>
                  <ListItem>NodeJS (TS) / backend development</ListItem>
                </UnorderedList>
              </VStack>

              <VStack
                flexGrow={0}
                flexShrink={0}
                flexBasis={["100%", "50%"]}
                px={[0, 2]}
              >
                <Heading as="h5" fontSize="lg">
                  Nice to have
                </Heading>
                <Divider borderColor="gray.400" w="80px" />
                <UnorderedList>
                  <ListItem>Chakra UI</ListItem>
                  <ListItem>Hasura</ListItem>
                  <ListItem>Heroku</ListItem>
                  <ListItem>
                    AWS Media Services expertise
                  </ListItem>
                  <ListItem>Technical writing</ListItem>
                </UnorderedList>
              </VStack>
            </Flex>

            <SimpleGrid
              justifyContent="center"
              mt={6}
              flexWrap="wrap"
              columns={[1, 1, 3]}
              spacingY={2}
              spacingX={4}
              w="100%"
            >
              <Button
                as={Link}
                href="#details"
                colorScheme="blue"
                title="More information about Clowdr's role such as working hours"
              >
                <LinkIcon mr={2} />
                More info
              </Button>
              <Button
                as={Link}
                leftIcon={<AiOutlineTeam />}
                href="#working-at-clowdr"
                colorScheme="blue"
                title="Find out more about working at Clowdr"
              >
                Working at Clowdr
              </Button>
              <Button
                as={Link}
                href="#apply"
                colorScheme="blue"
                title="Apply for Clowdr's Full-stack engineer position"
              >
                <LinkIcon mr={2} />
                Apply now
              </Button>
            </SimpleGrid>
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
            <Heading as="h4" size="lg" p={0} mt={0} id="ux-ui-position">
              UX / UI designer
            </Heading>

            <Text>
              Clowdr is a large and complex Progressive Web App. Your main task
              will be to help us tame that complexity into an easy-to-use
              experience for the wide variety of people that attend conferences
              on our platform. You will be responsible for the UX/UI design
              process (and if you are interested in helping with the frontend
              implementation, that's cool too!) We expect you to undertake the
              creation of personas and user stories, refine UX designs through
              trials on our groups of willing testers (real conference attendees
              from our community) and translate those user experiences into a
              modern, sleek UI design.
            </Text>

            <Text>
              Our ideal candidate for this position is a designer with 2 to 4
              years of experience, with an interest beyond just the UX/UI design
              reaching into front-end implementation. You should have an eye for
              what looks good and an instinct for good user experience.
            </Text>

            <Flex w="100%" flexWrap="wrap">
              <VStack
                flexGrow={0}
                flexShrink={0}
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
                flexGrow={0}
                flexShrink={0}
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
              justifyContent="center"
              mt={6}
              flexWrap="wrap"
              columns={[1, 1, 3]}
              spacingY={2}
              spacingX={4}
              w="100%"
            >
              <Button
                as={Link}
                href="#details"
                colorScheme="blue"
                title="More information about Clowdr's role such as working hours"
              >
                <LinkIcon mr={2} />
                More info
              </Button>
              <Button
                as={Link}
                leftIcon={<AiOutlineTeam />}
                href="#working-at-clowdr"
                colorScheme="blue"
                title="Find out more about working at Clowdr"
              >
                Working at Clowdr
              </Button>
              <Button
                as={Link}
                href="#apply"
                colorScheme="blue"
                title="Apply for Clowdr's UX/UI designer position"
              >
                <LinkIcon mr={2} />
                Apply now
              </Button>
            </SimpleGrid>
          </VStack>

          <VStack
            bg="gray.50"
            shadow="md"
            rounded="lg"
            my={8}
            p={8}
            spacing={6}
            alignItems="flex-start"
            mb={20}
          >
            <Heading as="h4" size="lg" p={0} mt={0} id="details">
              For all current positions
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
                Your chosen working hours should have at least 2 hours overlap
                with usual working hours of the UK.
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

            <Divider borderColor="gray.300" w="80%" alignSelf="center" />

            <Text>
              Clowdr is incorporated in the UK, but there is no need to be
              resident or have the right to work in the UK for this role. We are
              not offering visa sponsorship at this time.
            </Text>
          </VStack>

          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            w="100%"
            id="working-at-clowdr"
          >
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
            mb={20}
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
                at a wide range of hours. Our existing engineering team works in
                European timezones.
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

              <Text>
                {" "}
                Working at Clowdr is an opportunity to play a critical role in a
                public-interest, community-focused company that is developing
                cutting-edge, open-source technology for a hot market sector,
                driven by a passion to combat climate change while increasing
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
          </VStack>

          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            w="100%"
            id="working-at-clowdr"
          >
            Apply to a position
          </Heading>

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

            <Button
              as="a"
              href="mailto:jobs@clowdr.org"
              alignSelf="center"
              title="Apply for a job at Clowdr"
            >
              <EmailIcon mr={2} /> Apply via jobs@clowdr.org
            </Button>

            <Text>
              (We are not looking to partner with external recruitment agencies
              at this time.)
            </Text>
          </VStack>
        </Container>
      </Layout>
    </>
  );
}
