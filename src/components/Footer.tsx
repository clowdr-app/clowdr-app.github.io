import { Link } from "gatsby"
import React from "react"
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid"
import Container from "semantic-ui-react/dist/commonjs/elements/Container/Container"
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header"
import List from "semantic-ui-react/dist/commonjs/elements/List/List"
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment"

/* If you change the list of pages, make sure to also change
   Footer.tsx (really, the two should be generated from the same
   static list of strings!) */

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Link to="/">
                <Header inverted as="h4" content="Clowdr" />
              </Link>
              <List link inverted>
                <List.Item as={Link} to="/features">
                  Features
                </List.Item>
                <List.Item as={Link} to="/pricing">
                  Pricing
                </List.Item>
                <List.Item as={Link} to="/about">
                  About Us
                </List.Item>
                <List.Item as={Link} to="/jobs">
                  Jobs
                </List.Item>
                <List.Item as={Link} to="/feedback">
                  Feedback
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                © Clowdr CIC 2021
              </Header>
              <p>
                Clowdr is a social enterprise dedicated to creating sustainable, inclusive and
                engaging conferences.
              </p>
              <p>
                Clowdr is a UK Community Interest Company, number{" "}
                <a href="https://find-and-update.company-information.service.gov.uk/company/12984216">
                  12984216
                </a>
                .
              </p>
              <p>
                Clowdr was initially made possible thanks to support by the US National Science
                Foundation under awards CCF-2035003, CCF-2035101 and CCF-203500 and support from
                Twilio.org.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
