import React from "react"
import { Container, Header, Item, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../components/ResponsiveContainer"
import Title from "../components/Title"

export default function About() {
  return (
    <>
      <Title title="Jobs" />
      <ResponsiveContainer>
        <Container text style={{ padding: "4em 0" }}>
          <p style={{ fontSize: "2em", textAlign: "center" }}>Join our team!</p>

          <Header as="h1" style={{ fontSize: "1.7em" }}>
            Open Position: Front-end Software Developer
          </Header>

          <h2>The need</h2>

          <p> The Clowdr team is looking for a software developer.
            </p>

          <p>Essential skills:</p>
          <ul>
            <li>Front-end web application development</li> 
            <li>User-experience design (UX)</li>
            <li>Typescript</li>
            <li>React</li>
          </ul>
          
          <p>Desirable skills:</p>
          <ul>
            <li>Chakra-UI</li>
            <li>Heroku / Hasura</li>
          </ul>
          
          <h2>The company</h2>

          <p> Clowdr is a young and quickly growing conference
          platform that aims to reduce the carbon footprint of
          academic conferences by offering a more attractive virtual
          alternative. </p>

          <p> Clowdr CIC has 5 founders, all contributing to every
            aspect of the business. Ed and Ross are full time CEO and
            CTO. Both are software developers by background, though Ed
            also has entrepreneurship training. Benjamin, Jonathan,
            and Crista remain full-time in their academic positions
            and contribute as much as possible to Clowdr. Ed and Ross
            currently do the bulk of technical development, and the
            whole team contributes to business development and
            operations. We are in the process of onboarding a business
            development manager to focus on scaling up the latter
            activities.  {" "} </p>

          <h2>Who we're looking for</h2>

          <p>
            The new Clowdr front-end software developer will contribute to
            all aspects of platform development, focusing on UI/UX design
            and implementation. 
          </p>

          <p> The ideal candidate will have a broad skillset related
            to web application development, with at least 3-5 years of
            experience designing and developing web user interfaces.
            {" "} </p>

          <p> They should be easy to work with and comfortable working
            remotely, internationally, and at flexible times. The
            international nature of our business means meetings can be
            at a wide range of hours.  </p>

          <p> They should have no conflicts being employed by a UK
            company (though they needn't be UK resident).  </p>

          <p>Starting date: as soon as convenient.</p>

          <h2>What we offer</h2>

          <p> A critical role in a public-interest, community-focused
            company that is developing cutting-edge, open-source
            technology for a super-hot market sector, driven by a
            passion to combat climate change while increasing
            inclusiveness of conferences.  </p>

          <p>A friendly, flexible working environment.</p>

          <p>Competitive remuneration.</p>

          <h2 style={{ fontSize: "1.7em" }}>To apply</h2>

          <p>
            Please send your CV to {" "} 
            <a href="mailto:jobs@clowdr.org">jobs@clowdr.org</a>.
            Applications will be considered as they arrive.
          </p>

        </Container>
      </ResponsiveContainer>
    </>
  )
}



