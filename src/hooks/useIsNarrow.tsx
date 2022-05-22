export function useIsNarrow(): boolean | null {
  if (typeof window === "undefined") {
    return null;
  }
  return window.innerWidth < 500;
}
