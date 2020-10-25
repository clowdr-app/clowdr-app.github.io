import { Link } from "gatsby"
import React from "react"
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid"
import Container from "semantic-ui-react/dist/commonjs/elements/Container/Container"
import Header from "semantic-ui-react/dist/commonjs/elements/Header/Header"
import List from "semantic-ui-react/dist/commonjs/elements/List/List"
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment/Segment"

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="Clowdr" />
              <List link inverted>
                <List.Item as={Link} to="/">
                  Home
                </List.Item>
                {/* <List.Item as={Link} to="/about">
                  About
                </List.Item> */}
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                © Clowdr CIC 2020
              </Header>
              <p>
                Clowdr is created by Jonathan Bell, Crista Lopes and Benjamin
                Pierce.
              </p>
              <p>
                Clowdr is made possible thanks to support by the National
                Science Foundation under awards CCF-2035003, CCF-2035101 and
                CCF-203500 and support from Twilio.org.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
