import { ColorModeScript, ChakraProvider, Box, useMediaQuery, Container } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Index from './App';
import Prosjekter from "./Prosjekter"
import theme from "./components/styling/theme";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript />
      <Container maxWidth="container.lg" minHeight="95vh" padding="0">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prosjekter" element={<Prosjekter />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);