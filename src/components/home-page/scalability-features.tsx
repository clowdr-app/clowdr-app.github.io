import type { ContainerProps } from "@chakra-ui/react";
import { ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FeaturePanel,
  FeatureSection,
  FeatureTab,
  FeatureTabList,
  FeatureTabPanels,
  FeatureTabs,
} from "../features";

export function ScalabilityFeatures(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Management that scales"
      description={
        <VStack alignItems="flex-start">
          <Text>
            Midspace is specifically designed to handle the scale and complexity
            of academic conferences.
          </Text>
          <Text>
            For example, ICSE 2022 used Midspace to host a 2-week virtual
            conference for over 2,000 registrants, consisting of:
          </Text>
          <UnorderedList pt={0}>
            <ListItem>the main conference,</ListItem>
            <ListItem>
              32 co-located events and workshops (each with their own organizing
              team and schedule),
            </ListItem>
            <ListItem>~8 parallel tracks per day,</ListItem>
            <ListItem>over 1,200 speakers and authors</ListItem>
            <ListItem>
              and over 800 sessions using a mixture of video-chat,
              live-streaming, Zoom, MS Teams and GatherTown.
            </ListItem>
          </UnorderedList>
        </VStack>
      }
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Conference programme</FeatureTab>
          <FeatureTab>Speakers &amp; authors</FeatureTab>
          <FeatureTab>Pre-recorded videos</FeatureTab>
          <FeatureTab>Poster exhibitions</FeatureTab>
          <FeatureTab>Registration</FeatureTab>
          <FeatureTab>Automatic recording</FeatureTab>
          <FeatureTab>Sponsor booths</FeatureTab>
          <FeatureTab>Multiple organizing teams</FeatureTab>
          <FeatureTab>Export to YouTube</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel text="Conference programme" />
          <FeaturePanel text="Speakers &amp; authors" />
          <FeaturePanel text="Pre-recorded videos" />
          <FeaturePanel text="Poster exhibitions" />
          <FeaturePanel text="Registration" />
          <FeaturePanel text="Automatic recording" />
          <FeaturePanel text="Sponsors" />
          <FeaturePanel text="Multiple organizing teams" />
          <FeaturePanel text="Export to YouTube" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
