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
          <FeatureTab>Mirroring</FeatureTab>
          <FeatureTab>Socials</FeatureTab>
          <FeatureTab>Zoom Room Connector</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel
            text="Present: Physical to virtual"
            imageSrc="/images/screenshots/present-physical-to-virtual.jpg"
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
            text="Present: Virtual to physical"
            imageSrc="/images/screenshots/present-virtual-to-physical.jpg"
          >
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Hybrid Q&amp;A">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Recording">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Mirroring">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Hybrid Socials">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Zoom Room Connector">
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
