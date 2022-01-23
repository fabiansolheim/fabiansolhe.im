import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {
  ChakraProvider,
  HStack,
  Box,
  Text,
  Link,
  Container,
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
import "./wavinghand.css";
import container from './components/styling/framerAnimations';
import { motion } from 'framer-motion';

/* const HeroText = () => {
  return(
    <Box w={[300, 400, 500]} mt={60}>
    <Heading mb={4}>Hei
    <span className="wave">👋🏼</span>
    </Heading>
    <HStack>
    <Text fontSize='xl' style={{display: 'inline-block'}}>
      Jeg er <Text style={{fontWeight: 'bold', display: 'inline-block'}}>Fabian Solheim</Text>. Jeg er en 21 år gammel student, og utvikler.
    </Text>
    </HStack>
  </Box>
  )
}

 */
const SocialLinks = () => {
  return (
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
  );
};

const HeroText = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <Box mt={isNotMobile ? 60 : 153} position="relative" w={[300, 400, 500]}>
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
          . Jeg er en 21 år gammel informatikkstudents, og utvikler.
        </Text>
      </HStack>
    </Box>
  );
};

const Index = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  return (
    <>
               <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={container}
          >    
      <Container maxWidth="container.lg" minHeight="69.7vh">
        <Box ml={isNotMobile ? '0' : 5}>
          <HeroText />
          <SocialLinks />
        </Box>
      </Container>
      </motion.div>
    </>
  );
};
export default Index;
