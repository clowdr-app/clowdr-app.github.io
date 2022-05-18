import type { TabsProps } from "@chakra-ui/react";
import { HStack, Tabs } from "@chakra-ui/react";
import React from "react";

export function FeatureTabs({ children, ...props }: TabsProps): JSX.Element {
  return (
    <Tabs
      as={HStack}
      {...props}
      spacing={8}
      alignItems="flex-start"
      justifyContent="flex-start"
      display="flex"
    >
      {children}
    </Tabs>
  );
}
