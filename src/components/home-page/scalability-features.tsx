import type { ContainerProps, TabPanelProps } from "@chakra-ui/react";
import {
  Container,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useTabPanel,
} from "@chakra-ui/react";
import React from "react";
import {
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
        <>
          <Text>
            Midspace is specifically designed to handle the scale and complexity
            of academic conferences.
          </Text>
          <Text>
            For example, ICSE 2022 used Midspace to host a 2-week virtual
            conference for over 2,000 registrants, consisting of:
          </Text>
          <UnorderedList>
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
        </>
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
          <FeatureTab>Sponsor booths</FeatureTab>
          <FeatureTab>Multiple organizing teams</FeatureTab>
        </FeatureTabList>
        <FeatureTabPanels>
          <FeaturePanel text="Conference programme" />
          <FeaturePanel text="Speakers &amp; authors" />
          <FeaturePanel text="Pre-recorded videos" />
          <FeaturePanel text="Poster exhibitions" />
          <FeaturePanel text="Registration" />
          <FeaturePanel text="Sponsors" />
          <FeaturePanel text="Multiple organizing teams" />
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
