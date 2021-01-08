import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { Button, Card, Container, Grid, Header, List, Segment, Statistic } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function Solution() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Features | Clowdr - Social virtual conferences</title>
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
        <Container textAlign="center" style={{ margin: "2rem" }}>
          <iframe
            title="Video introducing Clowdr"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/RqyHVQUYVI4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
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
            description="Virtual conferences are new to us all. We continue to collaborate with other researchers around the world to design new ways to organise virtual conferences."
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
                <Card>
                  <Card.Content>
                    <Card.Header>2021 is just around the corner</Card.Header>
                    <Card.Meta>March 2021 onwards</Card.Meta>
                    <Card.Description>
                      We're now providing quotes for conferences from March 2021 onwards. From 50 to
                      5,000 attendees and beyond, we can help make your virtual conference a
                      success. Contact us today to receive a quote!
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card link href="https://popl21.sigplan.org/">
                  <Card.Content>
                    <Card.Header>POPL 2021</Card.Header>
                    <Card.Meta>January 17-22 2021</Card.Meta>
                    <Card.Description>
                      The 48th ACM SIGPLAN Symposium on Principles of Programming Languages (POPL
                      2021) will be held on Clowdr early in the New Year!
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card link href="https://2020.splashcon.org/">
                  <Card.Content>
                    <Card.Header>SPLASH 2020</Card.Header>
                    <Card.Meta>November 15-21 2020</Card.Meta>
                    <Card.Description>
                      Over 900 attendees used Clowdr to attend the ACM SIGPLAN conference on
                      Systems, Programming, Languages, and Applications: Software for Humanity.
                    </Card.Description>
                  </Card.Content>
                </Card>
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
        <List
          divided
          relaxed
        >
          <List.Item>
            <List.Header>Click-and-go</List.Header>
            <List.Content>We worry about the technology; you organize the conference.  Recommended for events with a simple, single-track program.</List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Expert support</List.Header>
            <List.Content>
              You organize, we help.  We'll advise you on how to plan and set up your conference and provide virtual on-site support to make
              sure everything runs smoothly.  Recommended for more complex events, especially ones with multiple tracks.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Hands-on support</List.Header>
            <List.Content>
              We organize, you help.  We'll take your requirements and deliver a successful event from start to finish.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Advanced customisation</List.Header>
            <List.Content>
              Want to wow your attendees with something new? We can design and build it.
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Do-it-yourself</List.Header>
            <List.Content>
              Want to run the Clowdr platform yourself? We can help you with that.
            </List.Content>
          </List.Item>
        </List>
        <Button
          as="a"
          size="big"
          href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
          color="green"
          content="Contact us today"
          icon="mail"
        />
        <Button
          as="a"
          size="big"
          href="/pricing"
          color="green"
          content="View package pricing"
          icon="dollar"
        />
      </Container>
    </ResponsiveContainer>
  )
}
