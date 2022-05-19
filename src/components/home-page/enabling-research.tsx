import type { ContainerProps, TabPanelProps } from "@chakra-ui/react";
import { Container, Heading, Image, Text, useTabPanel } from "@chakra-ui/react";
import React from "react";
import {
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
