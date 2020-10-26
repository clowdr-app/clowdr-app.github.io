import React from "react"
import { Helmet } from "react-helmet"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react"
import ResponsiveContainer from "../components/ResponsiveContainer"
import HomepageHeading from "../components/HomepageHeading"
import "semantic-ui-css/semantic.min.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <ResponsiveContainer heading={<HomepageHeading />}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Clowdr - Virtual conferences that cut carbon emissions</title>
      </Helmet>

      <Grid
        celled="internally"
        columns="equal"
        stackable
        style={{ marginTop: "4em" }}
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

      <Container textAlign="center" style={{ padding: "2em 0" }}>
        <Button
          as={Link}
          to="/solution"
          size="massive"
          content="Learn more about Clowdr"
        />
      </Container>

      <Container text style={{ paddingTop: "4em" }}>
        <Header as="h3" style={{ fontSize: "2em" }}>
          The earth is facing a climate emergency
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Science tells us we must limit warming to 1.5°C. That means reducing
          our carbon emissions by 7.6% every year from now until 2030.
        </p>
      </Container>

      <Segment
        color="green"
        inverted
        compact
        style={{ margin: "2em auto 0", padding: "2em 0" }}
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4}>
              <Statistic floated="right" inverted>
                <Statistic.Value>70%</Statistic.Value>
                <Statistic.Label>of emissions</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={12}>
              <p style={{ fontSize: "1.4em" }}>
                That's how much comes from your attendees' air travel and hotels
                alone.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Container text style={{ paddingTop: "2em" }}>
        <p style={{ fontSize: "1.33em" }}>
          Virtual conferences have a much lower environmental impact. And that's
          not all - they can significantly improve diversity and inclusion at
          your event.
        </p>
      </Container>

      <Container text style={{ paddingTop: "4em" }}>
        <Header as="h3" style={{ fontSize: "2em" }}>
          We help you run sustainable virtual conferences
        </Header>
        <p style={{ fontSize: "1.4em" }}>
          Clowdr was founded by academics with decades of combined experience
          organising large, complex academic conferences. We believe that
          virtual conferences can be just as compelling as traditional, physical
          conferences.
        </p>
        <Button
          as={Link}
          to="/about"
          size="big"
          color="green"
          icon="users"
          content="Meet the team"
        />
      </Container>

      <Container text style={{ padding: "4em 0" }}>
        <Header as="h3" style={{ fontSize: "2em" }}>
          By the community, for the community
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Clowdr is a social enterprise and is incorporated as a Community
          Interest Company. Our mission is to make climate-friendly,
          socially-engaging and inclusive conferences the default in academia
          (and beyond!)
        </p>

        <Header as="h3" style={{ fontSize: "2em", marginTop: "1em" }}>
          Interested in using Clowdr?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          We're keen to work with you to deliver a sociable and engaging
          attendee experience.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          What new and unique virtual experience would you like to give your
          attendees?
        </p>
        <Button
          as="a"
          size="big"
          href="mailto:hello@clowdr.org"
          color="green"
          content="Contact us today"
          icon="mail"
        />
      </Container>
    </ResponsiveContainer>
  )
}
