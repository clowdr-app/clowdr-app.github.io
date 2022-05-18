import {
  Box,
  ContainerProps,
  Heading,
  Image,
  TabPanelProps,
  useTabPanel,
} from "@chakra-ui/react";
import React from "react";
import {
  FeatureSection,
  FeatureTab,
  FeatureTabList,
  FeatureTabPanels,
  FeatureTabs,
} from "./features";

export function EventFeatures(props: ContainerProps): JSX.Element {
  return (
    <FeatureSection
      title="Your conference, your way"
      description="Midspace has everything you need to host a successful conference.
    But every conference is different, so Midspace is flexible enough to
    support any conference design, whether that's using our
    video-chat and live-streaming or any external tool, such as Zoom and
    GatherTown."
      {...props}
    >
      <FeatureTabs>
        <FeatureTabList>
          <FeatureTab>Video-chat</FeatureTab>
          <FeatureTab>Live-streaming</FeatureTab>
          <FeatureTab>Zoom or any other</FeatureTab>
          <FeatureTab>Networking</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel text="Video-chat" />
          <FeaturePanel text="Live-streaming" />
          <FeaturePanel text="Off-platform events" />
          <FeaturePanel text="Networking" />
        </FeatureTabPanels>
      </FeatureTabs>
    </FeatureSection>
  );
}

const FeaturePanel = React.forwardRef<
  HTMLDivElement,
  TabPanelProps & { text: string }
>(function FeaturePanel({ text, ...props }, ref): JSX.Element {
  const tabPanelProps = useTabPanel({ ...props, ref });

  return (
    <Box {...tabPanelProps}>
      <Image src="" fallbackSrc="https://via.placeholder.com/800x600" />
      <Heading as="h3" pt={0}>
        {text}
      </Heading>
    </Box>
  );
});
