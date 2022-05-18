import { useBreakpoint } from "@chakra-ui/react";

export function useIsNarrow(): boolean {
  const bp = useBreakpoint("sm");
  const isNarrow = bp === "base" || bp === "sm" || bp === "md";
  return isNarrow;
}
