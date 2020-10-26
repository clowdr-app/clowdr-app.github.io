import { Link } from "gatsby"
import React, { useState } from "react"
import { Container, Icon, Menu, Segment, Sidebar } from "semantic-ui-react"
import { Media } from "../classes/Media"
import Footer from "./Footer"
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
          color="green"
        >
          <MenuItems />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            color="green"
            textAlign="center"
            style={{
              minHeight: props.heading ? 350 : 0,
              padding: "1em 0em",
            }}
            vertical
          >
            <Container>
              <Link
                to="/"
                style={{
                  fontSize: "1.4em",
                  padding: "0 1em",
                  color: "white",
                }}
                activeStyle={{ outline: "none" }}
              >
                Clowdr
              </Link>
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

      <Footer />
    </Media>
  )
}
