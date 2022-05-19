import type { ContainerProps, TabPanelProps } from "@chakra-ui/react";
import { Container, Heading, Image, useTabPanel } from "@chakra-ui/react";
import React from "react";
import {
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
          <FeaturePanel text="Present: Physical to virtual" />
          <FeaturePanel text="Present: Virtual to physical" />
          <FeaturePanel text="Q&amp;A" />
          <FeaturePanel text="Recording" />
          <FeaturePanel text="Mirroring" />
          <FeaturePanel text="Socials" />
          <FeaturePanel text="Zoom Room Connector" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}

const FeaturePanel = React.forwardRef<
  HTMLDivElement,
  TabPanelProps & React.PropsWithChildren<{ text: string; imageSrc?: string }>
>(function FeaturePanel(
  { text, children, imageSrc, ...props },
  ref
): JSX.Element {
  const tabPanelProps = useTabPanel({ ...props, ref });

  return (
    <Container maxW="800px" {...tabPanelProps}>
      <Image
        src=""
        fallbackSrc={imageSrc ?? "https://via.placeholder.com/800x600"}
      />
      <Heading as="h3" pt={0}>
        {text}
      </Heading>
      {children}
    </Container>
  );
});
