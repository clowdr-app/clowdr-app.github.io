import { EmailIcon } from "@chakra-ui/icons";
import type { ButtonProps } from "@chakra-ui/react";
import { Button, Link } from "@chakra-ui/react";
import React from "react";

export function SubscribeButton({
  text = "Subscribe for updates",
  ...props
}: {
  text?: string;
} & ButtonProps): JSX.Element {
  return (
    <Button as={Link} href="https://forms.gle/6nTCDbJsCYawEa6P7" {...props}>
      <EmailIcon />
      &nbsp;&nbsp;
      {text}
    </Button>
  );
}
