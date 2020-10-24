import React from "react"
import { MediaContextProvider } from "../classes/Media"
import { DesktopContainer } from "./DesktopContainer"
import MobileContainer from "./MobileContainer"

interface Props {
  children: React.ReactNodeArray
}

export default function ResponsiveContainer(props: Props) {
  return (
    <MediaContextProvider>
      <DesktopContainer>{props.children}</DesktopContainer>
      <MobileContainer>{props.children}</MobileContainer>
    </MediaContextProvider>
  )
}
