import { Link } from "gatsby"
import React from "react"
import { Menu } from "semantic-ui-react"

export default function MenuItems() {
  return (
    <>
      <Menu.Item as={Link} to="/solution" activeClassName="active">
        Solution
      </Menu.Item>
      <Menu.Item as={Link} to="/about" activeClassName="active">
        About
      </Menu.Item>
    </>
  )
}
