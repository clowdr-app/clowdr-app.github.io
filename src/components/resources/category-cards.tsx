import type { HTMLChakraProps } from "@chakra-ui/react";
import {
  chakra,
  Heading,
  SimpleGrid,
  useId,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import type { NodeSummaryFragment } from "../../generated/graphql-types";
import { Card } from "../card";

export function CategoryCards({
  categoryNodes,
  ...props
}: {
  categoryNodes: NodeSummaryFragment[];
} & HTMLChakraProps<"section">): JSX.Element {
  const categoriesHeadingId = useId();
  return (
    <chakra.section aria-labelledby={categoriesHeadingId} {...props}>
      <VisuallyHidden>
        <Heading as="h2" id={categoriesHeadingId}>
          Sub-categories
        </Heading>
      </VisuallyHidden>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={4} mt={2} mb={8}>
        {categoryNodes.map((node, i) => (
          <Card
            key={i}
            indexUrl={node.fields?.slug ?? "#"}
            descriptionHtml={
              node.frontmatter?.description ?? node.excerpt ?? ""
            }
            title={node.frontmatter?.title ?? "(No title)"}
            type="category"
            isFeatured={Boolean(node.frontmatter?.isFeatured)}
          />
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
