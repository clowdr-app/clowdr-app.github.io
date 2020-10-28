import { Link } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { Container, Header, Item } from "semantic-ui-react"
import ResponsiveContainer from "../components/ResponsiveContainer"

export default function About() {
  return (
    <ResponsiveContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About | Clowdr - Virtual conferences that cut carbon emissions
        </title>
      </Helmet>
      <Container text style={{ padding: "4em 0" }}>
        <Header
          as="h2"
          style={{ fontSize: "2em", padding: "1em 0" }}
          textAlign="center"
        >
          About us
        </Header>
        <p>
          Clowdr was started by three Professors of Computer Science in response
          to two crises: climate change and the COVID-19 pandemic.
        </p>
        <p>
          As conference organisers ourselves, we envisaged a conference platform
          where attendees could video and text chat with one another and easily
          drift between different conversations in different rooms. We wanted to
          pull in our our conference program directly from{" "}
          <Link to="https://conf.researchr.org/">conf.researchr.org</Link>, and
          let attendees meet other people watching the same content.
        </p>
        <p>
          We couldn't find a platform that supported these interactions so, with
          support from{" "}
          <Link to="https://www.nsf.gov/">National Science Foundation</Link> and{" "}
          <Link to="https://www.twilio.org/">Twilio.org</Link>, we built the
          open-source Clowdr platform.
        </p>
        <p>
          During 2020, we tested Clowdr with thousands of users at multiple
          conferences - including PLDI, ICSE, ISSTA, VL/HCC, ICFP, ICST and
          CSCW.
        </p>
        <p>
          Clowdr incorporated as a Community Interest Company in October 2020.
          Our goal is to serve academic communities by giving them access to
          great virtual conference software and services.
        </p>
        <Header as="h3" style={{ fontSize: "1.5em" }} textAlign="center">
          Meet the team
        </Header>
        <Item.Group divided link>
          <Item href="https://www.cis.upenn.edu/~bcpierce/">
            <Item.Image avatar size="small" src="./benjamin-pierce.jpg" />
            <Item.Content>
              <Item.Header>Benjamin Pierce</Item.Header>
              <Item.Description>
                Benjamin is Henry Salvatori Professor of Computer and
                Information Science at the University of Pennsylvania and a
                Fellow of the ACM. He has extensive experience from having
                participated in the program and organising committees of dozens
                of conferences.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item href="https://jonbell.net">
            <Item.Image avatar size="small" src="./jonathan-bell.jpg" />
            <Item.Content>
              <Item.Header>Jonathan Bell</Item.Header>
              <Item.Description>
                Jon is Assistant Professor of Software Engineering at
                Northeastern University. Jon serves on a variety of program
                committees and was recently co-chair of the PLDI 2020 Artifact
                Evaluation Committee.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item href="https://www.ics.uci.edu/~lopes/">
            <Item.Image avatar size="small" src="./crista-lopes.jpg" />
            <Item.Content>
              <Item.Header>Cristina Videira Lopes</Item.Header>
              <Item.Description>
                Crista is Professor of Informatics and Computer Science at the
                University of California, Irvine. She has extensive experience
                on conference committees and in 2020 became the first-ever
                Virtualization Chair for the International Conference on
                Software Engineering.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image avatar size="small" src="./ed-nutting.jpg" />
            <Item.Content>
              <Item.Header>Ed Nutting</Item.Header>
              <Item.Description>
                Ed is the CEO of Clowdr. He's an experienced developer with a
                passion for entrepreneurship and technology education. Ed
                founded his first startup when he was fifteen, created the
                open-source educational operating system FlingOS and is a
                researcher in the field of processor architecture.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image avatar size="small" src="./ross-gardiner.jpg" />
            <Item.Content>
              <Item.Header>Ross Gardiner</Item.Header>
              <Item.Description>
                Ross is the CTO of Clowdr. He's a software engineer who has been
                all over the place: medical CAD software, railway operations,
                e-commerce and even mid-air haptics.
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </ResponsiveContainer>
  )
}
