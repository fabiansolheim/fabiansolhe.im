import { Box, Center, Container, useMediaQuery } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react'
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: any) => {
    const [isNotMobile] = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Container  maxWidth="container.lg" minHeight="69.7vh" >
        <Header />
          {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout