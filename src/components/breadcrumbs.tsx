import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

export function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: { name: string; url: string; title: string }[];
}): JSX.Element {
  return (
    <Breadcrumb>
      <BreadcrumbItem key="resources" px={0} mx={0}>
        <BreadcrumbLink as={GatsbyLink} to="/resources">
          Resources
        </BreadcrumbLink>
      </BreadcrumbItem>
      {breadcrumbs.slice(1).map((breadcrumb, i) => (
        <BreadcrumbItem
          px={0}
          mx={0}
          key={breadcrumb.url}
          isCurrentPage={i === breadcrumbs.length - 1}
        >
          <BreadcrumbLink
            as={GatsbyLink}
            {...(i === breadcrumbs.length - 1
              ? {
                  __css: {},
                  to: "",
                }
              : { to: `${breadcrumb.url}` })}
          >
            {breadcrumb.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
