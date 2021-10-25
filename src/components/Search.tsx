import { useLiveRegion } from "@chakra-ui/live-region";
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { FocusEvent, useCallback, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useLunr } from "react-lunr";
import { Card } from "./card";

export function Search({
  index,
  store,
  initialSearch,
}: {
  index: any;
  store: any;
  initialSearch?: string;
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string | null>(
    initialSearch ?? null
  );
  const results = useLunr(searchTerm, index, store);
  const liveRegion = useLiveRegion({ "aria-live": "polite" });

  useEffect(() => {
    liveRegion.speak(
      results.length ? `${results.length} results found` : "No results found"
    );
  }, [liveRegion, results]);

  const handleSearchTermChange = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value ? event.target.value : null);
    },
    [setSearchTerm]
  );

  return (
    <>
      <InputGroup mb={4}>
        <InputLeftAddon>Search resources</InputLeftAddon>

        <Input
          placeholder="Enter a search term"
          value={searchTerm ?? undefined}
          onChange={handleSearchTermChange}
          px={2}
          type="search"
          size="xl"
        />

        <InputRightElement ml={1} fontSize="sm">
          <Button
            aria-label="Clear search"
            variant="outline"
            onClick={() => {
              setSearchTerm("");
            }}
            isDisabled={searchTerm === "" || searchTerm === null}
          >
            <Icon as={AiOutlineCloseCircle} />
          </Button>
        </InputRightElement>
      </InputGroup>

      <Box role="region" aria-label="search results">
        {searchTerm ? (
          <List spacing={4} my={2} w="100%">
            {results.length ? (
              results.map(result => (
                <ListItem key={result.id} w="100%">
                  <Card
                    title={result.title}
                    indexUrl={result.slug}
                    author={result.author}
                    descriptionHtml={result.description}
                    type={result.isCategoryIndex ? "category" : "resource"}
                  />
                </ListItem>
              ))
            ) : (
              <Text>No results found.</Text>
            )}
          </List>
        ) : undefined}
      </Box>
    </>
  );
}
