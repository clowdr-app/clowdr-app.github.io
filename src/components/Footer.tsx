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
// import { useCMS } from "tinacms";

/* If you change the list of pages, make sure to also change
   Footer.tsx (really, the two should be generated from the same
   static list of strings!) */

export default function Footer() {
  const cms = useCMS();

  return (
    <Box bgColor="gray.800" py={8} mt="auto" layerStyle="footer">
      <HStack alignItems="flex-start" justifyContent="center">
        <Box width="30%">
          <Link as={GatsbyLink} to="/">
            <Heading as="h4" size="md" fontWeight="bold" color="white">
              Clowdr
            </Heading>
          </Link>
          <Wrap alignItems="flex-start" spacing={12} flexWrap="wrap">
            <WrapItem>
              <UnorderedList styleType="none" ml={0}>
                <ListItem>
                  <Link as={GatsbyLink} to="/features">
                    Features
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/pricing">
                    Pricing
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/about">
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/jobs">
                    Jobs
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/feedback">
                    Feedback
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/faq">
                    FAQ
                  </Link>
                </ListItem>
              </UnorderedList>
            </WrapItem>
            <WrapItem>
              <UnorderedList styleType="none" ml={0}>
                <ListItem>
                  <Link as={GatsbyLink} to="/policies/terms">
                    Terms and Conditions
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/policies/privacy">
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/policies/backups">
                    Backups Policy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={GatsbyLink} to="/policies/archiving">
                    Archiving Policy
                  </Link>
                </ListItem>
              </UnorderedList>
            </WrapItem>
          </Wrap>
        </Box>
        <Box w="40%">
          <Heading as="h4" size="sm">
            © Clowdr CIC 2021
          </Heading>
          <Text>
            Clowdr is a social enterprise dedicated to creating sustainable,
            inclusive and engaging conferences.
          </Text>
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
            Clowdr was initially made possible thanks to support by the US
            National Science Foundation under awards CCF-2035003, CCF-2035101
            and CCF-203500 and support from Twilio.org.
          </Text>
          {/* <Button colorScheme="brand" onClick={() => cms.toggle()} size="xs">
            {cms.enabled ? "Stop editing" : "Edit"}
          </Button> */}
        </Box>
      </HStack>
    </Box>
  );
}
