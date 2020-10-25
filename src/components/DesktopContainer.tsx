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
