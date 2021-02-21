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
          <Header as="h2" style={{ fontSize: "2em" }}>
            Our company
          </Header>
          <p>
             Clowdr CIC offers state-of-the-art virtual conferences to
             the academic community. Our mission is to slash the
             climate impact of academia by providing an attractive,
             effective, and inclusive alternative to physical
             gatherings, and by empowering others to address other
             market sectors using our open-source platform.
          </p>

          <Header as="h2" style={{ fontSize: "2em" }}>
            Our commitment
          </Header>
          <p>
            Clowdr CIC is a UK Community Interest Company focused on
            delivering virtual conferencing software for the academic
            community. Our software is fully open source and can be used by
            anyone free of charge; we also sell 
            turnkey services to reduce the effort for conference
            organisers and to support our ongoing development.
          </p>
          <p>
            Clowdr started as a response to climate change: About 70% of
            carbon emissions for a physical conference come from
            flights and hotels. Virtual conferences can dramatically
            reduce this carbon footprint. In the short term, Clowdr
            was prompted by the pandemic and the need for the
            conferences our founding team call "home" to go virtual.
          </p>
          <p>
            Along the way, we've learned that virtual conferences
            massively expand participation in academic conferences by
            making them significantly more inclusive for people with
            disabilities, family responsibilities, caregiving roles,
            heavy work requirements, geographical restrictions, or
            limited financial means.
          </p>
          <p>
            The social experience at a virtual conference makes or
            breaks the event. This is Clowdr's key focus and we have
            strong targets for accessibility and inclusivity.
          </p>
          <p>
            We believe that, by delivering great virtual conference
            experiences now, we can convince people to continue
            holding many of their meetings virtually even after the
            pandemic is over.
          </p>

          <Header as="h2" style={{ fontSize: "2em" }}>
            Our team
          </Header>
          <Item.Group divided link>
            <Item>
              <Item.Image avatar size="small" src="/ed-nutting.jpg" />
              <Item.Content>
                <Item.Header>Ed Nutting</Item.Header>
                <Item.Description>
                  Ed is the CEO of Clowdr. He's an experienced developer with a passion for
                  entrepreneurship and technology education. Ed founded his first startup when he
                  was fifteen, created the open-source educational operating system FlingOS, and is a
                  researcher in the field of processor architecture.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image avatar size="small" src="/ross-gardiner.jpg" />
              <Item.Content>
                <Item.Header>Ross Gardiner</Item.Header>
                <Item.Description>
                  Ross is the CTO of Clowdr. He's a software engineer who has worked in multiple
                  sectors: medical CAD software, railway operations, e-commerce, and even mid-air
                  haptics. He believes we have barely scratched the surface of remote collaboration
                  during 2020 and is excited to build its future.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item href="https://www.cis.upenn.edu/~bcpierce/">
              <Item.Image avatar size="small" src="/benjamin-pierce.jpg" />
              <Item.Content>
                <Item.Header>Benjamin Pierce</Item.Header>
                <Item.Description>
                  Benjamin is Henry Salvatori Professor of Computer and Information Science at the
                  University of Pennsylvania and a Fellow of the Association for Computing Machinery. He
                  was virtualization chair for the 2020 International Conference on
                    Functional Programming and has extensive experience with organization of
                    physical conferences.  He is deeply invested in reducing the climate
                    impact of conferences, having served, for example, as founding chair of the ad hoc <a
                    href="https://www.sigplan.org/Resources/Climate/">committee on
                    climate change</a> within ACM's Special Interest Group on Programming
                    Languages and as a member of the UPenn Faculty Senate
                    Committee on the Institutional Response to the Climate Emergency (<a
                    href="https://provost.upenn.edu/senate/circe">CIRCE</a>).
                </Item.Description>
              </Item.Content>
            </Item>
            <Item href="https://jonbell.net">
              <Item.Image avatar size="small" src="/jonathan-bell.jpg" />
              <Item.Content>
                <Item.Header>Jonathan Bell</Item.Header>
                <Item.Description>
                  Jon is Assistant Professor of Software Engineering at Northeastern University. He
                  has been involved in academic conference organization since he was a first-year
                  PhD student, and, based on his experiences, has taken a particular interest in
                  organizing student mentoring workshops (at SPLASH in 2017, 2018, 2019, and 2020; at
                  ICSE in 2022). Jon directs research in software engineering and distributed
                  systems, bringing a wealth of technical expertise to Clowdr.
                </Item.Description>
              </Item.Content>
            </Item>
            <Item href="https://www.ics.uci.edu/~lopes/">
              <Item.Image avatar size="small" src="/crista-lopes.jpg" />
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


          <Header as="h2" style={{ fontSize: "2em" }}>
            Our history
          </Header>
          <p>
            Clowdr was conceived at the beginning of the COVID-19 pandemic when Crista, Jonathan, and
            Benjamin &mdash; professors of Computer Science and experienced conference organisers
            &mdash; realised a rapid solution was needed for organising{" "}
            <a href="https://www.acm.org/">Association for Computing Machinery</a> conferences.  
          </p>
          <p>
            Beginning as a stop-gap measure for two flagship software engineering and programming
            languages conferences <a href="https://conf.researchr.org/home/icse-2020">ICSE</a> and{" "}
            <a href="https://conf.researchr.org/home/pldi-2020">PLDI</a>, Clowdr received funding
            from the US National Science Foundation, allowing it to evolve to meet the needs of{" "}
            <a href="https://icfp20.sigplan.org">ICFP</a>,{" "}
            <a href="https://cscw.acm.org/2020/">CSCW</a>,{" "}
            <a href="https://https://2020.splashcon.org/">SPLASH</a>,
            and numerous other conferences throughout
            the summer and autumn.
          </p>
          <p>
            The platform developed dramatically over the first few months, quickly becoming a{" "}
            <a href="https://github.com/clowdr-app/clowdr-web-app">thriving open source project</a>{" "}
            with features that rival its commercial competitors. After ICFP, our project found
            several new contributors -- in particular Ed and Ross, who became the CEO and CTO
            of Clowdr CIC.
          </p>
          <p>
            A CIC is similar to a US public benefit corporation. The corporate structure and UK
            regulation ensure that Clowdr remains open source and for the benefit of the community.
            The company is required to reinvest almost all of its revenue into improving the
            platform and thereby serving the academic community it came from.
          </p>

        </Container>
      </ResponsiveContainer>
    </>
  )
}
