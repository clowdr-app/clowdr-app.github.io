import React from "react"
import { Container, Header, Item, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"
import Title from "../components/Title"

export default function About() {
  return (
    <>
      <Title title="About" />
      <ResponsiveContainer>
        <Container text style={{ padding: "4em 0" }}>
          <Header as="h2" style={{ fontSize: "2em", padding: "1em 0 0" }} textAlign="center">
            Our goal
          </Header>
          <p style={{ fontSize: "1.33em", textAlign: "center" }}>
            Make virtual conferences so good that people choose them over physical.
          </p>
          <p>
            Clowdr is a complete solution for hosting virtual conferences, designed and built by
            conference organisers. It seamlessly combines your structured program of
            presentations and exhibitions with social events and with text and video chat. As we learn
            about best practices for virtual conferences, we build them into the open source
            Clowdr platform for the benefit of the whole community.
          </p>
          <p>
            Clowdr started at the beginning of the COVID-19 pandemic when Crista, Jonathan, and Benjamin
            &mdash; professors of Computer Science and experienced conference organisers &mdash;
            realised a rapid solution was needed for organising{" "}
            <a href="https://www.acm.org/">Association for Computing Machinery</a> conferences.
          </p>
          <p>
            Beginning as a stop-gap measure for two flagship software engineering and programming languages conferences {" "}
            <a href="https://conf.researchr.org/home/icse-2020">ICSE</a> and{" "}
            <a href="https://conf.researchr.org/home/pldi-2020">PLDI</a>, Clowdr received funding from the US National Science Foundation, allowing it to evolve to meet the
            needs of <a href="https://icfp20.sigplan.org">ICFP</a>, <a href="https://cscw.acm.org/2020/">CSCW</a> and numerous other conferences throughout the summer and autumn.
          </p>
          <p>
            The platform has grown dramatically, and
            has quickly become a <a href="https://github.com/clowdr-app/clowdr-web-app">thriving open source project</a> with features that rival its commercial competitors.
            After ICFP, our project found several new contributors. Now, those
            contributors include the CEO and CTO of Clowdr CIC - a UK-based Community Interest
            Company founded to continue open source development of Clowdr and provide support to
            conference organisers.
          </p>
          <p>
            A CIC is similar to a US public benefit corporation. The corporate structure and UK
            regulation ensure that Clowdr remains open source and for the benefit of the community.
            The company is required to reinvest almost all of its revenue into improving the
            platform and thereby serving the academic community it came from.
          </p>
          <p>
            Clowdr CIC is here to support conference organisers in these difficult times. If you
            just want a zero-effort way to run a virtual conference, we can provide a completely
            managed service: we'll load in your conference program, handle A/V production, and provide expert advice.
          </p>
          <p>
            If you want to host the platform yourself, we are here to provide technical support and
            advice.
          </p>
          <p>
            Or if you want to really push the envelope of what is possible, we can turn your ideas
            into features of the Clowdr platform. Automatic postings announcint talks on social media? Visualising the
            proceedings? Custom live video streams? Integration with VR environments? These are just
            some of the things we're thinking about.
          </p>
          <Header as="h2" style={{ fontSize: "2em" }} textAlign="center">
            Meet the team
          </Header>
          <Item.Group divided link>
            <Item>
              <Item.Image avatar size="small" src="./ed-nutting.jpg" />
              <Item.Content>
                <Item.Header>Ed Nutting</Item.Header>
                <Item.Description>
                  Ed is the CEO of Clowdr. He's an experienced developer with a passion for
                  entrepreneurship and technology education. Ed founded his first startup when he
                  was fifteen, created the open-source educational operating system FlingOS and is a
                  researcher in the field of processor architecture.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image avatar size="small" src="./ross-gardiner.jpg" />
              <Item.Content>
                <Item.Header>Ross Gardiner</Item.Header>
                <Item.Description>
                  Ross is the CTO of Clowdr. He's a software engineer who has worked in multiple
                  sectors: medical CAD software, railway operations, e-commerce and even mid-air
                  haptics.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item href="https://www.cis.upenn.edu/~bcpierce/">
              <Item.Image avatar size="small" src="./benjamin-pierce.jpg" />
              <Item.Content>
                <Item.Header>Benjamin Pierce</Item.Header>
                <Item.Description>
                  Benjamin is Henry Salvatori Professor of Computer and Information Science at the
                  University of Pennsylvania and a Fellow of the ACM. He was virtualization chair for
                  the 2020 International Conference on Functional Programming and has extensive experience
                  with organization of physical conferences.
                  He is deeply invested in reducing the climate impact of conferences, serving as chair of
                  ACM SIGPLAN's ad hoc <a href="">committee on climate change</a> and on the UPenn
                  Faculty Senate Committee on the Institutional Response to the Climate Emergency
                  (<a href="https://provost.upenn.edu/senate/circe">CIRCE</a>).
                </Item.Description>
              </Item.Content>
            </Item>
            <Item href="https://jonbell.net">
              <Item.Image avatar size="small" src="./jonathan-bell.jpg" />
              <Item.Content>
                <Item.Header>Jonathan Bell</Item.Header>
                <Item.Description>
                  Jon is Assistant Professor of Software Engineering at Northeastern University. He
                  has been involved in academic conference organization since he was a first-year PhD student,
                  and based on his experiences, has taken a particular interest in organizing student mentoring workshops (at SPLASH in 2017, 2018,
                  2019 and 2020; at ICSE in 2022). Jon directs research in software engineering and distributed systems,
                  bringing a wealth of technical expertise to Clowdr.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item href="https://www.ics.uci.edu/~lopes/">
              <Item.Image avatar size="small" src="./crista-lopes.jpg" />
              <Item.Content>
                <Item.Header>Cristina Videira Lopes</Item.Header>
                <Item.Description>
                  Crista is Professor of Informatics and Computer Science at the University of
                  California, Irvine. She has extensive experience on conference committees and in
                  2020 became the first-ever Virtualization Chair for the International Conference
                  on Software Engineering.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      </ResponsiveContainer>
    </>
  )
}
