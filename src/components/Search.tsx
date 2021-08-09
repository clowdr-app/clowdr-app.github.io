import { useLiveRegion } from "@chakra-ui/live-region";
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { FocusEvent, useCallback, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useLunr } from "react-lunr";

export function Search({
  index,
  store,
}: {
  index: any;
  store: any;
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
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
      <InputGroup>
        <InputLeftAddon>Search</InputLeftAddon>

        <Input
          placeholder="Search resources"
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
          <List spacing={1} my={2} w="100%">
            {results.length ? (
              results.map(result => (
                <ListItem key={result.id} w="100%">
                  <LinkBox px={2} borderWidth="1px" rounded="md">
                    <LinkOverlay href={`/resources${result.slug}`}>
                      <Text>{result.title}</Text>
                    </LinkOverlay>
                  </LinkBox>
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
