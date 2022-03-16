import * as React from "react";
import {
  ChakraProvider,
  Heading,
  theme,
  Center,
} from "@chakra-ui/react";
import HookForm from "../Components/HookForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Center mt= '100px' mb = '50px'>
    <Heading fontSize = '55px'>Custom Form</Heading>
    </Center>
    <Center>
    <HookForm/>
    </Center>
    
  </ChakraProvider>
);
