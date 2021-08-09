import {
  Badge,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React, { HTMLProps } from "react";
import { AiOutlineUser } from "react-icons/ai";

export function CategoryCard({
  indexUrl,
  title,
  author,
  descriptionHtml,
  ...props
}: {
  indexUrl: string;
  title: string;
  author?: string;
  descriptionHtml: string;
} & HTMLProps<HTMLDivElement>): JSX.Element {
  const borderColour = useToken("colors", "brand.600");
  return (
    <LinkBox
      {...props}
      as="article"
      itemScope
      itemType="http://schema.org/Article"
      rounded="lg"
      shadow="md"
      border={`2px ${borderColour} solid`}
      bg={"white"}
    >
      <VStack p={4} justify="start" align="left" h="100%">
        <Heading as="h4" m={0}>
          <LinkOverlay
            as={GatsbyLink}
            to={`/resources${indexUrl}`}
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
        {author ? (
          <Badge w="max-content" textTransform="none">
            <Icon as={AiOutlineUser} aria-label="author" />{" "}
            <span itemProp="author">{author}</span>
          </Badge>
        ) : undefined}
      </VStack>
    </LinkBox>
  );
}
