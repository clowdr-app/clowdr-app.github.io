import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import React from "react";
import ReactPlayer from "react-player";
import { Layout } from "../../components/Layout";
import Title from "../../components/Title";

export default function VideoSubtitles() {
  return (
    <>
      <Title title="Videos with subtitles" />
      <Layout>
        <Container my={8}>
          <Heading as="h2" size="2xl" mb={4}>
            Videos and Captioning
          </Heading>
          <Text>
            Video captioning is a significant part of Clowdr's commitment to
            accessibility:
          </Text>
          <UnorderedList>
            <ListItem fontWeight="bold">
              Clowdr auto-generates subtitles for all uploaded videos.
            </ListItem>
            <ListItem>
              Clowdr has a built-in editor that gives authors the opportunity to
              correct any errors in the captions - as can happen with technical
              terms and acronyms!
            </ListItem>
            <ListItem>
              All captions are included when exporting videos from Clowdr to
              YouTube.
            </ListItem>
            <ListItem>
              All recordings of livestreamed events are run through our subtitle
              auto-generator before they are published. The captioned recordings
              of livestreamed talks are made available to attendees shortly
              after each talk ends.
            </ListItem>
          </UnorderedList>
          <Text fontWeight="bold">
            Live captioning is high on our priority list for summer 2021!
          </Text>
          <Divider />
          <Heading as="h3" size="xl" mb={4}>
            Preparing and uploading a video to Clowdr
          </Heading>
          <Text>
            The following 6-minute video will guide you through the process of
            uploading your video and editing the auto-generated captions:
          </Text>
          <Center>
            <Box w="100%" maxW="640px">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=SvHLXYJWO2k"
                width="100%"
                className="react-player"
                controls
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            </Box>
          </Center>
          <Text>
            The process is also outlined in the following step-by-step
            instructions:
          </Text>
          <OrderedList>
            <ListItem>
              <Text fontWeight="bold">Invitation to Upload</Text>
              <Text>
                You will receive an email from the conference organizer (via
                Clowdr) requesting you to upload your video(s) to the platform.
                This email will include a direct link to the upload page. There
                is no need to log in!
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Upload Video</Text>
              <Text>
                Once you've landed on the upload page via the link in the
                request email, you will be able to drag-and-drop a file or click
                the upload button to browse files on your device and add your
                video.
              </Text>
              <Text>
                <chakra.span fontWeight="bold">Please note:</chakra.span> You
                are given three attempts to submit your video. This page will
                also include information on the maximum duration and quality of
                the video.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Confirmation Email</Text>
              <Text>
                Once you've uploaded a video, you will receive an email from
                Clowdr confirming your submission was received and is being
                processed.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Processing and Captioning</Text>
              <Text>
                This will be followed by two additional emails - one marking
                when your video has been processed, and a final email confirming
                that it has been captioned and is ready for viewing &amp;
                editing. Please remember to check your spam folders for
                communications from Clowdr.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Auto-Generated Subtitles</Text>
              <Text>
                Clowdr will auto-generate the subtitles for your video - this
                typically takes 5 to 20 minutes, but can sometimes take longer.
                If you have not received any communications from Clowdr with the
                status of your video after 4 hours, please contact your
                conference organizers for technical assistance.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Edits to Captions</Text>
              <Text>
                Once you receive the email confirming that your captions are
                ready for review, follow the link in the email to edit them. The
                space to enter modifications will be presented alongside the
                video. You can input edits by simply clicking the text you want
                to modify and typing directly into the body of the transcript.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Saving Edits</Text>
              <Text>
                Please remember to click the Save button on the righthand side
                of the screen before exiting or reloading the page, to save and
                submit any changes. Failing to click Save will result in lost
                edits!
              </Text>
            </ListItem>
          </OrderedList>
          <Text>
            Taking the time to curate subtitles helps to ensure all attendees in
            all environments are able to enjoy your video. Thank you!
          </Text>
        </Container>
      </Layout>
    </>
  );
}
