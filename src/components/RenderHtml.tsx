import {
  chakra,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import rehypeReact from "rehype-react";
import { unified } from "unified";

const processor = unified().use(rehypeReact, {
  createElement: React.createElement,
  components: {
    p: (props: any) => <Text {...props} />,
    h3: (props: any) => <Heading as="h3" {...props} size="xl" />,
    h4: (props: any) => <Heading as="h4" {...props} size="lg" />,
    h5: (props: any) => <Heading as="h5" {...props} size="md" />,
    h6: (props: any) => <Heading as="h6" {...props} size="sm" />,
    blockquote: (props: any) => <chakra.blockquote {...props} />,
    pre: (props: any) => <chakra.pre {...props} maxW="100%" overflowX="auto" />,
    ol: (props: any) => <OrderedList {...props} />,
    ul: (props: any) => <UnorderedList {...props} />,
    li: (props: any) => <ListItem {...props} />,
    hr: (props: any) => <Divider {...props} />,
    table: (props: any) => <Table {...props} />,
    tbody: (props: any) => <Tbody {...props} />,
    thead: (props: any) => <Thead {...props} />,
    tr: (props: any) => <Tr {...props} />,
    td: (props: any) => <Td {...props} />,
  },
});

export const renderAst = (ast: any): JSX.Element => {
  return processor.stringify(ast) as unknown as JSX.Element;
};

export function RenderHtml({ htmlAst }: { htmlAst: any }): JSX.Element {
  return renderAst(htmlAst);
}
