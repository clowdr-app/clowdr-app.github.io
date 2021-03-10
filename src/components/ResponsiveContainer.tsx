import React from "react"
import { MediaContextProvider } from "../classes/Media"
import { DesktopContainer } from "./DesktopContainer"
import MobileContainer from "./MobileContainer"

interface Props {
  children: React.ReactNodeArray | React.ReactNode
  heading?: React.ReactNode
}

export default function ResponsiveContainer(props: Props) {
  return (
    <MediaContextProvider>
      <DesktopContainer heading={props.heading}>{props.children}</DesktopContainer>
      <MobileContainer heading={props.heading}>{props.children}</MobileContainer>
    </MediaContextProvider>
  )
}
