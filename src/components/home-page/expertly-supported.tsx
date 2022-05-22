import type { ContainerProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
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

export function ExpertlySupported(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Expertly supported by our small team"
      description="Our team of founders and volunteers are leaders and
      engineers from the academic community with many years of experience
      in running virtual conferences. We're on-hand to support you from
      setting up your conference, to live sessions through to exporting
      your videos and data after your conference is over."
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Ed Nutting</FeatureTab>
          <FeatureTab>Crista Lopes</FeatureTab>
          <FeatureTab>Benjamin Pierce</FeatureTab>
          <FeatureTab>Jon Bell</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel
            text="Ed Nutting"
            imageSrc="/images/team/ed-nutting.jpg"
            imageMaxWidth={300}
          >
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel
            text="Crista Lopes"
            imageSrc="/images/team/crista-lopes.jpg"
            imageMaxWidth={300}
          >
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel
            text="Benjamin Pierce"
            imageSrc="/images/team/benjamin-pierce.jpg"
            imageMaxWidth={300}
          >
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel
            text="Jon Bell"
            imageSrc="/images/team/jonathan-bell.jpeg"
            imageMaxWidth={300}
          >
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
