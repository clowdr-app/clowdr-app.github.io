import React from "react";
import { Helmet } from "react-helmet-async";

export default function Title(props: { title: string }) {
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <title>
        {props.title}
        {props.title.length > 0 ? " | Midspace" : ""}
      </title>
    </Helmet>
  );
}
