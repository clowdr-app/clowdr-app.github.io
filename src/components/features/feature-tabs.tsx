import type { TabsProps } from "@chakra-ui/react";
import { HStack, Tabs, VStack } from "@chakra-ui/react";
import React from "react";
import { useIsNarrow } from "../../hooks/useIsNarrow";

export function FeatureTabs({
  children,
  ...props
}: React.PropsWithChildren<TabsProps>): JSX.Element {
  const isNarrow = useIsNarrow();

  if (isNarrow === null) {
    return <></>;
  }

  return (
    <Tabs
      as={isNarrow ? VStack : HStack}
      {...props}
      spacing={8}
      alignItems={isNarrow ? "center" : "flex-start"}
      justifyContent="flex-start"
      display="flex"
    >
      {children}
    </Tabs>
  );
}
