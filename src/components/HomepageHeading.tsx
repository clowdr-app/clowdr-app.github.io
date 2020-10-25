import React from "react"
import { Container, Header, Button, Icon, Grid, Image } from "semantic-ui-react"
import { Media } from "../classes/Media"

export default function HomepageHeading() {
  function getHeaders(small: boolean) {
    return (
      <>
        <Header
          as="h1"
          content="Serious virtual conferences"
          inverted
          style={{
            fontSize: small ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
          }}
        />
        <Header
          as="h2"
          content="Clowdr helps you run compelling online conferences that build community, reduce carbon emissions and bolster inclusivity."
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
            src="./clowdr-screenshot.png"
            style={{ marginTop: "1em" }}
            centered
          />
          {getHeaders(true)}
          <Button primary size="huge" as="a" href="mailto:hello@clowdr.org">
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
                primary
                size="huge"
                floated="right"
                as="a"
                href="mailto:hello@clowdr.org"
              >
                Contact us to find out more
                <Icon name="arrow right" />
              </Button>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Image src="./clowdr-screenshot.png" style={{ marginTop: "1em" }} />
          </Grid.Column>
        </Grid>
      </Media>
    </>
  )
}
