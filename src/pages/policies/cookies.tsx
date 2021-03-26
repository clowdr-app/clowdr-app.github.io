import { Container, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import Title from "../../components/Title";

export default function Privacy() {
  return (
    <>
      <Title title="Cookie Policy" />
      <Layout>
        <Container my={8}>
          <Heading as="h2" size="2xl" mb={4}>
            Cookie Policy
          </Heading>
          <Text>
            Our site uses cookies to distinguish you from other users of our
            site. This helps us to provide you with a good experience when you
            browse our site and also allows us to improve our site.
          </Text>
          <Text>
            A cookie is a small file of letters and numbers that we store on
            your browser or the hard drive of your computer if you agree.
            Cookies contain information that is transferred to your computer's
            hard drive.
          </Text>
          <Text>
            We only use <strong>strictly necessary cookies.</strong> These are
            cookies that are required for the operation of our site. They enable
            you to log into secure areas of our site.
          </Text>
          <Text>We do not use:</Text>
          <List listStyleType="circle">
            <ListItem>Analytical or performance cookies, or</ListItem>
            <ListItem>Functionality cookies, or</ListItem>
            <ListItem>Targeting cookies.</ListItem>
          </List>
        </Container>
      </Layout>
    </>
  );
}
