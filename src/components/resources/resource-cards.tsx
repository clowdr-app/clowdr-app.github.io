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

export function ResourceCards({
  resourceNodes,
  ...props
}: {
  resourceNodes: NodeSummaryFragment[];
} & HTMLChakraProps<"section">): JSX.Element {
  const resourcesHeadingId = useId();
  return (
    <chakra.section aria-labelledby={resourcesHeadingId} {...props}>
      <VisuallyHidden>
        <Heading as="h2" id={resourcesHeadingId}>
          Resources
        </Heading>
      </VisuallyHidden>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={4} mt={2}>
        {resourceNodes.map((node, i) => (
          <Card
            key={i}
            indexUrl={node.fields?.slug ?? "#"}
            descriptionHtml={
              node.frontmatter?.description ?? node.excerpt ?? ""
            }
            title={node.frontmatter?.title ?? "(No title)"}
            author={node.frontmatter?.author ?? undefined}
            isFeatured={Boolean(node.frontmatter?.isFeatured)}
            type="resource"
          />
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
