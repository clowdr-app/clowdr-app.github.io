import { Button, chakra, Link } from "@chakra-ui/react";
import React from "react";

export const ArrangeADemoButton = chakra(ArrangeADemoButtonInner);

export function ArrangeADemoButtonInner({ className }: { className?: string }) {
  return (
    <Button
      as={Link}
      href="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&amp;d=1198973227684402"
      minWidth="min-content"
      fontSize="xl"
      p={4}
      variant="solid-2"
      className={className}
      title="Arrange a demo of Clowdr"
    >
      Arrange a demo
    </Button>
  );
}
