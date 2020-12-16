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
          <Header as="h2" style={{ fontSize: "2em", padding: "1em 0 0" }} textAlign="center">
            Open Position: Business Development Manager
          </Header>
          <p style={{ fontSize: "1.33em", textAlign: "center" }}>
            Join our team!
          </p>
          <h2>The company</h2>
          <p>
            Clowdr CIC offers state-of-the-art virtual conferences to the academic community. Our  mission is to slash the climate impact of academia by providing an attractive, effective, and engaging virtual alternative to physical meetings, and by empowering others to address different market segments using our open-source virtual conference platform.
          </p>

        <h2>The need</h2>
        <p>
          Clowdr is a new and quickly growing business. We are looking for a business development manager to spearhead our operational activities:
        </p>
        <p>
          Sales:
          <ul>
          <li> Identifying suitable conferences that might be interested in our services</li>
          <li> Reaching out to conference organizers</li>
          <li> Gathering requirements from organizers (via emails/meetings)</li>
          <li> Proposal writing</li>
          <li> Follow-ups / follow-through ("conversion" / "seal the deal")</li>
          </ul>
        </p>
        <p>
        Marketing:
          <ul>
          <li>Creation of key marketing materials (Website, Email templates, White papers, Demo videos, ...)</li>
          <li>Market and competition research</li>
          </ul>
        </p>
        <p>
        Client management:
          <ul>
          <li>Contracting</li>
          <li>Periodic update meetings</li>
          <li>Feature descriptions and dissemination of updates</li>
          </ul>
        </p>

        <h2>The role</h2>
          <p>The new Clowdr business development manager will primarily focus on finding and interacting with clients (conference organizers). This covers every stage from searching for prospective clients online (and/or marketing ourselves so people come to us), through initial requirements gathering, proposal writing, contracting, and continuing to meet with clients up until the end of their conference.</p>
          <p>Clowdr has 5 founders, all currently contributing to every aspect of the business. Ed and Ross are full time CEO and CTO, respectively. Both are software developers by background though Ed has entrepreneurship training. Benjamin, Jonathan, and Crista remain full-time in their academic positions and contribute as much time as possible to Clowdr. Ed and Ross currently do the bulk of technical development, and the whole team contributes to business development and operations. </p>
          <p>We would like whoever fills this role to rebalance this situation: Ed in particular needs more time to focus on software development, while Benjamin, Crista, and Jonathan would be more effective at finding sales leads if they had marketing materials to support them.</p>

        <h2>What we're looking for</h2>
          <p>The ideal candidate will have a broad skillset and be capable of picking up new challenges as they present themselves. They will have an understanding of software and software sold as a service. They will be comfortable with common business activities such as proposal writing, contracting, and invoicing. </p>
          <p>This person should be easy to work with and comfortable working remotely, internationally, and at flexible times. The  international nature of our business means meetings can be at a wide range of hours.</p>
          <p>Ideally they will already be familiar with academic conferences including some familiarity with how conference organizing committees function.</p>
          <p>They should have no conflicts being employed by a UK company (though they needn't be UK resident).</p>
          <p>Starting date as soon as convenient.</p>
        <h2>What we offer</h2>
          <p>A leading role in a public-interest, community-focused company that is developing cutting-edge, open-source technology for a super-hot market sector, driven by a passion to combat climate change.</p>
          <p>A friendly, flexible working environment.</p>
          <p>Competitive remuneration.</p>
        <h2>More about Clowdr</h2>
          <p>Clowdr is a UK Community Interest Company focused on delivering virtual conferencing software for the academic community. Our software is fully open source and we sell a turnkey service to reduce the effort for conference organisers.</p>
          <p>Clowdr started as a response to climate change: ~70% of carbon emissions for a physical conference come from flights and hotels. Virtual conferences can dramatically reduce this carbon footprint. In the short term, Clowdr was prompted by the pandemic and the need for the conferences our founding team call "home" to go virtual. Along the way, we've learnt that virtual conferences massively expand the attendance of academic conferences, making them significantly more inclusive than physical conferences.</p>
          <p>The social experience at a virtual conference makes or breaks the event. This is Clowdr's key focus and we have strong targets for accessibility and inclusivity.</p>
          <p>We believe that, by delivering great virtual conference experiences now, we can convince people to continue holding many of their meetings virtually even after the pandemic is over.</p>
        <h2>To apply</h2>
          <p>Please send your CV to <a href="mailto:jobs@clowdr.org">jobs@clowdr.org</a>. Applications will be considered as they arrive.</p>
        </Container>
      </ResponsiveContainer>
    </>
  )
}
