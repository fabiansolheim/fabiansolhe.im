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
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import container from './components/styling/framerAnimations';
import Header from './components/Header';

const App = () => {
             const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <>
      <StrictMode>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeScript />
          <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={container}
          >
            <Container maxWidth="container.lg" minHeight="69.7vh" padding="0">
              <Box
               ml={[5, 10, 20]}>
                <Header />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/prosjekter" element={<Prosjekter />} />
                  <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
              </Box>
            </Container>
            <Footer/>
          </motion.div>
        </ChakraProvider>
      </StrictMode>
    </>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
