import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <>
      <Title title="" />
      <Layout>
        <Container my={40}>
          <VStack>
            <Heading as="h1" size="3xl">
              Accessible virtual conferences for research
            </Heading>
            <Text fontSize="xl">
              Our open-source platform is actively researched and developed to
              support academic conferences.
            </Text>
          </VStack>
        </Container>
        <Container my={0} textAlign="center">
          <ButtonGroup size="lg">
            <Button as={GatsbyLink} to="/host">
              🎓 Host a conference
            </Button>
            <Button as={GatsbyLink} to="/sponsor">
              ⭐ Sponsor development
            </Button>
          </ButtonGroup>
        </Container>
      </Layout>
    </>
  );
}
