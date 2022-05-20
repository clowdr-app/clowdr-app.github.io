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
          />
          <FeaturePanel
            text="Off-platform events"
            imageSrc="/images/screenshots/zoom-event.jpg"
          />
          <FeaturePanel
            text="Networking"
            imageSrc="/images/screenshots/networking.jpg"
          />
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
