import React from 'react';
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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Footer from './components/Footer';
import ToggleColorMode from './components/ToggleColorMode';
import "./wavinghand.css";

const HeroText = () => {
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


const SocialLinks = () => {
  return(  <Box maxW={390} mt={10}>
    <Text fontSize='xl'>
      Ta gjerne en titt på <Link style={{textDecoration: 'underline'}}>mine prosjekter</Link>, eller min <Link style={{textDecoration: 'underline'}}>LinkedIn</Link>.
    </Text>
  </Box>
  );
};


const IndexPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return(
    <ChakraProvider resetCSS theme={theme}>
    {isMobile ? <p>This is a mobile device</p> :       
    <Container maxWidth="container.lg"padding="0">
    <HeroText/>
    <SocialLinks/>

    </Container>
    }
    <ToggleColorMode/>


  </ChakraProvider>
  );

  
}
export default IndexPage;
