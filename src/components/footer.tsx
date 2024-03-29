import {
  Box,
  Heading,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { menuItems } from "../misc/menu-items";

export default function Footer() {
  return (
    <Box bgColor="gray.800" py={8} mt="auto" layerStyle="footer" as="footer">
      <HStack alignItems="flex-start" justifyContent="center" flexWrap="wrap">
        <Box
          width="30%"
          minW="20ch"
          flex={1}
          flexBasis="minmax(max-content, 30%)"
          px={8}
          mb={12}
        >
          <Link as={GatsbyLink} to="/">
            <Heading as="h4" mb={4} size="md" fontWeight="bold" color="white">
              Midspace Resources
            </Heading>
          </Link>
          <Wrap alignItems="flex-start" flexWrap="wrap" spacing={12}>
            <WrapItem>
              <UnorderedList styleType="none" ml={0}>
                {menuItems.map((menuItem, i) => (
                  <ListItem key={i}>
                    {menuItem.link.startsWith("http") ? (
                      <Link href={menuItem.link}>{menuItem.text}</Link>
                    ) : (
                      <Link as={GatsbyLink} to={menuItem.link}>
                        {menuItem.text}
                      </Link>
                    )}
                  </ListItem>
                ))}
              </UnorderedList>
            </WrapItem>
          </Wrap>
        </Box>
        <Box w="40%" minW="30ch">
          <Heading as="h4" size="sm">
            © Clowdr CIC 2022
          </Heading>
          <Text>
            Midspace is a social enterprise dedicated to creating sustainable,
            inclusive, and engaging conferences.
          </Text>
          <Text>Midspace is the new name of Clowdr.</Text>
          <Text>
            Clowdr is a UK Community Interest Company, number{" "}
            <Link
              as="a"
              href="https://find-and-update.company-information.service.gov.uk/company/12984216"
            >
              12984216
            </Link>
            .
          </Text>
          <Text>
            Social Enterprise UK: Certified Member We’re a certified social
            enterprise and a member of the national trade body, Social
            Enterprise UK. To find out more about social enterprise, visit “What
            its all about“ Clowdr’s early development was supported by the US
            National Science Foundation under awards CCF-2035003, CCF-2035101
            and CCF-203500 and by Twilio.org.
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
