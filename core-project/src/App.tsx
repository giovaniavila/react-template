import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/login";
import theme from "./theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
