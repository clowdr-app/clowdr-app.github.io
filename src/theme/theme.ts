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
    purple: {
      "50": "#f9f4f7",
      "100": "#f2e9f0",
      "200": "#dfc7d9",
      "300": "#cba5c1",
      "400": "#a46293",
      "500": "#7D1E65",
      "600": "#711b5b",
      "700": "#5e174c",
      "800": "#4b123d",
      "900": "#3d0f31",
    },
    yellow: {
      "50": "#fafaf4",
      "100": "#f5f5e8",
      "200": "#e5e6c6",
      "300": "#d5d6a3",
      "400": "#b6b85f",
      "500": "#97991A",
      "600": "#888a17",
      "700": "#717314",
      "800": "#5b5c10",
      "900": "#4a4b0d",
    },
    blue: {
      "50": "#f2f7f8",
      "100": "#e6eff1",
      "200": "#bfd7db",
      "300": "#99bfc6",
      "400": "#4d8f9b",
      "500": "#005F70",
      "600": "#005665",
      "700": "#004754",
      "800": "#003943",
      "900": "#002f37",
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: "blue.900",
        border: "1px solid white",
        color: "white",
      },
      variants: {
        solid: {
          bg: "blue.500",
          color: "white",
          _hover: {
            bg: "blue.700",
            color: "white",
            textDecoration: "none",
          },
          _active: {
            bg: "blue.800",
          },
          _focus: {
            bg: "blue.700",
          },
        },
        "solid-2": {
          bg: "purple.500",
          color: "white",
          _hover: {
            bg: "purple.700",
            color: "white",
            textDecoration: "none",
          },
          _active: {
            bg: "purple.800",
          },
          _focus: {
            bg: "purple.700",
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "100ch",
      },
    },
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
      // color: "#ffffff",
      // _hover: {
      //   color: "#ffffff",
      // },
      // a: {
      //   color: "#ffffff",
      //   _hover: {
      //     color: "#ffffff",
      //   },
      // },
    },
    footer: {
      color: "#ffffff",
      _hover: {
        color: "#ffffff",
      },
      a: {
        color: "gray.200",
        _hover: {
          color: "gray.50",
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
      th: {
        color: "#ffffff",
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
