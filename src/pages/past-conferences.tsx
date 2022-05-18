import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/layout";
import Title from "../components/title";

export default function PastConferences() {
  return (
    <>
      <Title title="Past conferences" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Conferences we&apos;ve hosted
          </Heading>
        </Container>
      </Layout>
    </>
  );
}
