import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  ChakraProvider,
  HStack,
  Box,
  Text,
  Link,
  Container,
  Divider,
  Center,
  Heading,
  Grid,
  theme,
  useMediaQuery,
  Flex,
} from '@chakra-ui/react';
import Footer from './components/Footer';
import ToggleColorMode from './components/ToggleColorMode';
import './wavinghand.css';
import {projects} from "./components/data/projects.js"
import container from './components/styling/framerAnimations';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <Flex as="nav" wrap="wrap" mt={6} >
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to={'/'}>
            fabiansolhe.im
          </Link>
        </Heading>
    </Flex>
  );
}

const HeroText = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <Box mt={isNotMobile ? 60 : 153} position="relative" w={[300, 400, 500]}>
      <Heading mb={4}>Prosjekter</Heading>
      <HStack>
        <ul>
          {projects.map(project => (
            <Box mt={6}>
              <li style={{ listStyleType: 'none' }}>
                <Text fontSize="xl">
                  <Link
                    style={{ textDecoration: 'underline' }}
                    _target="_blank"
                    href={project.link}
                  >
                    {project.name}
                  </Link>
                </Text>
                <p>{project.description}</p>
                <Divider mt={4} />
              </li>
            </Box>
          ))}
        </ul>
      </HStack>
    </Box>
  );
};

const Prosjekter = () => {
      const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <>
              <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={container}
          >    
      <Container maxWidth="container.lg" minHeight="95vh" padding="0">
        <Box ml={isNotMobile ? '0' : 5}>
          <Header />
          <HeroText />
        </Box>
      </Container>
      </motion.div>
    </>
  );
};
export default Prosjekter;
