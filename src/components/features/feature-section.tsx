import type { ContainerProps } from "@chakra-ui/react";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export function FeatureSection({
  title,
  description,
  children,
  ...props
}: React.PropsWithChildren<
  {
    title: string;
    description: string | React.ReactNode;
  } & ContainerProps
>): JSX.Element {
  return (
    <Container {...props}>
      <VStack alignItems="flex-start" spacing={8}>
        <Heading as="h2" size="2xl">
          {title}
        </Heading>
        {typeof description === "string" ? (
          <Text>{description}</Text>
        ) : (
          description
        )}
        {children}
      </VStack>
    </Container>
  );
}
