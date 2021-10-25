import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

export function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: { name: string; url: string; title: string }[];
}): JSX.Element {
  return (
    <Breadcrumb>
      <BreadcrumbItem key="home">
        <BreadcrumbLink href={`/`}>Home</BreadcrumbLink>
      </BreadcrumbItem>
      {breadcrumbs.map((breadcrumb, i) => (
        <BreadcrumbItem
          key={breadcrumb.url}
          isCurrentPage={i === breadcrumbs.length - 1}
        >
          <BreadcrumbLink
            {...(i === breadcrumbs.length - 1
              ? {
                  __css: {},
                }
              : { href: `${breadcrumb.url}` })}
          >
            {breadcrumb.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
