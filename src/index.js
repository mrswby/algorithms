import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from "@chakra-ui/react"

const App = () => {
  return (
    null
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);