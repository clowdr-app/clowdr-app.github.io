import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import type { TabProps } from "@chakra-ui/react";
import { Button, chakra, useTab } from "@chakra-ui/react";
import React from "react";
import { useIsNarrow } from "../../hooks/useIsNarrow";

export const FeatureTab = React.forwardRef<
  HTMLElement,
  TabProps & {
    children: string;
  }
>(function FeatureTab(props, ref) {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];
  const isNarrow = useIsNarrow();

  return (
    <Button
      size={isNarrow ? "sm" : "lg"}
      variant={isSelected ? "solid" : "outline"}
      justifyContent="flex-start"
      w={
        isNarrow
          ? ["100%", "calc(50% - (2 * var(--chakra-space-2)))", "30%"]
          : undefined
      }
      minW={isNarrow ? "0" : undefined}
      mr={isNarrow ? 2 : 0}
      mb={isNarrow ? 1 : 0}
      {...tabProps}
    >
      <chakra.span mr="auto">{tabProps.children}</chakra.span>
      {isNarrow ? (
        <ChevronDownIcon aria-hidden ml={2} />
      ) : (
        <ChevronRightIcon aria-hidden ml={2} />
      )}
    </Button>
  );
});
