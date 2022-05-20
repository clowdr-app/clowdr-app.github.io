import type { TabPanelProps } from "@chakra-ui/react";
import {
  Center,
  Container,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useTabPanel,
} from "@chakra-ui/react";
import React from "react";

export const FeaturePanel = React.forwardRef<
  HTMLDivElement,
  TabPanelProps &
    React.PropsWithChildren<{
      text: string;
      imageSrc?: string;
      imageMaxWidth?: number;
    }>
>(function FeaturePanel(
  { text, children, imageSrc, imageMaxWidth = 800, ...props },
  ref
): JSX.Element {
  const tabPanelProps = useTabPanel({ ...props, ref });

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container maxW={`${imageMaxWidth}px`} {...tabPanelProps}>
      {imageSrc?.length ? (
        <Image
          src={imageSrc}
          fallbackSrc="https://via.placeholder.com/800x600"
          border="5px solid"
          borderColor="purple.800"
          borderRadius="lg"
          bgColor="purple.800"
          onClick={onOpen}
          cursor="zoom-in"
          aria-hidden
        />
      ) : undefined}
      <Heading as="h3" pt={0} mt={imageSrc?.length ? undefined : 0}>
        {text}
      </Heading>
      {children}
      {imageSrc?.length ? (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="5xl"
          isCentered
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent p={0} borderRadius="lg" overflow="hidden">
            <ModalBody p={0}>
              <Center p={0}>
                <Image
                  src={imageSrc}
                  fallbackSrc="https://via.placeholder.com/800x600"
                  bgColor="purple.800"
                  onClick={onClose}
                  cursor="zoom-out"
                />
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : undefined}
    </Container>
  );
});
