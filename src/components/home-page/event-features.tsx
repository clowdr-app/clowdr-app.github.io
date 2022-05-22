import type { ContainerProps } from "@chakra-ui/react";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  FeaturePanel,
  FeatureSection,
  FeatureTab,
  FeatureTabList,
  FeatureTabPanels,
  FeatureTabs,
} from "../features";
import { HybridReadyText } from "./text/hybrid-ready";

export function EventFeatures(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Your conference, your way"
      description="Midspace has everything you need to host a successful conference.
    But every conference is different, so Midspace is flexible enough to
    support any conference design, whether that's using Midspace's
    video-chat and live-streaming or any external tool, such as Zoom and
    GatherTown."
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Video-chat</FeatureTab>
          <FeatureTab>Live-streaming</FeatureTab>
          <FeatureTab>Zoom or any other</FeatureTab>
          <FeatureTab>Networking</FeatureTab>
          <FeatureTab>Hybrid</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel
            text="Video-chat"
            imageSrc="/images/screenshots/video-chat.jpg"
          >
            <Text>
              Video-chat is built-in and only requires a web browser. You can
              present in video-chat sessions or join a social room at any time
              to give presentations, meet others and form new friendships.
            </Text>
            <Text>
              A persistent text chat accompanies every video room and includes
              messaging, Q&amp;A, polling, reactions, floating emoji and more.
            </Text>
            <Button as={Link} href="#interactive-and-engaging">
              Find out more
            </Button>
          </FeaturePanel>
          <FeaturePanel
            text="Live-streaming"
            imageSrc="/images/screenshots/live-stream.jpg"
          >
            <Text>
              Live-streaming through Midspace (using Amazon AWS Media Services)
              provides a smooth, reliable webinar experience for large audiences
              - above 1,000 viewers you should consider using live-streaming.
            </Text>
            <Text>
              A persistent text chat accompanies every live-stream and includes
              messaging, Q&amp;A, polling, reactions, floating emoji and more.
              Audience members can also raise their hand to be admitted by a
              chair to join the stream and ask a question or participate in
              discussion.
            </Text>
            <Text>
              Our unique backstage feature enables presenters, chairs and A/V
              pros to prepare behind the scenes from 20 minutes before the
              session - separate from any other speaker that may already be
              presenting in the stream.
            </Text>
            <Text>
              Live-streaming is also a key part of any hybrid setup. You can
              stream into and out of Midspace, for example to connect Zoom as an
              input from a physical room, and YouTube as an output for public
              audiences.
            </Text>
            <Button as={Link} href="#hybrid-ready">
              Find out more
            </Button>
          </FeaturePanel>
          <FeaturePanel
            text="Off-platform events"
            imageSrc="/images/screenshots/zoom-event.jpg"
          >
            <Text>
              Midspace is unopinionated about how to run your event - you can
              use any meeting platform whether that&apos;s the built-in
              video-chat or live-streaming, or an external tool such as Zoom, MS
              Teams, GatherTown, Slack, Discord, YouTube, Facebook or any other
              service. All you need is a joining link!
            </Text>
            <Text>
              Off-platform events scheduled in Midspace show a big
              &ldquo;Join&rdquo; button. You set the name of the external
              service and provide the joining link when configuring your
              schedule.
            </Text>
            <Text>
              This has a few advantages over the traditional approach of
              emailing links to users. It&apos;s easy to find - attendees log in
              and click to join the session. If the link changes (as frequently
              happens) you can update it without emailing everyone new links.
              There&apos;s no confusion over the timing and it cuts down on the
              number of people forwarding links via email. It also makes it
              easier to mix-and-match different tools for different sessions (a
              common occurrence with co-located events and workshops), without
              attendees needing to worry quite so much about which link and tool
              was for which session.
            </Text>
          </FeaturePanel>
          <FeaturePanel
            text="Networking"
            imageSrc="/images/screenshots/networking.jpg"
          >
            <Text>
              Midspace has randomised networking built-in - not just one-to-one
              but also groups and flexible time limits!
            </Text>
            <Text>
              You schedule &ldquo;shuffle queues&rdquo; with a conversation
              time-limit, target and maximum group sizes and extra configuration
              if you require it. Attendees join the queue and are randomly
              matched with other people for a time-limited conversation.
            </Text>
          </FeaturePanel>
          <FeaturePanel
            text="Hybrid"
            imageSrc="/images/screenshots/live-stream.jpg"
          >
            <HybridReadyText />
            <Flex flexWrap="wrap">
              <Button as={Link} href="#hybrid-ready" mr={2} mb={2}>
                Find out more
              </Button>
              <Button
                as={Link}
                href="#virtual-conference-research"
                mr={2}
                mb={2}
              >
                Research opportunities
              </Button>
            </Flex>
          </FeaturePanel>
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
