import { Button, Link } from "@chakra-ui/react";
import React from "react";

export default function ArrangeADemoButton() {
  return (
    <Button
      as={Link}
      href="https://form.asana.com/?k=trOGgRktwffYqw6B73DHuA&amp;d=1198973227684402"
      bgColor="brand.900"
      color="white"
      minWidth="min-content"
      fontSize="xl"
      p={4}
      _hover={{
        bgColor: "brand.700",
        color: "white",
      }}
    >
      Arrange a demo
    </Button>
  );
}
