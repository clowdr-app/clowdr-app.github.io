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
      <Title title="Feedback" />
      <Layout>
        <Container my={4}>
          <Heading as="h2" size="2xl">
            FAQ
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
                <Link as={GatsbyLink} to="/faq/video-subtitles">
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
                <Link as={GatsbyLink} to="/faq/video-subtitles">
                  Pre-recorded and live video captions
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
        </Container>
      </Layout>
    </>
  );
}
