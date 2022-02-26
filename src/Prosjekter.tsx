import React, {useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  ChakraProvider,
  HStack,
  Box,
  Text,
  Link,
  Container,
  Spacer,
  Divider,
  useColorMode,
  Center,
  Heading,
  Grid,
  theme,
  useMediaQuery,
  Flex,
} from '@chakra-ui/react';
import Footer from './components/Footer';
import ToggleColorMode from './components/ToggleColorMode';
import './components/styling/wave.css';
import {projects} from "./components/data/projects"
import container from './components/styling/framerAnimations';
import { motion } from 'framer-motion';

const HeroText = () => {
  const {colorMode} = useColorMode();

  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <Box mt={isNotMobile ? 20 : 105} position="relative" w={[300, 400, 500]}>
      <Heading mb={4}>Prosjekter</Heading>
      <HStack>
        <ul>
          {projects.map(project => (
            <Box mt={6}>
              <li style={{ listStyleType: 'none' }}>
                <Text fontSize="xl">
                  <Link
                    style={{ textDecoration: 'underline' }}
                    href={project.link}
                  >
                    {project.name}
                  </Link>
                </Text>
                <p>{project.description}</p>
                <Divider
                  borderColor={colorMode === 'light' ? '#444' : '#eee'}
                  mt={4}
                />
              </li>
            </Box>
          ))}
        </ul>
      </HStack>
    </Box>
  );
};

const Prosjekter = () => {

useEffect(() => {
    document.title = "👋🏼 Prosjekter | fabiansolhe.im";
  }, []);


  return (
    <>
              <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={container}
          >    
        <Box mt={190}>
          <HeroText />
        </Box>
      </motion.div>
    </>
  );
};
export default Prosjekter;
