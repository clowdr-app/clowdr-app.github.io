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

export function ResourceCards({
  resourceNodes,
}: {
  resourceNodes: NodeSummaryFragment[];
} & HTMLChakraProps<"section">): JSX.Element {
  const resourcesHeadingId = useId();
  return (
    <chakra.section aria-labelledby={resourcesHeadingId}>
      <VisuallyHidden>
        <Heading as="h2" id={resourcesHeadingId}>
          Resources
        </Heading>
      </VisuallyHidden>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={4} mt={2}>
        {resourceNodes.map((node, i) => (
          <CategoryCard
            key={i}
            indexUrl={node.fields?.slug ?? "#"}
            descriptionHtml={
              node.frontmatter?.description ?? node.excerpt ?? ""
            }
            title={node.frontmatter?.title ?? "(No title)"}
            author={node.frontmatter?.author ?? undefined}
            type="resource"
          />
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
