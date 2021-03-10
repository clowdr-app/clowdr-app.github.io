import {
  Box,
  chakra,
  ChakraProvider,
  CloseButton,
  extendTheme,
  Flex,
  HStack,
  IconButton,
  Link,
  PortalManager,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import Footer from "./Footer"

export function Layout({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string | string[]
}) {
  const theme = extendTheme({
    config: {
      initialColorMode: "light",
    },
    colors: {
      brand: {
        "50": "#f1f9f7",
        "100": "#e1f8ee",
        "200": "#bdf3d6",
        "300": "#86e9b6",
        "400": "#35d783",
        "500": "#12bf53",
        "600": "#0fa43a",
        "700": "#148535",
        "800": "#16703f",
        "900": "#14522b",
      },
    },
    fonts: {
      heading: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
    },
    layerStyles: {
      header: {
        color: "#ffffff",
        _hover: {
          color: "#ffffff",
        },
      },
    },
    components: {
      Link: {
        variants: {
          header: {
            color: "#ffffff",
            _hover: {
              color: "#ffffff",
            },
          },
        },
      },
      a: {
        variants: {
          header: {
            color: "#ffffff",
            _hover: {
              color: "#ffffff",
            },
          },
        },
      },
    },
  })
  const headerBg = useColorModeValue("brand.800", "brand.800")
  const mobileNav = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
      <PortalManager>
        <chakra.header
          bg={headerBg}
          layerStyle="header"
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                _hover={{ color: "white" }}
                href="/"
                title="Clowdr Home Page"
                display="flex"
                alignItems="center"
              >
                <chakra.h1 fontSize="3xl" fontWeight="400">
                  Clowdr
                </chakra.h1>
              </chakra.a>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={6}
                mr={4}
                fontSize="large"
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Link as={GatsbyLink} to="/features" variant="header">
                  Features
                </Link>
                <Link as={GatsbyLink} to="/pricing" variant="header">
                  Pricing
                </Link>
                <Link as={GatsbyLink} to="/about" variant="header">
                  About
                </Link>
                <Link as={GatsbyLink} to="/jobs" variant="header">
                  Jobs
                </Link>
                <Link as={GatsbyLink} to="/feedback" variant="header">
                  Feedback
                </Link>
              </HStack>
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={headerBg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  textAlign="center"
                >
                  <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

                  <Link as={GatsbyLink} to="/features" w="full">
                    Features
                  </Link>
                  <Link as={GatsbyLink} to="/pricing" w="full">
                    Pricing
                  </Link>
                  <Link as={GatsbyLink} to="/about" w="full">
                    About
                  </Link>
                  <Link as={GatsbyLink} to="/jobs" w="full">
                    Jobs
                  </Link>
                  <Link as={GatsbyLink} to="/feedback" w="full">
                    Feedback
                  </Link>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
        <Box>{children}</Box>
        <Footer />
      </PortalManager>
    </ChakraProvider>
  )
}
