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
          <FeaturePanel text="Virtual Presence Institute" />
          <FeaturePanel text="UX Research" />
          <FeaturePanel text="Accessibility" />
          <FeaturePanel text="Students" />
          <FeaturePanel text="Researchers" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
