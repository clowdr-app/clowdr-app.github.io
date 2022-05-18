import { Badge, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export function FeaturedBadge(): JSX.Element {
  return (
    <Badge textTransform="none" colorScheme="brand">
      <Icon as={AiOutlineStar} aria-label="" />{" "}
      <span itemProp="author">Featured</span>
    </Badge>
  );
}
