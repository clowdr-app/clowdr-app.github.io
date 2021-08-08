import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

export function CategoryCard({
  indexUrl,
  title,
  descriptionHtml,
}: {
  indexUrl: string;
  title: string;
  descriptionHtml: string;
}): JSX.Element {
  const borderColour = useToken("colors", "brand.600");
  return (
    <LinkBox
      as="article"
      itemScope
      itemType="http://schema.org/Article"
      rounded="lg"
      shadow="md"
      border={`2px ${borderColour} solid`}
      bg={"white"}
    >
      <Box p={6}>
        <Box>
          <Heading as="h4">
            <LinkOverlay
              as={GatsbyLink}
              to={`/resources${indexUrl}`}
              itemProp="url"
              display="block"
              color={"gray.800"}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
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
            fontSize="sm"
            color={"gray.600"}
          />
        </Box>
      </Box>
    </LinkBox>
  );
}
