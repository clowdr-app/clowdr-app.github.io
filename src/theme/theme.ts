import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  colors: {
    brand: {
      50: "#ffe1f4",
      100: "#ffb1d7",
      200: "#ff7ebb",
      300: "#ff4ca0",
      400: "#ff1a85",
      500: "#e6006c",
      600: "#b40054",
      700: "#82003c",
      800: "#500024",
      900: "#20000e",
    },
    purple: {
      50: "#f8e4ff",
      100: "#e4b3ff",
      200: "#d281fd",
      300: "#c04ffc",
      400: "#ae21fb",
      500: "#950ce2",
      600: "#7307b0",
      700: "#53037e",
      800: "#32004d",
      900: "#12001d",
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
        bg: "purple.800",
        border: "1px solid white",
        color: "white",
      },
      variants: {
        solid: {
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
        "solid-2": {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.700",
            color: "white",
            textDecoration: "none",
          },
          _active: {
            bg: "brand.800",
          },
          _focus: {
            bg: "brand.700",
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
        color: "brand.600",
        _hover: {
          color: "brand.600",
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
        color: "brand.600",
        _hover: {
          color: "brand.600",
        },
      },
    },
  },
});
