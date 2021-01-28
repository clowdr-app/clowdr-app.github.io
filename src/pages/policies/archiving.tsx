import React from "react"
import { Container, Header, Item, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ResponsiveContainer from "../../components/ResponsiveContainer"
import Title from "../../components/Title"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <Title title="Backups Policy" />
      <ResponsiveContainer>
        <Container text style={{ padding: "4em 0" }}>
          <Header as="h2" style={{ fontSize: "2em" }}>
            Archiving Policy
          </Header>
          <p>
            Clowdr retains your conference's data for the time specified in our service agreement
            with you. In general Clowdr is happy to provide copies of data to conferences, since the
            conference owns that data (as Data Controllers) as part of our standard services
            agreement. The following policies apply to specific kinds of data within Clowdr.
          </p>
          <Header as="h3" style={{ fontSize: "1.7em" }}>
            Images and Videos
          </Header>
          <p>
            Images and pre-recorded videos uploaded to Clowdr, as well as recordings of any live
            streams, may be provided upon request as downloadable files. In addition, we may provide
            automatic uploading of videos to YouTube (when suitable authorization is granted to us).
            This includes configuring the description and relevant playlists for your videos.
          </p>
          <Header as="h3" style={{ fontSize: "1.7em" }}>
            Chat messages
          </Header>
          <p>
            We provide copies of "public" chats sent within Clowdr; In general these are messages
            sent in "hallway" rooms and rooms associated with particular content (papers, posters,
            etc). We will not, except at our sole discretion and only when given appropriate
            justification, provide copies of private messages sent within Clowdr. Private messages
            includes, for example, direct messages ("DMs"), messages sent in private group rooms or
            semi-private messages, such as messages sent in public ephemeral rooms (where attendees
            may have a reasonable expectation that such messages will not outlast the conference).
          </p>
          <Header as="h3" style={{ fontSize: "1.7em" }}>
            Attendee profiles
          </Header>

          <p>
            We do not provide archivable copies of attendee's profiles or other such personal data.
            We do not believe such data is appropriate for conferences to archive. We do provide
            some analytics data, which may derive from particular elements of attendee's personal
            data and where it has been processed in accordance with applicable data protection
            regulation and policy.
          </p>
          <p>
            For the avoidance of doubt, we do not provide archivable lists of user's email
            addresses.
          </p>
          <Header as="h3" style={{ fontSize: "1.7em" }}>
            Analytics
          </Header>
          <p>
            We may provide some archivable analytics data, such as aggregate counts of attendance by
            location, daily usage of video rooms, and similar.
          </p>
        </Container>
      </ResponsiveContainer>
    </>
  )
}
