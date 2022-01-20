import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './App';
import theme from "./theme";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS theme={theme}>
    <ColorModeScript />
    <IndexPage />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
