import {
  ContainerProps,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  FeaturePanel,
  FeatureSection,
  FeatureTab,
  FeatureTabList,
  FeatureTabPanels,
  FeatureTabs,
} from "../features";
import { SubscribeButton } from "../subscribe-button";
import { HybridReadyText } from "./text/hybrid-ready";

export function HybridReady(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Hybrid-ready"
      description={
        <>
          <HybridReadyText />
        </>
      }
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Present: Physical to virtual</FeatureTab>
          <FeatureTab>Present: Virtual to physical</FeatureTab>
          <FeatureTab>Q&amp;A</FeatureTab>
          <FeatureTab>Recording</FeatureTab>
          <FeatureTab>Pre-recorded</FeatureTab>
          <FeatureTab>External broadcast / Simulcast</FeatureTab>
          <FeatureTab>Mirroring</FeatureTab>
          <FeatureTab>Socials</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel
            text="Present: Physical to virtual"
            imageSrc="/images/screenshots/present-physical-to-virtual.jpg"
          >
            <Text>
              In-person presentations are delivered to the physical audience in
              the usual way - with a projected presentation (slides) and a
              microphone on the speaker.
            </Text>
            <Text>
              To deliver the presentation to the virtual audience requires
              additional setup and live management. This setup is faily well
              understood by most venues and A/V companies, though as ever the
              quality of the end result depends upon getting the details right.
            </Text>
            <UnorderedList>
              <ListItem>
                A camera must be set up and operated to track the speaker as
                they move around. This camera is connected to a computer that
                will connect to the virtual meeting (more about this below).
                This typically requires a USB camera or, in larger venues, a
                system such as Zoom Room Connector.
              </ListItem>
              <ListItem>
                The speaker&apos;s microphone must be connected to the same
                computer as the camera. This typically requires the signal to be
                split to feed both the room&apos;s sound system and the
                computer.
              </ListItem>
              <ListItem>
                <Text>
                  Slides can be handled in multiple ways depending on the
                  equipment available in the room. The lowest-effort and
                  cheapest option is to deliver the presentation from the same
                  computer that will be hosting the virtual meeting.
                </Text>
                <Text>
                  A Zoom meeting or Midspace backstage captures the presentation
                  as a screenshare, while the presentation is made full-screen
                  for the projection in the room. As normal, the speaker can use
                  PowerPoint, Google Slides, Keynote or any similar tool as
                  usual, as well as devices like presentation clickers.
                </Text>
              </ListItem>
              <ListItem>
                Questions, answers and audience reactions can be handled in a
                number of ways - please refer to the Q&amp;A tab for more
                detail.
              </ListItem>
            </UnorderedList>
            <Text>
              With all this in-room setup, you will have a computer connected to
              a Zoom meeting or Midspace backstage ready for your virtual
              audience. The Zoom meeting can be streamed to Midspace, or with
              Midspace backstages the stream connection is automatic (the same
              as for virtual presentations using streaming). The virtual
              audience watches the stream and usually participates via text
              chat.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel
            text="Present: Virtual to physical"
            imageSrc="/images/screenshots/present-virtual-to-physical.jpg"
          >
            <Text>
              Virtual presentations are delivered to a physical audience by
              projecting a Zoom meeting or Midspace backstage, with playback
              through the room&apos;s sound system. The virtual presenter shares
              their camera, microphone and slides in the same way they would for
              a virtual presentation. Similarly, the virtual audience
              participates through raising their hand or through text chat in
              the usual way.
            </Text>
            <Text>
              Physical audiences can participate via an in-room microphone or
              via text chat on their mobile devices. An in-room microphone
              requires someone to operate it, and a connection to the computer
              hosting the Zoom meeting or Midspace backstage. The sound is
              broadcast into the meeting for the virtual presenter and audience
              to hear. In addition, in larger venues you may wish to broadcast
              through the room&apos;s sound system to make it easier for the
              physical audience to hear but be wary of feedback loops.
            </Text>
            <Text>
              You may also wish to set up a camera to capture the physical
              audience for the virtual presenter to see. This brings you to the
              same setup as Q&amp;A for a physical-to-virtual presentation.
              Please refer to the Q&amp;A tab for more information.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel
            text="Hybrid Q&amp;A"
            imageSrc="/images/screenshots/present-physical-to-virtual.jpg"
          >
            <Heading as="h4" fontSize="md">
              Physical audience
            </Heading>
            <Text>
              To capture physical audience reactions and questions, additional
              cameras and microphones can be connected to the setup. This is
              likely to require either Zoom Room Connector (or similar
              equipment) or multiple computers to connect each camera/microphone
              to the Zoom meeting or Midspace backstage.
            </Text>
            <Text>
              You will also require someone to operate the microphone(s) to mute
              and unmute at appropriate times. In addition, people will be
              required to operate the cameras and to hand out microphones to the
              audience (unless you use a fixed position microphone such as on a
              stand in an aisle).
            </Text>
            <Heading as="h4" fontSize="md">
              Virtual audience
            </Heading>
            <Text>
              Best practice is currently for virtual audiences to submit
              questions via text chat. A moderator (a.k.a. session chair) can
              select questions from the chat and put them to the speaker
              (whether the speaker is virtual or physical). This ensures someone
              else is managing the flow of the session (the speaker already has
              enough to think about) and enables questions to be verbalised for
              both audiences and for any recording.
            </Text>
            <Text>
              Midspace and other platforms are experimenting with enabling
              virtual audiences to connect to the Zoom meeting or Midspace
              backstage to ask questions through their microphone and camera.
              However, this is challenging to set up, to manage live and
              unreliable. We do not currently recommend this set up for normal
              conferences but we are looking for conferences to help us research
              and develop it further.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Recording">
            <Text>
              In any of the setups described in the previous tabs, a recording
              can be captured of the Midspace live-stream. Midspace enables this
              by default and automatically publishes the recording within a few
              minutes of it completing.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Pre-recorded videos">
            <Text>
              Pre-recorded videos can be played out using the Virtual
              Presentation setup in the same way as you would during a normal
              Midspace live-stream.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="External broadcast / Simulcast (e.g. YouTube)">
            <Text>
              Midspace live-streams can be broadcast to external platforms such
              as YouTube and Twitch using RTMP. At the current time only a
              single secondary destination can be applied to a stream but we are
              looking for open-source contributions to add support for multiple
              additional destinations.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Mirroring">
            <Text>
              Midspace includes a Video Player event mode specifically designed
              for playback of a previously recorded live session at a later
              mirrored session. This enables multi-timeband programmes, though
              mirrored sessions typically work best if authors are available to
              answer additional questions.
            </Text>
            <Text>
              Text-chats in Midspace are persistent and enable authors to
              quickly and easily identify questions that may have been asked in
              advance or asked during a mirrored session (when the author may
              have been offline). This enables authors and participants to
              interact asynchronously (and across timezones) so Q&amp;A can
              still take place.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Hybrid Socials">
            <Text>
              Hybrid socialising is an unsolved challenge. We are currently
              seeking partners to research, design and implement a number of
              hybrid social concepts to find out what works best in real venues,
              with large numbers of attendees, and at an affordable cost for
              academic conferences.
            </Text>
            <Heading as="h4" fontSize="md">
              Keep up to date!
            </Heading>
            <Text>
              We are continuing to learn better ways to host hybrid events.
              Subscribe to receive updates on best practices (relevant to any
              virtual platform).
            </Text>
            <SubscribeButton />
          </FeaturePanel>
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
