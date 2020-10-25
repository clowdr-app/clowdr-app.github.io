import React from "react"
import { Helmet } from "react-helmet"
import {
  Card,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function About() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Solution | Clowdr - Virtual conferences that cut carbon emissions
        </title>
      </Helmet>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <p>Clowdr's powerful feature set includes:</p>
          <List>
            <List.Item>
              <List.Icon name="chat" />
              <List.Content>Text chat and video breakout rooms</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="table" />
              <List.Content>Support for complex programs</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>Virtual exhibition hall</List.Content>
            </List.Item>
          </List>
        </Container>
        <Card.Group doubling centered>
          <Card>
            <Card.Content>
              <Card.Header>CSCW 2020</Card.Header>
              <Card.Meta>October 17-21 2020</Card.Meta>
              <Card.Description>
                We helped deliver the 23rd ACM Conference on Computer-Supported
                Cooperative Work and Social Computing to 700 users.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>ICFP 2020</Card.Header>
              <Card.Meta>August 20-28 2020</Card.Meta>
              <Card.Description>
                Clowdr was used by 1300 attendees at the International
                Conference on Functional Programming.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>ICSE 2020</Card.Header>
              <Card.Meta>July 6-11 2020</Card.Meta>
              <Card.Description>
                The International Conference on Software Engineering chose
                Clowdr to support a virtual conference for 1500 academic and
                professional engineers.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Icon name="paper plane outline" style={{ fontSize: "4em" }} />
              <Header as="h3" style={{ fontSize: "2em" }}>
                Tackle the climate emergency
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Around 70% of a conference's carbon emissions come from attendee
                flights alone. Clowdr helps you deliver an equally engaging
                conference experience at a much lower environmental cost.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Icon name="handshake outline" style={{ fontSize: "4em" }} />
              <Header as="h3" style={{ fontSize: "2em" }}>
                Bring people together - online
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Conferences exist to bring people together, strengthening
                communities and helping people form new relationships.
                Encouraging social interaction is a core focus for Clowdr.
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Icon name="smile outline" style={{ fontSize: "4em" }} />
              <Header as="h3" style={{ fontSize: "2em" }}>
                Run more inclusive events
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Physical conferences can be prohibitively expensive or
                inaccessible for underserved groups. We see conferences using
                Clowdr benefit from significantly increased, and more diverse,
                attendance.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </ResponsiveContainer>
  )
}
