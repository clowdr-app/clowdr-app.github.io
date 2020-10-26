import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function Solution() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Solution | Clowdr - Virtual conferences that cut carbon emissions
        </title>
      </Helmet>

      <Container>
        <Segment compact style={{ margin: "4em auto", padding: "1em 4em" }}>
          <Header
            as="h2"
            style={{ fontSize: "2em", padding: "1em 0" }}
            textAlign="center"
          >
            Everything you need to deliver a great conference
          </Header>
          <Card.Group itemsPerRow={3}>
            <Card
              raised
              link
              color="yellow"
              image="./video-chat.png"
              header="Video rooms"
              description="Attendess can create ad-hoc video breakout rooms at the click of a button."
            />
            <Card
              raised
              link
              color="teal"
              image="./program.png"
              header="Conference program"
              description="Support for complex conference programs common in large academic conferences."
            />
            <Card
              raised
              link
              color="violet"
              image="./text-chat.png"
              header="Text chat"
              description="A familiar and interactive chat experience."
            />
            <Card
              raised
              link
              color="blue"
              image="./exhibition.png"
              header="Exhibition hall"
              description="Create a virtual exhibition hall to show posters or an important collection of conference items."
            />
            <Card
              raised
              link
              color="orange"
              image="./homepage.png"
              header="Custom homepage"
              description="Welcome attendees to your conference with a custom homepage."
            />
            <Card
              raised
              link
              color="olive"
              image="./plane.jpg"
              header="Environmentally friendly"
              description="Reduce CO₂ emissions by cutting out wasteful plane journeys and hotel stays."
            />
          </Card.Group>
        </Segment>
      </Container>

      <Segment
        compact
        color="green"
        inverted
        stacked
        style={{ margin: "0 auto" }}
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle" textAlign="center">
              <Statistic inverted>
                <Statistic.Value>100%</Statistic.Value>
                <Statistic.Label>Open Source</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "1.2em" }}>
                Clowdr is proudly open-source. As a social enterprise, this is
                part of how we serve the academic community.
              </p>
              <Button
                as={Link}
                to="https://github.com/clowdr-app/"
                floated="left"
                icon="github"
                color="black"
                size="large"
                style={{ margin: "0 1em" }}
              />
              <p>
                If you want to do-it-yourself, you can run your very own Clowdr.
                We also support researchers who want to modify Clowdr or use it
                in their research.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Grid style={{ padding: "8em 0em" }}>
        <Grid.Row centered>
          <Grid.Column width={2} verticalAlign="middle">
            <Header as="h2" style={{ fontSize: "2em", textAlign: "right" }}>
              Trusted by thousands
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Card.Group doubling centered itemsPerRow={1}>
              <Card link href="https://cscw.acm.org/2020/">
                <Card.Content>
                  <Card.Header>CSCW 2020</Card.Header>
                  <Card.Meta>October 17-21 2020</Card.Meta>
                  <Card.Description>
                    We helped deliver the 23rd ACM Conference on
                    Computer-Supported Cooperative Work and Social Computing to
                    700 users.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card link href="https://icfp20.sigplan.org/">
                <Card.Content>
                  <Card.Header>ICFP 2020</Card.Header>
                  <Card.Meta>August 20-28 2020</Card.Meta>
                  <Card.Description>
                    Clowdr was used by 1300 attendees at the International
                    Conference on Functional Programming.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card link href="https://conf.researchr.org/home/icse-2020">
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
              <Card>
                <Card.Content>
                  <Card.Description>and many more!</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Header as="h2" style={{ fontSize: "2em", textAlign: "center" }}>
        Why Clowdr?
      </Header>
      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ margin: "4em 0" }}
      >
        <Grid.Row textAlign="center" style={{ padding: "2em 0" }}>
          <Grid.Column>
            <Icon
              name="paper plane outline"
              style={{ fontSize: "4em" }}
              color="green"
            />
            <Header as="h3" style={{ fontSize: "2em" }}>
              Tackle the climate emergency
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Clowdr helps you deliver an engaging conference experience at a
              much lower environmental cost.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon
              name="handshake outline"
              style={{ fontSize: "4em" }}
              color="purple"
            />
            <Header as="h3" style={{ fontSize: "2em" }}>
              A sociable experience
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Conferences exist to bring people together. Clowdr is designed to
              support a sociable and interactive conference experience.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Icon
              name="smile outline"
              style={{ fontSize: "4em" }}
              color="teal"
            />
            <Header as="h3" style={{ fontSize: "2em" }}>
              More inclusive events
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Physical conferences can be prohibitively expensive or
              inaccessible. Clowdr helps you improve diversity and inclusion.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Container text style={{ padding: "4em 0" }}>
        <Header as="h2" style={{ fontSize: "2em", marginTop: "1em" }}>
          We are your friendly conference partners
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Clowdr is a social enterprise dedicated to making conferences better.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          We have significant experience delivering academic conferences and
          we're keen to work with you to create a sociable and engaging attendee
          experience.
        </p>
        <Button.Group>
          <Button
            as="a"
            href="mailto:hello@clowdr.org"
            color="green"
            content="Contact us about using Clowdr"
          />
          <Button.Or />
          <Button
            as="a"
            href="/about"
            color="green"
            content="Meet the Clowdr team"
            inverted
          />
        </Button.Group>
      </Container>
    </ResponsiveContainer>
  )
}
