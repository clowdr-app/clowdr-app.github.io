import { Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout";
import Title from "../../components/Title";

export default function Backups() {
  return (
    <>
      <Title title="Backups Policy" />
      <Layout>
        <Container>
          <Heading as="h2" size="2xl">
            Backups Policy
          </Heading>
          <Heading as="h3" size="xl">
            Databases
          </Heading>
          <Text>
            We store our database(s) using{" "}
            <Link to="https://www.heroku.com/postgres">
              Heroku's services for Postgres
            </Link>
            . We use standard- and premium-tier instances of Postgres that
            include dataclips, continuous protection/rollbacks, encryption (at
            rest) and up to 25 retained backups. Continuous protection provides
            us a 4-day rollback of any changes made to our databases.
          </Text>
          <Text>
            We take automatic daily backups giving us up to 25 days of backups.
            Daily backups are stored in Heroku's cloud service and are
            encrypted. Access is restricted to our lead developers as part of
            their role in managing and maintaining our services.
          </Text>
          <Text>
            We take manual fortnightly backups and retain at least the most
            recent 4, providing 56 day protection. These are stored offline on
            encrypted storage within the UK/EU accessible only by our lead
            developer.
          </Text>
          <Heading as="h2" size="2xl">
            User accounts
          </Heading>
          <Text>
            User account information excluding passwords is stored in our main
            database(s) and covered by the same backup protections. Passwords
            are stored by our security provider Auth0 and never leave Auth0's
            systems. We do not backup passwords. In the event of data loss
            resulting in loss of password data, we will contact affected users
            and provide a secure password reset mechanism.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
