import React from "react"
import { Container, Header } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../../components/ResponsiveContainer"
import Title from "../../components/Title"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <Title title="Backups Policy" />
      <ResponsiveContainer>
        <Container text style={{ padding: "4em 0" }}>
          <Header as="h2" style={{ fontSize: "2em" }}>
            Backups Policy
          </Header>
          <Header as="h3" style={{ fontSize: "1.7em" }}>
            Databases
          </Header>
          <p>
            We store our database(s) using{" "}
            <Link to="https://www.heroku.com/postgres">Heroku's services for Postgres</Link>. We use
            standard- and premium-tier instances of Postgres that include dataclips, continuous
            protection/rollbacks, encryption (at rest) and up to 25 retained backups. Continuous
            protection provides us a 4-day rollback of any changes made to our databases.
          </p>
          <p>
            We take automatic daily backups giving us up to 25 days of backups. Daily backups are
            stored in Heroku's cloud service and are encrypted. Access is restricted to our lead
            developers as part of their role in managing and maintaining our services.
          </p>
          <p>
            We take manual fortnightly backups and retain at least the most recent 4, providing 56
            day protection. These are stored offline on encrypted storage within the UK/EU
            accessible only by our lead developer.
          </p>
          <Header as="h2" style={{ fontSize: "1.7em" }}>
            User accounts
          </Header>
          <p>
            User account information excluding passwords is stored in our main database(s) and
            covered by the same backup protections. Passwords are stored by our security provider
            Auth0 and never leave Auth0's systems. We do not backup passwords. In the event of data
            loss resulting in loss of password data, we will contact affected users and provide a
            secure password reset mechanism.
          </p>
        </Container>
      </ResponsiveContainer>
    </>
  )
}
