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
          <FeaturePanel text="Ed Nutting" />
          <FeaturePanel text="Crista Lopes" />
          <FeaturePanel text="Benjamin Pierce" />
          <FeaturePanel text="Jon Bell" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
