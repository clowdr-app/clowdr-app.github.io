import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function Feedback() {
  return (
    <>
      <Title title="Contact Us" />
      <Layout>
        <Container my={12}>
          <Heading as="h2" size="2xl">
            Contact Us
          </Heading>
          <Heading as="h3" size="xl">
            Need support?
          </Heading>

          <Text>
            Most issues can be solved quickly by the person or people organising
            your conference. Please try contacting them first! Organisers have a
            direct line to Clowdr and we can help them resolve complex issues.
          </Text>

          <Text>
            If you are unable to resolve your problem through your conference
            organisers, email us at{" "}
            <Link href="mailto:support@clowdr.org">support@clowdr.org</Link>.
          </Text>

          <Heading as="h3" size="xl">
            Contributing to Clowdr
          </Heading>

          <Heading as="h4" size="lg">
            Report bugs and feature requests
          </Heading>

          <Text>
            We welcome feedback from users! If you have a bug to report or an
            improvement to suggest, please use{" "}
            <a href="https://github.com/clowdr-app/clowdr/issues">
              our issue tracker
            </a>{" "}
            to tell us about it!
          </Text>

          <Heading as="h4" size="lg">
            Contribute to Clowdr's code
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

          <Heading as="h3" size="xl">
            Something else?
          </Heading>

          <Text>
            If you are interested in using Clowdr, we highly recommend{" "}
            <Link href="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&amp;d=1198973227684402">
              requesting a demo
            </Link>
            . Our dedicated form contains all the questions that help us respond
            to you as fast and accurately as possible.
          </Text>
          <Text>
            Want to talk to us directly about something?{" "}
            <Link href="mailto:welcome@clowdr.org">Drop us an email</Link>.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
