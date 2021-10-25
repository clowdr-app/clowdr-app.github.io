import { Box, chakra, Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export const Feature = chakra(FeatureInternal);

function FeatureInternal({
  color,
  icon,
  title,
  children,
  className,
}: {
  color: string;
  icon?: any;
  title: string;
  children: React.ReactNode | React.ReactNodeArray;
  className?: string;
}): JSX.Element {
  return (
    <Box className={className}>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        mb={4}
        rounded="full"
      >
        <Icon
          color={color}
          as={icon ?? AiOutlineStar}
          aria-hidden="true"
          w={8}
          h={8}
        />
      </Flex>
      <Heading
        as="h3"
        size="md"
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
      >
        {title}
      </Heading>
      <chakra.p fontSize="md">{children}</chakra.p>
    </Box>
  );
}
