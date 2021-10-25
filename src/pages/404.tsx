import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found | Midspace</title>
      </Helmet>
      <Box text p={4}>
        <Heading as="h2" textAlign="center">
          Sorry, we couldn't find that page.
        </Heading>
      </Box>
    </Layout>
  );
}
