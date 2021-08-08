import { CreatePagesArgs } from "gatsby";
import { GetMarkdownEdgesQuery } from "./src/generated/graphql-types";

export type CreatePagesGraphqlReturn = {
  data: GetMarkdownEdgesQuery;
} & Omit<ReturnType<CreatePagesArgs["graphql"]>, "data">;
