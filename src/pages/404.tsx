import React from "react"
import { Helmet } from "react-helmet"
import { Container, Header } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function About() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Page not found | Clowdr - Virtual conferences that bring people together
          emissions
        </title>
      </Helmet>
      <Container text style={{ padding: "4em 0" }}>
        <Header
          as="h2"
          style={{ fontSize: "2em", padding: "1em 0" }}
          textAlign="center"
        >
          Sorry, we couldn't find that page.
        </Header>
      </Container>
    </ResponsiveContainer>
  )
}
