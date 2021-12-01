import type {
  BoxProps} from "@chakra-ui/react";
import {
  Badge,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  useToken,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import {
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineUser,
} from "react-icons/ai";
import { FeaturedBadge } from "./featured-badge";

export function Card({
  indexUrl,
  title,
  author,
  descriptionHtml,
  isFeatured,
  type,
  ...props
}: {
  indexUrl: string;
  title: string;
  author?: string;
  descriptionHtml: string;
  isFeatured: boolean;
  type: "category" | "resource";
} & BoxProps): JSX.Element {
  const borderColour = useToken("colors", "brand.600");
  const iconSize = 16;
  return (
    <LinkBox
      itemScope
      itemType="http://schema.org/Article"
      rounded="lg"
      shadow="md"
      border={`2px ${borderColour} solid`}
      bg={"white"}
      p={4}
      {...props}
      as="article"
    >
      <HStack h="100%">
        {type === "category" ? (
          <Icon
            m={2}
            as={AiOutlineFolderOpen}
            title="Category"
            w={iconSize}
            h={iconSize}
          />
        ) : (
          <Icon
            as={AiOutlineFileText}
            title="Resource"
            w={iconSize}
            h={iconSize}
          />
        )}
        <VStack justify="start" align="left" h="100%">
          <Heading as="h4" m={0}>
            <LinkOverlay
              as={GatsbyLink}
              to={`${indexUrl}`}
              itemProp="url"
              display="block"
              color={"gray.800"}
              fontWeight="bold"
              fontSize="2xl"
              _hover={{
                color: "gray.600",
                textDecor: "underline",
              }}
            >
              <span itemProp="headline">{title}</span>
            </LinkOverlay>
          </Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: descriptionHtml,
            }}
            itemProp="description"
            mt={2}
            mb={2}
            fontSize="sm"
            color={"gray.600"}
          />
          <Spacer />
          <Wrap>
            {author ? (
              <Badge w="max-content" textTransform="none">
                <Icon as={AiOutlineUser} aria-label="author" />{" "}
                <span itemProp="author">{author}</span>
              </Badge>
            ) : undefined}
            {isFeatured ? <FeaturedBadge /> : undefined}
          </Wrap>
        </VStack>
      </HStack>
    </LinkBox>
  );
}
