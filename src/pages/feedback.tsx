import React from "react"
import { Container, Header, Item, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"
import Title from "../components/Title"

export default function Feedback() {
  return (
    <>
      <Title title="Feedback" />
      <ResponsiveContainer>
        <Container text style={{ padding: "4em 0" }}>

          <Header as="h2" style={{ fontSize: "2em" }} >
            Reporting issues
          </Header>

          <p> We welcome feedback from users!  If you have a bug to
            report or an improvement to suggest, please use{" "}
            <a href="https://github.com/clowdr-app/clowdr/issues">our
            issue tracker</a> to tell us about it!  </p>

          <Header as="h2" style={{ fontSize: "2em" }} >
            Contributing to Clowdr
          </Header>

          <p> The Clowdr platform is 100% open source: your
            contributions are welcome!  If you'd like to build it
            yourself, you are welcome to clone {" "}<a
            href="https://github.com/clowdr-app/clowdr">our github
            repo</a>.  </p>

          <p>(Warning: The platform relies on a number of
            external services, which you'll also need to set up.  The
            repo includes complete instructions for how to do this,
            but it's not a trivial process.) </p>

        </Container>
      </ResponsiveContainer>
    </>
  )
}
