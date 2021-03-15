import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
  components: {
    Link: {
      variants: {},
      baseStyle: {
        color: "brand.800",
        _hover: {
          color: "brand.800",
        },
      },
    },
    Text: {
      baseStyle: {
        my: 4,
      },
    },
    Heading: {
      baseStyle: {
        mt: 4,
      },
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
      a: {
        color: "#ffffff",
        _hover: {
          color: "#ffffff",
        },
      },
    },
    footer: {
      color: "#ffffff",
      _hover: {
        color: "#ffffff",
      },
      a: {
        color: "gray.300",
        _hover: {
          color: "gray.100",
          textDecoration: "none",
        },
      },
    },
    hero: {
      color: "#ffffff",
      _hover: {
        color: "#ffffff",
      },
      a: {
        color: "white",
        _hover: {
          color: "gray.100",
          textDecoration: "none",
        },
      },
      components: {
        Button: {
          bgColor: "brand.900",
        },
      },
    },
  },
  styles: {
    global: {
      a: {
        color: "brand.800",
        _hover: {
          color: "brand.800",
        },
      },
    },
  },
});
