import {
  ColorModeScript,
  ChakraProvider,
  Box,
  useMediaQuery,
  Container,
} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Index from './App';
import Prosjekter from './Prosjekter';
import theme from './components/styling/theme';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import container from './components/styling/framerAnimations';

const App = () => {
  return (
    <>
      <StrictMode>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeScript />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/prosjekter" element={<Prosjekter />} />
                <Route path="*" element={<h1>Not found</h1>} />
              </Routes>
          <Footer />
        </ChakraProvider>
      </StrictMode>
    </>
  );
};

ReactDOM.render(

  <Router><App /></Router>, document.getElementById('root'));
