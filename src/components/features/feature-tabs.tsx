import type { TabsProps } from "@chakra-ui/react";
import { HStack, SlideFade, Tabs, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useIsNarrow } from "../../hooks/useIsNarrow";

export function FeatureTabs({
  children,
  ...props
}: React.PropsWithChildren<TabsProps>): JSX.Element {
  const isNarrow = useIsNarrow();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <VisibilitySensor
      offset={{ bottom: 200 }}
      partialVisibility={true}
      onChange={(iv: boolean) => {
        if (iv) {
          setIsVisible(true);
        }
      }}
    >
      <SlideFade
        in={isVisible}
        transition={{
          enter: {
            duration: 0.5,
          },
        }}
      >
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
      </SlideFade>
    </VisibilitySensor>
  );
}
