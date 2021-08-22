import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, chakra, Link } from "@chakra-ui/react";
import React from "react";

export const BackToClowdrButton = chakra(BackToClowdrButtonInner);

export function BackToClowdrButtonInner({ className }: { className?: string }) {
  return (
    <Button
      as={Link}
      href="https://midspace.app/"
      minWidth="min-content"
      fontSize="lg"
      p={4}
      variant="solid-2"
      className={className}
      title="Return to midspace.app"
      rightIcon={<ExternalLinkIcon />}
    >
      Back to midspace.app
    </Button>
  );
}
