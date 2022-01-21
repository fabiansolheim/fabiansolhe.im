import { ColorModeScript, ChakraProvider, Box, useMediaQuery } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Index from './App';
import Prosjekter from "./Prosjekter"
import theme from "./components/styling/theme";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ToggleColorMode from "./components/ToggleColorMode";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prosjekter" element={<Prosjekter />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        <ToggleColorMode />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'));