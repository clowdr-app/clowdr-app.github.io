import { ChevronRightIcon } from "@chakra-ui/icons";
import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

enum FeatureOptions {
  VideoChat,
  LiveStreaming,
  OffPlatform,
  Networking,
}

export function EventFeatures(props: BoxProps): JSX.Element {
  const [selectedFeature, setSelectedFeature] = useState<FeatureOptions>(
    FeatureOptions.VideoChat
  );
  return (
    <Container {...props}>
      <VStack alignItems="flex-start" spacing={8}>
        <Heading as="h2" size="2xl">
          Flexible and powerful
        </Heading>
        <Text>
          Midspace has everything you need to host a successful conference. But
          every conference is different, so Midspace is flexible enough to
          support any conference design, whether that&apos;s using our
          video-chat and live-streaming or any external tool, such as Zoom and
          GatherTown.
        </Text>
        <HStack spacing={8} alignItems="flex-start" justifyContent="flex-start">
          <VStack alignItems="stretch">
            <FeatureButton
              value={FeatureOptions.VideoChat}
              text="Video-chat"
              selectedFeature={selectedFeature}
              onSelectFeature={setSelectedFeature}
            />
            <FeatureButton
              value={FeatureOptions.LiveStreaming}
              text="Live-streaming"
              selectedFeature={selectedFeature}
              onSelectFeature={setSelectedFeature}
            />
            <FeatureButton
              value={FeatureOptions.OffPlatform}
              text="Zoom and any other"
              selectedFeature={selectedFeature}
              onSelectFeature={setSelectedFeature}
            />
            <FeatureButton
              value={FeatureOptions.Networking}
              text="Networking"
              selectedFeature={selectedFeature}
              onSelectFeature={setSelectedFeature}
            />
          </VStack>
          <FeatureBox
            text="Video-chat"
            value={FeatureOptions.VideoChat}
            selectedFeature={selectedFeature}
          />
          <FeatureBox
            text="Live-streaming"
            value={FeatureOptions.LiveStreaming}
            selectedFeature={selectedFeature}
          />
          <FeatureBox
            text="Off-platform events"
            value={FeatureOptions.OffPlatform}
            selectedFeature={selectedFeature}
          />
          <FeatureBox
            text="Networking"
            value={FeatureOptions.Networking}
            selectedFeature={selectedFeature}
          />
        </HStack>
      </VStack>
    </Container>
  );
}

function FeatureButton({
  text,
  value,
  selectedFeature,
  onSelectFeature,
}: {
  text: string;
  value: FeatureOptions;

  selectedFeature: FeatureOptions;
  onSelectFeature: (value: FeatureOptions) => void;
}) {
  return (
    <Button
      size="lg"
      variant={selectedFeature === value ? "solid" : "outline"}
      justifyContent="flex-start"
      onClick={() => onSelectFeature(value)}
    >
      <chakra.span mr="auto">{text}</chakra.span>
      <ChevronRightIcon ml={2} />
    </Button>
  );
}

function FeatureBox({
  text,
  value,
  selectedFeature,
}: {
  text: string;
  value: FeatureOptions;

  selectedFeature: FeatureOptions;
}): JSX.Element {
  return value === selectedFeature ? (
    <Box>
      <Image src="" fallbackSrc="https://via.placeholder.com/800x600" />
      <Heading as="h3" pt={0}>
        {text}
      </Heading>
    </Box>
  ) : (
    <></>
  );
}
