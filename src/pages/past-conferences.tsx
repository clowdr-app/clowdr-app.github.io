import {
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { LogoList } from "../components/hosted-conferences/logo-list";
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
          <Text fontSize="xl">
            We&apos;re working on writing up case studies about the many
            conferences we&apos;ve hosted. In the meantime, here&apos;s a short
            list!
          </Text>
          <LogoList />
          <UnorderedList>
            <ListItem>IBM CASCON x EVOKE 2021</ListItem>
            <ListItem>
              <Text>Association of Computing Machinery</Text>
              <UnorderedList>
                <ListItem>ICSE: 2020, 2021 and 2022</ListItem>
                <ListItem>ANCS 2021</ListItem>
                <ListItem>ASPLOS 2021</ListItem>
                <ListItem>CHI PLAY 2021</ListItem>
                <ListItem>CSCW 2020 and 2021</ListItem>
                <ListItem>ESEC/FSE 2021 and 2022 (to be confirmed)</ListItem>
                <ListItem>FPGA 2021 and 2022</ListItem>
                <ListItem>FSCD 2021</ListItem>
                <ListItem>HotNets 2021</ListItem>
                <ListItem>ICER 2021</ListItem>
                <ListItem>POPL 2020</ListItem>
                <ListItem>SPLASH 2020 and 2021</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text>IEEE</Text>
              <UnorderedList>
                <ListItem>RE 2021</ListItem>
                <ListItem>Others remain undisclosed due to contract.</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              4S 2021: Society for the Social Studies of Science: Annual
              conference
            </ListItem>
            <ListItem>Highlights 2021 (German Research Foundation)</ListItem>
            <ListItem>
              ISMIR 2021 (International Society for Music Information Retrieval)
            </ListItem>
            <ListItem>CLSummit 2021 (Connected Learning Summit)</ListItem>
            <ListItem>
              Southern California Software Engineering Symposium 2021
            </ListItem>
            <ListItem>IFIP Working Group 2.8 (2021)</ListItem>
            <ListItem>A number of other private conferences</ListItem>
          </UnorderedList>
        </Container>
      </Layout>
    </>
  );
}
