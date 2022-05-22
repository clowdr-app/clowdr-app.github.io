import type { TabListProps } from "@chakra-ui/react";
import { Flex, TabList, useTabList, VStack } from "@chakra-ui/react";
import React from "react";
import { useIsNarrow } from "../../hooks/useIsNarrow";

export const FeatureTabList = React.forwardRef<HTMLDivElement, TabListProps>(
  function FeatureTabList(props, ref) {
    const tabListProps = useTabList({ ...props, ref });

    const isNarrow = useIsNarrow();

    if (isNarrow === null) {
      return <></>;
    }

    return (
      <TabList
        as={isNarrow ? Flex : VStack}
        spacing={2}
        flexDir={isNarrow ? "row" : "column"}
        flexWrap={isNarrow ? "wrap" : undefined}
        w={isNarrow ? "100%" : undefined}
        alignItems="stretch"
        justifyContent="flex-start"
        gridRowGap={2}
        overflow="none"
        border="none"
        {...tabListProps}
      >
        {tabListProps.children}
      </TabList>
    );
  }
);
