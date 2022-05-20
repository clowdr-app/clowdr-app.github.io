import { StarIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/layouts/main-layout";
import Title from "../components/title";

export default function Sponsor() {
  return (
    <>
      <Title title="Sponsorship" />
      <Layout>
        <VStack spacing={8}>
          <Container my={8} maxW="4xl">
            <Heading as="h1" size="3xl">
              Sponsor the Midspace project
            </Heading>
            <Text fontSize="xl">
              Your support will enable us to continue working to increase
              diversity and inclusion of academic conferences.
            </Text>
          </Container>
          <Container my={8} maxW="4xl">
            <Heading as="h2" size="2xl">
              Why support the Midspace project?
            </Heading>
            <Text>
              Conferences are one of the central places where research is
              disseminated, new ideas are born and collaborations form. It is
              important that we maximise diversity and inclusion at these
              events. Midspace is part of the solution to this challenge.
            </Text>
            <Text>
              Virtual conferences offer both challenges and opportunity for
              increasing access to events. On the one hand, they enable global
              participation of a broader range of people, with minimal climate
              impact. They can also dramatically reduce the cost of attending
              conferences, which benefits both researchers and students who have
              limited budget.
            </Text>
            <Text>
              However, virtual conferences pose challenges for accessibility,
              interactivity and long-term viability. The Midspace project is
              tackling each of these through development of its platform,
              offering that platform as hosted service at-cost and through
              researching user experience.
            </Text>
          </Container>
          <Container my={8} maxW="4xl">
            <Heading as="h2" size="2xl">
              Donations
            </Heading>
            <Text>
              We are have applied to GitHub Sponsors through which you will be
              able to make one-off or recurring donations to the project. Please
              check back in a week or two!
            </Text>
          </Container>
          <Container my={8} maxW="4xl">
            <Heading as="h2" size="2xl">
              Sponsorship
            </Heading>
            <Text>
              The Midspace project is developed, maintained and operated by a
              core team, led by its founding academics, and contributed to by a
              wide range of volunteers and researchers. We rely on donations and
              sponsorships to continue the advanced engineering necessary for
              the cloud platform and to support research into virtual conference
              user experience.
            </Text>
            <Text mt={8}>
              If you or your organization might be interested in sponsoring
              Midspace, please contact us at{" "}
              <Link href="mailto:hello@midspace.app">hello@midspace.app</Link>{" "}
              to start the conversation.
            </Text>
          </Container>
          <Container my={8} maxW="8xl">
            <Wrap py={16} w="100%" justify="center" spacing={8}>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(25% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      The Student
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $1k+ / year
                    </Text>
                  </VStack>
                  <UnorderedList color="gray.600">
                    <ListItem>
                      Receive ongoing acknowledgements on social media channels
                    </ListItem>
                    <ListItem>
                      Have a small logo displayed on the Midspace website and
                      GitHub repositories
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </WrapItem>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(25% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      The Author
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $10k+ / year
                    </Text>
                  </VStack>
                  <UnorderedList color="gray.600">
                    <ListItem>
                      Have your logo and story featured in the Supporter
                      Spotlight on the website
                    </ListItem>
                    <ListItem>
                      Have a medium-sized logo displayed on the Midspace website
                      and GitHub repositories
                    </ListItem>
                    <ListItem>
                      Receive ongoing recognition on our social media pages
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </WrapItem>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(25% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      The Organizer
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $30k+ / year
                    </Text>
                  </VStack>
                  <UnorderedList color="gray.600">
                    <ListItem>
                      A full interview for the Midspace blog and inclusion in
                      one video on YouTube
                    </ListItem>
                    <ListItem>
                      Have your logo and story featured in the Supporter
                      Spotlight on the website
                    </ListItem>
                    <ListItem>
                      Have your logo displayed prominently on the Midspace
                      website and GitHub repositories
                    </ListItem>
                    <ListItem>
                      Receive ongoing recognition on our social media pages
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </WrapItem>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(50% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(25% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      The Developer
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $90k+ / year
                    </Text>
                  </VStack>
                  <UnorderedList color="gray.600">
                    <ListItem>Everything in The Organizer membership</ListItem>
                    <ListItem>
                      Have your logo included in the Sponsors section at all
                      small and medium sized conferences hosted on Midspace
                    </ListItem>
                    <ListItem>
                      Opportunities to engage with conferences using Midspace
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </WrapItem>
            </Wrap>
          </Container>
          <Container my={8} maxW="4xl">
            <VStack>
              <Heading as="h3" size="xl">
                Conferences using Midspace
              </Heading>
              <Text>
                We ask that conferences using the Midspace software contribute
                to the cost of development and maintenance through one of the
                packages below. On our hosted service, these can be added as
                part of your conference subscription. For conferences
                self-hosting Midspace, please contact us at{" "}
                <Link href="mailto:hello@midspace.app">hello@midspace.app</Link>
                .
              </Text>
            </VStack>
          </Container>
          <Container my={8} maxW="8xl">
            <Wrap py={16} w="100%" justify="center" spacing={8}>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(33% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      Small conference
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $100+
                    </Text>
                  </VStack>
                </VStack>
              </WrapItem>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(33% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      Medium conference
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $2,000+
                    </Text>
                  </VStack>
                </VStack>
              </WrapItem>
              <WrapItem
                borderRadius="md"
                border="3px solid"
                borderColor="purple.300"
                bg="white"
                p={6}
                flex={[
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(100% - (2 * var(--chakra-space-8)))",
                  "1 0 calc(33% - (2 * var(--chakra-space-8)))",
                ]}
                minW="15em"
              >
                <VStack alignItems="flex-start" spacing={8}>
                  <HStack>
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                    <StarIcon color="purple.500" />
                  </HStack>
                  <VStack alignItems="flex-start">
                    <Heading as="h4" size="xl" fontWeight="bold" pt={0}>
                      Large conference
                    </Heading>
                    <Text fontWeight={600} fontSize="lg">
                      USD $10,000+
                    </Text>
                  </VStack>
                </VStack>
              </WrapItem>
            </Wrap>
          </Container>
          <Container h={40} textAlign="center"></Container>
        </VStack>
      </Layout>
    </>
  );
}
