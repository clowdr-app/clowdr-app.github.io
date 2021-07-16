import {
  Alert,
  AlertDescription,
  AlertIcon,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

export default function About() {
  return (
    <>
      <Title title="Jobs" />
      <Layout>
        <Container my={12}>

          <Heading as="h1" size="2xl">
            Join our team!
          </Heading>

          <br/>

          <Heading as="h2">
            Current openings...
          </Heading>

          <Heading as="h3" size="md">
            Software developer (front end)
          </Heading>

          <Text>
            Our ideal candidate for this position is an experienced developer
            with a particular interest in front-end design and implementation.
            You should have an eye for what looks good and an instinct for good
            user experience.
            {" "}
            <b>Essential skills: </b>
            Front-end web application development,
            TypeScript,
            React.
          {" "}
          <b>Nice to have: </b>
            User experience design (UX),
            Chakra UI,
            Heroku,
            GraphQL,
            AWS,
            Hasura.
          </Text>

          <Heading as="h4" size="md">
            Software developer (devops / backend)
          </Heading>

          <Text>
            Our ideal candidate for this position is an experienced software
            developer with an interest in infrastructure and DevOps. You would
            be comfortable implementing backend APIs and services, working on
            our build and deployment systems; designing and securing our AWS
            infrastructure; deploying monitoring, alerting and load testing.
            Ideally, you would have significant experience working on
            cloud-hosted applications; even better if at serious
            scale.
          {" "}
          <b>Essential skills: </b>
            Web application development,
            Typescript,
            Cloud infrastructure (particularly AWS).
          {" "}
          <b>Nice to have: </b>
            Postgres,
            Heroku,
            Hasura,
            GraphQL,
            Technical writing.
          </Text>

          <br/>

          <Heading as="h2">
            Working at Clowdr...
          </Heading>

          <Heading as="h3" fontSize="xl">
            What we're looking for
          </Heading>

          <Text>
            You should be friendly and easy to work with, and comfortable
            working remotely with an internationally distributed team. We
            encourage flexible working and asynchronous collaboration, but the
            international nature of our business means meetings can be at a wide
            range of hours. Our existing engineering team work from European
            timezones.
          </Text>

          <Text>
            Clowdr is incorporated in the UK, but there is no need to be
            resident or have the right to work in the UK for this role.
          </Text>

          <Text>
            Ideal candidates for these positions will have a broad skillset
            related to web application development, with at least 3-5 years of
            experience designing and developing web-based systems.
            You should share our appreciation for applications that are
            well-documented, easy to build and deploy, and whose configuration
            and infrastructure are defined as code.
            Talent is
            more important than specific skills, so it's still worth contacting
            us if you don't precisely match the specific job descriptions above.
          </Text>

          <Text>
            We develop all of our
            software{" "}
            <a href="https://github.com/clowdr-app/clowdr">in the open</a>.
          </Text>

          <Heading as="h3" fontSize="xl">
            What we offer
          </Heading>

          <Text>
            A critical role in a public-interest, community-focused company that
            is developing cutting-edge, open-source technology for a super-hot
            market sector, driven by a passion to combat climate change while
            increasing inclusivity at conferences.
          </Text>

          <Text>A friendly, flexible remote working environment.</Text>

          <Text>Competitive remuneration.</Text>

          <Heading as="h3" fontSize="xl">
            Starting date
          </Heading>

          <Text>As soon as convenient.</Text>

          <Heading as="h3" fontSize="xl">
            To apply
          </Heading>

          <Text>
            Please send your CV, together with a cover letter telling us why
            Clowdr might be a good fit for you and vice versa, to{" "}
            <Link as="a" href="mailto:jobs@clowdr.org">
              jobs@clowdr.org
            </Link>
            . Applications will be considered as they arrive.
          </Text>

          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>
              We are not looking for external recruitment partners at this time.
            </AlertDescription>
          </Alert>
        </Container>
      </Layout>
    </>
  );
}
