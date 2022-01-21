import {
    Box,
    Container,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import ToggleColorMode from './ToggleColorMode';

  export default function Footer() {
    return (
      <Box
        mt="-54px"
      >
        <Container
          as={Stack}
          maxW={'container.lg'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            © {new Date().getFullYear()} Fabian Solheim. All rights reserved
          </Text>
            <ToggleColorMode />
        </Container>
      </Box>
    );
  }