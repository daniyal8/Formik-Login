import Form from "./Components/Form";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Form />
      </ChakraProvider>
    </div>
  );
}

export default App;
