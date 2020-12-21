import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import {
  Button,
  Container,
  Grid,
  GridColumn,
  Header,
  Icon,
  List,
  ListItem,
  Statistic,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function Pricing() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pricing | Clowdr - Social virtual conferences</title>
      </Helmet>

      <Container style={{ padding: "4em 0 2em" }}>
        <Header as="h2" style={{ fontSize: "3em", marginBottom: "1em" }} textAlign="center">
          Packages
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Whether your conference has 50 attendees or 5,000 and beyond, we can help you deliver a
          rich social experience. These packages are a guide to what we can provide, but please talk to
          us if you need something not currently shown on our website. We're a small, fast moving
          team - we may already be working on just the thing you need!
        </p>
        <Container textAlign="center" style={{ fontSize: "1.2em" }}>
          <List
            divided
            relaxed
            style={{ width: "auto", display: "inline-block", textAlign: "left" }}
          >
            <List.Item>
              <List.Header>Click-and-go Clowdr</List.Header>
              <List.Content>Let us worry about the technology.</List.Content>
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
            <List.Item>
              <List.Header>Do-it-yourself Clowdr</List.Header>
              <List.Content>
                Want to run the Clowdr software yourself? We can help you with that.
              </List.Content>
            </List.Item>
          </List>
        </Container>
      </Container>
      <Container style={{ padding: "4em 0 2em" }}>
        <Header as="h2" style={{ fontSize: "3em", marginBottom: "0em" }} textAlign="center">
          Guide Prices
        </Header>
        <Header
          as="h3"
          style={{ fontSize: "1.7em", marginTop: 0, marginBottom: "1em" }}
          textAlign="center"
        >
          valid through March 2021
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          We recognise that one price doesn't fit everyone. When you contact us, we'll meet with you
          (virtually 😉) for a free consultation to understand your requirements and provide an
          appropriate quote for your conference.
        </p>
        <Container style={{ overflow: "auto", maxWidth: "100%" }}>
          <Table unstackable>
            <TableHeader>
              <TableHeaderCell>
                Package<sup style={{ color: "red" }}>1</sup>
              </TableHeaderCell>
              <TableHeaderCell>Hosting</TableHeaderCell>
              <TableHeaderCell>Features</TableHeaderCell>
              <TableHeaderCell>
                Training &amp; attendee support<sup style={{ color: "red" }}>2</sup>
              </TableHeaderCell>
              <TableHeaderCell>Organiser support</TableHeaderCell>
              <TableHeaderCell>Event management</TableHeaderCell>
              <TableHeaderCell>Extended features</TableHeaderCell>
              <TableHeaderCell>
                Guide price<sup style={{ color: "red" }}>3</sup>
              </TableHeaderCell>
              <TableHeaderCell>Minimum price</TableHeaderCell>
            </TableHeader>
            <TableBody>
              <TableRow textAlign="center">
                <TableCell>Click-and-go</TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>$20/attendee</TableCell>
                <TableCell>$1,000</TableCell>
              </TableRow>
              <TableRow textAlign="center">
                <TableCell>Expert support</TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>$30/attendee</TableCell>
                <TableCell>$6,000</TableCell>
              </TableRow>
              <TableRow textAlign="center">
                <TableCell>Hands-on support</TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>$50/attendee</TableCell>
                <TableCell>$25,000</TableCell>
              </TableRow>
              <TableRow textAlign="center">
                <TableCell>Advanced customisation</TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>$50/attendee</TableCell>
                <TableCell>$50,000</TableCell>
              </TableRow>
              <TableRow textAlign="center">
                <TableCell>Do-it-yourself</TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  $250/hour of support
                  <br />
                  (inc. training)
                </TableCell>
                <TableCell>$500</TableCell>
              </TableRow>
              <TableRow textAlign="center">
                <TableCell>Pure open source</TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="check" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>
                  <Icon name="times" />
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
        <Container textAlign="center" style={{ padding: "2em 0 1em" }}>
          <Button
            as="a"
            size="big"
            href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
            color="green"
            content="Arrange a free consultation"
            icon="mail"
          />
        </Container>
        <Table unstackable>
          <TableHeader>
            <TableHeaderCell>Package item</TableHeaderCell>
            <TableHeaderCell>What's included</TableHeaderCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Days</TableCell>
              <TableCell>All guide prices are based on a five day conference.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hosting</TableCell>
              <TableCell>
                Clowdr's software is open source and free for anyone to use. Alternatively, we offer our
                software as a <i>hosted service</i> so you don't have to worry about the tech and
                infrastructure. Just log in and start creating your program!
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Features</TableCell>
              <TableCell>
                All packages include <Link to="/features">every feature</Link> of the Clowdr software.{" "}
                  You can disable some features if you don't wish to use them.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Training &amp; attendee support<sup style={{ color: "red" }}>1</sup>
              </TableCell>
              <TableCell>
                <List bulleted>
                  <ListItem>
                    Three 1-hour training sessions for your committee, volunteers, and presenters on
                    how to use Clowdr.
                  </ListItem>
                  <ListItem>
                    One of our team online for 30 mins/100 attendees each day of your conference, up
                    to a maximum of 4 hours/day.
                  </ListItem>
                  <ListItem>
                    For larger conferencs, we may be able to provide additional members of our team and/or more
                    hours of support.
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Organiser support</TableCell>
              <TableCell>
                Learn from <Link to="/about">our team's</Link> &gt;10 years experience organising
                conferences. We will advise your organising committee on best practices for the
                design and delivery of virtual conferences, and how to get the most out of the
                Clowdr software.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Extended features (/feature guarantees)</TableCell>
              <TableCell>
                We are always developing new features, but if your conference needs something
                specific that isn't on our roadmap (or you need it sooner than we have planned),
                please talk to us. If you'd like a guarantee of the feature being available for your
                conference, we may offer this package option to you.{" "}
                <i style={{ fontWeight: 600, fontSize: "95%" }}>
                  Please talk to us as early as possible so we can allow enough time to address your
                  requirements.
                </i>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Event management</TableCell>
              <TableCell>
                If you'd like our team to help you design your program, provide extra training for
                your volunteers, or assist your conference in any other way, let's talk about it!
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          <span style={{ color: "red" }}>1</span> All packages include our standard tech support
          that we provide to keep our services up and running.
        </p>
        <p>
          <span style={{ color: "red" }}>2</span> Quotes provided before January 2021 include
          Training. After January 2021 Training may be included upon request depending on
          availability.
        </p>
        <p>
          <span style={{ color: "red" }}>3</span> All prices are shown in USD and exclusive of tax.
          GBP and EUR currencies also available. All prices shown are for guidance only and are
          subject to change at any time. We will provide an exact quote for your conference after a free
          consultation. Clowdr CIC is a UK company operating in the UK - contracts are generally
          made under UK jurisdiction.
        </p>
      </Container>
    </ResponsiveContainer>
  )
}
