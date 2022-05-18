import { Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/layout";
import Title from "../components/title";

export default function Contact() {
  return (
    <>
      <Title title="Contact us" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Contact us
          </Heading>
        </Container>
        <Container my={8}>
          <Heading as="h2" size="2xl">
            Need support?
          </Heading>
          <Text fontSize="xl">
            Most issues can be solved quickly by the people organizing your
            conference.
          </Text>
          <Text>
            Please try contacting them first. Organizers have a direct line to
            Midspace and we can help them resolve complex issues.
          </Text>
          <Text>
            If you are unable to resolve your problem via your conference
            organizers, please contact us via{" "}
            <Link href="https://support.midspace.app/">our support desk</Link>.
          </Text>
        </Container>
        <Container my={8}>
          <Heading as="h2" size="2xl">
            Report bugs and feature requests
          </Heading>
          <Text>
            We welcome feedback from users! If you have a bug to report or an
            improvement to suggest, please tell us about it via{" "}
            <Link href="https://github.com/clowdr-app/clowdr/issues">
              GitHub
            </Link>
            .
          </Text>
          <Heading as="h2" size="2xl">
            Contribute to the code
          </Heading>
          <Text>
            The Midspace (formerly Clowdr) platform is 100% open source: your
            contributions are welcome! If you&apos;d like to build it yourself,
            you are welcome to clone{" "}
            <Link href="https://github.com/clowdr-app/clowdr">
              our GitHub repo
            </Link>
            .
          </Text>
        </Container>
      </Layout>
    </>
  );
}
