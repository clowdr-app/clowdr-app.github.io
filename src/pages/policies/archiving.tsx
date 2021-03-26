import { Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import Title from "../../components/Title";

export default function Archiving() {
  return (
    <>
      <Title title="Backups Policy" />
      <Layout>
        <Container my={8}>
          <Heading as="h2" size="2xl">
            Archiving Policy
          </Heading>
          <Text>
            Clowdr retains your conference's data for the time specified in our
            service agreement with you. In general Clowdr is happy to provide
            copies of data to conferences, since the conference owns that data
            (as Data Controllers) as part of our standard services agreement.
            The following policies apply to specific kinds of data within
            Clowdr.
          </Text>
          <Heading as="h3" size="xl">
            Images and Videos
          </Heading>
          <Text>
            Images and pre-recorded videos uploaded to Clowdr, as well as
            recordings of any live streams, may be provided upon request as
            downloadable files. In addition, we may provide automatic uploading
            of videos to YouTube (when suitable authorization is granted to us).
            This includes configuring the description and relevant playlists for
            your videos.
          </Text>
          <Heading as="h3" size="xl">
            Chat messages
          </Heading>
          <Text>
            We provide copies of "public" chats sent within Clowdr; In general
            these are messages sent in "hallway" rooms and rooms associated with
            particular content (papers, posters, etc). We will not, except at
            our sole discretion and only when given appropriate justification,
            provide copies of private messages sent within Clowdr. Private
            messages includes, for example, direct messages ("DMs"), messages
            sent in private group rooms or semi-private messages, such as
            messages sent in public ephemeral rooms (where attendees may have a
            reasonable expectation that such messages will not outlast the
            conference).
          </Text>
          <Heading as="h3" size="xl">
            Attendee profiles
          </Heading>

          <Text>
            We do not provide archivable copies of attendee's profiles or other
            such personal data. We do not believe such data is appropriate for
            conferences to archive. We do provide some analytics data, which may
            derive from particular elements of attendee's personal data and
            where it has been processed in accordance with applicable data
            protection regulation and policy.
          </Text>
          <Text>
            For the avoidance of doubt, we do not provide archivable lists of
            user's email addresses.
          </Text>
          <Heading as="h3" size="xl">
            Analytics
          </Heading>
          <Text>
            We may provide some archivable analytics data, such as aggregate
            counts of attendance by location, daily usage of video rooms, and
            similar.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
