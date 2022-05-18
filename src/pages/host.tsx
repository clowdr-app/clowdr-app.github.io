import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/layout";
import Title from "../components/title";

export default function HostAConference() {
  return (
    <>
      <Title title="Host a conference" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Host a conference
          </Heading>
        </Container>
      </Layout>
    </>
  );
}
