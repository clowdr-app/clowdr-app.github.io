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

export function EnablingResearch(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Virtual conference research"
      description={
        <>
          <Text>
            We are led by prominent members of the computer science community
            and are actively researching virtual and hybrid conferences. We want
            to discover new, better ways of interacting. We want to publish
            those findings not just as Midspace&apos;s code but at conferences
            and other venues so that all online experiences can improve.
          </Text>
          <Text>
            We have a particular focus on accessibility, as there is clearly a
            long way yet to go to make both virtual and physical conferences
            accessible-to and inclusive-of everyone who may wish to participate
            in or present their research at a conference.
          </Text>
        </>
      }
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Virtual Presence Institute</FeatureTab>
          <FeatureTab>UX Research</FeatureTab>
          <FeatureTab>Accessibility</FeatureTab>
          <FeatureTab>Students</FeatureTab>
          <FeatureTab>Researchers</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel text="Virtual Presence Institute">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="UX Research">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Accessibility">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Students">
            <Text>Information coming soon!</Text>
            <Text>
              This feature exists in Midspace today but this website is
              currently being brought up to date. Please subscribe to be
              notified when information is added or check back again soon.
            </Text>
            <SubscribeButton />
          </FeaturePanel>
          <FeaturePanel text="Researchers">
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
