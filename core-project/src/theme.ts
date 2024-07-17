import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#e5e4ff",
      100: "#c4c3ff",
      200: "#a2a1ff",
      300: "#807eff",
      400: "#5e5bff",
      500: "#6C63FF", // Cor base
      600: "#4a49cc",
      700: "#383799",
      800: "#262566",
      900: "#131233",
    },
  },
});

export default theme;
