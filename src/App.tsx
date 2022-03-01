import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  ChakraProvider,
  HStack,
  Box,
  Text,
  Link,
  Container,
  Image,
  Button,
  VStack,
  Code,
  Center,
  Heading,
  Grid,
  theme,
  useMediaQuery,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/styling/ColorModeSwitcher';
import Footer from './components/Footer';
import ToggleColorMode from './components/ToggleColorMode';
import './components/styling/wave.css';
import container from './components/styling/framerAnimations';
import { motion } from 'framer-motion';

const HeroText = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <>
      <Box mt={isNotMobile ? 200 : 153} position="relative" w={[300, 400, 500]}>
        <Heading mb={4}>
          Hei
          <span className="wave">👋🏼</span>
        </Heading>
        <HStack>
          <Text fontSize="xl" style={{ display: 'inline-block' }}>
            Jeg er{' '}
            <Text style={{ fontWeight: 'bold', display: 'inline-block' }}>
              Fabian Solheim
            </Text>
            . Jeg er en 21 år gammel informatikkstudent, og utvikler.
          </Text>
        </HStack>
      </Box>

      <Box w={390} mt={10}>
        <Text fontSize="xl">
          Ta gjerne en titt på{' '}
          <Link
            as={RouterLink}
            to="/prosjekter"
            style={{ textDecoration: 'underline' }}
          >
            mine prosjekter
          </Link>
          , min{' '}
          <Link
            href="https://www.linkedin.com/in/FabianSolheim"
            style={{ textDecoration: 'underline' }}
          >
            LinkedIn
          </Link>
          , eller min{' '}
          <Link
            href="https://www.github.com/FabianSolheim"
            style={{ textDecoration: 'underline' }}
          >
            Github
          </Link>
          .
        </Text>
      </Box>
    </>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = '👋🏼 Hjem | fabiansolhe.im';
  }, []);

  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={container}
      >
          <HeroText />
      </motion.div>
    </>
  );
};
export default Index;
