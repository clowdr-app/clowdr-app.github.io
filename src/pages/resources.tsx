import {
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Feedback() {
  return (
    <>
      <Title title="Resources" />
      <Layout>
        <Container my={4}>
          <Heading as="h2" size="2xl">
            Resources
          </Heading>

          <Text>
            We are beginning to put together a number of pages answering
            frequently asked questions. If you have suggestions, please consider
            leaving a comment on{" "}
            <Link
              isExternal
              href="https://github.com/clowdr-app/clowdr-app.github.io/issues"
            >
              our GitHub repository
            </Link>
            .
          </Text>
        </Container>
        <Container my={4}>
          <VStack
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={4}
            mb={4}
          >
            <Heading as="h3" size="lg">
              Videos
            </Heading>
            <UnorderedList>
              <ListItem>
                <Link as={GatsbyLink} to="/resources/video-subtitles">
                  Preparing, uploading and editing captions
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
          <VStack
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={4}
            mb={4}
          >
            <Heading as="h3" size="lg">
              Accessibility
            </Heading>
            <UnorderedList>
              <ListItem>
                <Link as={GatsbyLink} to="/resources/accessibility">
                  Overview of Clowdr's accessibility and inclusivity features
                </Link>
              </ListItem>
              <ListItem>
                <Link as={GatsbyLink} to="/resources/video-subtitles">
                  Pre-recorded and live video captions
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
          <VStack
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={4}
            mb={4}
          >
            <Heading as="h3" size="lg">
              Organizer Guides
            </Heading>
            <UnorderedList>
              <ListItem>
                <Link as={GatsbyLink} to="/resources/tutorial-instructions">
                  External integration: Hosting a tutorial or workshop with
                  Clowdr and Zoom
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
        </Container>
      </Layout>
    </>
  );
}
