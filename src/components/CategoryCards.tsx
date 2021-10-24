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
import { CategoryCard } from "./CategoryCard";

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
          <CategoryCard
            key={i}
            indexUrl={node.fields?.slug ?? "#"}
            descriptionHtml={
              node.frontmatter?.description ?? node.excerpt ?? ""
            }
            title={node.frontmatter?.title ?? "(No title)"}
            type="category"
          />
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
