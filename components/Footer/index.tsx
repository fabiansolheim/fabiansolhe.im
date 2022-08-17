import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        bottom: 5,
        right: 0,
      }}
    >
      <Container as={Stack} align={{ base: 'center' }}>
        <Text fontSize="xs">
          This website is open source on{' '}
          <Link fontWeight={700} target="_blank" href="https://github.com/FabianSolheim/fabiansolhe.im/">
            GitHub
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
