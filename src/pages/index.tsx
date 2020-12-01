import React from "react"
import { Button, Card, Container, Grid, Header, Icon, Label, List } from "semantic-ui-react"
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
            <Label as="div" pointing="left" size="big" className={styles.quotes__quote}>
              How do I organise video streaming and Q&amp;A?
            </Label>
            <Label as="div" pointing="right" size="big" className={styles.quotes__quote}>
              How will attendees socialise with one another?
            </Label>
            <Label as="div" pointing="left" size="big" className={styles.quotes__quote}>
              How do I run poster sessions and exhibitions?
            </Label>
            <Label as="div" pointing="right" size="big" className={styles.quotes__quote}>
              What about providing booths for our sponsors?
            </Label>
          </div>
          <p style={{ fontSize: "1.33em", marginTop: "1em" }}>
            Clowdr solves these problems and more, giving you time to focus on the thing that really
            matters: bringing people together.
          </p>
          <p style={{ fontSize: "1.33em", marginTop: "1em" }}>
            Here are just a few of our features:
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
            <Card raised color="grey">
              <Card.Content>
                <Card.Header>Expert support</Card.Header>
                <Card.Description>
                  Our team has years of experience delivering great conferences. Our founders
                  coauthored the{" "}
                  <a href="https://www.acm.org/virtual-conferences">
                    ACM report on virtual conferences.
                  </a>
                </Card.Description>
              </Card.Content>
            </Card>
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

        <Grid celled="internally" columns="equal" stackable style={{ marginTop: "4em" }}>
          <Grid.Row textAlign="center" style={{ padding: "2em 0" }}>
            <Grid.Column>
              <Icon name="smile outline" style={{ fontSize: "4em" }} color="teal" />
              <Header as="h3" style={{ fontSize: "2em" }}>
                Scales to your event
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr was founded by academics with decades of combined experience organising
                large, complex academic conferences. It handles everything from simple seminars to
                week-long, multi-track conferences with thousands of attendees.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon name="handshake outline" style={{ fontSize: "4em" }} color="purple" />
              <Header as="h3" style={{ fontSize: "2em" }}>
                A sociable experience
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr lets your attendees talk to one another with text and video chat. You can set
                up your own custom meeting rooms, sponsor booths, announcement channels and more.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Icon name="paper plane outline" style={{ fontSize: "4em" }} color="green" />
              <Header as="h3" style={{ fontSize: "2em" }}>
                By the community, for the community
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Clowdr is a social enterprise, incorporated as a Community Interest Company. Our
                mission is to make inclusive, climate-friendly virtual conferences just as socially
                engaging as physical conferences.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container text style={{ padding: "4em 0" }}>
          <Header as="h3" style={{ fontSize: "2em", marginTop: "1em" }}>
            Interested in using Clowdr?
          </Header>
          <p style={{ fontSize: "1.33em" }}>We can provide:</p>
          <List divided relaxed>
            <List.Item>
              <List.Header>Do-it-yourself Clowdr</List.Header>
              <List.Content>
                Want to run the Clowdr software yourself? It's{" "}
                <a href="https://github.com/clowdr-app/clowdr-web-app">
                  open source and freely available
                </a>
                . We can also provide support for your own deployment.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Click-and-go Clowdr</List.Header>
              <List.Content>
                Let us worry about the technology, so you can focus on your event.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Expert support</List.Header>
              <List.Content>
                We'll help you set up your conference and provide virtual on-site support to make
                sure everything runs smoothly.
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header>Advanced customisation</List.Header>
              <List.Content>
                Want to wow your attendees with something new? We can design and build it.
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
