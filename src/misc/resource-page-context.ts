export type ResourcePageContext = {
  id: string;
  slug: string;
  regex: string;
  breadcrumbs: { name: string; url: string; title: string }[];
  isFeatured: boolean;
};
