import { Link } from "gatsby"
import React from "react"
import { Menu } from "semantic-ui-react"

export default function MenuItems() {
  return (
    <>
      <Menu.Item as={Link} to="/" active>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/about">
        About
      </Menu.Item>
    </>
  )
}
