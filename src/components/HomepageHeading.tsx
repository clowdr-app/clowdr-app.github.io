import React from "react"
import { Container, Header, Button, Icon, Grid, Image } from "semantic-ui-react"
import { Media } from "../classes/Media"

export default function HomepageHeading() {
  function getHeaders(small: boolean) {
    return (
      <>
        <Header
          as="h1"
          content="Great virtual conferences without the heavy lifting"
          inverted
          style={{
            fontSize: small ? "1.8em" : "3.5em",
            fontWeight: "normal",
            marginBottom: 0,
          }}
        />
        <Header
          as="h2"
          content="Clowdr makes it easy to create a socially-engaging virtual conference experience - giving you time to focus on the things that matter."
          inverted
          style={{
            fontSize: small ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: small ? "0.5em" : "1.5em",
            marginBottom: small ? "0.5em" : "1em",
          }}
        />
      </>
    )
  }

  return (
    <>
      <Media at="mobile">
        <Container text style={{ marginTop: "2em" }}>
          <Image
            src="/people-table.svg"
            style={{ marginTop: "1em", width: "80%", maxHeight: "10em" }}
            centered
          />
          {getHeaders(true)}
          <Button
            size="huge"
            as="a"
            href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
            inverted
          >
            Contact us to find out more
            <Icon name="arrow right" />
          </Button>
        </Container>
      </Media>
      <Media greaterThan="mobile">
        <Grid columns={2} style={{ marginTop: "8em", textAlign: "right" }}>
          <Grid.Column>
            <Container fluid text>
              {getHeaders(false)}
              <Button
                size="huge"
                floated="right"
                as="a"
                href="mailto:hello@clowdr.org?subject=I'm%20interested%20in%20using%20Clowdr"
                inverted
              >
                Request a demo
                <Icon name="arrow right" />
              </Button>
            </Container>
          </Grid.Column>
          <Grid.Column textAlign="left">
            <div
              style={{
                margin: "1em",
                width: "80%",
                maxHeight: "30em",
                textAlign: "left",
              }}
            >
              <Image
                src="/people-table.svg"
                style={{
                  height: "30em",
                }}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Media>
    </>
  )
}
