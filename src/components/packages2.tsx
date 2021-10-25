import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineCustomerService,
  AiOutlineExperiment,
  AiOutlineRocket,
  AiOutlineTool,
} from "react-icons/ai";
import { Feature } from "./feature2";

export function Packages(): JSX.Element {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
      spacingX={{ base: 8, lg: 16 }}
      spacingY={12}
    >
      <Feature icon={AiOutlineRocket} title="Click-and-go">
        <Text>
          We worry about the technology; you organize the conference. Use
          Midspace - hosted by the people who built it.
        </Text>
      </Feature>
      <Feature
        icon={AiOutlineCustomerService}
        title="Expert support and advice"
      >
        <Text>
          We can advise you on how to plan and set up your conference and
          provide virtual on-site support to make sure everything runs smoothly.
        </Text>
      </Feature>
      <Feature icon={AiOutlineExperiment} title="Advanced customisation">
        <Text>
          Want to wow your attendees with something new? We can design and build
          it.
        </Text>
      </Feature>
      <Feature icon={AiOutlineTool} title="Do-it-yourself">
        <Text>
          Want to run the Midspace platform yourself? We can help you with that.
        </Text>
      </Feature>
    </SimpleGrid>
  );
}
