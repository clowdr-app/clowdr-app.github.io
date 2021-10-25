import {
  chakra,
  Heading,
  HTMLChakraProps,
  SimpleGrid,
  useId,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { NodeSummaryFragment } from "../generated/graphql-types";
import { Card } from "./card";

export function FeaturedCards({
  featuredNodes,
  ...props
}: {
  featuredNodes: NodeSummaryFragment[];
} & HTMLChakraProps<"section">): JSX.Element {
  const categoriesHeadingId = useId();
  return (
    <chakra.section aria-labelledby={categoriesHeadingId} {...props}>
      <VisuallyHidden>
        <Heading as="h2" id={categoriesHeadingId}>
          Featured resources
        </Heading>
      </VisuallyHidden>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={4} mt={2} mb={8}>
        {featuredNodes.map((node, i) => (
          <Card
            key={i}
            indexUrl={node.fields?.slug ?? "#"}
            descriptionHtml={
              node.frontmatter?.description ?? node.excerpt ?? ""
            }
            title={node.frontmatter?.title ?? "(No title)"}
            type={node.fields?.isCategoryIndex ? "category" : "resource"}
            isFeatured={Boolean(node.frontmatter?.isFeatured)}
          />
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
