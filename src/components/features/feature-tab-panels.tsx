import type { TabPanelsProps } from "@chakra-ui/react";
import { TabPanels } from "@chakra-ui/react";
import React from "react";

export function FeatureTabPanels(props: TabPanelsProps): JSX.Element {
  return <TabPanels>{props.children}</TabPanels>;
}
