import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from "@chakra-ui/react"

import ComparisonTable from 'layout/components/ComparisonTable';

const App = () => {
  return (
    <ComparisonTable/>
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