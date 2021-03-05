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
          <p style={{ fontSize: "2em", textAlign: "center" }}>Join our team</p>

          <p>Clowdr CIC is hiring!</p>

          <h1>
            Current openings
          </h1>

          <h3>
            Software developer (front end)
          </h3>

          <p> Our ideal candidate for this position is an experienced
            developer with a particular interest in front-end design
            and implementation. You should have an eye for what looks
            good and an instinct for good user experience.  
            </p>

          <p>Essential skills:</p>
          <ul>
            <li>Front-end web application development</li>
            <li>User experience design (UX)</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>

          <p>Nice to have:</p>
          <ul>
            <li>Chakra UI</li>
            <li>Heroku</li>
            <li>GraphQL</li>
            <li>AWS</li>
            <li>Hasura</li>
          </ul>

          <h3>
            Software developer (devops / backend)
          </h3>

          <p> The ideal candidae for this position would be a strong
            software developer with an interest in infrastructure and
            DevOps.  You would be comfortable implementing backend
            APIs and services, working on our build and deployment
            systems; designing and securing our AWS infrastructure;
            deploying monitoring, alerting and load testing.

            Ideally, you would have several years of experience
            working on cloud-hosted applications -- even better if
            that's at significant scale. You should share our
            appreciation for applications that are well-documented,
            easy to build and deploy, and whose configuration and
            infrastructure are defined as code.  </p>

          <p>Essential skills:</p>
          <ul>
            <li>Web application development</li>
            <li>Typescript</li>
            <li>Cloud infrastructure, particularly AWS</li>
          </ul>

          <p>Nice to have:</p>
          <ul>
            <li>Postgres</li>
            <li>Heroku</li>
            <li>Hasura</li>
            <li>GraphQL</li>
            <li>Technical writing</li>
          </ul>

          <h1>What we're looking for</h1>

          <p> You should be friendly and easy to work with, and
            comfortable working remotely with an internationally
            distributed team. We encourage flexible working and
            asynchronous collaboration, but the international nature
            of our business means meetings can be at a wide range of
            hours. Our existing engineering team work from European
            timezones.  </p>

          <p> Clowdr is incorporated in the UK, but there is no need
            to be resident or have the right to work in the UK for
            this role. </p>

          <p> Ideal candidates for these positions will have a broad
            skillset related to web application development, with at
            least 3-5 years of experience designing and developing
            web-based systems. Talent is more important than specific
            skills, so it's still worth contacting us if you don't
            precisely match one the specific job descriptions below.
            </p>

          <p> The idea candidate for any position will be comfortable
            pitching in at all levels of our stack when necessary. We
            develop all of our software{" "} <a
            href="https://github.com/clowdr-app/clowdr">in the
            open</a>. </p>

          <h1>What we offer</h1>

          <p> A critical role in a public-interest, community-focused
            company that is developing cutting-edge, open-source
            technology for a super-hot market sector, driven by a
            passion to combat climate change while increasing
            inclusivity at conferences.  </p>

          <p>A friendly, flexible remote working environment.</p>

          <p>Competitive remuneration.</p>

          <h1>The company</h1>

          <p> Clowdr is a young and quickly growing conference
            platform that aims to reduce the carbon footprint of
            academic conferences by offering a more attractive virtual
            alternative.  </p>

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
            activities.  </p>

          <h1>Starting date</h1>

          <p>As soon as convenient.</p>

          <Header as="h1" style={{ fontSize: "1.7em" }}>
            To apply
          </Header>

          <p>
            Please send your CV, together with a cover letter telling us why Clowdr might be a good
            fit for you and vice versa, to <a href="mailto:jobs@clowdr.org">jobs@clowdr.org</a>.
            Applications will be considered as they arrive.
          </p>
        </Container>
      </ResponsiveContainer>
    </>
  )
}
