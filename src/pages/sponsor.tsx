import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/layouts/main-layout";
import Title from "../components/title";

export default function Sponsor() {
  return (
    <>
      <Title title="Sponsorship" />
      <Layout>
        <Container my={8}>
          <Heading as="h1" size="3xl">
            Sponsor the Midspace project
          </Heading>
        </Container>
      </Layout>
    </>
  );
}
