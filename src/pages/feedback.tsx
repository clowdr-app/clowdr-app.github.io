import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Feedback() {
  return (
    <>
      <Title title="Feedback" />
      <Layout>
        <Container my={12}>
          <Heading as="h2" size="2xl">
            Feedback
          </Heading>
          <Heading as="h3" size="xl">
            Reporting issues
          </Heading>

          <Text>
            We welcome feedback from users! If you have a bug to report or an
            improvement to suggest, please use{" "}
            <a href="https://github.com/clowdr-app/clowdr/issues">
              our issue tracker
            </a>{" "}
            to tell us about it!
          </Text>

          <Heading as="h3" size="xl">
            Contributing to Clowdr
          </Heading>

          <Text>
            The Clowdr platform is 100% open source: your contributions are
            welcome! If you'd like to build it yourself, you are welcome to
            clone{" "}
            <a href="https://github.com/clowdr-app/clowdr">our GitHub repo</a>.
          </Text>

          <Alert status="info">
            <AlertIcon />
            <Box>
              <Text>
                Clowdr relies on some third-party services and infrastructure.
                You'll need to set these up for your local instance of Clowdr.
                Most have a free tier, but some may cost money to run.{" "}
              </Text>
              <Text>
                Full setup instructions can be found in the repository.
              </Text>
            </Box>
          </Alert>
        </Container>
      </Layout>
    </>
  );
}
