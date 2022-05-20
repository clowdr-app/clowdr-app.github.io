import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/layouts/main-layout";
import Title from "../components/title";

export default function PastConferences() {
  return (
    <>
      <Title title="Past conferences" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Conferences using Midspace
          </Heading>
          <Text>TODO:</Text>
        </Container>
      </Layout>
    </>
  );
}
