import { ChakraProvider } from "@chakra-ui/react";
import { CustomButton } from ".";

export default {
  title: "Components/Button",
  Component: CustomButton,
};

export const Default = () => (
  <ChakraProvider>
    <CustomButton />
  </ChakraProvider>
);
