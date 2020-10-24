import React from "react"
import { Container, Header, Button, Icon } from "semantic-ui-react"
import { Media } from "../classes/Media"

export default function HomepageHeading() {
  function getHeaders(small: boolean) {
    return (
      <>
        <Header
          as="h1"
          content="Imagine-a-Company"
          inverted
          style={{
            fontSize: small ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: small ? "1.5em" : "3em",
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
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
    <Container text>
      <Media greaterThan="mobile">{getHeaders(false)}</Media>
      <Media at="mobile">{getHeaders(true)}</Media>
      <Button primary size="huge">
        Get Started
        <Icon name="arrow right" />
      </Button>
    </Container>
  )
}
