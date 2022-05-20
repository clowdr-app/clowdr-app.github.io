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
          <FeaturePanel text="Sessions" />
          <FeaturePanel text="Social rooms" />
          <FeaturePanel text="Floating emotes" />
          <FeaturePanel text="Messaging" />
          <FeaturePanel text="Q&amp;A" />
          <FeaturePanel text="Polls" />
          <FeaturePanel text="Reactions" />
          <FeaturePanel text="Networking" />
          <FeaturePanel text="Announcements" />
          <FeaturePanel text="Sponsor booths" />
          <FeaturePanel text="Add your own feature?" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
