import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#007BFF",
    secondary: "#6c757d",
    accent: "#f0ad4e",
    background: "#f4f7fc",
    text: "#333",
    textMuted: "#6c757d",
    border: "#ddd",
    hover: "#0056b3",
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#f4f7fc",
        color: "#333",
        fontFamily: `'Inter', sans-serif`,
        lineHeight: "1.5",
      },
      h1: {
        color: "#222",
        fontWeight: "600",
      },
      h2: {
        color: "#222",
        fontWeight: "600",
      },
      h3: {
        color: "#222",
        fontWeight: "600",
      },
      a: {
        color: "#007BFF",
        textDecoration: "none",
        transition: "color 0.3s ease",
        _hover: {
          color: "#0056b3",
        },
      },
      button: {
        backgroundColor: "#007BFF",
        color: "white",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
        fontWeight: "500",
        _hover: {
          backgroundColor: "#0056b3",
        },
      },
      ".card": {
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        _hover: {
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
