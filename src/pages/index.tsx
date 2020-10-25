import React from "react"
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react"
import ResponsiveContainer from "../components/ResponsiveContainer"
import HomepageHeading from "../components/HomepageHeading"
import Footer from "../components/Footer"
import "semantic-ui-css/semantic.min.css"

export default function Home() {
  return (
    <ResponsiveContainer heading={<HomepageHeading />}>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Complex virtual conferences made easy
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr is a open source software suite that makes it easier to
                run interactive and engaging virtual conferences.
              </p>
              <p>
                We have supported large academic conferences with many parallel
                tracks and hundreds of papers across dozens of sessions.
              </p>
              <p>Clowdr's powerful feature set includes:</p>
              <List>
                <List.Item>
                  <List.Icon name="chat" />
                  <List.Content>
                    Text chat and video breakout rooms
                  </List.Content>
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
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="https://picsum.photos/400"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Card.Group doubling centered>
                <Card>
                  <Card.Content>
                    <Card.Header>CSCW 2020</Card.Header>
                    <Card.Meta>October 17-21 2020</Card.Meta>
                    <Card.Description>
                      We helped deliver the 23rd ACM Conference on
                      Computer-Supported Cooperative Work and Social Computing
                      to 700 users.
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
                      Clowdr to support a virtual conference for 1500 academic
                      and professional engineers.
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            By the community, for the community
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Clowdr was founded by a group of academics with decades of
            experience organising conferences.
          </p>
          <p>
            We are a social enterprise: our mission is to make climate-friendly,
            socially-engaging and inclusive conferences the default in academia
            (and beyond!)
          </p>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            Get started now!
          </Divider>

          <Header as="h3" style={{ fontSize: "2em" }}>
            Interested in using Clowdr?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            We're keen to work with you to deliver a brilliant attendee
            experience.
          </p>
          <p>
            What new and unique virtual experience would you like to give your
            attendees?
          </p>
          <Button as="a" size="large" href="mailto:hello@clowdr.org" primary>
            Contact us today
          </Button>
        </Container>
      </Segment>

      <Footer />
    </ResponsiveContainer>
  )
}
