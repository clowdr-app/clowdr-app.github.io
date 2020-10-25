import { Link } from "gatsby"
import React, { useState } from "react"
import { Container, Menu, Segment, Visibility } from "semantic-ui-react"
import { Media } from "../classes/Media"
import MenuItems from "./MenuItems"

interface Props {
  children: React.ReactNodeArray | React.ReactNode
  heading?: React.ReactNode
}

export function DesktopContainer(props: Props) {
  const [fixed, setFixed] = useState<boolean>()

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          color="green"
          inverted
          textAlign="center"
          style={{
            minHeight: props.heading ? 700 : 0,
            padding: "1em 0em 2em",
          }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : undefined}
            borderless
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{ border: "0 none", fontSize: "1.4em" }}
          >
            <Container style={{ display: "flex", alignItems: "center" }}>
              <Link
                to="/"
                style={{
                  fontSize: "1.4em",
                  padding: "0 1em",
                  color: fixed ? "black" : "white",
                }}
              >
                Clowdr
              </Link>
              <MenuItems />
            </Container>
          </Menu>
          {props.heading}
        </Segment>
      </Visibility>

      {props.children}
    </Media>
  )
}
