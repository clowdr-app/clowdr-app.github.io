import { Container, Heading, Link, Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Layout } from "../components/layouts/main-layout";
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
            Most issues can be solved quickly via our{" "}
            <Link as={GatsbyLink} to="/resources">
              resources
            </Link>{" "}
            or by the people organizing your conference.
          </Text>
          <Text>
            First, please try contacting your conference organizers. They are
            usually best placed to resolve your issue, whether it&apos;s about
            registration, connecting to an event or a bug in the software. They
            will also be able to tell if you they are using our hosted services
            or are self-hosting the Midspace software.
          </Text>
          <Text>
            We are only able to assist with conferences hosted on our service.
            We are not able to help attendees, speakers or other users of
            self-hosted instances of the Midspace software. If you are unable to
            resolve your problem via your conference organizers and accessing a
            conference hosted on our services, please contact us via{" "}
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
