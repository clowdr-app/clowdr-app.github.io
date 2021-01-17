import { Link } from "gatsby"
import React from "react"
import { Menu } from "semantic-ui-react"

/* If you change the list of pages, make sure to also change
   Footer.tsx (really, the two should be generated from the same
   static list of strings!) */

export default function MenuItems() {
  return (
    <>
      <Menu.Item as={Link} to="/features" activeClassName="active">
        Features
      </Menu.Item>
      <Menu.Item as={Link} to="/pricing" activeClassName="active">
        Pricing
      </Menu.Item>
      <Menu.Item as={Link} to="/about" activeClassName="active">
        About Us
      </Menu.Item>
      <Menu.Item as={Link} to="/jobs" activeClassName="active">
        Jobs
      </Menu.Item>
      <Menu.Item as={Link} to="/feedback" activeClassName="active">
        Feedback
      </Menu.Item>
    </>
  )
}
