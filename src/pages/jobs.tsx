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
            Software Developer (frontend)
          </Header>
          <strong>Remote</strong>

          <h2>The need</h2>

          <p>
            We're looking for a new member of our small but effective engineering team. Our ideal
            candidate is an experienced developer with a particular interest in frontend. You have
            an eye for what looks good and an instinct for good user experience.
          </p>

          <p>
            You should be comfortable pitching in at all levels of our stack when necessary. We
            develop all of our software{" "}
            <a href="https://github.com/clowdr-app/clowdr">in the open</a>, and we mainly use
            Hasura, TypeScript and React.
          </p>

          <p>Essential skills:</p>
          <ul>
            <li>Frontend web application development</li>
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

          <h2>Who we're looking for</h2>

          <p>
            Ideally, you have a broad skillset related to web application development, with at least
            3-5 years of experience designing and developing web user interfaces. Talent is more
            important to us than specific skills, so don't worry if you don't exactly match the list
            above.
          </p>

          <p>
            We're looking for someone friendly and easy to work with. You should be comfortable
            working remotely with an internationally-distributed team. We encourage flexible working
            and async collaboration, but the international nature of our business means meetings can
            be at a wide range of hours. Our existing engineering team work from European timezones.
          </p>

          <p>
            Clowdr is incorporated in the UK, but there is no need to be resident or have the right
            to work in the UK for this role.
          </p>

          <p>Starting date: as soon as convenient.</p>

          <h2>What we offer</h2>

          <p>
            A critical role in a public-interest, community-focused company that is developing
            cutting-edge, open-source technology for a super-hot market sector, driven by a passion
            to combat climate change while increasing inclusivity at conferences.
          </p>

          <p>A friendly, flexible working environment.</p>

          <p>Competitive remuneration.</p>

          <h2>The company</h2>

          <p>
            Clowdr is a young and quickly growing conference platform that aims to reduce the carbon
            footprint of academic conferences by offering a more attractive virtual alternative.
          </p>

          <p>
            Clowdr CIC has 5 founders, all contributing to every aspect of the business. Ed and Ross
            are full time CEO and CTO. Both are software developers by background, though Ed also
            has entrepreneurship training. Benjamin, Jonathan, and Crista remain full-time in their
            academic positions and contribute as much as possible to Clowdr. Ed and Ross currently
            do the bulk of technical development, and the whole team contributes to business
            development and operations. We are in the process of onboarding a business development
            manager to focus on scaling up the latter activities.
          </p>

          <h2 style={{ fontSize: "1.7em" }}>To apply</h2>

          <p>
            Please send your CV, together with a cover letter telling us why Clowdr might be a good
            fit for you and vice versa, to <a href="mailto:jobs@clowdr.org">jobs@clowdr.org</a>.
            Applications will be considered as they arrive.{" "}
          </p>

          <Header as="h1" style={{ fontSize: "1.7em" }}>
            Software Developer (DevOps/backend)
          </Header>
          <strong>Remote</strong>

          <h2>The need</h2>

          <p>
            We're looking for a new member of our small but effective engineering team. Our ideal
            candidate is a strong software developer with an interest in infrastructure and DevOps.
            You would be comfortable implementing backend APIs and services, working on our build
            and deployment systems; designing and securing our AWS infrastructure; deploying
            monitoring, alerting and load testing.
          </p>

          <p>
            You should be comfortable pitching in at all levels of our stack when necessary. We
            develop all of our software{" "}
            <a href="https://github.com/clowdr-app/clowdr">in the open</a>, and we mainly use
            Hasura, TypeScript and React.
          </p>

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

          <h2>Who we're looking for</h2>

          <p>
            Ideally, you have several years of experience working on cloud-hosted applications. Even
            better if that's at significant scale. You should share our appreciation for
            applications that are well-documented, easy to build and deploy and whose configuration
            and infrastructure is defined as code.
          </p>

          <p>
            We're looking for someone friendly and easy to work with. You should be comfortable
            working remotely with an internationally-distributed team. We encourage flexible working
            and async collaboration, but the international nature of our business means meetings can
            be at a wide range of hours. Our existing engineering team work from European timezones.
          </p>

          <p>
            Clowdr is incorporated in the UK, but there is no need to be resident or have the right
            to work in the UK for this role.
          </p>

          <p>Starting date: as soon as convenient.</p>

          <h2>What we offer</h2>

          <p>
            A critical role in a public-interest, community-focused company that is developing
            cutting-edge, open-source technology for a super-hot market sector, driven by a passion
            to combat climate change while increasing inclusivity at conferences.
          </p>

          <p>A friendly, flexible working environment.</p>

          <p>Competitive remuneration.</p>

          <h2>The company</h2>

          <p>
            Clowdr is a young and quickly growing conference platform that aims to reduce the carbon
            footprint of academic conferences by offering a more attractive virtual alternative.
          </p>

          <p>
            Clowdr CIC has 5 founders, all contributing to every aspect of the business. Ed and Ross
            are full time CEO and CTO. Both are software developers by background, though Ed also
            has entrepreneurship training. Benjamin, Jonathan, and Crista remain full-time in their
            academic positions and contribute as much as possible to Clowdr. Ed and Ross currently
            do the bulk of technical development, and the whole team contributes to business
            development and operations. We are in the process of onboarding a business development
            manager to focus on scaling up the latter activities.
          </p>

          <h2 style={{ fontSize: "1.7em" }}>To apply</h2>

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
