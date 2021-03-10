import React from "react"
import { Helmet } from "react-helmet-async"

export default function Title(props: { title: string }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title} | Clowdr</title>
    </Helmet>
  )
}
