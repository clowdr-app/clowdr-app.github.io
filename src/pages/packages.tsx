import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import {
  Button,
  Container,
  Grid,
  GridColumn,
  Header,
  Icon,
  List,
  ListItem,
  Statistic,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"

export let packages =
  <List
    divided
    relaxed
    style={{ width: "auto", display: "inline-block", textAlign: "left" }}
  >
    <List.Item>
      <List.Header>Click-and-go</List.Header>
      <List.Content>We worry about the technology; you organize the conference.  Recommended for events with a simple, single-track program.</List.Content>
    </List.Item>
    <List.Item>
      <List.Header>Expert support</List.Header>
      <List.Content>
        You organize, we help.  We'll advise you on how to plan and set up your conference and provide virtual on-site support to make
        sure everything runs smoothly.  Recommended for more complex events, especially ones with multiple tracks.
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Header>Hands-on support</List.Header>
      <List.Content>
        We organize, you help.  We'll take your requirements and deliver a successful event from start to finish.
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Header>Advanced customisation</List.Header>
      <List.Content>
        Want to wow your attendees with something new? We can design and build it.
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Header>Do-it-yourself</List.Header>
      <List.Content>
        Want to run the Clowdr platform yourself? We can help you with that.
      </List.Content>
    </List.Item>
  </List>
