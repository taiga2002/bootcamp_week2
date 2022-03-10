import * as React from "react";
import {
  ChakraProvider,
  Heading,
  theme,
} from "@chakra-ui/react";
import HookForm from "../Components/HookForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Heading>Custom Form</Heading>
    <HookForm/>
  </ChakraProvider>
);
