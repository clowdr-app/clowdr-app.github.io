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
  List,
  Segment,
  Statistic,
} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function Solution() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Solution | Clowdr - Virtual conferences that bring people together</title>
      </Helmet>

      <Container style={{ padding: "4em 0 2em" }}>
        <Header as="h2" style={{ fontSize: "3em", marginBottom: "1em" }} textAlign="center">
          Everything you need to deliver a great conference
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Clowdr is an all-in-one solution for your next virtual conference. We know how much work
          it is to organise a conference. Clowdr is designed to make your conference platform 'just
          work' - so that you can concentrate on the things that really matter.
        </p>
        {/* todo: increase text size of headings */}
        <Card.Group itemsPerRow={3} doubling>
          <Card
            raised
            header="Conference program"
            description="Support for complex conference programs common in large academic conferences."
          />
          <Card
            raised
            header="Video rooms"
            description="Attendess can create ad-hoc video breakout rooms at the click of a button."
          />
          <Card
            raised
            header="Text chat"
            description="A familiar and interactive chat experience."
          />
          <Card
            raised
            header="Audiovisual production"
            description="Let us handle the complexities of live-streaming and AV production."
          />
          <Card
            raised
            header="Social features"
            description="Get your attendees talking and meeting each other with our random pairing."
          />
          <Card
            raised
            header="Sponsor booths"
            description="Welcome attendees to your conference with a custom homepage."
          />
          <Card
            raised
            header="Exhibition hall"
            description="Create a virtual exhibition hall to show posters or an important collection of conference items."
          />
          <Card
            raised
            header="Attendee registration"
            description="Welcome attendees to your conference with a custom homepage."
          />
          <Card
            raised
            header="Custom homepage"
            description="Welcome attendees to your conference with a custom homepage."
          />
          <Card
            raised
            header="Admin controls"
            description="Monitor and tweak your conference as it happens."
          />
          <Card
            raised
            header="Expert support"
            description="Our experienced team is ready to make your conference a success."
          />
          <Card
            raised
            header="Research and Development"
            description="Virtual conferences are new to us all. We continue to collaborate with other researchers aroudn the world to design new ways to organize virtual conferences."
          />
        </Card.Group>
      </Container>

      <Container>
        <Segment color="green" inverted stacked>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4} verticalAlign="middle" textAlign="center">
                <Statistic inverted>
                  <Statistic.Value>100%</Statistic.Value>
                  <Statistic.Label>Open Source</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column width={12}>
                <p style={{ fontSize: "1.2em" }}>
                  Clowdr is proudly open-source. As a social enterprise, this is part of how we
                  serve the academic community.
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
                  If you want to do-it-yourself, you can run your very own Clowdr. We also support
                  researchers who want to modify Clowdr or use it in their research.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>

      <Container>
        <Grid stackable style={{ padding: "2em 0em" }}>
          <Grid.Row centered>
            <Grid.Column width={4} verticalAlign="middle">
              <Header as="h2" style={{ fontSize: "2em", textAlign: "center" }}>
                Trusted by thousands
              </Header>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card.Group doubling centered itemsPerRow={1}>
                <Card link href="https://cscw.acm.org/2020/">
                  <Card.Content>
                    <Card.Header>CSCW 2020</Card.Header>
                    <Card.Meta>October 17-21 2020</Card.Meta>
                    <Card.Description>
                      We helped deliver the 23rd ACM Conference on Computer-Supported Cooperative
                      Work and Social Computing to 700 users.
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card link href="https://icfp20.sigplan.org/">
                  <Card.Content>
                    <Card.Header>ICFP 2020</Card.Header>
                    <Card.Meta>August 20-28 2020</Card.Meta>
                    <Card.Description>
                      Clowdr was used by 1300 attendees at the International Conference on
                      Functional Programming.
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card link href="https://conf.researchr.org/home/icse-2020">
                  <Card.Content>
                    <Card.Header>ICSE 2020</Card.Header>
                    <Card.Meta>July 6-11 2020</Card.Meta>
                    <Card.Description>
                      The International Conference on Software Engineering chose Clowdr to support a
                      virtual conference for 1500 academic and professional engineers.
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
      </Container>

      <Container>
        <Segment color="green" inverted stacked style={{ padding: "1em", fontSize: "1.3em" }}>
          <blockquote style={{ position: "relative" }}>
            <span
              style={{
                fontSize: "4em",
                position: "absolute",
                left: "-0.5em",
                top: "0.2em",
              }}
            >
              “
            </span>
            Good call on Clowdr – I have joined so many virtual conferences with fancy platforms and
            this is by far my favorite. Pretty easy to navigate and very straight forward – just
            what these types of academic conferences need.
          </blockquote>
          <p style={{ textAlign: "right" }}>- sponsor at CSCW 2020</p>
        </Segment>
      </Container>

      {/* <Container text style={{ paddingTop: "2em" }}>
        <Header as="h3" style={{ fontSize: "1.5em" }}>
          The earth is facing a climate emergency
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Science tells us we must limit warming to 1.5°C. That means reducing our carbon emissions
          by 7.6% every year from now until 2030.
        </p>
      </Container>

      <Segment
        color="green"
        inverted
        stacked
        compact
        style={{ margin: "2em auto 0", padding: "2em 0" }}
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Statistic inverted>
                <Statistic.Value>70%</Statistic.Value>
                <Statistic.Label>of emissions</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column width={10}>
              <p style={{ fontSize: "1.4em" }}>
                That's how much of a conference's emissions comes from your attendees' air travel
                and hotels alone.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Container text style={{ paddingTop: "2em" }}>
        <p style={{ fontSize: "1.33em" }}>
          Virtual conferences have a much lower environmental impact. We have also found that they
          can significantly improve diversity and inclusion at your event.
        </p>
      </Container> */}

      <Container text style={{ padding: "4em 0" }}>
        <Segment raised style={{ margin: "0 auto" }}>
          <Header as="h2" style={{ fontSize: "2em" }}>
            A community-owned platform
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Clowdr CIC is a social enterprise dedicated to making virtual conferences better for
            everyone.
          </p>
          <p style={{ fontSize: "1.33em" }}>
            All improvements we make to Clowdr become part of the open source platform that anybody
            can use freely.
          </p>
          <Button
            as="a"
            href="/about"
            color="green"
            content="Find out more about Clowdr CIC"
            inverted
          />
        </Segment>
        <Header as="h3" style={{ fontSize: "2em", marginTop: "1em" }}>
          Interested in using Clowdr?
        </Header>
        <p style={{ fontSize: "1.33em" }}>We can provide:</p>
        <List divided relaxed>
          <List.Item>
            <List.Header>Click-and-go Clowdr</List.Header>
            <List.Content>Let us worry about the technology.</List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Do-it-yourself Clowdr</List.Header>
            <List.Content>
              Want to run the Clowdr software yourself? We can help you with that.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Expert support</List.Header>
            <List.Content>
              We'll help you set up your conference and provide virtual on-site support to make sure
              everything runs smoothly.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Advanced customisation</List.Header>
            <List.Content>
              Want to wow your attendees with something new? We can design and build it.
            </List.Content>
          </List.Item>
        </List>
        <Button
          as="a"
          size="huge"
          href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
          color="green"
          content="Contact us about using Clowdr"
        />
      </Container>
    </ResponsiveContainer>
  )
}
