import type { TabListProps } from "@chakra-ui/react";
import { TabList, useTabList, VStack } from "@chakra-ui/react";
import React from "react";

export const FeatureTabList = React.forwardRef<HTMLDivElement, TabListProps>(
  function FeatureTabList(props, ref) {
    const tabListProps = useTabList({ ...props, ref });

    return (
      <TabList
        as={VStack}
        spacing={2}
        flexDir="column"
        alignItems="stretch"
        {...tabListProps}
      >
        {tabListProps.children}
      </TabList>
    );
  }
);
