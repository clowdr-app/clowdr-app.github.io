import React from "react"
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Label,
  List,
} from "semantic-ui-react"
import ResponsiveContainer from "../components/ResponsiveContainer"
import HomepageHeading from "../components/HomepageHeading"
import Title from "../components/Title"
import "semantic-ui-css/semantic.min.css"
import { Link } from "gatsby"
import styles from "./index.module.scss"

export default function Home() {
  return (
    <>
      <Title title="Virtual conferences without the heavy lifting" />
      <ResponsiveContainer heading={<HomepageHeading />}>
        <Container text style={{ paddingTop: "4em" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Running a virtual conference can be hard work
          </Header>
          <div className={styles.quotes}>
            <Label
              as="div"
              pointing="left"
              size="big"
              className={styles.quotes__quote}
            >
              How do I organise video streaming and Q&amp;A?
            </Label>
            <Label
              as="div"
              pointing="right"
              size="big"
              className={styles.quotes__quote}
            >
              How will attendees socialise with one another?
            </Label>
            <Label
              as="div"
              pointing="left"
              size="big"
              className={styles.quotes__quote}
            >
              How do I run poster sessions and exhibitions?
            </Label>
            <Label
              as="div"
              pointing="right"
              size="big"
              className={styles.quotes__quote}
            >
              What about providing booths for our sponsors?
            </Label>
          </div>
          <p style={{ fontSize: "1.33em", marginTop: "1em" }}>
            Clowdr solves these problems and more, giving you time to focus on
            the things that really matter.
          </p>
          <p style={{ fontSize: "1.33em", marginTop: "1em" }}>
            Here are just a few of our great features:
          </p>
          <Card.Group itemsPerRow={2} doubling>
            <Card
              raised
              color="grey"
              header="Audiovisual production"
              description="We can collect videos from presenters, stitch them together, integrate live Q&amp;A sessions and stream it to your conference."
            />
            <Card
              raised
              color="grey"
              header="Realtime chat"
              description="You and your attendees can create and drift between video and text rooms. Or use our random pairing system to meet someone new!"
            />
            <Card
              raised
              color="grey"
              header="Expert support"
              description="We're here to create a great virtual conference experience - whether that means help setting up your conference, virtual on-site support or customisation."
            />
            <Card
              raised
              color="grey"
              header="Open source"
              description="Clowdr is open source - and we are dedicated to supporting the academic community."
            />
          </Card.Group>
          <Container textAlign="center">
            <Button
              as={Link}
              to="/solution"
              size="massive"
              color="green"
              content="Learn more about Clowdr"
              style={{ margin: "2em auto" }}
            />
          </Container>
        </Container>

        <Container text style={{ paddingTop: "4em", textAlign: "center" }}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Why go virtual with Clowdr?
          </Header>
        </Container>

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
                Conferences exist to bring people together. Clowdr is designed
                to support a sociable and interactive conference experience.
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
          <Header as="h3" style={{ fontSize: "2em" }}>
            By the community, for the community
          </Header>
          <p style={{ fontSize: "1.4em" }}>
            Clowdr was founded by academics with decades of combined experience
            organising large, complex academic conferences. We believe that
            virtual conferences can be just as compelling as traditional,
            physical conferences.
          </p>
          <Button
            as={Link}
            to="/about"
            size="big"
            color="green"
            icon="users"
            content="Meet the team"
            style={{ marginBottom: "1em" }}
          />
          <p style={{ fontSize: "1.33em" }}>
            Clowdr is a social enterprise and is incorporated as a Community
            Interest Company. Our mission is to make climate-friendly,
            socially-engaging and inclusive conferences the default in academia
            (and beyond!)
          </p>

          <Header as="h3" style={{ fontSize: "2em", marginTop: "1em" }}>
            Interested in using Clowdr?
          </Header>
          <p style={{ fontSize: "1.33em" }}>Our services include:</p>
          <List divided relaxed>
            <List.Item>
              <List.Header>Fully-hosted Clowdr</List.Header>
              <List.Content>
                You don't have to worry about the technology!
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Self-hosted Clowdr</List.Header>
              <List.Content>
                Want to host Clowdr yourself? We can help you with that.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Expert support</List.Header>
              <List.Content>
                We'll help you set up your conference and provide virtual
                on-site support to make sure everything runs smoothly.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Advanced customisation</List.Header>
              <List.Content>
                Want to wow your attendees with something new? We can help build
                it.
              </List.Content>
            </List.Item>
          </List>
          <p style={{ fontSize: "1.33em" }}>
            If you're interested in using Clowdr, we'd love to hear from you.
          </p>
          <Button
            as="a"
            size="big"
            href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
            color="green"
            content="Contact us today"
            icon="mail"
          />
        </Container>
      </ResponsiveContainer>
    </>
  )
}
