import React, { useState } from "react"
import { Container, Icon, Menu, Segment, Sidebar } from "semantic-ui-react"
import { Media } from "../classes/Media"
import MenuItems from "./MenuItems"

interface Props {
  children: React.ReactNodeArray | React.ReactNode
  heading: React.ReactNode
}

export default function MobileContainer(props: Props) {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>()

  return (
    <Media at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <MenuItems />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            {props.heading}
          </Segment>

          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}
