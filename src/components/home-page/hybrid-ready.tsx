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
          />
          <FeaturePanel
            text="Present: Virtual to physical"
            imageSrc="/images/screenshots/present-virtual-to-physical.jpg"
          />
          <FeaturePanel text="Hybrid Q&amp;A" />
          <FeaturePanel text="Recording" />
          <FeaturePanel text="Mirroring" />
          <FeaturePanel text="Hybrid Socials" />
          <FeaturePanel text="Zoom Room Connector" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}
