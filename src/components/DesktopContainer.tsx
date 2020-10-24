import React, { useState } from "react"
import { Button, Container, Menu, Segment, Visibility } from "semantic-ui-react"
import { Media } from "../classes/Media"
import HomepageHeading from "./HomepageHeading"

interface Props {
  children: React.ReactNodeArray
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
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading mobile={false} />
        </Segment>
      </Visibility>

      {props.children}
    </Media>
  )
}
