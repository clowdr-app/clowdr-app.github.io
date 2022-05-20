import type { TabPanelProps } from "@chakra-ui/react";
import { Container, Heading, Image, useTabPanel } from "@chakra-ui/react";
import React from "react";

export const FeaturePanel = React.forwardRef<
  HTMLDivElement,
  TabPanelProps &
    React.PropsWithChildren<{
      text: string;
      imageSrc?: string;
      imageMaxWidth?: number;
    }>
>(function FeaturePanel(
  { text, children, imageSrc, imageMaxWidth = 800, ...props },
  ref
): JSX.Element {
  const tabPanelProps = useTabPanel({ ...props, ref });

  return (
    <Container maxW={`${imageMaxWidth}px`} {...tabPanelProps}>
      <Image
        src=""
        fallbackSrc={imageSrc ?? "https://via.placeholder.com/800x600"}
        border="5px solid"
        borderColor="purple.800"
        borderRadius="lg"
        bgColor="purple.800"
      />
      <Heading as="h3" pt={0}>
        {text}
      </Heading>
      {children}
    </Container>
  );
});
