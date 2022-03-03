import {
    Box,
    Container,
    Stack,
    Text,
  } from '@chakra-ui/react';

  export default function Footer() {
    return (
      <Box
      sx={{
        position: "fixed",
        left:0,
        bottom:5,
        right:0
      }}
      >
        <Container
          as={Stack}
          align={{ base: 'center'}}
        >
          <Text fontSize='xs'>
            © {new Date().getFullYear()} Fabian Solheim. All rights reserved.
          </Text>
        </Container>
      </Box>
    );
  }
