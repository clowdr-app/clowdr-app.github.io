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
        border: "1px solid white",
      },
      variants: {
        solid: {
          bg: "purple.600",
          color: "white",
          _hover: {
            bg: "purple.800",
            color: "white",
            textDecoration: "none",
          },
          _active: {
            bg: "purple.900",
          },
          _focus: {
            bg: "purple.800",
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
        maxW: "130ch",
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
        my: 3,
      },
    },
    Heading: {
      baseStyle: {
        mt: 4,
        pb: 1,
      },
      sizes: {
        "3xl": {
          fontSize: "5xl",
          fontWeight: "normal",
        },
        "2xl": {
          fontSize: "4xl",
          fontWeight: "normal",
          pt: 4,
        },
        xl: {
          fontSize: "2xl",
          fontWeight: "bold",
          pt: 4,
        },
        lg: {
          fontSize: "lg",
          fontWeight: "normal",
          pt: 4,
        },
        md: {
          fontSize: "sm",
          fontWeight: "bold",
          pt: 4,
        },
      },
    },
  },
  fonts: {
    heading: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  layerStyles: {
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
      color: "purple.700",
      fontSize: "md",
      a: {
        color: "purple.700",
        _hover: {
          color: "gray.400",
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
      li: {
        mx: 4,
        my: 2,
      },
    },
  },
});
