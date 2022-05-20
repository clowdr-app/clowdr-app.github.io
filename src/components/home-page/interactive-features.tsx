import type { ContainerProps } from "@chakra-ui/react";
import React from "react";
import {
  FeaturePanel,
  FeatureSection,
  FeatureTab,
  FeatureTabList,
  FeatureTabPanels,
  FeatureTabs,
} from "../features";

export function InteractiveFeatures(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Interactive and engaging"
      description="Midspace offers an interactive, collaborative environment designed
      to engage people with the session and with each other. We also use
      the platform as a vehicle for user experience research, led by
      members of the academic communities we support.
      "
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Sessions</FeatureTab>
          <FeatureTab>Social rooms</FeatureTab>
          <FeatureTab>Floating emotes</FeatureTab>
          <FeatureTab>Messaging</FeatureTab>
          <FeatureTab>Q&amp;A</FeatureTab>
          <FeatureTab>Polls</FeatureTab>
          <FeatureTab>Reactions</FeatureTab>
          <FeatureTab>Networking</FeatureTab>
          <FeatureTab>Announcements</FeatureTab>
          <FeatureTab>Sponsor booths</FeatureTab>
          <FeatureTab>Add your own feature?</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel
            text="Sessions"
            imageSrc="/images/screenshots/live-stream.jpg"
          />
          <FeaturePanel
            text="Social rooms"
            imageSrc="/images/screenshots/video-chat.jpg"
          />
          <FeaturePanel
            text="Floating emotes"
            imageSrc="/images/screenshots/floating-emoji.jpg"
          />
          <FeaturePanel
            text="Messaging"
            imageSrc="/images/screenshots/messaging.jpg"
          />
          <FeaturePanel
            text="Q&amp;A"
            imageSrc="/images/screenshots/q-and-a.jpg"
          />
          <FeaturePanel
            text="Polls"
            imageSrc="/images/screenshots/create-poll.jpg"
          />
          <FeaturePanel
            text="Reactions"
            imageSrc="/images/screenshots/reactions.jpg"
          />
          <FeaturePanel
            text="Networking"
            imageSrc="/images/screenshots/networking.jpg"
          />
          <FeaturePanel
            text="Announcements"
            imageSrc="/images/screenshots/announcement.jpg"
          />
          <FeaturePanel
            text="Sponsor booths"
            imageSrc="/images/screenshots/sponsors.jpg"
          />
          <FeaturePanel text="Add your own feature?" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
