import { ChevronRightIcon } from "@chakra-ui/icons";
import type { TabProps } from "@chakra-ui/react";
import { Button, chakra, useTab } from "@chakra-ui/react";
import React from "react";

export const FeatureTab = React.forwardRef<
  HTMLElement,
  TabProps & {
    children: string;
  }
>(function FeatureTab(props, ref) {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  return (
    <Button
      size="lg"
      variant={isSelected ? "solid" : "outline"}
      justifyContent="flex-start"
      {...tabProps}
    >
      <chakra.span mr="auto">{tabProps.children}</chakra.span>
      <ChevronRightIcon aria-hidden ml={2} />
    </Button>
  );
});
