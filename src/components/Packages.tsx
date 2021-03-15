import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineCustomerService,
  AiOutlineExperiment,
  AiOutlineRocket,
  AiOutlineTool,
} from "react-icons/ai";
import { Feature } from "./Feature";

export function Packages(): JSX.Element {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
      spacingX={{ base: 8, lg: 16 }}
      spacingY={12}
    >
      <Feature icon={AiOutlineTool} title="Click-and-go">
        <Text>
          We worry about the technology; you organize the conference.
          Recommended for events with a simple, single-track program.
        </Text>
      </Feature>
      <Feature icon={AiOutlineCustomerService} title="Expert support">
        <Text>
          You organize, we help. We'll advise you on how to plan and set up your
          conference and provide virtual on-site support to make sure everything
          runs smoothly. Recommended for more complex events, especially ones
          with multiple tracks.
        </Text>
      </Feature>
      <Feature icon={AiOutlineRocket} title="Hands-on support">
        <Text>
          We organize, you help. We'll take your requirements and deliver a
          successful event from start to finish.
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
          Want to run the Clowdr platform yourself? We can help you with that.
        </Text>
      </Feature>
    </SimpleGrid>
  );
}
