import type { ButtonProps } from "@chakra-ui/react";
import { Button, Image, Link } from "@chakra-ui/react";
import React from "react";

export function SponsorOnGitHub(props: ButtonProps): JSX.Element {
  return (
    <Button as={Link} href="https://github.com/sponsors/clowdr-app" {...props}>
      <Image
        src="/images/logos/GitHub-Mark-Light-64px.png"
        aria-hidden
        maxW="1.6em"
        maxH="60%"
      />
      &nbsp;&nbsp;Sponsor us on GitHub
    </Button>
  );
}
